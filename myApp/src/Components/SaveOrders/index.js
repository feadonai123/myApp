import React, {useEffect, useState} from 'react';
import {View, ScrollView, Modal} from 'react-native';
import Texts from '../../Styles/texts';
import * as Colors from '../../Styles/colors';
import CardOrder from '../CardOrder';
import User from '../../Services/WebServer/user';
import { useOrder } from '../../Hooks/OrdersContext';
import OrderPerfil from '../../Modals/OrderPerfil';


const SaveOrders = ()=>{
  const { addItem, deleteItem, itemsOrder } = useOrder();
  const [orders, setOrders] = useState([]);
  const [currentOrder, setCurrentOrder] = useState(-1);
  const [orderPerfilVisible, setOrderPerfilVisible] = useState(false);

  useEffect(() => {
    const getData = async()=>{
      const tempOrders = await User.getOrderByIds(itemsOrder);
      setOrders(tempOrders)
    }
    getData();
  },[itemsOrder]);

  const handleClickOrder = (id) =>{
    setCurrentOrder(id);
    openModal();
  }
  const onCloseModal = async()=>{
    if(itemsOrder.indexOf(currentOrder)===-1){
      const tempOrders = await User.getOrderByIds(itemsOrder);
      setOrders(tempOrders)
    }
    openModal();
  }
  const openModal = ()=>{
    setOrderPerfilVisible(!orderPerfilVisible);
  }
  return(
    <View style={{flex: 1}}>
      <Modal 
        transparent= {true}
        animationType='slide'
        visible={orderPerfilVisible}
        onRequestClose={onCloseModal}>
        <OrderPerfil onClose={onCloseModal} id={currentOrder}></OrderPerfil>
      </Modal>

      <ScrollView 
      contentContainerStyle={{padding: 20}} 
      style={{
        backgroundColor: Colors.Red, 
        borderRadius: 20,
        borderWidth: 4,
      }}>
        {orders && orders.map((element,index) => {
          return(
            <CardOrder 
              name={element.name} 
              categorie={element.categorie}
              description={element.description}
              id={element.id}
              key={index}
              fn = {handleClickOrder}
            />
          );
        })}
      </ScrollView>
    </View>
  );
}
export default SaveOrders;