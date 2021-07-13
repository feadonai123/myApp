import React from 'react';
import {View, StyleSheet} from 'react-native';
import Texts from '../../Styles/texts';
import * as Colors from '../../Styles/colors';
import DefaultButton from '../DefaultButton';
import { percentWidthScreen } from '../../Styles/styles';

const PopUpDefault = ({title, subtitle, fn})=>{
  return(
    <View style={{flex: 1, alignItems: 'stretch', justifyContent: 'center'}}>
      <View style={{ 
        marginHorizontal: percentWidthScreen(20), 
        backgroundColor: Colors.Red,
        borderRadius: 20,
        justifyContent: 'space-between',
        padding: 5,
        borderWidth: 2,
      }}>
        <View style={{paddingVertical: 20, alignItems: 'center'}}>
          <Texts.Title>{title}</Texts.Title>
          <View style={styles.separator}></View>
          <Texts.Subtitle>{subtitle}</Texts.Subtitle>
        </View> 
        <DefaultButton text="OK" fn={fn}></DefaultButton>      
      </View>
    </View>
  );
}
export default PopUpDefault;

const styles = StyleSheet.create({
  separator:{
    borderWidth: 1,
    borderRadius: 1,
    borderStyle:'solid',
    width: '100%', 
    marginBottom: 10,
  }
});