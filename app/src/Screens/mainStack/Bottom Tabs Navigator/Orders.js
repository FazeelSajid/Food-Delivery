import { StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import CustomHeader from '../../../Components/CustomHeader'
import COLORS from '../../../../Config/Colors'
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import { ordersArray } from '../../../../Config/Data';
import OrdersList from '../../../Components/OrdersList';
import CustomTabView from '../../../Components/CustomTabView';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';

const Orders = ({navigation}) => {
  
  const [routes] = useState([
       { key: 'all', title : 'All '},
       { key: 'pending', title : 'Pending '},
       { key: 'completed', title : 'Completed '},
       { key: 'cancelled', title : 'Cancelled '},
    ])

    const renderScene = ({route}) => {
        switch (route.key){
            case 'all' : 
            return <OrdersList/>
            case 'pending' : 
            return <OrdersList status={'pending'} />
            case 'completed' :
                return <OrdersList status={'completed'}  />
            case 'cancelled' :
                return <OrdersList status={'cancelled'}  />
            default:
                return null;
        }
      }



      
          // const [index, setIndex] = useState(0);
          // const [orders, setOrders] = useState(ordersArray)

    // const renderTabBar = props => (
    //     <TabBar
    //       {...props}
    //       indicatorStyle={styles.indicator}
    //       style={styles.tabbar}
    //       tabStyle={styles.tab}
    //       labelStyle={styles.label}
    //       key={() => uuid.v4()}
    //       renderLabel={({route, focused}) => (
    //         <Text style={[focused && {color: COLORS.bgColor, fontWeight: '700'}]}>
    //           {route.title}
    //         </Text>
    //       )}
    //       scrollEnabled
    //     />
    //   );
    

  return (
    <View style={styles.container} >
        <CustomHeader heading={'My Orders'} left={'chevron-left'} iconSize={32} leftOnpress={()=> navigation.goBack()} />
        <CustomTabView renderScene={renderScene} routes={routes} />
        {/* <TabView
        navigationState={{index, routes}}
        renderScene={renderScene}
        renderTabBar={renderTabBar}
        onIndexChange={setIndex}
        initialLayout={{width: wp('100%'), height: wp('100%')}}
        lazy
        lazyPreloadDistance={1}
        /> */}
    </View>
  )
}

export default Orders

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: COLORS.white
    },
    // tabbar: {
    //     backgroundColor: 'white',
    //   },
    //   tab: {
    //     width: 'auto',
    //     paddingHorizontal: 20,
    //   },
    //   label: {
    //     color: 'gray',
    //     fontWeight: '400',
    //   },
    //   indicator: {
    //     backgroundColor: 'orange',
    //     height: 2,
    //   },
})