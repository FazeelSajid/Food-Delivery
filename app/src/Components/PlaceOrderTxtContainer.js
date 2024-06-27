import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const PlaceOrderTxtContainer = ({property, Value, textStyle, propertyStyle, valueStyle}) => {
  return (
                <View style={styles.placeOrderTxtContainer} >
                <Text style={[textStyle, propertyStyle]} >{property}</Text>
                <Text style={[textStyle, valueStyle]}>{Value}</Text>
                </View>
  )
}

export default PlaceOrderTxtContainer

const styles = StyleSheet.create({
   
    placeOrderTxtContainer:{
        flexDirection: 'row',
        justifyContent:'space-between',
        marginBottom: 10
    }
})