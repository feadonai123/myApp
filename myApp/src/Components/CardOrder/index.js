import React, { useEffect, useState } from 'react';
import {View, TouchableOpacity} from 'react-native';
import Texts from '../../Styles/texts';
import * as Colors from '../../Styles/colors';
import { useOrder } from '../../Hooks/OrdersContext';


const CardOrder = ({
  name,
  description,
  categorie,
  id,
  fn,
})=>{
  const { addItem, deleteItem, itemsOrder } = useOrder();
  const [orderExist, setOrderExist] = useState(false);

  useEffect(() => {
    checkOrderExist();
  },[itemsOrder]);
  const checkOrderExist = ()=>{
    if(itemsOrder.indexOf(id)!==-1){
      if(!orderExist){
        setOrderExist(true);
      }
    }else{
      if(orderExist){
        setOrderExist(false);
      }
    }
  }

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
      {orderExist&&
      <View style={{position: 'absolute', top: -15, right: 10}}>
        <Texts.StrongLabel>0</Texts.StrongLabel>
      </View>
      }
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