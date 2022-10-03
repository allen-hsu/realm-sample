import {ADD_TODO} from '../actions/ActionTyps';
const INITIAL_STATE = {todos: []};

const todoReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ADD_TODO:
      // Add to do to relam
      return {
        ...state,
        todos: [...state.todos, action.task],
      };
    default:
      return state;
  }
};

export default todoReducer;
