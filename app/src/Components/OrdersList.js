import { StyleSheet, Text, View, SafeAreaView, FlatList } from 'react-native'
import React, { useEffect } from 'react'
import { ordersArray } from '../../Config/Data'
import { useState } from 'react'

import OrdersCard from './OrdersCard'
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native'

const OrdersList = ({status}) => {

    const [orders, setOrders] = useState(ordersArray)
    const navigation = useNavigation()

    useEffect(()=>{

      if (status) {
        let filteredOrders = orders.filter((item)=> item.status.toLowerCase() === status)
        setOrders(filteredOrders)
      }

    },[status])
    // console.log(status);

    
  return (
    <SafeAreaView>
      <FlatList
        data={orders}
        renderItem={({ item }) => <OrdersCard order={item} onPress={()=> {
          navigation.navigate('orderDetails', {item: item})
        }} />}
        keyExtractor={(item) => item.id}
        style={styles.FlatList}
      />
    </SafeAreaView>
  )
}

export default OrdersList

const styles = StyleSheet.create({
  FlatList:{
    padding: wp('5%')
  }
})