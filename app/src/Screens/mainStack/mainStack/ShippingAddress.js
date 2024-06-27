import { StyleSheet, Text, View, Button, ScrollView } from 'react-native'
import React from 'react'
import CustomHeader from '../../../Components/CustomHeader'
import { Formik } from 'formik'
import * as Yup from 'yup';
import TxtInput from '../../../Components/TxtInput';
import COLORS from '../../../../Config/Colors';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import PaperBtn from '../../../Components/PaperButton';


const ShippingAddress = ({navigation}) => {


    const ShippingAddressSchema = Yup.object().shape({
        houseNumber: Yup.string().required('House Number is required'),
        streetNumber: Yup.string().required('Street Number is required'),
        area: Yup.string().required('Area is required'),
        floorUnit: Yup.string().required('Floor/Unit is required'),
        instructions: Yup.string().required('Instructions for Rider are required'),
        label: Yup.string().required('Label is required'),
      });

  return (
    <View style={styles.container} >
      <CustomHeader
          heading={'Shipping Address'}
          iconSize={30}
          left={'chevron-left'}
          leftOnpress={() => navigation.goBack()}
        />
        <ScrollView style={styles.contentContainer} >
    
        <Formik
    
    initialValues={{
          houseNumber: '',
          streetNumber: '',
          area: '',
          floorUnit: '',
          instructions: '',
          label: '',
        }}
        validationSchema={ShippingAddressSchema}
        onSubmit={(values) => {
          console.log(values);
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
            <Text style={styles.label}>House Number</Text>
            
            <TxtInput onChangeText={handleChange('houseNumber')} onBlur={() =>handleBlur('houseNumber')  } value={values.houseNumber} />
            {errors.houseNumber && touched.houseNumber ? (
              <Text style={styles.errorText}>{errors.houseNumber}</Text>
            ) : null}

            <Text style={styles.label}>Street Number</Text>
             
            <TxtInput onChangeText={handleChange('streetNumber')} onBlur={()=> handleBlur('streetNumber')} value={values.streetNumber} />
            {errors.streetNumber && touched.streetNumber ? (
              <Text style={styles.errorText}>{errors.streetNumber}</Text>
            ) : null}

            <Text style={styles.label}>Area</Text>
           
            <TxtInput onChangeText={handleChange('area')} onBlur={()=>handleBlur('area')} value={values.area} />
            {errors.area && touched.area ? (
              <Text style={styles.errorText}>{errors.area}</Text>
            ) : null}

            <Text style={styles.label}>Floor/Unit</Text>
           
            <TxtInput onChangeText={handleChange('floorUnit')} onBlur={()=>handleBlur('floorUnit') } value={values.floorUnit} />
            {errors.floorUnit && touched.floorUnit ? (
              <Text style={styles.errorText}>{errors.floorUnit}</Text>
            ) : null}

            <Text style={styles.label}>Instructions for Rider</Text>
            
            <TxtInput onChangeText={handleChange('instructions') } onBlur={()=>handleBlur('instructions') } value={values.instructions} multiline={true}/>
            {errors.instructions && touched.instructions ? (
              <Text style={styles.errorText}>{errors.instructions}</Text>
            ) : null}

            <Text style={styles.label}>Label</Text>
           
            <TxtInput onChangeText={handleChange('label') } onBlur={()=>handleBlur('label') } value={values.label}/>
            {errors.label && touched.label ? (
                <Text style={styles.errorText}>{errors.label}</Text>
            ) : null}

            <PaperBtn onPress={handleSubmit} containerStyle={{backgroundColor: COLORS.bgColor}} textColor={COLORS.white} >Save</PaperBtn>
          </>
        )}
      </Formik>
        </ScrollView>
    </View>
  )
}

export default ShippingAddress

const styles = StyleSheet.create({
    container:{ 
        flex: 1,
        backgroundColor: COLORS.white,
        // padding: 30,
 
     },
     contentContainer:{
        paddingHorizontal: wp('4%')
     },
    label: {
        color: COLORS.darkTextColor,
        fontSize: wp('4%'),
        marginBottom: hp('1%'),
        fontWeight: '500'
      },
      instructionsInput: {
        height: hp('15%'),
      },
      errorText: {
        color: 'red',
        fontSize: wp('3.5%'),
        marginBottom: hp('2%'),
      },
})