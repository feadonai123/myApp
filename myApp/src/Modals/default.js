import React from 'react';
import {View, StyleSheet, KeyboardAvoidingView, Modal, Text} from 'react-native';
import * as Colors from '../Styles/colors'
import { percentHeightScreen } from '../Styles/styles';

const CreateOrder = ({
  children
})=>{
  return(
    <View style={{marginTop: percentHeightScreen(20)}}>
      <KeyboardAvoidingView>
        <View style={styles.container}>
          {children}
        </View>
      </KeyboardAvoidingView> 
    </View>
  );
}
export default CreateOrder;

const styles = StyleSheet.create({
  container:{
    height: percentHeightScreen(80),
    backgroundColor: Colors.DarkBlue, 
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomEndRadius: 20,
    marginHorizontal: 20,
    padding: 20,
    alignItems: 'stretch',
    justifyContent: 'space-between',
  },
});