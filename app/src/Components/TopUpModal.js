import React from 'react';
import { View, Text, Modal, StyleSheet } from 'react-native';
import PaperBtn from './PaperButton';
import COLORS from '../../Config/Colors';
import { 
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

import { Formik } from 'formik';
import * as Yup from 'yup';
import TxtInput from './TxtInput';
import { useNavigation } from '@react-navigation/native';



const TopUpModal  = ({ visible, onClose, text, balance}) => {

    const navigation = useNavigation()

    const validationSchema = Yup.object().shape({
        amount: Yup.number()
          .typeError('Please enter a valid amount')
          .required('Top-up amount is required')
          .min(100, 'Enter an amount from $100 - $1,000')
          .max(1000, 'Enter an amount from $100 - $1,000'),
      });
 
  return (
    <Formik 
      validationSchema={validationSchema}
      initialValues={{ amount: '' }}
      onSubmit={(values) => {
        console.log(values);
        navigation.navigate('cardInfo')
        onClose();
      }}
    >
      {({
        handleChange,
        handleBlur,
        handleSubmit,
        values,
        errors,
        touched,
      }) => ( <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
      
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <Text style={styles.heading} >Top-up</Text>
          <View>
            <Text style={styles.currentBalance} >Current Balance: <Text style={styles.balance} >{balance}</Text></Text>
            <TxtInput value={values.amount} onChangeText={handleChange('amount')} />
            {errors.amount && touched.amount ? (
                <Text style={styles.errorText}>{errors.amount}</Text>
              ) : null}
            <Text style={{color: COLORS.grayTextColor}} >Enter an amount from $100 - $1,000</Text>
          </View>
         <View style={styles.btnContainer} >
            <PaperBtn mode={'outlined'} containerStyle={styles.cancelButton} textStyle={styles.cancelButtonText} onPress={onClose} >Cancel</PaperBtn>
            <PaperBtn containerStyle={styles.nextbtn} textStyle={styles.nextbtnTxt} onPress={handleSubmit} >Next</PaperBtn>
         </View>
         
        </View>
      </View>
    </Modal>
      )}
      </Formik>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
    backgroundColor: 'rgba(0,0,0,0.7)'
  },
  modalContent: {
    // justifyContent: 'center',
    // alignItems : 'center',
    backgroundColor: COLORS.white ,
    padding: wp('4%'),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
    
  },
  heading: {
    fontSize: wp('6%'),
    fontWeight: 'bold',
    color: COLORS.darkTextColor,
    marginBottom: 10,
  },
  errorText: {
    color: 'red',
    fontSize: wp('3.5%'),
    marginBottom: hp('2%'),
  },
  
  cancelButton: {
    marginTop: 20,
    // padding: 10,
    flex: 1,
    borderColor: COLORS.bgColor,
    borderRadius: wp('5%'),
  },
  cancelButtonText: {
    color: COLORS.bgColor,
    textAlign: 'center',
    fontSize: wp('4%'),
  },
  btnContainer: {
    flexDirection: 'row',
    gap: wp('6%') ,
  },
  nextbtn:{
    marginTop: 20,
    flex :1,
    backgroundColor: COLORS.bgColor,
    borderRadius: wp('5%'),
  },
  nextbtnTxt:{
    color: COLORS.white,
    textAlign: 'center',
    fontSize: wp('4%'),
  },
  balance: {
    color: COLORS.orangeTextColor,
    fontWeight : '500',
    fontSize: wp('5%'),
    
  },
  currentBalance:{
    color: COLORS.darkTextColor,
    fontSize: wp('4.2%'),


  }
 
});

export default TopUpModal;
