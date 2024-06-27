import {StyleSheet, Text, View, TextInput} from 'react-native';
import React from 'react';
import COLORS from '../../Config/Colors';
import { Icon } from 'react-native-paper';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


const TxtInput = ({style, icon, placeholder, IconSize, iconColor, keyboardType, onChangeText, value, onBlur,multiline, onFocus }) => {
  return (
    <View style={[styles.searchContainer, style]}>
      <Icon source={icon} size={IconSize} color={iconColor} />
      <TextInput
        placeholder={placeholder}
        style={styles.searchInput}
        selectionColor={'#FF572270'}
        keyboardType={keyboardType}
        onFocus={onFocus}
        onChangeText={onChangeText}
        value={value}
        placeholderTextColor={COLORS.grayTextColor}
        onBlur={onBlur}
         multiline = {multiline}
      />
    </View>
  );
};

export default TxtInput;

const styles = StyleSheet.create({
  searchContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#f0f0f0',
    borderRadius: 25,
    paddingHorizontal: 10,
    marginBottom: 10,
  },
  searchInput: {
    color: COLORS.black,
    marginLeft: 5,
    flex: 1,
  },
});
