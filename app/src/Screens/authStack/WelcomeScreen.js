import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';
import COLORS from '../../../Config/Colors';
import Dimension from '../../../Config/Dimension';
import CustomButton from '../../Components/CustomButton';
import {Colors} from 'react-native/Libraries/NewAppScreen';
import PaperBtn from '../../Components/PaperButton';

const {width, height} = Dimension;

// console.log({
//   'width' : width,
//   "height" : height
// });

const WelcomeScreen = ({navigation}) => {
  return (
    <View style={{flex: 1, padding: 30, backgroundColor: COLORS.white}}>
      <View
        style={{justifyContent: 'center', alignItems: 'center', paddingTop: 0}}>
        <Image
          source={require('../../assets/Logos/welcomeImg.png')}
          style={{
            width: width / 1.2,
            height: height / 2.2,
            resizeMode: 'contain',
          }}
        />

        <View
          style={{
            alignItems: 'center',
            justifyContent: 'space-between',
            height: height / 6.5,
          }}>
          <Text
            style={{
              fontWeight: '600',
              fontSize: 27,
              color: COLORS.darkTextColor,
              textAlign: 'center',
            }}>
            {' '}
            Order Your Favorite {'\n'} Food Delivery{' '}
          </Text>
          <Text
            style={{
              fontWeight: '500',
              fontSize: 13,
              color: COLORS.darkTextColor,
              textAlign: 'center',
              lineHeight: 20,
            }}>
            {' '}
            Browse An Extensive Menu Featuring {'\n'} Mouthwatering Dishes From
            Local Restaurants.
          </Text>
        </View>
        <View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              width: '100%',
              marginTop: 80,
            }}>
            <PaperBtn
              bgColor={COLORS.bgColor}
              mode={'contained'}
              rippleColor={COLORS.borderColor}
              textColor={COLORS.white}
              textStyle={{fontWeight: '500', fontSize: 15}}
              containerStyle={styles.btn}
              onPress={() =>
                navigation.navigate('signIn', {navigateTo: 'signIn'})
              }>
              Sign In
            </PaperBtn>
            <PaperBtn
              bgColor={COLORS.bgColor}
              mode={'contained'}
              rippleColor={COLORS.borderColor}
              textColor={COLORS.white}
              textStyle={{fontWeight: '500', fontSize: 15}}
              containerStyle={styles.btn}
              onPress={() =>
                navigation.navigate('signIn', {navigateTo: 'signUp'})
              }>
              Sign Up
            </PaperBtn>
          </View>
          <View style={{paddingVertical: 20}}>
            <PaperBtn
              // bgColor={COLORS.bgColor}
              mode={'outlined'}
              rippleColor={COLORS.borderColor}
              textColor={COLORS.bgColor}
              textStyle={{fontWeight: '500', fontSize: 15}}
              containerStyle={styles.btn}
              uppercase={true}
              onPress={() => navigation.navigate('mainStack')}>
              Continue As Guest
            </PaperBtn>
          </View>
        </View>
      </View>
    </View>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  btn: {
    paddingHorizontal: 13,
    borderRadius: 30,
    borderColor: COLORS.bgColor,
    borderWidth: 2,
    // alignItems:'center'
    // borderWidth: 2
  },
  btnText: {
    fontSize: 16,
    fontWeight: '500',
  },
});
