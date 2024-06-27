import { FlatList, StyleSheet, Text, View } from 'react-native'
import React, { useState } from 'react'
import COLORS from '../../../../Config/Colors'
import CustomHeader from '../../../Components/CustomHeader'
import { notificationsArray } from '../../../../Config/Data'
import NotificationCard from '../../../Components/NotificationCard'

const Notifications = ({navigation}) => {
    let [notifications, setNotifications] = useState(notificationsArray) 
  return (
    <View style={styles.Container} >
      <CustomHeader heading={'Notifications'} left={'chevron-left'} iconSize={32} leftOnpress={()=> navigation.goBack()} />

        <FlatList data={notifications} renderItem={({item})=>{
            if (item.type === 'order') {
                return(
                    <NotificationCard notification={item} icon={'chef-hat'} />
                )
            } else if (item.type === 'delivery') {
                return(
                    <NotificationCard notification={item} icon={'map-outline'} />
                )
            }
             else if (item.type === 'promotion'){
                return (
                <NotificationCard notification={item} icon={'bullhorn-outline'} />
                )
            }
             else if (item.type === 'update'){
                return (
                <NotificationCard notification={item} icon={'update'} />
                )
            }
             else if (item.type === 'reminder'){
                return (
                <NotificationCard notification={item} icon={'calendar-clock-outline'} />
                )
            }
             else if (item.type === 'alert'){
                return (
                <NotificationCard notification={item} icon={'alert-outline'} />
                )
            }
             else if (item.type === 'event'){
                return (
                <NotificationCard notification={item} icon={'candelabra-fire'} />
                )
            }
            else if (item.type === 'successfull'){
                return (
                <NotificationCard notification={item} icon={'check-decagram-outline'} />
                )
            }
            
        }} />

    </View>
  )
}

export default Notifications

const styles = StyleSheet.create({
    Container:{
        flex: 1,
        backgroundColor: COLORS.white,
    }
})