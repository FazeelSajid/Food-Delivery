import React from 'react';
import { View, Text, Modal, StyleSheet, TouchableOpacity } from 'react-native';
import { RadioButton, IconButton, Divider } from 'react-native-paper';
import PaperBtn from './PaperButton';
import COLORS from '../../Config/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';


const SelectPaymentModal  = ({ visible, onClose, options, selectedOption, onSelect }) => {
  return (
    <Modal
      animationType="slide"
      transparent={true}
      visible={visible}
      onRequestClose={onClose}
    >
      <View style={styles.modalContainer}>
        <View style={styles.modalContent}>
          <View style={styles.headingContainer} >
          <Text style={styles.heading}>Select an option</Text>
          <IconButton
            icon={'close'}
            iconColor={COLORS.bgColor}
            size={20}
            onPress={onClose}
      />
          </View>
          <RadioButton.Group
            onValueChange={value => onSelect(value)}
            value={selectedOption}
          >
            {options.map((item, index) => (
              <View key={index} style={styles.radioOption}>
                <RadioButton value={item} uncheckedColor={COLORS.borderColor} color={COLORS.bgColor} />
                <Text style={{color: COLORS.grayTextColor}} >{item}</Text>
              </View>
            ))}
          </RadioButton.Group>

          {/* <PaperBtn containerStyle={styles.closeButton} textStyle={styles.closeButtonText}>Close</PaperBtn> */}
          
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    flex: 1,
    justifyContent: 'flex-end',
  },
  modalContent: {
    backgroundColor: 'white',
    padding: wp('4%'),
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    elevation: 5,
  },
  heading: {
    fontSize: 18,
    fontWeight: 'bold',
    // marginBottom: 10,
    // textAlign: 'center'
  },
  headingContainer:{flexDirection: 'row',justifyContent: 'space-between', alignItems: 'center', marginBottom: wp('4%')},
  radioOption: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  closeButton: {
    marginTop: 20,
    padding: 10,
    backgroundColor: '#FF5722',
    borderRadius: 5,
  },
  closeButtonText: {
    color: '#fff',
    textAlign: 'center',
    fontSize: 16,
  },
});

export default SelectPaymentModal;
