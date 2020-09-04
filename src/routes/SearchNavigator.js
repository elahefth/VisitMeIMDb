import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SearchScreen from '../containers/Search/SearchScreen';
import ShowScreen from '../containers/Show/ShowScreen';

const Stack = createStackNavigator();

function SearchNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="ShowScreen"
        component={ShowScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default SearchNavigator;
