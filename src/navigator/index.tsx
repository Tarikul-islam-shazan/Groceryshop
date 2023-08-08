import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler';
import Home from '../screens/Home';
import Account from '../screens/Account';

import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

const Tab = createBottomTabNavigator();

function TabNavigation() {
  return (
    <Tab.Navigator>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="Account" component={Account} />
    </Tab.Navigator>

  );
}

export default function Navigator() {
  return (
    <NavigationContainer>
        <TabNavigation />
    </NavigationContainer>
  )
}
