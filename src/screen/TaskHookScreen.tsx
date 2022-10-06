import React, {useCallback, useEffect} from 'react';
import {StyleSheet, View, Button, FlatList} from 'react-native';
import Task from '../components/Task';
import {TaskModel, TASK_SCHEMA} from '../model/TaskModel';
import TaskContext from '../model/TaskDao';
const TaskHooksScreen = () => {
  const {RealmProvider} = TaskContext;
  if (!RealmProvider) {
    return null;
  }
  return (
    <RealmProvider>
      <TaskHooksComponent />
    </RealmProvider>
  );
};

const TaskHooksComponent = () => {
  const {useQuery, useRealm} = TaskContext;
  const realm = useRealm();
  const tasks = useQuery(TaskModel);
  const handleAddTask = useCallback(
    (description: string): void => {
      if (!description) {
        return;
      }
      realm.write(() => {
        realm.create(TASK_SCHEMA, TaskModel.generate(description));
      });
    },
    [realm],
  );
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <FlatList
          data={tasks}
          keyExtractor={task => task.id}
          renderItem={({item}) => (
            <Task
              description={item.description}
              id={item.id}
              createdAt={item.createdAt}
            />
          )}
        />
      </View>
      <Button title="Add Task" onPress={() => handleAddTask('BBB')} />
    </View>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#e8eaed',
  },
  taskWrapper: {
    flex: 1,
  },
});
export default TaskHooksScreen;
