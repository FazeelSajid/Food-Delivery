import React from 'react';
import { View, Text, StyleSheet, Pressable } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import COLORS from '../../Config/Colors';

const PromoCodeCard = ({ item }) => {
  return (
    <Pressable onPress={()=>{}} style={ ({pressed})=>  [styles.cardContainer, pressed && styles.onPress ]}>
      <Text style={styles.discountText}>{item.discount}</Text>
      <View style={styles.codeContainer}>
        <Text style={styles.codeText}>{item.code}</Text>
        <Text style={styles.expiryText}>Code expires {item.expiryDate}</Text>
      </View>
    </Pressable>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: wp('90%'),
    padding: wp('4%'),
    backgroundColor: COLORS.white,
    borderRadius: wp('2%'),
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    elevation: 3,
    marginVertical: hp('1%'),
    borderColor: COLORS.borderColor,
    borderWidth: 1
  },
  discountText: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    color: COLORS.darkTextColor,
  },
  codeContainer: {
    alignItems: 'flex-end',
  },
  codeText: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    color: COLORS.bgColor,
  },
  expiryText: {
    fontSize: wp('3.5%'),
    color: COLORS.grayTextColor,
  },
  onPress : {
    opacity: 0.7, borderRadius: 13
  },
});

export default PromoCodeCard;
