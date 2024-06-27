import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import COLORS from '../../../Config/Colors';
import {useState} from 'react';
import {Modal} from 'react-native';

import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from 'react-native-confirmation-code-field';
import PaperBtn from '../../Components/PaperButton';

const Verification = ({navigation}) => {
  const [value, setValue] = useState('');
  const ref = useBlurOnFulfill({value, cellCount: CELL_COUNT});
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  const CELL_COUNT = 6;

  return (
    <View style={styles.container}>
      <View style={styles.contentContainer}>
        <Text style={styles.VerificationTxt}>Verification</Text>
        <Text
          style={{
            fontSize: 15,
            fontWeight: 500,
            padding: 6,
            textAlign: 'center',
            color: COLORS.grayTextColor,
          }}>
          To ensure the security of your account, we require phone number
          verification
        </Text>
        <CodeField
          // ref={ref}
          // {...props}
          // Use `caretHidden={false}` when users can't paste a text value, because context menu doesn't appear
          value={value}
          onChangeText={setValue}
          // cellCount={}
          rootStyle={styles.codeField}
          keyboardType="number-pad"
          textContentType="oneTimeCode"
          autoComplete={Platform.select({
            android: 'sms-otp',
            default: 'one-time-code',
          })}
          renderCell={({index, symbol, isFocused}) => (
            <Text
              key={index}
              style={[styles.cell, isFocused && styles.focusCell]}>
              {symbol || (isFocused ? <Cursor /> : null)}
            </Text>
          )}
        />
      </View>
      <View>
        <PaperBtn
          bgColor={COLORS.bgColor}
          textStyle={styles.btntxt}
          onPress={() => navigation.navigate('location')}>
          Verify
        </PaperBtn>
      </View>
    </View>
  );
};

export default Verification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    padding: 30,
  },
  contentContainer: {justifyContent: 'center', alignItems: 'center', flex: 1},
  VerificationTxt: {
    fontSize: 27,
    fontWeight: '600',
    color: COLORS.darkTextColor,
    textAlign: 'center',
  },
  descriptiontTxt: {
    fontSize: 15,
    fontWeight: 500,
    textAlign: 'center',
    color: COLORS.grayTextColor,
  },
  root: {
    flex: 1,
    padding: 20,
  },
  title: {
    textAlign: 'center',
    fontSize: 30,
  },
  codeField: {marginTop: 20},

  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    // borderWidth: 2,
    // borderColor: COLORS.orangeTextColor,
    textAlign: 'center',
    marginHorizontal: 8,
    borderRadius: 20,
    color: COLORS.orangeText,
    fontWeight: '700',
    backgroundColor: COLORS.inputBgColor,
  },
  focusCell: {
    borderColor: COLORS.orangeText,
  },
  btntxt: {color: COLORS.white, fontSize: 17, fontWeight: '500'},
});
