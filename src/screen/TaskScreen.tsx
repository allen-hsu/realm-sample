import React from 'react';
import {StyleSheet, View, Button, FlatList} from 'react-native';
import Task from '../components/Task';
import {useDispatch, useSelector} from 'react-redux';
import {AddTodo} from '../actions/todoActions';
import {TaskModel} from '../model/TaskModel';
const TaskScreen = () => {
  const dispatch = useDispatch();
  const tasks = useSelector((state: any) => state.todos.todos);
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <FlatList
          data={tasks}
          keyExtractor={task => task.id.toString()}
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
        onPress={() => dispatch(AddTodo(TaskModel.generate('Task ABC')))}
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
