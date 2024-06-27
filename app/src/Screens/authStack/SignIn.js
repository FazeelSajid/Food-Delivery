import {
  Button,
  StyleSheet,
  Text,
  View,
  KeyboardAvoidingView,
  Platform,
  ScrollView,
  Image,
} from 'react-native';
import React, {useLayoutEffect, useState} from 'react';
import COLORS from '../../../Config/Colors';
import {Formik} from 'formik';
import * as yup from 'yup';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import PaperBtn from '../../Components/PaperButton';
import {TextInput} from 'react-native-paper';

const SignIn = ({navigation, route}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [isSignin, setIsSignin] = useState(false);
  const [isSignup, setIsSignup] = useState(false);

  useLayoutEffect(() => {
    setIsSignin(route.params?.navigateTo === 'signIn');
    setIsSignup(route.params?.navigateTo !== 'signIn');
  }, [route.params?.navigateTo]);

  const validationFunction = yup.object().shape({
    email: yup.string().email('Invalid Email').required('Email Required'),
    password: yup
      .string()
      .min(8, 'Password must be at least 8 characters')
      .required('Password Required'),
    phone: yup
      .string()
      .matches(/^[0-9]{11}$/, 'Phone number must be exactly 11 digits')
      .required('Phone number is required'),
  });

  const onFormSubmit = values => {
    console.log('Handle Submit');
    isSignin
      ? navigation.navigate('mainStack')
      : navigation.navigate('verification');
  };

  const textInputProps = {
    mode: 'flat',
    underlineColor: COLORS.bgColor,
    activeUnderlineColor: COLORS.orangeTextColor,
    style: styles.textInput,
    selectionColor: COLORS.orangeTextColor,
  };

  return (
    <KeyboardAvoidingView
      behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
      contentContainerStyle={styles.mainContainer}
      // style={styles.mainContainer}
    >
      {/* Wrap the entire content in a ScrollView to allow scrolling when the keyboard is visible */}
      <ScrollView
        contentContainerStyle={styles.scrollViewContent}
        automaticallyAdjustKeyboardInsets
        // alwaysBounceVertical
        >
        <View style={styles.imgContainer}>
          <Image
            source={require('../../assets/Bg_Imgs/SignInbgimg.png')}
            style={styles.img}
            resizeMode="contain"
          />
          <PaperBtn
            textColor={COLORS.bgColor}
            containerStyle={styles.topBtn}
            mode={'outlined'}
            onPress={() =>
              isSignin
                ? navigation.replace('signIn', {navigateTo: 'signUp'})
                : navigation.replace('signIn', {navigateTo: 'signIn'})
            }>
            {isSignin ? 'Sign Up' : 'Sign In'}
          </PaperBtn>
        </View>

        <Formik
          initialValues={{email: '', password: '', phone: ''}}
          validationSchema={validationFunction}
          onSubmit={onFormSubmit}>
          {({handleChange, handleSubmit, values, touched, errors}) => (
            <View style={styles.formContainer}>
              <Text style={styles.heading}>
                {isSignin ? 'Sign In' : 'Sign Up'}
              </Text>

              <View style={styles.inputContainer}>
                {isSignup && (
                  <TextInput
                    {...textInputProps}
                    placeholder="Username (Optional)"
                  />
                )}
                <TextInput
                  placeholder="Email Address"
                  value={values.email}
                  {...textInputProps}
                  onChangeText={handleChange('email')}
                />
                {touched.email && errors.email && (
                  <Text
                    style={[
                      styles.errorText,
                      isSignin
                        ? styles.errorText.email
                        : styles.errorText.SignUpEmail,
                    ]}>
                    {errors.email}
                  </Text>
                )}

                {isSignin && (
                  <TextInput
                    {...textInputProps}
                    placeholder="Enter Password"
                    secureTextEntry={!isVisible}
                    value={values.password}
                    onChangeText={handleChange('password')}
                    right={
                      <TextInput.Icon
                        icon={isVisible ? 'eye-off-outline' : 'eye-outline'}
                        onPress={() => setIsVisible(!isVisible)}
                      />
                    }
                  />
                )}
                {isSignin && touched.password && errors.password && (
                  <Text
                    style={[
                      styles.errorText,
                      isSignin
                        ? styles.errorText.password
                        : styles.errorText.SignUpassword,
                    ]}>
                    {errors.password}
                  </Text>
                )}

                {isSignup && (
                  <TextInput
                    {...textInputProps}
                    placeholder="Phone Number"
                    keyboardType="numeric"
                    value={values.phone}
                    onChangeText={handleChange('phone')}
                  />
                )}
                {isSignup && touched.phone && errors.phone && (
                  <Text style={styles.errorText}>{errors.phone}</Text>
                )}
              </View>

              <PaperBtn
                bgColor={COLORS.bgColor}
                textColor={COLORS.white}
                textStyle={{fontSize: hp(2.3)}}
                onPress={handleSubmit}>
                {isSignin ? 'Sign In' : 'Sign Up'}
              </PaperBtn>

              <PaperBtn
                textColor={COLORS.orangeTextColor}
                textStyle={{fontSize: hp(2.3)}}
                onPress={() => navigation.navigate('mainStack')}
                mode={'outlined'}
                containerStyle={styles.guestBtnContainer}>
                Continue As Guest
              </PaperBtn>
            </View>
          )}
        </Formik>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

export default SignIn;

const styles = StyleSheet.create({
  mainContainer: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  scrollViewContent: {
    flexGrow: 1, 
    justifyContent: 'center',
    // padding: hp(2), 
  },
  imgContainer: {
    flexDirection: 'row',
    paddingRight: wp(20), 
    position: 'relative',
  },
  img: {
    width: wp('80%'),
    height: hp('39%'),
  },
  topBtn: {
    position: 'absolute',
    borderColor: COLORS.bgColor,
    borderWidth: 1,
    top: hp(2),
    right: hp(1),
  },
  heading: {
    color: COLORS.orangeTextColor,
    fontSize: hp('4%'), 
    fontWeight: '600',
    textAlign: 'center',
  },
  formContainer: {
    padding: hp(3),
    marginBottom: hp(5), 
  },
  inputContainer: {
    marginVertical: hp(4), 
  },
  textInput: {
    backgroundColor: COLORS.inputBgColor,
    height: hp('6%'), 
    borderRadius: 20,
    marginVertical: hp(2),
  },
  errorText: {
    color: COLORS.error,
    fontSize: hp('2%'), 
    marginVertical: hp(0.5), 
  },
  guestBtnContainer: {
    borderColor: COLORS.bgColor,
    marginTop: hp(4), 
  },
});
