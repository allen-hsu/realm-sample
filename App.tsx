/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React from 'react';
import HomeScreen from './src/screen/HomeScreen';
import TaskScreen from './src/screen/TaskScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import persistStore from './src/configureStore';

const Tab = createBottomTabNavigator();
const persist = persistStore();
const App = () => {
  return (
    <Provider store={persist.store}>
      <PersistGate loading={null} persistor={persist.persistor}>
        <NavigationContainer>
          <Tab.Navigator>
            <Tab.Screen name="Home" component={HomeScreen} />
            <Tab.Screen name="Task" component={TaskScreen} />
          </Tab.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};

export default App;
