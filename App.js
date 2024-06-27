import 'react-native-gesture-handler';

import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import AuthStack from './app/src/Screens/authStack/AuthStack';
import { Provider } from "react-redux";
import { store } from './app/src/Redux/store';


export default function App() {

  return (
    <Provider store={store} >

    <NavigationContainer>
      <AuthStack/>
    </NavigationContainer>
    </Provider>
  );
}

const styles = StyleSheet.create({});