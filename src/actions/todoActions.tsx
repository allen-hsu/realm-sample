import {ADD_TODO} from './ActionTyps';

export const AddTodo = (payload: string) => {
  return {
    type: ADD_TODO,
    payload,
  };
};
