import { StyleSheet, Text, View, Pressable } from 'react-native'
import React from 'react'
import { IconButton } from 'react-native-paper'
import COLORS from '../../Config/Colors'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

const AddressCard = ({text, iconLeft, iconRight, containerStyle, onPress}) => {
  return (
    <Pressable style={[styles.locationCard, containerStyle]} onPress={onPress} >
          <IconButton
            icon={iconLeft}
            containerColor="#FF572240"
            iconColor={COLORS.bgColor}
            size={23}
            style={[{borderRadius: wp('2.5%')}]}
          />
          <View style={styles.locationCardContentContainer}>
            <Text style={styles.title}>{text}</Text>
          </View>
          <IconButton
            icon={iconRight}
            containerColor={COLORS.bgColor}
            iconColor={COLORS.white}
            size={15}
            style={{borderRadius: wp('2.5%')}}
          />
        </Pressable>
  )
}

export default AddressCard

const styles = StyleSheet.create({
    locationCard: {
        flexDirection: 'row',
        backgroundColor: COLORS.cardBgColor,
        borderRadius: wp('3%'),
        padding: wp('3%'),
        marginVertical: hp('0.5%'),
        // borderBottomWidth: 1,
        // borderBottomColor: COLORS.borderColor,
        alignItems: 'center',
      },
      locationCardContentContainer: {
        flex: 1,
        paddingHorizontal: wp('4%'),
      },
      title: {
        fontSize: wp('4.2%'),
        fontWeight: '500',
        // marginBottom: hp('0.5%'),
        textAlign: 'left',
        lineHeight: wp('5.3%'),
        color: COLORS.grayTextColor
      },
})