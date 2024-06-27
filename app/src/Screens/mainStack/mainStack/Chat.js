import React, { useState, useEffect } from 'react';
import { GiftedChat, Bubble, InputToolbar, Send } from 'react-native-gifted-chat';
import { StyleSheet, View, Image } from 'react-native';
import { Icon } from 'react-native-paper';
import COLORS from '../../../../Config/Colors';
import {
    widthPercentageToDP as wp,
    heightPercentageToDP as hp,
  } from 'react-native-responsive-screen';
import CustomHeader from '../../../Components/CustomHeader';

const Chat = ({navigation}) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    setMessages([
      {
        _id: 1,
        text: 'Hello Tester',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://robohash.org/12',
        },
      },
      {
        _id: 2,
        text: 'Hello Project Manager',
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'React Native',
          avatar: 'https://robohash.org/12',
        },
      },
    ])
  }, [])

  const renderBubble = (props) => {
    return (
      <Bubble
        {...props}
        wrapperStyle={{
          right: styles.rightBubble,
          left: styles.leftBubble,
        }}
        textStyle={{
          right: styles.rightText,
          left: styles.leftText,
        }}
      />
    );
  };

  const renderInputToolbar = (props) => {
    return (
      <InputToolbar
        {...props}

        containerStyle={styles.inputToolbar}
        primaryStyle={styles.inputPrimary}
      />
    );
  };

  const renderSend = (props) => {
    return (
      <Send {...props}>
        <View style={styles.sendingContainer}>
          <Icon source={'send'} size={25} color={COLORS.white} />
        </View>
      </Send>
    );
  };

  return (
    <View style={styles.container} >
    <CustomHeader heading={"Chat"} left={'chevron-left'} leftOnpress={() => navigation.goBack()} />

    <GiftedChat
      messages={messages}
      onSend={(newMessages) => setMessages((previousMessages) =>
        GiftedChat.append(previousMessages, newMessages)
        )}
        user={{ _id: 1 }}
        renderBubble={renderBubble}
        renderInputToolbar={renderInputToolbar}
        renderSend={renderSend}
        />
        </View>
  );
};

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor: COLORS.white
    },
  rightBubble: {
    backgroundColor: COLORS.bgColor,
    borderRadius: wp('3%'),
    marginBottom: wp('3%'),
    padding: wp('2%'),
  },
  leftBubble: {
    backgroundColor: '#F0F0F0',
    borderRadius: wp('3%'),
    marginBottom: wp('3%'),
    padding: wp('2%'),
  },
  rightText: {
    color: COLORS.textColor,
  },
  leftText: {
    color: COLORS.darkTextColor,
  },
  inputToolbar: {
    // borderTopWidth: 1,
    // borderTopColor: 'black',
    // marginVertical: wp('%'),
    padding: wp('1.2%'),
    // backgroundColor: 'green',
    gap: 10
  },
  inputPrimary: {
    backgroundColor: COLORS.inputBgColor,
    borderRadius: wp('3%'),
    // width: 200,
    marginRight : wp('3%'),
    alignItems: 'center',
  },
  sendingContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: wp('3%'),
    marginLeft: wp('3%'),
    backgroundColor: COLORS.bgColor,
    // marginBottom: wp('1%'),
    borderRadius: wp('1.5%'),
    padding: wp('1%'),
  },
  
});

export default Chat;
