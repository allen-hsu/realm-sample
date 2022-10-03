import {createStore, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import {persistStore, persistReducer, createTransform} from 'redux-persist';
import AsyncStorage from '@react-native-async-storage/async-storage';
import rootReducer from './reducers/rootReducer';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
  //   transforms: [myTransform],
  //   blacklist: ['todos'],
};

const persistedReducer = persistReducer(persistConfig, rootReducer);

const myTransform = createTransform(
  (state: any, key) => state,
  state => state,
);
// transform state on its way to being serialized and persisted.
//   (inboundState: any, key) => {
//     // convert mySet to an Array.
//     return inboundState;
//   },
// transform state being rehydrated
//   (outboundState, _key) => outboundState,
//   {whitelist: ['todos']},
export default () => {
  const store = createStore(persistedReducer, applyMiddleware(thunk));
  const persistor = persistStore(store);
  return {store, persistor};
};
