import React from 'react';
import {TouchableOpacity, StyleSheet} from 'react-native';
import Texts from '../../Styles/texts';
import * as Colors from '../../Styles/colors';

const DefaultButton = ({
  fn,
  text,
  backgroundColor= Colors.DarkBlue,
  color = '#fff'
})=>{
  return(
    <TouchableOpacity 
      onPress={fn}
      style={[styles.button, {backgroundColor: backgroundColor}]}
    >
      <Texts.ButtonLabel style={{color: color}}>{text}</Texts.ButtonLabel>
    </TouchableOpacity>
  );
}
export default DefaultButton;

const styles = StyleSheet.create({
  button:{
    paddingHorizontal: 50,
    paddingVertical: 20,
    borderRadius: 20,
    borderWidth: 2,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
