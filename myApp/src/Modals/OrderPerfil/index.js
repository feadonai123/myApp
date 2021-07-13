import React, {useCallback, useEffect, useState} from 'react';
import {View, StyleSheet} from 'react-native';
import { percentHeightScreen } from '../../Styles/styles';
import * as Colors from '../../Styles/colors';
import User from '../../Services/WebServer/user';
import Texts from '../../Styles/texts';
import DefaultButton from '../../Components/DefaultButton';
import ModalDefault from '../default';
import { useOrder } from '../../Hooks/OrdersContext';
import { usePopUp } from '../../Hooks/PopUpContext';

const OrderPerfil = ({
  onClose,
  id,
})=>{
  const [order, setOrder] = useState({});
  const {openPopUpText} = usePopUp();
  const [loading, setLoading] = useState(true);
  const { addItem, deleteItem, itemsOrder } = useOrder();
  const [orderExist, setOrderExist] = useState(false);
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
  const HandleSalvarPedido = ()=>{
    let data = {
      title:"",
      subtitle:"",
    }
    if(orderExist){
      if(deleteItem(id)){
        data.title="Pedido deletado"
        data.subtitle="subtitulo"
      }else{
        data.title="Erro"
        data.subtitle="Algo deu errado"
      }
    }else{
      if(addItem(id)){
        data.title="Pedido salvado"
        data.subtitle="subtitulo"
      }else{
        data.title="Erro"
        data.subtitle="Algo deu errado"
      }
    }
    openPopUpText(data);
    checkOrderExist();
    //onClose();
  }
  return(
    <ModalDefault>
      {orderExist&&
        <View style={{position: 'absolute', top: -15, right: 20}}>
          <Texts.Title>0</Texts.Title>
        </View>
      }
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
          text={orderExist?"Excluir":"Salvar"} 
          fn={HandleSalvarPedido}
          backgroundColor={Colors.LightBlue}
          color={Colors.BlackBlue}
        />
        <DefaultButton 
          text="Voltar" 
          fn={onClose}
          backgroundColor={Colors.Red}
        />
      </View>
    </ModalDefault>
  );
}
export default OrderPerfil;

const styles = StyleSheet.create({
  separator:{
    borderWidth: 1,
    borderRadius: 1,
    borderStyle:'solid',
    width: '100%', 
    marginVertical: 15
  }
});