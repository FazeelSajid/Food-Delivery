import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React, { useEffect, useState } from 'react';
import CustomHeader from '../../../Components/CustomHeader';
import COLORS from '../../../../Config/Colors';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';

const Terms = ({navigation ,route}) => {

const [policyScreen , setPolicyScreen] = useState()

useEffect(() => {
  setPolicyScreen(route.params?.policy)
})
  return (
    <View style={styles.container}>
      <CustomHeader
        heading={policyScreen ? 'Privacy Policy' :'Terms & Conditions'}
        left={'chevron-left'}
        leftOnpress={() => navigation.goBack()}
      />
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.ScrollView}>
        <Text style={{flex: 1, textAlign: 'center', color: COLORS.grayTextColor}}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
          viverra convallis lectus porttitor mattis. Nam efficitur dolor quis
          ligula auctor, fermentum varius lorem aliquam. In ac feugiat metus,
          quis congue tellus. Donec viverra, felis ac lobortis cursus, ligula
          magna dapibus nunc, non eleifend nisi felis ac odio. Sed lacinia dolor
          ac quam consequat, vitae efficitur diam auctor. Vivamus posuere diam
          ac tempus mollis. Cras pretium eleifend justo id congue.
          {'\n'}
          {'\n'}
          Donec consectetur, purus vel ornare consequat, est purus mattis enim,
          non dictum velit eros quis dolor. Vestibulum ante ipsum primis in
          faucibus orci luctus et ultrices posuere cubilia curae; Fusce sit amet
          ipsum erat. Pellentesque quis nunc sagittis, bibendum libero vitae,
          viverra ligula. Donec non pretium augue. Nam ultricies mi nunc, at
          pretium justo consequat non. Aenean sapien eros, scelerisque nec
          accumsan id, dapibus sed justo. Donec dapibus, nunc sit amet ultricies
          ultrices, elit risus luctus mi, ac eleifend nisl nibh quis elit.
          Suspendisse rutrum euismod magna nec euismod. Vestibulum nec pulvinar
          lorem. Aliquam congue vehicula sem, sit amet aliquam eros tempus eget.
          Donec a turpis posuere, pretium est non, volutpat velit. Vestibulum
          justo nisi, aliquam et vulputate id, varius nec nunc. Integer nibh
          libero, semper non interdum id, efficitur semper mi. Donec gravida,
          felis nec tempor facilisis, est ipsum consectetur orci, sed ultrices
          turpis eros vel est. Aliquam sit amet sagittis nibh, nec pharetra
          nisl.
          {'\n'}
          {'\n'}
          Curabitur ullamcorper nunc nec nulla finibus commodo. Quisque ac
          volutpat felis, id luctus sem. Ut luctus ante non magna lobortis
          molestie. Curabitur cursus sit amet sem vitae congue. Sed viverra
          convallis velit. Phasellus non tempus felis, ac facilisis massa.
          Maecenas egestas et lorem ut porttitor. Suspendisse accumsan mattis
          purus, sit amet sodales nulla viverra mollis. Sed ac rhoncus mauris.
          Curabitur eget dapibus nunc.
          {'\n'}
          {'\n'}
          Proin urna justo, tincidunt nec feugiat eu, scelerisque luctus ipsum.
          Pellentesque pulvinar elementum turpis. Nam vitae tempor odio.
          Vestibulum aliquet tellus arcu, vitae rutrum eros commodo at. Maecenas
          ex sapien, efficitur eget velit et, ornare mollis velit. Mauris
          volutpat rhoncus mauris convallis aliquet. Vestibulum vel convallis
          est. Sed posuere id dolor vel condimentum. Praesent non ligula lectus.
          Morbi et massa diam. Nunc eget faucibus nisi.
          {'\n'}
          {'\n'}
          Aenean elementum ullamcorper erat, eget tempus lacus condimentum id.
          Suspendisse imperdiet sapien turpis, ac vulputate orci vestibulum
          quis. Nullam placerat lectus at ligula pretium hendrerit. Vestibulum
          non egestas eros. Aliquam congue magna ligula, ut tempor ante eleifend
          aliquam. In augue ex, porta sed lorem eget, lobortis consectetur odio.
          Suspendisse quis nibh id nibh viverra mattis non quis est. Nam
          tincidunt tellus quam, vel feugiat ante sodales in. Cras vehicula orci
          tellus, faucibus vehicula velit dictum et. Nullam molestie elit vel
          quam bibendum, a ultricies diam tempor. Donec mattis, eros at iaculis
          ultrices, mauris augue pretium neque, a consequat risus ex eu metus.
          Sed convallis orci sit amet ornare tincidunt. Nam malesuada elit
          tempus mattis feugiat. Sed a pharetra libero.
          {'\n'}
          {'\n'}
          Proin vel tellus augue. Phasellus id metus ac mi luctus venenatis.
          Fusce sed consectetur libero. Vivamus et neque nec leo tristique
          elementum. Nulla laoreet ut justo at facilisis.
          {'\n'}
          {'\n'}
          Generated 6 paragraphs, 500 words, 3350 bytes of Lorem Ipsum
        </Text>
      </ScrollView>
    </View>
  );
};

export default Terms;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  ScrollView: {
    paddingHorizontal: wp('3%'),
  },
});
