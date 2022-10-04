import Realm from 'realm';

export const TASK_SCHEMA = 'Task';
export class TaskModel extends Realm.Object {
  id!: string;
  description!: string;
  createdAt!: string;

  static generate(description: string) {
    return {
      id: new Realm.BSON.ObjectId().toHexString(),
      description,
      createdAt: new Date().toString(),
    } as TaskModel;
  }

  static schema = {
    name: TASK_SCHEMA,
    properties: {
      id: 'string',
      description: 'string',
      createdAt: 'string',
    },
  };

  // migrationTest: Realm.MigrationCallback = (oldRealm, newRealm) => {
  //   if (oldRealm.schemaVersion > 1) {
  //   }
  // };
}
