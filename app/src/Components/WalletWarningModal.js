import React, { useEffect, useState } from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import { RadioButton, IconButton, Divider, Icon } from 'react-native-paper';
import PaperBtn from './PaperButton';
import COLORS from '../../Config/Colors';
import { 
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import { useNavigation } from '@react-navigation/native';


const WalletWarningModal  = ({ visible, onClose, icon, text, islogOut}) => {

  const navigation = useNavigation()
 
  return (
    <Modal
      animationType="fade"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
      
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={{alignItems: 'center'}} >

          <Icon source={icon} size={wp('25%')} color={COLORS.bgColor} />
          <Text style={styles.heading} >{text}</Text>
          </View>
          { islogOut ?  <View style={styles.btnContainer} >
          <PaperBtn containerStyle={styles.logOutBtnContainer} mode={'outlined'} textStyle={{color: COLORS.bgColor}} onPress={onClose} >Cancel</PaperBtn>
          <PaperBtn containerStyle={[styles.logOutBtnContainer, {backgroundColor: COLORS.bgColor}]} textStyle={{color: COLORS.white}} onPress={()=>  navigation.navigate('welcome')} >Log out</PaperBtn>

          </View>
    :           <PaperBtn containerStyle={styles.closeButton} textStyle={styles.closeButtonText} onPress={onClose} >Ok</PaperBtn>
  }
        </View>
      </View>
    </Modal>
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
    fontSize: wp('5%'),
    fontWeight: '600',
    color: COLORS.darkTextColor,
    // marginBottom: 10,
    marginTop: 12
    // textAlign: 'center'
  },
  
  closeButton: {
    marginTop: 20,
    // padding: 10,
    backgroundColor: COLORS.bgColor,
    borderRadius: wp('5%'),
  },
  closeButtonText: {
    color: COLORS.white,
    textAlign: 'center',
    fontSize: wp('4%'),
  },
  btnContainer: {
    // flex:1, 
    marginVertical: hp('4%'), 
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: wp('7%')

  },
  logOutBtnContainer: {
    // backgroundColor: COLORS.bgColor
    borderColor: COLORS.bgColor,
    borderWidth: 1,
    paddingHorizontal: wp('7%'),
    
  },
  logOutBtnTxt : {
    // color: COLORS.white
  }
});

export default WalletWarningModal;
