import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import SearchScreen from '../containers/Search/SearchScreen';

const Stack = createStackNavigator();

function SearchNavigator() {
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="SearchScreen"
        component={SearchScreen}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}

export default SearchNavigator;
