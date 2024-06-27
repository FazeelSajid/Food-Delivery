import {Button, StyleSheet, Text, View} from 'react-native';
import React, {useState} from 'react';
import COLORS from '../../../Config/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
  RFValue,
} from 'react-native-responsive-screen';
import PaperBtn from '../../Components/PaperButton';
import {Image} from 'react-native';
import {TextInput, IconButton, Icon} from 'react-native-paper';

const SignUp = ({navigation}) => {
  // const [isVisible,  setIsVisible] = useState(true)
  return (
    <View style={{flex: 1, backgroundColor: COLORS.white}}>
      <View
        style={{flexDirection: 'row', paddingRight: 100, position: 'relative'}}>
        <Image
          source={require('../../assets/Bg_Imgs/SignInbgimg.png')}
          style={{width: wp('80%'), height: hp('39%')}}
          resizeMode="contain"
        />
        <PaperBtn
          textColor={COLORS.bgColor}
          containerStyle={{
            position: 'absolute',
            borderColor: COLORS.bgColor,
            borderWidth: 1,
            top: hp(2),
            right: hp(0.7),
          }}
          mode={'outlined'}
          onPress={() => navigation.navigate('signIn')}>
          Sign In
        </PaperBtn>
      </View>
      <View style={{padding: hp(3)}}>
        <Text
          style={{
            color: COLORS.orangeTextColor,
            fontSize: hp('4'),
            fontWeight: '600',
            textAlign: 'center',
          }}>
          Sign Up
        </Text>

        <TextInput
          mode="flat"
          underlineColor={COLORS.bgColor}
          activeUnderlineColor={COLORS.orangeTextColor}
          placeholder="Username or Email Address"
          selectionColor={COLORS.orangeTextColor}
          style={{
            backgroundColor: COLORS.inputBgColor,
            height: hp('6'),
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            // borderRadius: 30,
            paddingVertical: hp('0.5'),
            marginVertical: hp('3'),
          }}
        />
        <TextInput
          mode="flat"
          underlineColor={COLORS.bgColor}
          activeUnderlineColor={COLORS.orangeTextColor}
          placeholder="Enter Password"
          secureTextEntry={isVisible}
          selectionColor={COLORS.orangeTextColor}
          right={
            <TextInput.Icon
              icon="eye"
              size={20}
              style={{paddingTop: 10}}
              onPress={() => setIsVisible(prev => !prev)}
            />
          }
          style={{
            backgroundColor: COLORS.inputBgColor,
            height: hp('6'),
            borderTopRightRadius: 20,
            borderTopLeftRadius: 20,
            paddingVertical: hp('0.5'),
            marginBottom: hp('6'),
            justifyContent: 'center',
          }}
        />
        <PaperBtn
          bgColor={COLORS.bgColor}
          textColor={COLORS.white}
          textStyle={{fontSize: hp('2.3')}}
          onPress={() => navigation.navigate('mainStack')}>
          Sign Up
        </PaperBtn>

        <PaperBtn
          textColor={COLORS.orangeTextColor}
          textStyle={{fontSize: hp('2.3')}}
          onPress={() => navigation.navigate('mainStack')}
          mode={'outlined'}
          containerStyle={{borderColor: COLORS.bgColor, marginTop: hp('4')}}>
          Continue As Guest
        </PaperBtn>
      </View>
    </View>
  );
};

export default SignUp;

const styles = StyleSheet.create({});
