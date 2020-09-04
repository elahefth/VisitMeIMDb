import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import HomeScreen from '../containers/Home/HomeScreen';

const Stack = createStackNavigator();

function SearchNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Home"
        component={HomeScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default SearchNavigator;
