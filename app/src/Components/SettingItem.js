import React from 'react';
import { Icon } from 'react-native-paper';
import { View, Text, StyleSheet, TouchableOpacity, Switch } from 'react-native';
import COLORS from '../../Config/Colors';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

const SettingsItem = ({ label, onPress, hasSwitch, switchValue, onSwitchChange }) => {
  return (
    <TouchableOpacity style={styles.settingItem} onPress={onPress} disabled={hasSwitch}>
      <Text style={styles.settingText}>{label}</Text>
      {hasSwitch ? (
        <Switch value={switchValue} onValueChange={onSwitchChange} style={{}} trackColor={{false: '#E2E2E2', true: COLORS.bgColor}}
        thumbColor={switchValue ? COLORS.white : '#BEBEBE'} />
      ) : (
        <Icon source="chevron-right" size={24} color={COLORS.darkTextColor} />
      )}
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  settingItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    backgroundColor : COLORS.cardBgColor,
    padding: wp('4.3%'),
    // borderBottomWidth: 1,
    // borderBottomColor: COLORS.lightGrey,
    borderRadius: wp('100%'),
    marginVertical: wp('4'),
  },
  settingText: {
    fontSize: wp('4%'),
    color: COLORS.darkTextColor
  },
});

export default SettingsItem;
