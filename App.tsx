/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * Generated with the TypeScript template
 * https://github.com/react-native-community/react-native-template-typescript
 *
 * @format
 */

import React, {useState, useEffect} from 'react';
import HomeScreen from './src/screen/HomeScreen';
import TaskScreen from './src/screen/TaskScreen';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import persistStore from './src/configureStore';
import AsyncStorage from '@react-native-async-storage/async-storage';
const Tab = createBottomTabNavigator();
const persist = persistStore();
const App = () => {
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const _retrieveData = async (): Promise<string | null | undefined> => {
      try {
        const value = await AsyncStorage.getItem('persist:root');
        return value;
      } catch (error) {
        // Error retrieving data
      }
    };
    _retrieveData().then(string => {
      console.log(string);
      setIsReady(true);
    });
  }, []);

  if (!isReady) {
    return null;
  }
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
