import React, {useState} from 'react';
import { View, Text, FlatList, StyleSheet, ScrollView } from 'react-native';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import COLORS from '../../../../Config/Colors';
import { Icon } from 'react-native-paper';
import CustomHeader from '../../../Components/CustomHeader';
import PaperBtn from '../../../Components/PaperButton';
import { ordersArray } from '../../../../Config/Data';
import OrdersCard from '../../../Components/OrdersCard';
import TopUpModal from '../../../Components/TopUpModal';

const dummyData = {
  totalAmount: '$3,567',
  paymentMethods: [
    {
      id: '1',
      type: 'Master card',
      icon: 'credit-card', 
    },
  ],
  recentActivities: ordersArray
};

const MyWallet = ({navigation}) => {
  const [isModalVisible, setIsModalVisible] = useState(false)
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <CustomHeader heading={'My Wallet'} headingColor={COLORS.white} left={'chevron-left'} leftOnpress={()=> navigation.goBack()} iconColor={COLORS.white} />
       <View style={{flexDirection: 'row', justifyContent: 'space-between', padding: wp('5%')}} >
        <View>
        <Text style={styles.totalAmount}>{dummyData.totalAmount}</Text>
        <Text style={styles.totalAmountLabel}>Total Amount</Text>
        </View>
        <View>
        <PaperBtn containerStyle={styles.topUpButton} textStyle={styles.topUpButtonText} onPress={()=> setIsModalVisible(true)} >
          Top-up
        </PaperBtn>
        </View>
       </View>
      </View>
      
      <ScrollView contentContainerStyle={styles.ScrollView} showsVerticalScrollIndicator={false} >

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Payment Methods</Text>
        {dummyData.paymentMethods.map(method => (
          <View key={method.id} style={styles.paymentMethodCard}>
            <Icon source={method.icon} size={wp('10%')} color={COLORS.bgColor} />
            <Text style={styles.paymentMethodText}>{method.type}</Text>
          </View>
        ))}
      </View>

      <View style={styles.section}>
        <Text style={styles.sectionTitle}>Recent Activities</Text>
        <FlatList
        scrollEnabled = {false}
          data={dummyData.recentActivities}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => (

            <OrdersCard order={item} onPress={()=> {
              navigation.navigate('orderDetails', {item: item})
            }} />
          )}
          // ListFooterComponent={<View style={{height: hp('50')}} />}
        />
      </View>
      </ScrollView>
      <TopUpModal 
      visible={isModalVisible}
      balance = {dummyData.totalAmount}
      onClose={()=> setIsModalVisible(false)}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  header: {
    // alignItems: 'center',
    // marginBottom: hp('3%'),
    backgroundColor: COLORS.bgColor
  },
  totalAmount: {
    fontSize: wp('10%'),
    fontWeight: 'bold',
    color: COLORS.white,
    marginBottom: hp('1%'),
  },
  totalAmountLabel: {
    fontSize: wp('4%'),
    color: COLORS.textColor,
  },
  topUpButton: {
    backgroundColor: COLORS.white,
    borderRadius: wp('10%'),
    // paddingVertical: hp('1%'),
    paddingHorizontal: wp('5%'),
    marginTop: hp('2%'),
  },
  topUpButtonText: {
    color: COLORS.bgColor,
    fontSize: wp('4%'),
  },
  section: {
    marginBottom: hp('3%'),
  },
  sectionTitle: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    color: COLORS.bgColor,
    marginBottom: hp('1%'),
  },
  paymentMethodCard: {
    flexDirection: 'row',
    alignItems: 'center',
    // backgroundColor: COLORS.cardBgColor,
    borderColor: COLORS.borderColor,
    borderWidth: 1,
    padding: wp('3%'),
    borderRadius: wp('3%'),
    marginBottom: hp('2%'),
  },
  paymentMethodText: {
    fontSize: wp('4%'),
    marginLeft: wp('3%'),
    color: COLORS.black,
  },
  ScrollView:{
    marginTop: hp('3%'),
    paddingHorizontal: wp('5%'),
  }
 
});

export default MyWallet;
