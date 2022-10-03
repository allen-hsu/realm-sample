import {ADD_TODO} from './ActionTyps';
import {TaskModel} from '../model/Task';
export const AddTodo = (task: TaskModel) => {
  return {
    type: ADD_TODO,
    task,
  };
};
