import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, Image } from 'react-native';
import { IconButton, Avatar } from 'react-native-paper';
import COLORS from '../../../../Config/Colors';
import SettingsItem from '../../../Components/SettingItem';
import CustomHeader from '../../../Components/CustomHeader';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import WalletWarningModal from '../../../Components/WalletWarningModal';

const SettingsScreen = ({navigation}) => {
  const [isNotificationsEnabled, setIsNotificationsEnabled] = useState(false);
  const [isOffersEnabled, setIsOffersEnabled] = useState(true);
  const [isModalVisiible, setIsModalVisiible] = useState(false)


  const [userInfo , setUserInfo] = useState({
    profileImg : 'https://robohash.org/123',
    name: 'John Doe',
    email: 'johndoe1234@gmail.com',
    phone: '0000 0000000',
  });
  const toggleNotificationsSwitch = () => setIsNotificationsEnabled(previousState => !previousState);
  const toggleOffersSwitch = () => setIsOffersEnabled(previousState => !previousState);

  return (
    <View style={styles.container}>
      <CustomHeader heading={'Settings'} left={'format-align-justify'} right={'logout'} leftOnpress={()=> navigation.openDrawer()}  rightOnPress={()=> setIsModalVisiible(true)}  />
      <ScrollView  contentContainerStyle={styles.scrollContainer}>
        <View style={styles.profileContainer}>
          <Image source={{uri: userInfo.profileImg }} style={styles.profileImg}  />
          <Text style={styles.name}>{userInfo.name}</Text>
          <Text style={styles.email}>{userInfo.email}</Text>
          <Text style={styles.phone}>{userInfo.phone}</Text>
        </View>
        <View style={styles.settingsContainer}>
          <SettingsItem label="Update Profile" onPress={() => {navigation.navigate('updateProfile')}} />
          <SettingsItem label="Change Language" onPress={() => {}} />
          <SettingsItem
            label="Receive Notifications"
            hasSwitch
            switchValue={isNotificationsEnabled}
            onSwitchChange={toggleNotificationsSwitch}
          />
          <SettingsItem
            label="Offers by Email"
            hasSwitch
            switchValue={isOffersEnabled}
            onSwitchChange={toggleOffersSwitch}
          />
          <SettingsItem label="Terms & Conditions" onPress={() => {navigation.navigate('terms', {policy: false})}} />
          <SettingsItem label="Privacy Policy" onPress={() => {navigation.navigate('terms', {policy: true})}} />
        </View>
      </ScrollView>
      <WalletWarningModal
      visible={isModalVisiible}
      icon={'cloud-upload-outline'}
      text= {'Profle Updated successfully'}
      onClose={() => setIsModalVisiible(false)}
      islogOut={true}
      />
    </View>
  );
};

export default SettingsScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  profileContainer: {
    alignItems: 'center',
    marginVertical: 20,
  },
  profileImg:{
    width: wp('24') ,
    height: hp('12') ,
  },
  avatar: {
    backgroundColor: COLORS.bgColor,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginTop: 8,
  },
  email: {
    fontSize: 16,
    color: COLORS.grey,
    marginTop: 4,
  },
  phone: {
    fontSize: 16,
    color: COLORS.grey,
    marginTop: 4,
  },
  settingsContainer: {
    marginTop: 20,
  },
  scrollContainer: {
    // paddingBottom: 20,
    paddingHorizontal: wp('3%')
  },
});