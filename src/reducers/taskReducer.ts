import {ADD_TASK, QUERY_TASK} from '../actions/ActionTyps';

const INITIAL_STATE = {tasks: []};

const taskReducer = (state = INITIAL_STATE, action: any) => {
  switch (action.type) {
    case ADD_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };
    case QUERY_TASK:
      return {
        ...state,
        tasks: [...action.payload],
      };
    default:
      return state;
  }
};

export default taskReducer;
