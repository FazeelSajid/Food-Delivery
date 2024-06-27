// DrawerContent.js
import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, Clipboard } from 'react-native';
import { DrawerContentScrollView, DrawerItem } from '@react-navigation/drawer';

import { Divider, Icon } from 'react-native-paper';
import COLORS from '../../../../Config/Colors';
import PaperBtn from '../../../Components/PaperButton';

export function DrawerContent({navigation}) {
  return (
    <DrawerContentScrollView style={{flex: 1}} >
      <View style={styles.drawerContent}>
        <View style={styles.logoContainer}>
          <Image
            source={require('../../../assets/Logos/logo.png')} // Add your logo here
            style={styles.logo}
          />
        </View>
        <Divider />
        <View style={styles.drawerSection}>
          <DrawerItem
            icon={({ color, size }) => (
              <Icon source="wallet" color={color} size={size} />
            )}
            label="My Wallet"
            onPress={() => {navigation.navigate('myWallet')}}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon source="heart" color={color} size={size} />
            )}
            label="My Favorites"
            onPress={() => {navigation.navigate('favorities')}}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon source="history" color={color} size={size} />
            )}
            label="Order History"
            onPress={() => {navigation.navigate('pastOrders')}}
          />
          <DrawerItem
            icon={({ color, size }) => (
              <Icon source="ticket-percent" color={color} size={size} />
            )}
            label="Promocodes"
            onPress={() => {navigation.navigate('promoCodes')}}
          />
        </View>
      <View style={styles.bottomDrawerSection}>
        <PaperBtn containerStyle={styles.logoutButton} textStyle={styles.logoutText} >Logout</PaperBtn>
      </View>
      </View>
    </DrawerContentScrollView>
  );
}

const styles = StyleSheet.create({
  drawerContent: {
    flex: 1,
    // justifyContent: 'flex-end',
    // alignItems: 'flex-end'
  },
  logoContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  logo: {
    width: 100,
    height: 100,
  },
  drawerSection: {
    marginTop: 15,
  },
  bottomDrawerSection: {
    marginBottom: 15,
    borderTopColor: '#f4f4f4',
    // backgroundColor: COLORS.black,
    // backgroundColor: COLORS.black,
    flex: 1,
    borderTopWidth: 1,
    paddingHorizontal: 20,
    justifyContent: 'flex-end',
    // alignItems: 'flex-end',
    paddingTop: 10,
  },
  logoutButton: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: COLORS.bgColor
  },
  logoutText: {
    fontSize: 16,
    marginLeft: 10,
    color: COLORS.white
  },
});

export default DrawerContent;
