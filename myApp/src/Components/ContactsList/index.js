import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Texts from '../../Styles/texts';
import * as Colors from '../../Styles/colors';

const ContactsList = ()=>{
  return(
    <View style={{flex: 1}}>
      <Texts.Title>Lista de contatos</Texts.Title>
    </View>
  );
}
export default ContactsList;