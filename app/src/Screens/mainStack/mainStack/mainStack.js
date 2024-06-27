import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabsNavigator from '../Bottom Tabs Navigator/BottomTabsNavigator';
import Drawer from '../Drawer.js/Drawer';
import NearBy from './NearBy';
import ItemDetails from './ItemDetails';
import RestaurantDetail from './RestaurantDetail';
import TabViewExample from '../../../Components/Testing';
import Notifications from './Notifications';
import MyCart from './MyCart';
import AddItems from './AddItems';
import CheckOut from './CheckOut';
import CardInfo from './CardInfo';
import ShippingAddress from './ShippingAddress';
import OrderDetails from './OrderDetails';
import SearchScreen from './SearchScreen';
import UpdateProfile from './UpdateProfile';
import Terms from './Terms';
import Chat from './Chat';
const Stack = createNativeStackNavigator();

const MainStack = () => {
  return (
    <Stack.Navigator
    // initialRouteName='TabViewExample'
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="drawer" component={Drawer} />
      <Stack.Screen name="nearBy" component={NearBy} />
      <Stack.Screen name="TabViewExample" component={TabViewExample} />
      <Stack.Screen name='itemDetails' component={ItemDetails} />
      <Stack.Screen name='restaurantDetail' component={RestaurantDetail} />
      <Stack.Screen name="notifications" component={Notifications} />
      <Stack.Screen name="myCart" component={MyCart} />
      <Stack.Screen name="addItems" component={AddItems} />
      <Stack.Screen name="checkout" component={CheckOut} />
      <Stack.Screen name="cardInfo" component={CardInfo} />
      <Stack.Screen name="shippingAddress" component={ShippingAddress} />
      <Stack.Screen name="orderDetails" component={OrderDetails} />
      <Stack.Screen name="searchScreen" component={SearchScreen} />
      <Stack.Screen name='updateProfile' component={UpdateProfile} />
      <Stack.Screen name='terms' component={Terms} />
      <Stack.Screen name='chats' component={Chat} />
      



      
      
    </Stack.Navigator>
  );
};

export default MainStack;

const styles = StyleSheet.create({});
