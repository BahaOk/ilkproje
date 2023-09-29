/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React, { DO_NOT_USE_OR_YOU_WILL_BE_FIRED_EXPERIMENTAL_REACT_NODES } from 'react';
import { useState, type PropsWithChildren } from 'react';
import {
  Image,
  SafeAreaView,
  FlatList,
  StatusBar,
  StyleSheet,
  Text,
  RefreshControl,
  RefreshControlBase,
  View,
  Button,
  Alert,
  TouchableWithoutFeedbackBase,
} from 'react-native';
import { NavigationContainer} from '@react-navigation/native'
import { createNativeStackNavigator} from '@react-navigation/native-stack'
import { Provider } from "react-redux";
import { configureStore } from '@reduxjs/toolkit';


type RootStackParamList = {
  HomeScreen: undefined;
  DetailScreen: undefined;

};

const Rootstack = createNativeStackNavigator<RootStackParamList>();
function App() {
    return (
  <View></View>
      );
    };


    
  
   
    
    export default App;
