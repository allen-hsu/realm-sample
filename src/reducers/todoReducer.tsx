import {ADD_TODO} from '../actions/ActionTyps';

const INITIAL_STATE = {todos: []};

const todoReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        ...state,
        todos: [...state.todos, action.payload],
      };
    default:
      return state;
  }
};

export default todoReducer;
