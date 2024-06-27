import {Pressable, StyleSheet, Text, View} from 'react-native';
import React, {useEffect, useState} from 'react';
import CustomHeader from '../../../Components/CustomHeader';
import COLORS from '../../../../Config/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {IconButton, Divider, Icon} from 'react-native-paper';
import AddressCard from '../../../Components/AddressCard';
import TxtInput from '../../../Components/TxtInput';
import PaperBtn from '../../../Components/PaperButton';
import SelectPaymentModal from '../../../Components/SelectPaymentModal';
import PlaceOrderTxtContainer from '../../../Components/PlaceOrderTxtContainer';
import WalletWarningModal from '../../../Components/WalletWarningModal';
import PhoneNumberModal from '../../../Components/PhoneNumberModal';
import useCart from '../../../Hooks/useCart';

const CheckOut = ({navigation}) => {
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedOption, setSelectedOption] = useState('Cash on Delivery');
  const [isCard, setIsCard] = useState(false);
  const [isCardModal, setIsCardModal] = useState(false);
  const [isWalletPayment, setIsWalletPayment] = useState(false);
  const [EnoughAmount, setEnoughAmount] = useState(false)
  const [isUpdatePhoneNumber, setIsUpdatePhoneNumber] = useState(false)

  const {cart} = useCart()

  const [userInfo ,  setUserInfo] = useState({address: '25 east 36th street, Cibadak, Sukabumi 43315',
    phone : '+92 300 987654', wallet: '$0'
  })

const [orderDetails, setOrderDetails] = useState({
  subTotal : '$29.89',
  serviceCharges: '$6.89',
  Total: 0
})

useEffect(()=>{
  const subTotal = Number.parseFloat(orderDetails.subTotal.replace('$', ''))
  const serviceCharges = Number.parseFloat(orderDetails.serviceCharges.replace('$', ''))
  setOrderDetails(prev => ({ 
    ...prev, 
    Total: (subTotal + serviceCharges).toFixed(2)
  }))
}, [orderDetails.serviceCharges, orderDetails.subTotal])

useEffect(() => {
  if (isWalletPayment) {
    const walletBalance = Number.parseFloat(userInfo.wallet.replace('$', ''));
    if (walletBalance === 0) {
      setEnoughAmount(true);
    } else {
      setEnoughAmount(false);
    }
  }
}, [isWalletPayment, userInfo.wallet]);

  const paymentOptions = ['Cash on Delivery', 'Card Payment', 'Wallet Payment'];

  const onSelect = option => {
    if (option === 'Card Payment') {
      // setIsCard(true);
      setSelectedOption(option)
      setIsCard(true)
      navigation.navigate('cardInfo');
      
    }
    else if (option === 'Wallet Payment') {
      setSelectedOption(option)

        setIsWalletPayment(true)
        setModalVisible(false)
    }
    else{
      setSelectedOption(option)
        setModalVisible(false)
    }
  };

  return (
    <View style={styles.container}>
      <CustomHeader
        heading={'Checkout'}
        iconSize={30}
        left={'chevron-left'}
        leftOnpress={() => navigation.goBack()}
      />
      <View style={styles.contentContainer}>
        <Text style={styles.deliveringToTxt}>Delivering To</Text>
        <AddressCard
          text={userInfo.address}
          iconLeft={'map-marker'}
          
          iconRight={'square-edit-outline'}
          containerStyle={{marginVertical: wp('3%')}}
          onPress={() => navigation.navigate('shippingAddress')}
        />
        <AddressCard
          text={userInfo.phone}
          iconLeft={'phone'}
          iconRight={'square-edit-outline'}
          onPress={() => setIsUpdatePhoneNumber(true)}
        />
        <Divider style={styles.Divider} />
        <TxtInput placeholder={'Promo Code'} />

        {isWalletPayment ? (
               
             <>
             <Text style={styles.methodHeading}>Payment Method</Text>
    <View style={styles.walletCardContainer}>
       <View style={{ flexDirection: 'row', alignItems: 'center' }}>
         <Icon
           source="wallet"
           size={wp('10%')}
           color={COLORS.bgColor}
         />
         <Text style={styles.WalletPaymentTxt}>Wallet Payment</Text>
       </View>
       <View style={styles.walletCardSubContainer}>
         <Text style={{ fontSize: wp('3.2%') }}>Total Balance</Text>
         <Text style={styles.UserBalance}>{userInfo.wallet}</Text>
       </View>
     </View>
   </>
 ) : isCard ? (
   <>
     <Text style={styles.methodHeading}>Payment Method</Text>
     <View style={styles.walletCardContainer}>
       <View style={{ flexDirection: 'row', alignItems: 'center' }}>
         <Icon
           source="credit-card-edit-outline" 
           size={wp('10%')}
           color={COLORS.bgColor}
         />
         <Text style={styles.WalletPaymentTxt}>Card Payment</Text>
       </View>
     </View>
   </>
 ) : (
   <PaperBtn
     textColor={COLORS.bgColor}
     onPress={() => setModalVisible(true)}
   >
     Select Payment Option
   </PaperBtn>
 )}

        <View style={styles.placeOrderContainer}>
            <PlaceOrderTxtContainer property={'Subtotal'} Value={orderDetails.subTotal} textStyle={{color: COLORS.grayTextColor}} />
          <PlaceOrderTxtContainer
            property={'Service Charges'}
            Value={orderDetails.serviceCharges}
            textStyle={{color: COLORS.grayTextColor}}
          />
          <Divider />
          <PlaceOrderTxtContainer
            property={'Total'}
            Value={`$ ${orderDetails.Total}`}
            textStyle={styles.placeOrderTxt}
          />

          <PaperBtn
            containerStyle={styles.placeOrderBtnContainer}
            textStyle={styles.placeOrderBtnTxt}
            onPress={()=> EnoughAmount ? setIsCardModal(true) : setModalVisible(true)}
            >
            Place Order
          </PaperBtn>
        </View>
      </View>

      <SelectPaymentModal
        visible={modalVisible}
        onClose={() => setModalVisible(false)}
        options={paymentOptions}
        selectedOption={selectedOption}
        onSelect={onSelect}
      />
      <WalletWarningModal
      visible={isCardModal}
      icon={isWalletPayment ?'scale-unbalanced' : 'shopping-outline'}
      text= {EnoughAmount ? `        Enought Balance, ${'\n'}Kindly recharge your wallet` : 'Order Placed Successfully'}
      onClose={() => setIsCardModal(false)}
      />

      <PhoneNumberModal visible={isUpdatePhoneNumber} onClose={()=> setIsUpdatePhoneNumber(false)}  />

    </View>
  );
};

export default CheckOut;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    paddingHorizontal: wp('4%'),
  },
  contentContainer: {
    paddingLeft: wp('4%'),
    flex: 1,
  },
  deliveringToTxt: {
    color: COLORS.darkTextColor,
    fontSize: wp('4.6%'),
    fontWeight: '500',
  },
  Divider: {
    marginVertical: wp('6%'),
  },
  methodHeading: {
    color: COLORS.bgColor,
    fontSize: wp('4.6%'),
    fontWeight: '500',
    // marginVertical: wp('6%')
  },
  walletCardContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: hp('1.8%'),
    justifyContent: 'space-between',
  },
  WalletPaymentTxt: {
    color: COLORS.darkTextColor,
    marginLeft: wp('3%'),
  },
  walletCardSubContainer: {},
  UserBalance: {
    color: COLORS.darkTextColor,
    fontWeight: '500',
  },
  placeOrderContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  placeOrderTxt: {
    fontSize: wp('4.4%'),
    color: COLORS.darkTextColor,
    fontWeight: '500',
    marginTop: wp('4%'),
  },
  placeOrderBtnContainer: {
    backgroundColor: COLORS.bgColor,
    marginVertical: wp('6%'),
  },
  placeOrderBtnTxt: {
    color: COLORS.white,
    fontSize: wp('4.4%'),
  },
});
