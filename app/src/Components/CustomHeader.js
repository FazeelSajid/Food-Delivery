import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { IconButton } from 'react-native-paper'
import COLORS from '../../Config/Colors'
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
    RFValue,
  } from 'react-native-responsive-screen';

const CustomHeader = ({right, heading, left, iconSize, leftOnpress, rightOnPress, headingColor, iconColor }) => {
  return (
    <View style={styles.container} >
        <IconButton icon={left} size={iconSize} iconColor={iconColor? iconColor : COLORS.bgColor} onPress={leftOnpress} style={styles.iconBtn} />
      <Text style={[styles.heading, headingColor && {color: headingColor}]} >{heading}</Text>
      <IconButton icon={right} size={iconSize} iconColor={COLORS.bgColor} style={styles.iconBtn} onPress={rightOnPress} />
      
    </View>
  )
}

export default CustomHeader

const styles = StyleSheet.create({
    container :{
        flexDirection: 'row',
        justifyContent:'space-between',
        alignItems: 'center',
        paddingVertical: hp(2.5)
    },
    heading: {
        color: COLORS.bgColor,
        fontSize: hp(3),
        fontWeight: '600',
        lineHeight: wp(6)
    },
    iconBtn:{

    }
})