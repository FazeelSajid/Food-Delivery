import { View, Text, StyleSheet, Image } from 'react-native'
import React, { useEffect } from 'react';
import { Icon } from 'react-native-paper';

const PopUp = ({ message, visible }) => {
    // if (!visible) return null;

return (
    <View style={styles.container}>
        <View style={styles.green_view}>
           <Icon source={'alert-outline'} size={20} />
            <Text style={styles.text}>{message}</Text>
        </View>
    </View>
)
}

const styles = StyleSheet.create({
    container: {
        position: 'absolute',
        top: 210,
        left: '50%',
        // transform: [{ translateX: -Dimension.width / 2.2 }, { translateY: -Dimension.height / 3.5 }],
        backgroundColor: 'transparent',
        alignItems: 'center',
        zIndex: 1000,
    },
   
    text: {
        fontSize: 18,
        color: 'white',
    },
    green_view: {
        flexDirection: 'row',
        // width: Dimension.width / 1.1,
        // height: Dimension.height / 16,
        marginVertical: 40,
        backgroundColor: '#26BD5A',
        alignItems: 'center',
        borderRadius: 11,
        justifyContent: 'space-evenly'
    },
})

export default PopUp