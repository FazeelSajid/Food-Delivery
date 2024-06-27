import React, { useState } from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import Modal from 'react-native-modal';
import { Button, TextInput, Icon } from 'react-native-paper';

import { Formik } from 'formik';
import * as yup from 'yup';
import { widthPercentageToDP as wp, heightPercentageToDP as hp } from 'react-native-responsive-screen';
import COLORS from '../../Config/Colors';

const RatingModal = ({ isVisible, onClose, onSubmit }) => {
  const [rating, setRating] = useState(0);

  const validationSchema = yup.object().shape({
    comment: yup.string().required('Comment is required'),
  });

  const handleStarPress = (star) => {
    setRating(star);
  };

  const handleSubmit = (values) => {
    onSubmit(rating, values.comment);
    onClose();
  };

  return (
    <Modal isVisible={isVisible} onBackdropPress={onClose}>
      <View style={styles.modalContainer}>
        <Text style={styles.modalTitle}>Rate Restaurant</Text>
        <View style={styles.starContainer}>
          {[1, 2, 3, 4, 5].map((star) => (
            <TouchableOpacity key={star} onPress={() => handleStarPress(star)}>
              <Icon
                source={star <= rating ? 'star' : 'star-outline'}
                size={wp('7%')}
                color="#FFD700"
                // style={styles.star}
              />
            </TouchableOpacity>
          ))}
        </View>
        <Formik
          initialValues={{ comment: '' }}
          validationSchema={validationSchema}
          onSubmit={handleSubmit}
        >
          {({ handleChange, handleSubmit, values, errors, touched }) => (
            <View>
              <TextInput
                style={styles.input}
                placeholder="Enter comments"
                multiline
                value={values.comment}
                onChangeText={handleChange('comment')}
                underlineColor={ COLORS.bgColor}
                activeUnderlineColor={ COLORS.orangeTextColor}
                selectionColor ={COLORS.orangeTextColor}
              />
              {touched.comment && errors.comment && (
                <Text style={styles.errorText}>{errors.comment}</Text>
              )}
              <Button
                mode="contained"
                onPress={handleSubmit}
                style={styles.submitButton}
                contentStyle={{ height: hp('6%') }}
                labelStyle={{ fontSize: wp('4%') }}
              >
                Submit
              </Button>
            </View>
          )}
        </Formik>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  modalContainer: {
    backgroundColor: 'white',
    justifyContent: 'flex-end',
    padding: wp('5%'),
    borderRadius: 10,
    alignItems: 'center',
  },
  modalTitle: {
    fontSize: wp('5%'),
    fontWeight: 'bold',
    marginBottom: hp('2%'),
  },
  starContainer: {
    flexDirection: 'row',
    marginBottom: hp('2%'),
  },
  star: {
    marginHorizontal: wp('1%'),
  },
  input: {
    width: wp('70%'),
    height: hp('10%'),
    // borderColor: '#ddd',
    // borderWidth: 1,
    borderRadius: 20,
    padding: wp('3%'),
    textAlignVertical: 'top',
    backgroundColor: COLORS.inputBgColor,
    marginBottom: hp('2%'),
  },
  errorText: {
    color: 'red',
    fontSize: wp('3.5%'),
    marginBottom: hp('1%'),
  },
  submitButton: {
    backgroundColor: '#ff6600',
    width: wp('70%'),
    borderRadius: 30,
  },
});

export default RatingModal;
