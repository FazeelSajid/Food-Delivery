import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity } from 'react-native';
import { Formik } from 'formik';
import * as Yup from 'yup';
import TxtInput from '../../../Components/TxtInput';
import COLORS from '../../../../Config/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import CustomHeader from '../../../Components/CustomHeader';
import PaperBtn from '../../../Components/PaperButton';
import WalletWarningModal from '../../../Components/WalletWarningModal';

const UpdateProfileSchema = Yup.object().shape({
  userName: Yup.string().required('User name is required'),
  phoneNumber: Yup.string()
    .matches(/^[0-9]{11}$/, 'Phone number must be exactly 11 digits')
    .required('Phone number is required'),
  emailAddress: Yup.string()
    .email('Invalid email address')
    .required('Email address is required'),
  location: Yup.string().required('Location is required'),
});

const UpdateProfile = ({navigation}) => {
  const initialRegion = {
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  };

  const [isModalVisiible, setIsModalVisiible] = useState(false)



  return (
    <>
    <View style={styles.container}>
    <CustomHeader heading={'Update Profile'} left={'chevron-left'}
          leftOnpress={() => navigation.goBack()} iconSize={30}  />

      <Formik
        initialValues={{
          userName: '',
          phoneNumber: '',
          emailAddress: '',
          location: '',
        }}
        validationSchema={UpdateProfileSchema}
        onSubmit={values => {
          console.log(values);
          setIsModalVisiible(true)
        }}
      >
        {({
          handleChange,
          handleBlur,
          handleSubmit,
          values,
          errors,
          touched,
        }) => (
          <>
            <Text style={styles.label}>User name</Text>
            <TxtInput
              onChangeText={handleChange('userName')}
              onBlur={handleBlur('userName')}
              value={values.userName}
              placeholder={'Enter user name'}
            />
            {errors.userName && touched.userName ? (
              <Text style={styles.errorText}>{errors.userName}</Text>
            ) : null}

            <Text style={styles.label}>Phone Number</Text>
            <TxtInput
              keyboardType={'number-pad'}
              onChangeText={handleChange('phoneNumber')}
              onBlur={handleBlur('phoneNumber')}
              value={values.phoneNumber}
              placeholder={'Enter phone number'}
            />
            {errors.phoneNumber && touched.phoneNumber ? (
              <Text style={styles.errorText}>{errors.phoneNumber}</Text>
            ) : null}

            <Text style={styles.label}>Email Address</Text>
            <TxtInput
              keyboardType={'email-address'}
              onChangeText={handleChange('emailAddress')}
              onBlur={handleBlur('emailAddress')}
              value={values.emailAddress}
              placeholder={'Enter email address'}              
            />
            {errors.emailAddress && touched.emailAddress ? (
              <Text style={styles.errorText}>{errors.emailAddress}</Text>
            ) : null}
            {/* <Text style={styles.noteText}>you can't change your email address</Text> */}

            <Text style={styles.label}>Location</Text>
            <TxtInput
              onChangeText={handleChange('location')}
              onBlur={handleBlur('location')}
              value={values.location}
              icon={'map-marker'}
              iconColor={COLORS.bgColor}
              IconSize={23}
            />
            {errors.location && touched.location ? (
              <Text style={styles.errorText}>{errors.location}</Text>
            ) : null}

            {/* <MapView
              style={styles.map}
              initialRegion={initialRegion}
            >
              <Marker coordinate={initialRegion} />
            </MapView> */}

            <PaperBtn containerStyle={styles.updateButton} textStyle={styles.updateButtonText} onPress={handleSubmit} >UPDATE</PaperBtn>
            
          </>
        )}
      </Formik>
      <WalletWarningModal
      visible={isModalVisiible}
      icon={'cloud-upload-outline'}
      text= {'Profle Updated successfully'}
      onClose={() => setIsModalVisiible(false)}
      />
    </View>
        </>
  );
};

export default UpdateProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: wp('4%'),
  },
  heading: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    color: COLORS.black,
    marginBottom: hp('3%'),
  },
  label: {
    color: COLORS.darkTextColor,
    fontSize: wp('4%'),
    marginBottom: hp('1%'),
    fontWeight: '500',
  },
  noteText: {
    color: 'red',
    fontSize: wp('3.5%'),
    marginBottom: hp('2%'),
  },
  errorText: {
    color: 'red',
    fontSize: wp('3.5%'),
    marginBottom: hp('2%'),
  },
  map: {
    height: hp('20%'),
    marginVertical: hp('2%'),
  },
  updateButton: {
    backgroundColor: COLORS.bgColor,
    borderRadius: wp('10%'),
    alignItems: 'center',
    justifyContent: 'center',
    height: hp('6%'),
    marginVertical: hp('2%'),
  },
  updateButtonText: {
    color: COLORS.white,
    fontSize: wp('4%'),
    fontWeight: '500',
  },
});
