import {StyleSheet, Text, View, Image, TouchableOpacity, Pressable} from 'react-native';
import React, {useState} from 'react';
import COLORS from '../../Config/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {IconButton} from 'react-native-paper';
import uuid from 'react-native-uuid';
import CustomButton from './CustomButton';
import useCart from '../Hooks/useCart';
// import { incrementQuantity, decrementQuantity } from '../Redux/Features/CartSlice';


const DealCard = ({item, isCart, handlePress, icon, addtoCart ,  darkMode}) => {
  // console.log(item);

  const  { updateItemQuantity } = useCart()

  const incrementQuantity = (id, currentQuantity) =>{
    updateItemQuantity(id, currentQuantity + 1 )
  }
  

  const decrementQuantity = (id, currentQuantity) => {
    updateItemQuantity(id, currentQuantity - 1)
  }



const {id, quantity} = item
// console.log(id);

  return (
    <Pressable onPress={ ()=>!isCart && handlePress(item)} style={ ({pressed})=> [styles.container, pressed && !isCart && styles.onPress]}>
      <Image source={{uri: item.image}} style={styles.image} />
      <View style={styles.infoContainer}>
        {!isCart && (
          <View style={styles.tagsContainer}>
            {item.tags.map(tag => (
              <Text key={uuid.v4()} style={styles.tag}>
                {tag}
              </Text>
            ))}
          </View>
        )}

        <Text style={styles.title}>{item.title}</Text>

        <Text style={styles.price}>$ {item.price}</Text>

       {
        isCart && <View style={{flexDirection: 'row', alignItems: 'center',}} >
        <CustomButton icon={'minus'} iconSize={wp(3.5)} iconColor={COLORS.bgColor}  containerStyle={styles.quantityBtn} onPress={()=> decrementQuantity(id, quantity)} /> 
        <Text style={{marginHorizontal: hp(1), color: COLORS.darkTextColor}} >{item.quantity}</Text> 
        <CustomButton icon={'plus'} iconSize={wp(3.5)} iconColor={COLORS.white} bgColor={COLORS.bgColor} containerStyle={styles.quantityBtn} onPress={()=> incrementQuantity(id, quantity) } />  
        </View> 
        }
      </View>
      <IconButton
        icon={icon}
        iconColor={COLORS.bgColor}
        size={25}
        onPress={() => isCart ? handlePress(id) : addtoCart(item)}
      />
    </Pressable>
  );
};

export default DealCard;

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.white,
    borderRadius: 13,
    borderColor: COLORS.borderColor,
    borderWidth: 0.7,
    overflow: 'hidden',
    marginBottom: hp(1),
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.3,
    shadowRadius: 2,
    elevation: 2,
    flexDirection: 'row',
    alignItems: 'center',
    padding: wp(1),
    // height: hp
  },
  onPress : {
    opacity: 0.7, borderRadius: 13
  },
  image: {
    resizeMode: 'cover',
    width: wp(24),
    borderRadius: 10,
    height: hp(12),
  },
  infoContainer: {
    paddingHorizontal: wp(1.5),
    flex: 1,
  },
  tag: {
    color: COLORS.bgColor,
    backgroundColor: '#FF572240',
    borderRadius: 10,
    paddingVertical: hp(0.3),
    paddingHorizontal: wp(2),
    marginRight: wp(1),
    marginTop: hp(0.5),
    fontSize: wp(3),
  },

  title: {
    color: COLORS.darkTextColor,
    fontSize: wp(4),
    fontWeight: 'bold',
    marginVertical: hp(0.7),
    // backgroundColor: COLORS.darkTextColor,
  },
  price: {
    color: COLORS.bgColor,
    fontWeight: '500',
    fontSize: wp(5),
  },
  tagsContainer: {
    flexDirection: 'row',
    // flexWrap: 'wrap',
    // marginBottom: hp(1),
  },
  quantityBtn : {borderRadius: 2, padding: 2, borderColor:COLORS.bgColor, borderWidth: 1}
});
