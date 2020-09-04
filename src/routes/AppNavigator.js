import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';

import ModalNavigator from './ModalNavigator';

const Stack = createStackNavigator();

function AppNavigator() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        {/*<Stack.Screen*/}
        {/*  name="SpecifyAuthentication"*/}
        {/*  component={SpecifyAuthentication}*/}
        {/*  options={{headerShown: false}}*/}
        {/*/>*/}
        <Stack.Screen
          name="Home"
          component={ModalNavigator}
          options={{headerShown: false}}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default AppNavigator;
