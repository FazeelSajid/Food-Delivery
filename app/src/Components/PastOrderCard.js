import React from 'react';
import { View, Text, Image, StyleSheet, TouchableOpacity } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import COLORS from '../../Config/Colors';
import PaperBtn from './PaperButton';
import { Icon } from 'react-native-paper';

const PastOrderCard = ({ order }) => {
  return (
    <View style={styles.cardContainer}>
      <View style={styles.cardHeader}>
        <Image source={{ uri: order.image }} style={styles.image} />
        <View style={styles.infoContainer}>
          <Text style={styles.title}>{order.restaurantName}</Text>
          <Text style={styles.date}>{order.date}</Text>
          <Text style={styles.items}>
            {order.items.map(item => item.name).join(', ')}
          </Text>
        </View>
        <Text style={styles.price}>${order.totalAmount.toFixed(2)}</Text>
      </View>
      <PaperBtn containerStyle={styles.reorderButton} textStyle={styles.reorderButtonText} >Reorder Item</PaperBtn>
      <View style={styles.ratingContainer}>
        <Text style={styles.rateText}>Rate Item:</Text>
        {Array.from({ length: 5 }).map((_, index) => (
          <Icon key={index} source="star-outline" size={hp('3%')} color="gray"  />
        ))}
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  cardContainer: {
    width: wp('90%'),
    backgroundColor: COLORS.white,
    borderColor: COLORS.borderColor,
    borderWidth: wp('0.3%'),
    
    borderRadius: wp('2%'),
    padding: wp('4%'),
    marginBottom: hp('2%'),
    elevation: 3,
  },
  cardHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  image: {
    width: wp('20%'),
    height: wp('20%'),
    borderRadius: wp('2%'),
  },
  infoContainer: {
    flex: 1,
    marginLeft: wp('4%'),
  },
  title: {
    color: COLORS.grayTextColor,
    fontSize: wp('4%'),
    fontWeight: 'bold',
    marginBottom: hp('0.5%'),
  },
  date: {
    fontSize: wp('3.5%'),
    color: 'gray',
    marginBottom: hp('0.5%'),
  },
  items: {
    fontSize: wp('3.5%'),
    color: 'gray',
  },
  price: {
    fontSize: wp('4%'),
    fontWeight: 'bold',
    color: COLORS.bgColor,
  },
  reorderButton: {
    marginTop: hp('2%'),
    backgroundColor: COLORS.bgColor,
    borderRadius: wp('5%'),
    alignItems: 'center',
  },
  reorderButtonText: {
    color: 'white',
    fontSize: wp('4%'),
    fontWeight: '500',
  },
  ratingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('1%'),
    borderColor: COLORS.borderColor,
    borderWidth: 1,
    borderRadius: wp('10%'),
    padding: wp('3%')
  },
  rateText: {
    fontSize: wp('4%'),
    marginRight: wp('2%'),
  },
});

export default PastOrderCard;
