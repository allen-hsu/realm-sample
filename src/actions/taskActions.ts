import {ADD_TASK, QUERY_TASK} from './ActionTyps';
import {TaskModel} from '../model/TaskModel';
import {insertTask, queryAllTasks} from '../model/TaskDao';
import {AppThunk} from '../configureStore';

export const AddTask =
  (task: TaskModel): AppThunk =>
  async dispatch => {
    // await insertTask(task);
    dispatch({
      type: ADD_TASK,
      payload: task,
    });
  };
export const QueryTasks = (): AppThunk => async dispatch => {
  const res = await queryAllTasks();
  dispatch({
    type: QUERY_TASK,
    payload: res,
  });
};
