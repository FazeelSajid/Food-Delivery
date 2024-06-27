import {StyleSheet, Text, View, Image, Pressable} from 'react-native';
import React from 'react';
import COLORS from '../../Config/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Divider} from 'react-native-paper';

const OrdersCard = ({order, onPress}) => {
  // console.log(order);
  return (
    <Pressable
      style={({pressed}) => [styles.container, pressed && styles.pressed]}
      onPress={onPress}>
      <View style={styles.contentContainer}>
        <Image source={{uri: order.image}} style={styles.itemImage} />
        <View style={styles.infoContainer}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={styles.name}>{order.items[0].name}</Text>
            <View style={styles.statusContainer}>
              <Text style={styles.statusText}>
                {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
              </Text>
            </View>
          </View>
          <Text style={styles.price}>$ {order.totalAmount}</Text>
        </View>
      </View>
    </Pressable>
  );
};

export default OrdersCard;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    borderColor: COLORS.borderColor,
    borderWidth: 1,
    marginBottom: wp('3%'),
    borderRadius: wp('3%'),
  },
  pressed: {
    opacity: 0.7,
    borderRadius: 13,
  },
  divider: {
    marginVertical: 5,
  },
  headerContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    color: COLORS.bgColor,
  },
  statusContainer: {
    backgroundColor: COLORS.bgColor,
    borderRadius: wp(2),
    paddingHorizontal: 10,
    paddingVertical: 5,
  },
  statusText: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: 'bold',
  },
  itemImage: {
    width: wp(20),
    height: hp(10),
    borderRadius: wp(5),
    resizeMode: 'cover',
  },
  contentContainer: {
    padding: wp('2%'),
    flexDirection: 'row',
    flex: 1,
  },
  infoContainer: {
    marginLeft: wp('2%'),
    flex: 1,
    justifyContent: 'center'
  },
  name: {
    fontSize: wp('4.6%'),
    fontWeight: '500',
    color: COLORS.darkTextColor,
  },
  price: {
    fontSize: wp('5%'),
    fontWeight: '500',
    color: COLORS.bgColor,
  },
});
