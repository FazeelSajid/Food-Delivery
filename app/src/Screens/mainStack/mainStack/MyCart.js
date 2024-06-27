import {
  FlatList,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import CustomHeader from '../../../Components/CustomHeader';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import COLORS from '../../../../Config/Colors';
import {IconButton, TextInput} from 'react-native-paper';
import DealCard from '../../../Components/DealCard';
import PaperBtn from '../../../Components/PaperButton';
import useCart from '../../../Hooks/useCart';

const MyCart = ({navigation}) => {

  const {removeItemFromCart, cart} = useCart()


  // const removeItem = id => {
  //   let filterArray = cartData.filter(item => item.id !== id);
  //   return setcartData(filterArray);
  // };

  // const removeItemHandler = id => {
  //   dispatch(removeItem({id}));
  // };

  // const incrementQuantity = (id) =>{
  //   setcartData(cartData.map(item =>
  //     item.id === id ? { ...item, quantity: item.quantity + 1} : item
  //   ))
  // }

  // const decrementQuantity = (id) =>{
  //   setcartData(cartData.map(item =>
  //     item.id === id? { ...item, quantity: Math.max( item.quantity - 1, 1)} : item
  //   ))
  // }
  return (
    <ScrollView style={styles.container}>
      {/* <View style={{marginHorizontal: wp('4%'), flex: 1,}}> */}
      <CustomHeader
        heading={'My Cart'}
        iconSize={30}
        left={'chevron-left'}
        leftOnpress={() => navigation.goBack()}
      />
      {cart.length > 0 && (
        <View style={styles.card}>
          <IconButton
            icon={'truck-fast-outline'}
            containerColor="#FF572240"
            iconColor={COLORS.bgColor}
            size={35}
            style={{borderRadius: wp('2.5%')}}
          />
          <View style={styles.contentContainer}>
            <Text style={styles.title}>Estimate Delivery Time</Text>
            <Text style={styles.estimateTime}>40 Mins</Text>
          </View>
        </View>
      )}
      <View>
        <View style={{paddingVertical: hp('2%')}}>
          {cart.length > 0 &&
            cart.map(item => {
              return (
                <DealCard
                  item={item}
                  icon={'close'}
                  handlePress={removeItemFromCart}
                  isCart={true}
                />
              );
            })}
        </View>
        {/* <FlatList
            data={cart}
            ListEmptyComponent={
              <PaperBtn
                textColor={COLORS.bgColor}
                onPress={() => navigation.navigate('addItems')}>
                Let's shop for some delicious food!
              </PaperBtn>
            }
            style={styles.flatList}
            renderItem={({item}) => {
              return (
                <DealCard item={item} icon={'close'} handlePress={removeItemHandler} isCart = {true}   />
              );
            }}
          /> */}
        {cart.length > 0 ? (
          <PaperBtn
            textColor={COLORS.bgColor}
            onPress={() => navigation.navigate('addItems')}>
            + Add more items
          </PaperBtn>
        ) : (
          <PaperBtn
            textColor={COLORS.bgColor}
            onPress={() => navigation.navigate('addItems')}>
            Let's shop for some delicious food!
          </PaperBtn>
        )}
      </View>
      <TextInput
        // label={"Commen"}
        keyboardType={'default'}
        mode="flat"
        autoCapitalize={'sentences'}
        autoCorrect={true}
        multiline={true}
        placeholder="Comment (Optional)"
        style={styles.textInput}
        underlineColor={COLORS.bgColor}
        activeUnderlineColor={COLORS.orangeTextColor}
        selectionColor={COLORS.orangeTextColor}
        // value={inputValues.description}
        // onChangeText={amoutInputHandler.bind(this, 'date')}
      />

      {/* </View> */}
      <View style={{justifyContent: 'flex-end', flex: 1}}>
        <PaperBtn
          containerStyle={{
            backgroundColor: COLORS.bgColor,
            padding: wp('0.7%'),
          }}
          textColor={COLORS.white}
          onPress={() => navigation.navigate('checkout')}>
          Check Out
        </PaperBtn>
      </View>
    </ScrollView>
  );
};

export default MyCart;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: wp('4%'),
  },
  card: {
    flexDirection: 'row',
    backgroundColor: COLORS.cardBgColor,
    borderRadius: wp('2%'),
    padding: wp('3%'),
    marginVertical: hp('0.5%'),
    // borderBottomWidth: 1,
    // borderBottomColor: COLORS.borderColor,
    alignItems: 'center',
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: wp('4%'),
  },
  title: {
    fontSize: wp('3.75%'),
    fontWeight: '500',
    marginBottom: hp('0.5%'),
    color: COLORS.grayTextColor
  },
  estimateTime: {
    fontSize: wp('5%'),
    color: COLORS.bgColor,
    fontWeight: '600',
    marginBottom: hp('0.5%'),
  },
  flatList: {paddingVertical: hp('2%')},
  textInput: {
    textAlignVertical: 'top',
    height: 100,
    marginBottom: 10,
    backgroundColor: COLORS.inputBgColor,
    borderRadius: wp('5%'),

    // marginHorizontal:
  },
  ListEmptyComponent: {
    color: COLORS.bgColor,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
