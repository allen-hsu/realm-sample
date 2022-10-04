import {TaskModel, TASK_SCHEMA} from './TaskModel';
import Realm from 'realm';

const databaseOptions = {
  schema: [TaskModel.schema],
  schemaVersion: 1,
  migration: (oldRealm: Realm, newRealm: Realm) => {
    if (oldRealm.schemaVersion === 1 && newRealm.schemaVersion === 2) {
      MIGRATION_1_2(oldRealm, newRealm);
    }
  },
};

const MIGRATION_1_2: Realm.MigrationCallback = (oldRealm, newRealm) => {};

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
