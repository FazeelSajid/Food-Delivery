import { StyleSheet, Text, View, FlatList } from 'react-native'
import React from 'react'
import DealCard from './DealCard';
import RestaurantsCard from './RestaurantsCard';
import COLORS from '../../Config/Colors';
import uuid from 'react-native-uuid';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const SubFavorites = ({array, route, onPress }) => {
  // console.log(route);

  // console.log(array);




  return (
    <View style={styles.container} >
      <FlatList data={array} keyExtractor={()=> uuid.v4()} renderItem={({item})=>{
        switch (route) {
          case 'foods': 
          return <DealCard item={item} icon={'chevron-right-circle-outline'} handlePress={onPress}/>
          case 'deals': 
          return <DealCard item={item} icon={'chevron-right-circle-outline'} handlePress={onPress}/>
          case 'restaurants':
            return  <RestaurantsCard restaurant={item} handlePress={onPress} />
        }}}
        ListFooterComponent={<View style={{height: hp('3%')}} />}
        />
      {/* <Text style={{color: COLORS.bgColor}} >HELLO</Text> */}
    </View>
  )
}

export default SubFavorites

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: wp('5%'), 
    paddingVertical: hp('1%'),
    backgroundColor: COLORS.white,

  },
})