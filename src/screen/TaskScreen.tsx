import React from 'react';
import {StyleSheet, View, Button, FlatList} from 'react-native';
import Task from '../components/Task';
import {useDispatch, useSelector} from 'react-redux';
import {AddTodo} from '../actions/todoActions';
const TaskScreen = () => {
  const dispatch = useDispatch();
  const todos = useSelector((state: any) => state.todos.todos);
  return (
    <View style={styles.container}>
      <View style={styles.taskWrapper}>
        <FlatList
          data={todos}
          renderItem={({item}) => <Task text={item} />}
          keyExtractor={(item, index) => index.toString()}
        />
      </View>
      <Button
        title="Add Task"
        onPress={() => dispatch(AddTodo('Add new todo'))}
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
