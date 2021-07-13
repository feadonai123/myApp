import React, { useState } from 'react';
import {View,ScrollView, TouchableOpacity, StyleSheet, SafeAreaView, Modal, KeyboardAvoidingView} from 'react-native';
import {Styles, percentHeightScreen, percentWidthScreen} from '../../Styles/styles';
import Texts from '../../Styles/texts';
import * as Colors from '../../Styles/colors';


import CreateOrder from '../../Modals/CreateOrder';
import DefaultButton from '../../Components/DefaultButton';


const Home = ({navigation})=>{
  const [modalCreateVisible, setModalCreateVisible] = useState(false);
  const HandleNavigate = (route)=>{
    navigation.navigate(route, {itemId: -1})
  }

  const HandleCreateButton = ({id= -1}) =>{
    setModalCreateVisible(!modalCreateVisible);
    if(id!==-1){
      navigation.navigate("seeOrders", {itemId: id})
    }
  }
  return(
    <KeyboardAvoidingView behavior={'position'} keyboardVerticalOffset={-500} style={{backgroundColor: '#ff0', flex: 1}}>
      <ScrollView style={{backgroundColor: '#0f0'}}>
        <View style={[
          Styles.mainContainer,
          {height: percentHeightScreen(100)-percentWidthScreen(15)-30+20
        }]}>
          <Modal 
            transparent= {true}
            animationType='slide'
            visible={modalCreateVisible}
            onRequestClose={HandleCreateButton}>
            <CreateOrder onClose={HandleCreateButton}></CreateOrder>
          </Modal>
          <View style={[styles.separator, {marginTop: 20}]}></View>
          <View style={styles.header}>
            <Texts.Title>Home</Texts.Title>
          </View>
          <View style={{alignItems: 'center', width: '100%', paddingVertical: 20}}>
            <Texts.SubtitleBold>O que deseja?</Texts.SubtitleBold>
          </View>
          <View style={styles.separator}></View>
          <View style={styles.container}>
            <DefaultButton
              text='VER PEDIDOS'
              fn={()=>HandleNavigate('seeOrders')}
            />
            <DefaultButton
              text='CRIAR PEDIDOS'
              fn={HandleCreateButton}
            />
          </View>
        </View>
      </ScrollView>
    </KeyboardAvoidingView>
  )
}
export default Home;

const styles = StyleSheet.create({
  button:{
    backgroundColor: Colors.DarkBlue,
    paddingHorizontal: 50,
    paddingVertical: 20,
    borderRadius: 20,
    borderWidth: 1,
  },
  containerButton:{
    flex: 1
  },
  container:{
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: Colors.Red, 
    width: '100%', 
    borderRadius: 20,
    marginBottom: 40,
    borderWidth: 4,
  },
  header:{
    height: percentHeightScreen(10),
    width: '100%',
    alignItems: 'center', 
    justifyContent: 'center',
    backgroundColor: Colors.Red,
    borderRadius: 20,
    borderWidth: 4,
  },
  separator:{
    borderWidth: 1,
    borderRadius: 1,
    borderStyle:'solid',
    width: '100%', 
    marginBottom: 20
  }
})