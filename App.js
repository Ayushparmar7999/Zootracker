
import React, { useEffect } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import Header from './Screens/Header/Header';
import AddAnimalScreen from './Screens/Addanimals/AddAnimalScreen';
import { Provider } from 'react-redux';
import store, { persistor } from './Redux/store';
import { loadAnimalsFromStorage } from './Redux/animalSlice';
import { PersistGate } from 'redux-persist/integration/react';
import AnimalListScreen from './Screens/AnimalListScreen/AnimalListScreen';

const Stack = createStackNavigator();

const App = () => {
  useEffect(() => {
    store.dispatch(loadAnimalsFromStorage());
  }, []);

  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <NavigationContainer>
          <Stack.Navigator
            initialRouteName="Home"
            screenOptions={{
              header: ({ options }) => (
                <Header title={options.title || 'Animal Tracker'} />
              ),
            }}
          >
            <Stack.Screen
              name="Home"
              component={HomeScreen}

              options={{ title: 'Animal Tracker' }}
            />

            <Stack.Screen
              name="AddAnimal"
              component={AddAnimalScreen}
              options={{ title: 'Add Animal' }}
            />

            <Stack.Screen
              name="AnimalList"
              component={AnimalListScreen}
              options={{ title: 'Animal List' }}
            />

          </Stack.Navigator>
        </NavigationContainer>
      </PersistGate>
    </Provider>
  );
};
export default App;
