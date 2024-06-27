import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  RFValue,
} from 'react-native-responsive-screen';
import COLORS from '../../../../Config/Colors';
import CustomHeader from '../../../Components/CustomHeader';
import PaperBtn from '../../../Components/PaperButton';
import {useState} from 'react';
import useCart from '../../../Hooks/useCart';

const ItemDetails = ({route, navigation}) => {
  const [quantity, setQuantity] = useState(1);

  const {addItemToCart} = useCart();
  const {item} = route.params;
  console.log(item.title);
  return (
    <ScrollView showsVerticalScrollIndicator={false} style={styles.container}>
      {/* <View style={styles.header}>
        <IconButton
          icon={'chevron-left'}
          size={30}
          iconColor={COLORS.white}
          onPress={() => navigation.goBack()}
        />
        <Text style={styles.heading}>Details</Text>
      </View> */}
       <CustomHeader
          heading={item.title}
          headingColor={COLORS.white}
          iconColor={COLORS.white}
          iconSize={30}
          left={'chevron-left'}
          leftOnpress={() => navigation.goBack()}
        />
      <View style={styles.titleContainer}>
        <Text style={styles.restaurantName}>{item.restaurant}</Text>
        <Text style={styles.title}>{item.title}</Text>
      </View>
      <View style={styles.detailsContainer}>
        <Image source={{uri: item.image}} style={styles.img} />
        <View style={styles.aboutFoodContainer}>
          <Text style={styles.aboutFood}>About The Food</Text>
          <Text style={styles.price}>${item.price}</Text>
        </View>
        <Text style={styles.description}>
          {item.description} {'\n'}Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Nullam in lectus ut justo sagittis posuere ac id
          nunc. Vivamus tincidunt ullamcorper dui, in fringilla elit gravida
          eget. {'\n'}Proin vitae venenatis sapien Vivamus tincidunt ullamcorper
          dui, in fringilla elit gravida eget. Proin vitae venenatis sapien
          Proin vitae venenatis sapien Vivamus tincidunt ullamcorper dui, in
          fringilla elit gravida eget.{'\n'} Proin vitae venenatis sapien
        </Text>
        <View style={styles.btnContainer}>
          <PaperBtn
            bgColor={COLORS.bgColor}
            textStyle={styles.btnTxt}
            containerStyle={styles.btnStyle}
            onPress={() => addItemToCart(item)}>
            {' '}
            Add to Cart{' '}
          </PaperBtn>
          <View style={styles.quantityContainer}>
            <TouchableOpacity
              onPress={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}>
              <Text style={styles.quantityButton}>-</Text>
            </TouchableOpacity>
            <Text style={styles.quantity}>{quantity}</Text>
            <TouchableOpacity onPress={() => setQuantity(quantity + 1)}>
              <Text style={styles.quantityButton}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ItemDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.bgColor,
    // padding: hp(2)
  },
  header: {
    flexDirection: 'row',
    // justifyContent:'space-between',
    alignItems: 'center',
    paddingTop: hp(2),
  },
  titleContainer: {
    padding: wp(8),
  },
  heading: {
    color: COLORS.white,
    fontSize: hp(3),
    fontWeight: '600',
    paddingBottom: hp(0.6),
  },
  restaurantName: {
    color: COLORS.white,
    fontSize: hp(2.4),
    fontWeight: '600',
  },
  title: {
    color: COLORS.white,
    fontSize: hp(3.3),
    fontWeight: '600',
    marginVertical: hp(2),
  },
  detailsContainer: {
    backgroundColor: COLORS.white,
    borderTopLeftRadius: hp(5.5),
    borderTopRightRadius: hp(5.5),
    paddingHorizontal: hp(3),
  },
  img: {
    width: wp(65),
    height: wp(65),
    borderRadius: wp(33),
    alignSelf: 'center',
    marginVertical: hp(2),
    resizeMode: 'cover',
  },
  aboutFoodContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: hp(1),
  },
  aboutFood: {
    color: COLORS.darkTextColor,
    fontSize: hp(2.4),
    fontWeight: '700',
  },
  price: {
    color: COLORS.darkTextColor,
    fontSize: hp(3),
    fontWeight: '700',
  },
  description: {
    fontSize: hp(1.8),
    // fontSize: 14,
    
    fontWeight: '500',
    textAlign: 'center',
    lineHeight: wp('6'),
    color: COLORS.grayTextColor
    
  },
  btnContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: hp(2),
  },
  btnStyle: {
    paddingHorizontal: hp(5),
  },
  btnTxt: {
    color: COLORS.white,
  },
  quantityContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FF572260',
    borderRadius: hp(4),
    paddingHorizontal: hp(1),
  },
  quantityButton: {
    color: COLORS.bgColor,
    fontSize: wp(6),
    fontWeight: 'bold',
    paddingHorizontal: wp(2),
  },
  quantity: {
    color: COLORS.darkTextColor,
    fontSize: wp(4),
    fontWeight: 'bold',
    marginHorizontal: wp(2),
  },
});
