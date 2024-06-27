import { StyleSheet, Text, View } from 'react-native'
import React, {useState} from 'react'
import CustomHeader from '../../../Components/CustomHeader'
import CustomTabView from '../../../Components/CustomTabView'
import { restaurants } from '../../../../Config/Data'
import { FlatList } from 'react-native-gesture-handler'
import SubFavorites from '../../../Components/SubFavorites'
import { shuffle } from '../../../../Config/Modules'
import COLORS from '../../../../Config/Colors'


const Favorities = ({navigation}) => {
    
  const foodsArray = restaurants.flatMap(restaurant => {
    return restaurant.food;
  });

  const dealsArray = restaurants.flatMap(restaurant => {
    return restaurant.deals;
  });
  
  const restaurantsArray = restaurants.flat(restaurant => {
    return restaurant
  } )
//   console.log(foodArray);

const shuffledFoods = shuffle(foodsArray)
const shuffledDeals = shuffle(dealsArray)
const shuffledRestaurants = shuffle(restaurantsArray)


  const [routes] = useState([
    { key: 'foods', title : 'Foods '},
    { key: 'deals', title : 'Deals '},
    { key: 'restaurants', title : 'Restaurants '},
 ])

 const onDealCardPress = (item) => {
  navigation.navigate('itemDetails', {item: item});
};

const onRestaurantCardPress = (restaurant) => {
  console.log(restaurant);
  navigation.navigate('restaurantDetail', {item: restaurant})
};


 
  const renderScene = ({route}) => {
    switch (route.key){
        case 'foods' : 
        return <SubFavorites route={route.key} array={shuffledFoods} onPress={onDealCardPress} />
        case 'deals' : 
        return <SubFavorites route={route.key} array={shuffledDeals} onPress={onDealCardPress} />
        case 'restaurants' : 
            return <SubFavorites route={route.key} array={shuffledRestaurants} onPress={onRestaurantCardPress} />
        default:
            return null;
    }
  }
  return (
    <View style={styles.container} > 
      <CustomHeader
        heading={'My Favorites'}
        iconSize={30}
        left={'chevron-left'}
        leftOnpress={() => navigation.goBack()}
      />

      <CustomTabView renderScene={renderScene} routes={routes}  />

    </View>
  )
}

export default Favorities

const styles = StyleSheet.create({
  container: {
    flex: 1, 
    backgroundColor : COLORS.white
  }
})