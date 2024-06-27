import {StyleSheet, Text, View, Image} from 'react-native';
import React from 'react';
import COLORS from '../../../Config/Colors';

import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  RFValue,
} from 'react-native-responsive-screen';
import PaperBtn from '../../Components/PaperButton';

const EnableLocation = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.detailsContaienr}>
        <Image
          source={require('../../assets/Bg_Imgs/location.png')}
          resizeMode="contain"
          style={{width: wp(60), height: hp(30)}}
        />
        <Text style={styles.enableLocationTxt}>Enable Your Location</Text>
        <Text style={styles.description}>
          To provide you with the best and most accurate Uber experience, we
          need access to your device's location.
        </Text>
      </View>
      <View>
        <PaperBtn bgColor={COLORS.bgColor} textStyle={{color: COLORS.white}}>
          {' '}
          Use My Location
        </PaperBtn>
        <PaperBtn
          mode={'outlined'}
          containerStyle={styles.btnstyle}
          textStyle={{color: COLORS.orangeText}}
          onPress={() => navigation.navigate('mainStack')}>
          Skip For Now
        </PaperBtn>
      </View>
    </View>
  );
};

export default EnableLocation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 30,
  },
  detailsContaienr: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  enableLocationTxt: {
    fontSize: 23,
    fontWeight: '700',
    color: COLORS.darkTextColor,
    marginVertical: hp(2),
  },
  description: {
    fontSize: 14,
    fontWeight: '400',
    color: COLORS.grayTextColor,
    textAlign: 'center',
  },
  btnstyle: {
    borderColor: COLORS.bgColor,
    borderWidth: 2,
    marginVertical: hp(1.8),
  },
});
