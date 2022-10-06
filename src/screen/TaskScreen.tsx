import React, {useEffect} from 'react';
import {StyleSheet, View, Button, FlatList} from 'react-native';
import Task from '../components/Task';
import {useAppDispatch, useAppSelector} from '../hooks';
import {AddTask, QueryTasks} from '../actions/taskActions';
import {TaskModel} from '../model/TaskModel';
const TaskScreen = ({navigation}) => {
  const dispatch = useAppDispatch();
  const tasks: TaskModel[] = useAppSelector((state: any) => state.tasks.tasks);
  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      console.log('TaskScreen');
      dispatch(QueryTasks());
    });

    return unsubscribe;
  }, [navigation]);
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
      <Button
        title="Add Task"
        onPress={() => {
          dispatch(AddTask(TaskModel.generate('Task ABC')));
        }}
      />
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
export default TaskScreen;
