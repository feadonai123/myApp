import React from 'react';
import { StyleSheet, Dimensions } from 'react-native';
import * as Colors from './colors'

export function percentHeightScreen(percentage) {
  if (percentage < 1) {
    return Dimensions.get('window').height * percentage;
  } else {
    return Dimensions.get('window').height * (percentage / 100);
  }
}

export function percentWidthScreen(percentage) {
  if (percentage < 1) {
    return Dimensions.get('window').width * percentage;
  } else {
    return Dimensions.get('window').width * (percentage / 100);
  }
}

const Styles = StyleSheet.create({
  mainContainer:{
    flex: 1,
    backgroundColor: Colors.LightBlue,
    paddingHorizontal: percentWidthScreen(5),
    alignItems: 'center',
    justifyContent: 'center',
  }
})

export {Styles};