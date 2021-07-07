import React from 'react';
import {View, TextInput, StyleSheet} from 'react-native';
import Texts from '../../Styles/texts';
import * as Colors from '../../Styles/colors';

const DefaultInput = ({
  title,
  placeholder,
  fn,
  value,
})=>{
  return(
    <View>
      <Texts.Title>{title}:</Texts.Title>
      <TextInput 
        onChangeText = {fn}
        value = {value}
        placeholder={placeholder}
        autoCapitalize='sentences'
        multiline={true}
        style={{
          backgroundColor: Colors.LightBlue, 
          color: '#000',
          lineHeight: 24, 
          borderRadius: 20, 
          paddingHorizontal: 20,
          marginTop: 5
        }}
        placeholderTextColor='#000'
      />
    </View>
  );
}
export default DefaultInput;

const styles = StyleSheet.create({
  separator:{
    borderWidth: 1,
    borderRadius: 1,
    borderStyle:'solid',
    width: '100%', 
  }
});
