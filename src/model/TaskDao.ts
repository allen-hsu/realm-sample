import {TaskModel, TASK_SCHEMA} from './TaskModel';
import Realm from 'realm';
import _ from 'lodash';

const databaseOptions = {
  schema: [TaskModel.schema],
  schemaVersion: 0,
};
export const insertTask = async (task: TaskModel) => {
  try {
    await Realm.open(databaseOptions).then(realm => {
      realm.write(() => {
        realm.create(TASK_SCHEMA, task);
      });
      realm.close();
    });
  } catch (e) {
    console.log(e);
  }
};

export const queryAllTasks = async () => {
  try {
    const res = await Realm.open(databaseOptions).then(realm => {
      const results = realm.objects(TASK_SCHEMA);
      const tasks = JSON.parse(JSON.stringify(results));
      realm.close();
      return tasks;
    });
    return res;
  } catch (e) {
    console.log(e);
  }
};
