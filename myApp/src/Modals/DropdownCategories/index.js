import React from 'react';
import {View, TouchableOpacity, ScrollView} from 'react-native';
import DefaultButton from '../../Components/DefaultButton';
import * as Colors from '../../Styles/colors';
import { percentHeightScreen } from '../../Styles/styles';

const DropdownCategories = ({
  onClose
})=>{
  const handleClickItem = (value)=>{
    onClose(value)
  }
  return(
    <View style={{flex: 1, justifyContent: 'center', alignItems: 'stretch'}}>
      <View style={{
        padding: 20, 
        maxHeight: percentHeightScreen(50),
        marginHorizontal: 25, 
        backgroundColor: 'rgba(52, 52, 52, 0.8)',
        borderRadius: 20,
        justifyContent: 'center'
      }}>
        <ScrollView>
          <DefaultButton fn={()=>handleClickItem('games')} text='Jogos'></DefaultButton>
          <DefaultButton fn={()=>handleClickItem('study')} text='Estudo'></DefaultButton>
          <DefaultButton fn={()=>handleClickItem('chat')} text='Conversa'></DefaultButton>
          <DefaultButton fn={()=>handleClickItem('Outro1')} text='Outro1'></DefaultButton>
          <DefaultButton fn={()=>handleClickItem('Outro2')} text='Outro2'></DefaultButton>
          <DefaultButton fn={()=>handleClickItem('Outro3')} text='Outro3'></DefaultButton>
        </ScrollView>
      </View>
    </View>
  );
}
export default DropdownCategories;