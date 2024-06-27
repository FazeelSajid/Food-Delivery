import {
  StyleSheet,
  Text,
  View,
  Image,
  ImageBackground,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from 'react-native-responsive-screen';
import {Icon, IconButton} from 'react-native-paper';
import COLORS from '../../../../Config/Colors';
import PaperBtn from '../../../Components/PaperButton';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import {useState, useMemo, useCallback} from 'react';
import Category from '../../../Components/Category';
import uuid from 'react-native-uuid';
import CustomTabView from '../../../Components/CustomTabView';
const RestaurantDetail = ({route, navigation}) => {
  const { item } = route.params;
  const restaurantInfo = item.info;

  const restaurantCategories = useMemo(() => {
    const categories = item.info.categories?.map(category => ({
      // key: category.id.toString(),
      key : uuid.v4().toString(),
      title: category.name,
    }));
    categories.unshift({ key: 'all', title: 'All' });
    return categories;
  }, [item.info?.categories]);

  const foods = item.food;

  
  const renderScene = useCallback(({ route }) => {
    switch (route.key) {
      case 'all':
        return <Category foods={foods} />;
      default:
        return <Category foods={foods} categoryId={Number(route.key)} />;
    }
  }, [foods]);


  
  // const renderScene = ({route, jumpTo}) => {
  //   switch (route.key) {
  //     case 'all':
  //       return <Category foods={foods} />;
  //     case '1':
  //       return <Category foods={foods} categoryId={Number(route.key)} />;
  //     case '2':
  //       return <Category foods={foods} categoryId={Number(route.key)} />;
  //     case '3':
  //       return <Category foods={foods} categoryId={Number(route.key)} />;
  //     case '4':
  //       return <Category foods={foods} categoryId={Number(route.key)} />;
  //     default:
  //       return null;
  //   }
  // };


  // const renderTabBar = props => (
  //   <TabBar
  //     {...props}
  //     indicatorStyle={styles.indicator}
  //     style={styles.tabbar}
  //     tabStyle={styles.tab}
  //     labelStyle={styles.label}
  //     key={() => uuid.v4()}
  //     renderLabel={({route, focused}) => (
  //       <Text style={[focused && {color: COLORS.bgColor, fontWeight: '700'}]}>
  //         {route.title}
  //       </Text>
  //     )}
  //     scrollEnabled
  //   />
  // );

  return (
    <View style={styles.container}>
      <ImageBackground
        source={{uri: restaurantInfo.image}}
        style={styles.image}>
        <IconButton
          icon={'chevron-left'}
          iconColor={COLORS.white}
          size={35}
          style={styles.iconbtnStyle}
          onPress={() => navigation.goBack()}
        />
      </ImageBackground>
      <View style={styles.restaurantInfoContainer}>
        <View style={styles.nameContainer}>
          <Text style={styles.restaurantName}>{restaurantInfo.name}</Text>
          <TouchableOpacity style={styles.restaurantRating}>
            <Icon source={'star'} size={wp(5)} color={'#FFCC00'} />
            <Text style={styles.ratingTxt}>{restaurantInfo.rating}</Text>
          </TouchableOpacity>
        </View>
        <View style={styles.locationContainer}>
          <Icon source={'map-marker-radius'} color={COLORS.bgColor} size={18} />
          <Text style={styles.locationTxt}>{restaurantInfo.location}</Text>
        </View>
        <Text style={styles.description}>
          {restaurantInfo.smallDescription}
        </Text>
        <View style={styles.btnView}>
          <PaperBtn
            mode={'outlined'}
            containerStyle={styles.btnContainer}
            textColor={COLORS.bgColor}>
            Chinese
          </PaperBtn>
          <PaperBtn
            mode={'outlined'}
            containerStyle={[
              styles.btnContainer,
              {paddingHorizontal: wp(8), marginLeft: wp(4)},
            ]}
            textColor={COLORS.bgColor}>
            00000000000
          </PaperBtn>
        </View>
      </View>

      {/* <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        keyExtractor={(item, index) => item.id ?? uuid.v4()}
        onIndexChange={setIndex}
        renderTabBar={renderTabBar}
        lazy
        lazyPreloadDistance={1}
        // initialLayout={{width: wp('100%')}}
      /> */}

  <CustomTabView routes={restaurantCategories} renderScene={renderScene} />

    </View>
  );
};

export default RestaurantDetail;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white
  },
  image: {
    width: wp('100%'),
    height: wp('70%'),
  },
  iconbtnStyle: {
    margin: hp(1),
  },
  restaurantInfoContainer: {
    margin: wp(6),
    justifyContent: 'space-between',
    // flex: 1,
    height: hp(22),
  },
  nameContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  restaurantName: {
    color: COLORS.bgColor,
    fontSize: hp(3),
    fontWeight: '700',
  },
  restaurantRating: {
    flexDirection: 'row',
  },
  ratingTxt: {
    fontSize: hp(2),
    fontWeight: '500',
    marginLeft: wp(1),
    color: COLORS.grayTextColor,
  },
  locationContainer: {
    flexDirection: 'row',
  },
  locationTxt: {
    color: COLORS.grayTextColor,
    marginLeft: wp(3),
    fontSize: wp(3.6),
    fontWeight: '500',
  },
  description: {
    color: COLORS.darkTextColor,
  },
  btnView: {
    flexDirection: 'row',
  },
  btnContainer: {
    borderColor: COLORS.bgColor,
    borderWidth: 2,
    borderRadius: 30,
  },

  tabbar: {
    backgroundColor: 'white',
  },
  tab: {
    width: 'auto',
    paddingHorizontal: 20,
  },
  label: {
    color: 'gray',
    fontWeight: '400',
  },
  indicator: {
    backgroundColor: 'orange',
    height: 2,
  },
});
