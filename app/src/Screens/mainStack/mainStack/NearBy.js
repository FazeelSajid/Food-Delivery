import {StyleSheet, Text, View, FlatList} from 'react-native';
import React, { useLayoutEffect, useState, useEffect } from 'react';
import CustomHeader from '../../../Components/CustomHeader';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  RFValue,
} from 'react-native-responsive-screen';
import DealCard from '../../../Components/DealCard';
import RestaurantsCard from '../../../Components/RestaurantsCard';
import uuid from 'react-native-uuid';
import useCart from '../../../Hooks/useCart';


const NearBy = ({route, navigation}) => {
  let [restaurantScreen, setRestaurantScreen] = useState(false) ;

const [Data, setData] = useState([])

const {addItemToCart} = useCart()


  useEffect(()=>{
    if ( route.params.id) {
      setRestaurantScreen(true)
    } else {
      setRestaurantScreen(false)
    }
    if (route.params?.Data) {
      setData(route.params.Data);
    }
  }, [route.params])


  const onDealCardPress = (item) => {
    navigation.navigate('itemDetails', {item: item});
  };
    const onRestaurantCardPress = (restaurant) => {
    navigation.navigate('restaurantDetail', {item: restaurant})
  };


  return (
    <View style={styles.container} >
      <CustomHeader heading={restaurantScreen ? 'Nearby Restaurant' : 'Nearby Deals'} left={'chevron-left'} leftOnpress={() => navigation.goBack()} iconSize={30} right={'magnify'}/>

    <View style={{paddingHorizontal: wp(6)}} >
      <FlatList  data={Data} keyExtractor={()=>uuid.v4()} renderItem={({item}) =>{
        return restaurantScreen? <RestaurantsCard restaurant={item} handlePress={onRestaurantCardPress}  /> : <DealCard item={item} icon={'plus-circle-outline'} handlePress={onDealCardPress} addtoCart={addItemToCart} />
        }} 
        ListFooterComponent={<View style={{height: hp(13)}} />}
        showsVerticalScrollIndicator = {false}
        />
        </View>
    </View>
  );
};

export default NearBy;

const styles = StyleSheet.create({
  container:{
    flex: 1,
    backgroundColor: '#fff',
    // alignItems: 'center',
    // justifyContent: 'center',
  }
});
