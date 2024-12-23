
import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import HomeScreen from './Screens/HomeScreen/HomeScreen';
import Header from './Screens/Header/Header';
import AddAnimalScreen from './Screens/Addanimals/AddAnimalScreen';

const Stack = createStackNavigator();

const App = () => {

  return (

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

      </Stack.Navigator>
    </NavigationContainer>
  );
};
export default App;
