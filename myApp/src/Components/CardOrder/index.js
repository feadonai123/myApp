import React from 'react';
import {View, TouchableOpacity} from 'react-native';
import Texts from '../../Styles/texts';
import * as Colors from '../../Styles/colors';


const CardOrder = ({
  name,
  description,
  categorie,
  id,
  fn,
})=>{
  return(
    <TouchableOpacity style={{
      height: 72, 
      width: '100%', 
      borderWidth: 4, 
      borderRadius: 20,
      backgroundColor: Colors.Blue,
      marginVertical: 6,
    }}
      onPress={()=>fn(id)}
    >
      <View style={{
        flexDirection: 'row',
        width: '100%', 
        height: '100%', 
        justifyContent:'space-between'
      }}>
        <View style={{
          justifyContent: 'center', 
          alignItems: 'flex-start', 
          paddingLeft: 20,
          width: '50%',
        }}>
          <Texts.Subtitle numberOfLines={1}>{name}</Texts.Subtitle>
          <Texts.StrongLabel numberOfLines={1}>{categorie}</Texts.StrongLabel>
        </View>
        <View style={{
          justifyContent: 'flex-start', 
          alignItems: 'flex-end', 
          paddingRight: 20,
          paddingTop: 8,
          width: '50%',
        }}>
          <Texts.StrongLabel numberOfLines={2}>{description}</Texts.StrongLabel>
        </View>
      </View>
    </TouchableOpacity>
  );
}
export default CardOrder;