import { FlatList, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import PromoCodeCard from '../../../Components/PromoCodeCard'
import { promoCodes } from '../../../../Config/Data'
import CustomHeader from '../../../Components/CustomHeader'
import COLORS from '../../../../Config/Colors'

const PromoCodes = ({navigation}) => {
  return (
    <View style={styles.container} >
      <CustomHeader
        heading={'Promo Codes'}
        iconSize={30}
        left={'chevron-left'}
        leftOnpress={() => navigation.goBack()}
      />
    <View style={{alignItems: 'center'}} >
        <FlatList data={promoCodes} renderItem={({item})=>{
            return <PromoCodeCard item={item} />
        }}  />
    </View>
    </View>
  )
}

export default PromoCodes

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.white
    }
})