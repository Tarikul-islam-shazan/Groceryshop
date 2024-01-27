import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import 'react-native-gesture-handler';
import Home from '../screens/Home';
import Account from '../screens/Account';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
import {
  Animated,
  StyleSheet,
  TouchableOpacity,
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import Cart from '../screens/Cart';
import { BottomFabBar} from 'rn-wave-bottom-bar';

const Tab = createBottomTabNavigator();
const TopTab = createMaterialTopTabNavigator();

const TopTabNavigation = () => {
  return(
  <TopTab.Navigator>
    <TopTab.Screen name="Home" component={Home} />
    <TopTab.Screen name="Settings" component={Cart} />
  </TopTab.Navigator>
  )
}

const  TabNavigation = () =>  {
  const tabBarIcon =
  (name: string) =>
  ({
    focused,
    color,
    size,
  }: {
    focused: boolean;
    color: string; // Defines fab icon color
    size: number;
  }) =>
    <Ionicons name={name} size={28} color={focused ? 'white' : 'gray'} />;
 
  return (
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: '#5F0B65',
          tabBarActiveBackgroundColor: '#5F0B65',
          tabBarInactiveBackgroundColor: 'red',
        }}
          tabBar={(props) => (
            <BottomFabBar
              mode={ "default"}
              isRtl={false}
              // Add Shadow for active tab bar button
              focusedButtonStyle={{
                shadowColor: '#000',
                shadowOffset: {
                  width: 0,
                  height: 7,
                },
                shadowOpacity: 0.41,
                shadowRadius: 9.11,
                elevation: 14,
              }}
              // - You can add the style below to show screen content under the tab-bar
              // - It will makes the "transparent tab bar" effect.
              bottomBarContainerStyle={{
                position: 'absolute',
                bottom: 0,
                left: 0,
                right: 0,
              }}
              {...props}
            />
          )}
        >
    {/* <Tab.Screen
      options={{
        tabBarIcon: tabBarIcon('aliwangwang-o1'),
      }}
      name="Home"
      component={generateScreen('Home')}
    />
  */}
    <Tab.Screen
      options={{ 
        tabBarIcon: tabBarIcon('home-outline'), 
      tabBarActiveBackgroundColor: '#5F0B65',
      //tabBarActiveTintColor: 'purple',
    }}
      name="Home"
      component={Home}
    />
    <Tab.Screen
      options={{
        tabBarIcon: tabBarIcon('cart'),
      
      }}
      name="Cart"
      component={Cart}
    />
    
    <Tab.Screen
      options={{ tabBarIcon: tabBarIcon('people-outline') }}
      name="Account"
      component={Account}
    />
  </Tab.Navigator>
  );
}


export default function Navigator() {
  return (
    <NavigationContainer>
        <TopTabNavigation/>
        <TabNavigation/>
    </NavigationContainer>
  )
}


export const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
  },
  shawdow: {
    shadowColor: '#DDDDDD',
    shadowOffset: {
      width: 0,
      height: 0,
    },
    shadowOpacity: 1,
    shadowRadius: 5,
  },
  button: {
    flex: 1,
    justifyContent: 'center',
  },
  bottomBar: {},
  btnCircleUp: {
    width: 60,
    height: 60,
    borderRadius: 30,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#E8E8E8',
    bottom: 30,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.2,
    shadowRadius: 1.41,
    elevation: 1,
  },
  imgCircle: {
    width: 30,
    height: 30,
    tintColor: 'gray',
  },
  tabbarItem: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  img: {
    width: 30,
    height: 30,
  },
});
