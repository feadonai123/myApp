import React, {useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import { percentHeightScreen } from '../../Styles/styles';
import * as Colors from '../../Styles/colors';
import User from '../../Services/WebServer/user';
import Texts from '../../Styles/texts';
import DefaultButton from '../../Components/DefaultButton';

const OrderPerfil = ({
  onClose,
  id,
})=>{
  const [order, setOrder] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    const getData = async()=>{
      console.log("pegando dados no id: " +id )
      const tempOrder = await User.getOrderById(id);
      console.log(tempOrder)
      setOrder(tempOrder);
      setLoading(false);
    }
    getData();
  },[id]);

  return(
    <View style={{marginTop: percentHeightScreen(20)}}>
      <View style={[styles.container, {justifyContent:'space-between'}]}>
        {!loading && 
          <View style={{alignItems: 'center', paddingTop: 20}}>
            <View style={{
              backgroundColor: Colors.LightBlue, 
              width: '100%', 
              justifyContent: 'center', 
              alignItems: 'center',
              paddingVertical: 8,
              borderRadius: 20,
            }}>
              <Texts.Title>{order.name}</Texts.Title>
            </View>
            <View style={styles.separator}></View>
            <View style={{backgroundColor: Colors.LightBlue, borderRadius: 20, padding: 20, width: '100%'}}>
              <View style={{
                flexDirection: 'row', 
                alignItems: 'center'
              }}>
                <Texts.Subtitle>Categoria: </Texts.Subtitle>
                <Texts.Title> {order.categorie}</Texts.Title>
              </View>
              <View style={styles.separator}></View>
              <Texts.Subtitle>Descrição: </Texts.Subtitle>
              <Texts.Title numberOfLines={5}>{order.description}</Texts.Title>
              <View style={styles.separator}></View>
            </View>
            
          </View>
        }  
        <View style={{paddingBottom: 40}}>
          <DefaultButton 
            text="Voltar" 
            fn={onClose}
            backgroundColor={Colors.Red}
          ></DefaultButton>
        </View>
      </View>
      
    </View>
  );
}
export default OrderPerfil;

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
  },
  separator:{
    borderWidth: 1,
    borderRadius: 1,
    borderStyle:'solid',
    width: '100%', 
    marginVertical: 15
  }
});