import { StyleSheet, Text, View } from 'react-native';
import React from 'react';
import CustomHeader from '../../../Components/CustomHeader';
import TxtInput from '../../../Components/TxtInput';
import COLORS from '../../../../Config/Colors';
import { 
  widthPercentageToDP as wp, 
  heightPercentageToDP as hp 
} from 'react-native-responsive-screen';
import PaperBtn from '../../../Components/PaperButton';
import { Formik } from 'formik';
import * as Yup from 'yup';

const CardInfo = ({ navigation, route }) => {
  // let { setIsCard } = route.params

  const validationSchema = Yup.object().shape({
    cardHolderName: Yup.string()
      .required("Card Holder's Name is required"),
    cardNumber: Yup.string()
      .required('Card Number is required')
      .matches(/^[0-9]{16}$/, 'Card Number must be 16 digits'),
    expiryDate: Yup.string()
      .required('Expiry Date is required')
      .matches(/^(0[1-9]|1[0-2])\/?([0-9]{4}|[0-9]{2})$/, 'Expiry Date must be in MM/YY format'),
    cvv: Yup.string()
      .required('CVV/CVC is required')
      .matches(/^[0-9]{3,4}$/, 'CVV/CVC must be 3 or 4 digits'),
  });

  return (
    <View style={styles.container}>
      <CustomHeader
        heading={'Card Information'}
        iconSize={30}
        left={'chevron-left'}
        leftOnpress={() => navigation.goBack()}
      />
      <View style={styles.contentContainer}>
        <Formik
          initialValues={{
            cardHolderName: '',
            cardNumber: '',
            expiryDate: '',
            cvv: '',
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            console.log(values);
            navigation.goBack()
            // setIsCard(true)
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
              <View>
                <TxtInput
                  placeholder={"Card Holder's Name"}
                  value={values.cardHolderName}
                  onChangeText={handleChange('cardHolderName')}
                  onBlur={handleBlur('cardHolderName')}
                />
                {errors.cardHolderName && touched.cardHolderName && (
                  <Text style={styles.errorText}>{errors.cardHolderName}</Text>
                )}
                <TxtInput
                  placeholder={"Card Number"}
                  keyboardType={'number-pad'}
                  value={values.cardNumber}
                  onChangeText={handleChange('cardNumber')}
                  onBlur={handleBlur('cardNumber')}
                />
                {errors.cardNumber && touched.cardNumber && (
                  <Text style={styles.errorText}>{errors.cardNumber}</Text>
                )}
                <TxtInput
                  placeholder={"Expiry Date"}
                  value={values.expiryDate}
                  onChangeText={handleChange('expiryDate')}
                  onBlur={handleBlur('expiryDate')}
                />
                {errors.expiryDate && touched.expiryDate && (
                  <Text style={styles.errorText}>{errors.expiryDate}</Text>
                )}
                <TxtInput
                  placeholder={"CVV/CVC"}
                  keyboardType={'number-pad'}
                  value={values.cvv}
                  onChangeText={handleChange('cvv')}
                  onBlur={handleBlur('cvv')}
                />
                {errors.cvv && touched.cvv && (
                  <Text style={styles.errorText}>{errors.cvv}</Text>
                )}
              </View>
              <View>
                <PaperBtn
                  containerStyle={{ backgroundColor: COLORS.bgColor, marginBottom: wp('5%') }}
                  textColor={COLORS.white}
                  onPress={handleSubmit}
                >
                  ADD
                </PaperBtn>
              </View>
            </>
          )}
        </Formik>
      </View>
    </View>
  );
};

export default CardInfo;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  contentContainer: {
    flex: 1,
    paddingHorizontal: wp('5%'),
    justifyContent: 'space-between',
  },
  errorText: {
    color: 'red',
    fontSize: wp('3.5%'),
    marginBottom: hp('1%'),
  },
});
