import Realm from 'realm';

export class TaskModel extends Realm.Object {
  _id!: Realm.BSON.ObjectId;
  description!: string;
  createdAt!: Date;

  static generate(description: string) {
    return {
      id: new Realm.BSON.ObjectId(),
      description,
      createdAt: new Date(),
    };
  }

  static schema = {
    name: 'Task',
    properties: {
      _id: 'objectId',
      description: 'string',
      createdAt: 'date',
    },
  };
}
