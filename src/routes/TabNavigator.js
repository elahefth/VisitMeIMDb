import React from 'react';
import i18n from 'i18n-js';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';

import HomeNavigator from './HomeNavigator';
import SearchNavigator from './SearchNavigator';

import variables from '../boot/variables';
import HomeActive from './../assets/svgs/tabbar_home_active.svg';
import HomeInactive from './../assets/svgs/tabbar_home.svg';
import ProfileActive from './../assets/svgs/tabbar_search_active.svg';
import ProfileInactive from './../assets/svgs/tabbar_search.svg';

const Tab = createBottomTabNavigator();

export default function TabNavigator(props) {
  return (
    <Tab.Navigator
      tabBarOptions={{
        safeAreaInset: {
          top: 'always',
        },
        activeTintColor: '#f8f8f8',
        inactiveTintColor: '#676767',
        style: {
          backgroundColor: '#181818',
          borderTopWidth: 0.25,
          borderTopColor: '#605F60',
          paddingTop: 10,
        },
        labelStyle: {
          marginTop: 8,
          fontSize: 12,
          ...variables.boldFont,
        },
      }}>
      <Tab.Screen
        name="Home"
        component={HomeNavigator}
        options={{
          tabBarLabel: i18n.t('navigation.home'),
          tabBarIcon: ({focused}) =>
            focused ? (
              <HomeActive width={22} height={22} />
            ) : (
              <HomeInactive width={22} height={22} />
            ),
        }}
      />
      <Tab.Screen
        name="SearchNavigator"
        component={SearchNavigator}
        options={{
          tabBarLabel: i18n.t('navigation.search'),
          tabBarIcon: ({focused}) =>
            focused ? (
              <ProfileActive width={22} height={22} />
            ) : (
              <ProfileInactive width={22} height={22} />
            ),
        }}
      />
    </Tab.Navigator>
  );
}
