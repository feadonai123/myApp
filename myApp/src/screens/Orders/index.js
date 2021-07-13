import React, { useEffect, useState } from 'react';
import {View, ScrollView, StyleSheet, Modal} from 'react-native';
import * as Colors from '../../Styles/colors';
import {Styles, percentHeightScreen, percentWidthScreen} from '../../Styles/styles';
import Texts from '../../Styles/texts';
import CardOrder from '../../Components/CardOrder';
import User from '../../Services/WebServer/user';
import OrderPerfil from '../../Modals/OrderPerfil';

const Orders = ({route})=>{
  const { itemId } = route.params;
  const [orders, setOrders] = useState();
  const [loading, setLoading] = useState(true);
  const [currentOrder, setCurrentOrder] = useState(-1);
  const [orderPerfilVisible, setOrderPerfilVisible] = useState(false);
  useEffect(() => {
    const getData = async()=>{
      console.log("orders " + itemId)
      const tempOrders = await User.getAllOrders();
      setOrders(tempOrders);
      setLoading(false);
      if(itemId!==-1){
        setTimeout(() => {
          handleClickOrder(itemId);
        },1000);
      }
    }
    getData();
  },[itemId]);

  const handleClickOrder = (id) =>{
    setCurrentOrder(id);
    openModal();
  }
  const openModal = ()=>{
    setOrderPerfilVisible(!orderPerfilVisible);
  }
  return(
    <View style={[Styles.mainContainer ,{backgroundColor: Colors.Red}]}>
      <Modal 
        transparent= {true}
        animationType='slide'
        visible={orderPerfilVisible}
        onRequestClose={openModal}>
        <OrderPerfil onClose={openModal} id={currentOrder}></OrderPerfil>
      </Modal>
      <View style={[styles.separator]}></View>
      <ScrollView 
        contentContainerStyle={{padding: 20}} 
        style={{
          backgroundColor: Colors.LightBlue, 
          width: '100%', 
          borderRadius: 20,
        }}
      >
        {!loading &&
          <View>
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
          </View>
        }
      </ScrollView>
      <View style={[styles.separator, {marginBottom: 40}]}></View>
    </View>
  );
}
export default Orders;

const styles = StyleSheet.create({
  separator:{
    borderWidth: 1,
    borderRadius: 1,
    borderStyle:'solid',
    width: '100%', 
    marginVertical: 15,
  },
});