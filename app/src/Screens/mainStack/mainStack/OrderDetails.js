import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  Image,
  ImageBackground,
} from 'react-native';
import {Button, IconButton, Icon} from 'react-native-paper';
import COLORS from '../../../../Config/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import PlaceOrderTxtContainer from '../../../Components/PlaceOrderTxtContainer';
import PaperBtn from '../../../Components/PaperButton';
import RatingModal from '../../../Components/RatingModal';
import {useState} from 'react';

const OrderDetailScreen = ({navigation, route}) => {
  const [isModalVisiible, setIsModalVisiible] = useState(false);

  const order = route.params.item;

  return (
    // <View style={styles.container}>

    <ScrollView style={[styles.container]}>
      <ImageBackground source={{uri: order.image}} style={styles.image}>
        <IconButton
          icon={'chevron-left'}
          iconColor={COLORS.white}
          size={35}
          style={styles.iconbtnStyle}
          onPress={() => navigation.goBack()}
        />
      </ImageBackground>
      <View style={{paddingHorizontal: wp('3%')}}>
        <View style={styles.header}>
          <View>
            <Text style={styles.orderId}>Order # {order.id}</Text>
            <Text style={styles.orderStatus}>
              Order Status:{' '}
              <Text style={styles.statusPreparing}>{order.status}</Text>
            </Text>
          </View>
          <Text style={styles.totalAmount}>
            $ {order.totalAmount.toFixed(2)}
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            <Icon source={'map-marker'} color={COLORS.bgColor} size={22} />
            Order from
          </Text>
          <Text style={styles.sectionText}> | {order.restaurantName}</Text>
          <Text style={styles.sectionTitle}>
            <Icon source={'map-marker'} color={COLORS.bgColor} size={22} />
            Delivered to
          </Text>
          <Text style={styles.sectionText}> {order.deliveryAddress}</Text>
        </View>

        <View style={styles.itemsContainer}>
          {order.items.map(item => (
            <View key={item.id} style={styles.itemRow}>
              <Text style={styles.itemQuantity}>× {item.quantity}</Text>
              <Text style={styles.itemName}>{item.name}</Text>
              <Text style={styles.itemPrice}>$ {item.price.toFixed(2)}</Text>
            </View>
          ))}
        </View>

        <View style={styles.summary}>
          {/* <Text style={styles.summaryText}>Subtotal</Text> */}
          <PlaceOrderTxtContainer
            property={'SubTotal'}
            Value={`$ ${order.subtotal.toFixed(2)}`}
          />
          <PlaceOrderTxtContainer
            property={'Service Charges'}
            Value={`$ ${order.serviceCharges.toFixed(2)}`}
          />
          <PlaceOrderTxtContainer
            property={'Total Charges'}
            Value={`$ ${(order.subtotal + order.serviceCharges).toFixed(2)}`}
            propertyStyle={styles.totalText}
            valueStyle={styles.totalAmount}
          />
        </View>

        <View style={styles.paymentMethod}>
          <Text style={styles.sectionTitle}>Payment Methods</Text>
          <View style={styles.paymentMethodContainer}>
            <Icon
              source="credit-card-edit-outline"
              size={wp('10%')}
              color={COLORS.bgColor}
            />
            <Text style={styles.paymentMethodText}>{order.paymentMethod}</Text>
          </View>
        </View>

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

        <View style={styles.riderInfo}>
          <Image
            source={{uri: order.rider.avatar}}
            style={styles.riderAvatar}
          />
          <Text style={styles.riderName}>{order.rider.name}</Text>

          <IconButton icon="phone" size={24} color={COLORS.bgColor} />
        </View>
        <View style={styles.buttonContainer}>
          <PaperBtn
            containerStyle={styles.cancelButton}
            textColor={COLORS.white}
            onPress={() => {
              /* Handle cancel order */
            }}>
            Add Complaints
          </PaperBtn>
          <PaperBtn
            containerStyle={styles.cancelButton}
            textColor={COLORS.white}
            onPress={() => setIsModalVisiible(true)}>
            Rate
          </PaperBtn>
        </View>
        <RatingModal
          isVisible={isModalVisiible}
          onClose={() => setIsModalVisiible(false)}
          onSubmit={() => setIsModalVisiible(false)}
        />
      </View>
    </ScrollView>
    // </View>
  );
};

export default OrderDetailScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  image: {
    width: wp('100%'),
    height: wp('70%'),
  },
  iconbtnStyle: {
    margin: hp(1),
  },
  header: {
    padding: wp('4%'),
    backgroundColor: COLORS.lightGray,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  orderId: {
    fontSize: wp('4%'),
    fontWeight: 'bold',
    color: COLORS.black,
  },
  orderStatus: {
    fontSize: wp('4%'),
    color: COLORS.gray,
  },
  statusPreparing: {
    color: COLORS.bgColor,
  },
  totalAmount: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    color: COLORS.bgColor,
  },
  section: {
    padding: wp('4%'),
  },
  sectionTitle: {
    fontSize: wp('4.5%'),
    color: COLORS.darkTextColor,
    marginBottom: hp('0.5%'),
    fontWeight: '500',
  },
  sectionText: {
    fontSize: wp('4.5%'),
    color: COLORS.bgColor,
    fontWeight: '500',
    marginBottom: hp('2%'),
  },
  itemsContainer: {
    padding: wp('4%'),
  },
  itemRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: hp('1%'),
  },
  itemQuantity: {
    fontSize: wp('4%'),
    color: COLORS.bgColor,
    fontWeight: '500',
  },
  itemName: {
    fontSize: wp('4%'),
    color: COLORS.black,
    fontWeight: '500',
  },
  itemPrice: {
    fontSize: wp('4%'),
    color: COLORS.bgColor,
    fontWeight: '500',
  },
  summary: {
    padding: wp('4%'),
    borderTopWidth: 1,
    borderColor: COLORS.lightGray,
  },
  summaryText: {
    fontSize: wp('4%'),
    color: COLORS.gray,
  },
  summaryAmount: {
    fontSize: wp('4%'),
    color: COLORS.black,
  },
  totalText: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    color: COLORS.black,
    marginTop: hp('2%'),
  },
  cancelButton: {
    margin: wp('4%'),
    backgroundColor: COLORS.bgColor,
    paddingHorizontal: wp('4%'),
  },
  paymentMethod: {
    padding: wp('4%'),
  },
  paymentMethodContainer: {
    backgroundColor: COLORS.lightGray,
    padding: wp('4%'),
    borderRadius: 10,
    flexDirection: 'row',
    alignItems: 'center',
  },
  paymentMethodText: {
    fontSize: wp('4%'),
    color: COLORS.black,
    marginLeft: wp('4%'),
  },
  deliveryTime: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: wp('4%'),
    borderRadius: wp('5%'),
  },
  estimateText: {
    fontSize: wp('4%'),
    color: COLORS.gray,
  },
  deliveryTimeText: {
    fontSize: wp('4.5%'),
    color: COLORS.bgColor,
    fontWeight: 'bold',
  },
  riderInfo: {
    backgroundColor: COLORS.cardBgColor,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    padding: wp('4%'),
    borderRadius: wp('5%'),
  },
  riderAvatar: {
    width: wp('12%'),
    height: wp('12%'),
    borderRadius: wp('6%'),
    marginRight: wp('4%'),
  },
  riderName: {
    fontSize: wp('4%'),
    color: COLORS.grayTextColor,
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
  },
  estimateTime: {
    fontSize: wp('5%'),
    color: COLORS.bgColor,
    fontWeight: '600',
    marginBottom: hp('0.5%'),
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
