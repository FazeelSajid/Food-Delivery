import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, {useState, useEffect} from 'react'
import CustomHeader from '../../../Components/CustomHeader'
import COLORS from '../../../../Config/Colors'
import { ordersArray } from '../../../../Config/Data'
import PastOrderCard from '../../../Components/PastOrderCard'
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';



const PastOrders = ({navigation}) => {

    const [orders, setOrders] = useState(ordersArray)

    useEffect(() => {
        let filteredOrders = orders.filter((item)=> item.status.toLowerCase() === 'completed')
          setOrders(filteredOrders)
    }, [])
          

  
  return (
    <View style={styles.container} >
      <CustomHeader
        heading={'Orders History'}
        iconSize={30}
        left={'chevron-left'}
        leftOnpress={() => navigation.goBack()}
        right={'magnify'}
      />
      <View style={{alignItems: 'center'}} >
      <FlatList style={{paddingVertical:  hp('2%'),}} data={orders} renderItem={({item})=>{
        return <PastOrderCard order={item} />
      }} />

      </View>
    </View>
  )
}

export default PastOrders

const styles = StyleSheet.create({
    container : {
        flex: 1,
        backgroundColor: COLORS.white
    }
})