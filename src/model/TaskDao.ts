import {TaskModel, TASK_SCHEMA} from './TaskModel';

import {Realm, createRealmContext} from '@realm/react';

const databaseOptions: Realm.Configuration = {
  schema: [TaskModel],
  schemaVersion: 2,
  migration: (oldRealm: Realm, newRealm: Realm) => {
    if (newRealm.schemaVersion > oldRealm.schemaVersion) {
      switch (oldRealm.schemaVersion) {
        case 1: {
          MIGRATION_1(oldRealm, newRealm);
          break;
        }
      }
    }
  },
};

const MIGRATION_1: Realm.MigrationCallback = (oldRealm, newRealm) => {};

export const insertTask = async (task: TaskModel) => {
  try {
    await Realm.open(databaseOptions).then(realm => {
      realm.write(() => {
        realm.create(TASK_SCHEMA, task);
      });
      // realm.close();
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
      // realm.close();
      return tasks;
    });
    return res;
  } catch (e) {
    console.log(e);
  }
};

export default createRealmContext(databaseOptions);
