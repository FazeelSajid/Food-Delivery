import {FlatList, StyleSheet, Text, View} from 'react-native';
import React, {useState, useEffect} from 'react';
import DealCard from './DealCard';
import uuid from 'react-native-uuid';
import {useNavigation} from '@react-navigation/native';
import PaperBtn from './PaperButton';
import COLORS from '../../Config/Colors';
import {useDispatch} from 'react-redux';
import useCart from '../Hooks/useCart';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import RatingModal from './RatingModal';

const Category = ({foods, categoryId}) => {
  const {addItemToCart} = useCart();
  const [category, setCategory] = useState([]);
  const [isModalVisiible, setIsModalVisiible] = useState(false);

  const navigation = useNavigation();

  useEffect(() => {
    if (categoryId) {
      const filteredCategory = foods.filter(item =>
        item.categoryIds.includes(categoryId),
      );
      setCategory(filteredCategory);
    } else {
      // If categoryId is not provided, set the category to the entire foods array
      setCategory(foods);
    }
  }, [foods, categoryId]);

  const onDealCardPress = item => {
    navigation.navigate('itemDetails', {item});
  };

  return (
    <View style={{padding: wp('6%')}}>
      <FlatList
        keyExtractor={() => uuid.v4()}
        data={category}
        renderItem={({item}) => (
          <DealCard
            item={item}
            icon={'plus-circle-outline'}
            handlePress={onDealCardPress}
            addtoCart={addItemToCart}
          />
        )}
        ListFooterComponent={
          <View style={styles.ListFooterComponent}>
            <PaperBtn
              containerStyle={styles.btn}
              InnerContentStyle={{
                // alignItems: 'center',
                // justifyContent: 'space-between',
              }}
              textStyle={styles.btnTextColor}
              onPress={()=> navigation.navigate('chats')}
              >
              {/* <Icon source={'chat-processing'} color={COLORS.white} size={25} /> */}
              Chat
            </PaperBtn>
            <PaperBtn
              containerStyle={styles.btn}
              textStyle={styles.btnTextColor}
              onPress={()=> setIsModalVisiible(true)}
              >
              Rate
            </PaperBtn>
          </View>
        }
      />
      <RatingModal  isVisible={isModalVisiible} onClose={() => setIsModalVisiible(false)} onSubmit={()=> setIsModalVisiible(false)} />
    </View>
  );
};

export default Category;

const styles = StyleSheet.create({
  ListFooterComponent: {

    flexDirection: 'row',
    // backgroundColor: 'black',
    flex: 1,
    justifyContent: 'space-between',
    paddingHorizontal: wp('5%'),
    gap: 20
    // justifyContent: 'space-evenly',
    // alignItems: 'center',
    // flex: 1
  },
  btn: {
    backgroundColor: COLORS.bgColor,
    // padding: 2,
    paddingHorizontal:wp('4%'),

    // paddingHorizontal: widthPercentageToDP('4%'),
    flex: 1,
  },
  btnTextColor: {
    color: COLORS.white,
    textAlign: 'center',
    // backgroundColor: 'black',
    textAlignVertical: 'center',
  },
});
