import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import MyWallet from './MyWallet';
import BottomTabs from '../Bottom Tabs Navigator/BottomTabsNavigator';
import Favorities from './Favorities';
import PastOrders from './PastOrders';
import PromoCodes from './PromoCodes';
import COLORS from '../../../../Config/Colors';
import DrawerContent from './DrawerContent';

const DrawerNav = createDrawerNavigator();
const Drawer = () => {
  return (
    <DrawerNav.Navigator
      defaultStatus="closed"
      backBehavior="history"
      drawerContent={props => <DrawerContent {...props} />}
      screenOptions={{
        headerShown: false,
        // headerTitleAlign: 'center',
        // drawerActiveTintColor: COLORS.bgColor,
        // drawerActiveBackgroundColor: "#6C757D",
        // drawerInactiveTintColor: COLORS.darkTextColor,
        drawerContentStyle: {
          backgroundColor: COLORS.white,
        },
      }}>
      <DrawerNav.Screen
        name="bottomTabs"
        component={BottomTabs}
        // options={{
        //   title: 'Discover',
        // }}
      />
      <DrawerNav.Screen
        name="myWallet"
        component={MyWallet}
        // options={{
        //   title: 'My Wallet',
        // }}
      />
      <DrawerNav.Screen
        name="favorities"
        component={Favorities}
        // options={{
        //   title: 'My Favorities',
        // }}
      />
      <DrawerNav.Screen
        name="pastOrders"
        component={PastOrders}
        // options={{
        //   title: 'Past Orders',
        // }}
      />
      <DrawerNav.Screen
        name="promoCodes"
        component={PromoCodes}
        // options={{
        //   title: 'Promo Codes',
        // }}
      />
    </DrawerNav.Navigator>
  );
};

export default Drawer;

const styles = StyleSheet.create({});
