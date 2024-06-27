import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Discover from './Discover';
import {Icon} from 'react-native-paper';
import COLORS from '../../../../Config/Colors';
import Orders from './Orders';
import SettingsScreen from './Settings';
// import Drawer from '../Drawer.js/Drawer'

const Tab = createBottomTabNavigator();
const BottomTabs = () => {
  return (
    <Tab.Navigator
      screenOptions={({route}) => ({
        headerShown: false,
        tabBarActiveTintColor: COLORS.bgColor,
        tabBarIcon: ({color, size}) => {
          let iconName;

          if (route.name === 'Discover') {
            iconName = 'apple-keyboard-command';
          } else if (route.name === 'orders') {
            iconName = 'gradient-vertical';
          } else if (route.name === 'settings') {
            iconName = 'cog-outline';
          }

          return <Icon source={iconName} size={size} color={color} />;
        },
        
      })}
   
      >
      {/* <Tab.Screen name='drawer' component={Drawer}/> */}
      <Tab.Screen
        name="Discover"
        component={Discover}
        options={{title: 'Discover'}}
      />
      <Tab.Screen
        name="orders"
        component={Orders}
        options={{title: 'Orders'}}
      />
      <Tab.Screen
        name="settings"
        component={SettingsScreen}
        options={{title: 'Settings'}}
      />
    </Tab.Navigator>
  );
};

export default BottomTabs;

const styles = StyleSheet.create({});
