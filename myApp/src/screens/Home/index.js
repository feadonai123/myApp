import React from 'react';
import {View,ScrollView, TouchableOpacity, StyleSheet} from 'react-native';
import {Styles} from '../../Styles/styles';
import Texts from '../../Styles/texts';
import * as Colors from '../../Styles/colors';


const Home = ({navigation})=>{

  const HandleNavigate = (route)=>{
    navigation.navigate(route)
  }
  return(
    <View style={Styles.mainContainer}>
      <View style={[styles.separator, {marginTop: 20}]}></View>
      <View style={styles.header}>
        <Texts.Title>Home</Texts.Title>
      </View>
      <View style={{alignItems: 'center', width: '100%', paddingVertical: 20}}>
        <Texts.SubtitleBold>O que deseja?</Texts.SubtitleBold>
      </View>
      <View style={styles.separator}></View>
      <View style={styles.container}>
        <TouchableOpacity style={styles.button} onPress={()=>HandleNavigate('about')}>
          <Texts.ButtonLabel style={{color: Colors.LightBlue}}>VER PEDIDOS</Texts.ButtonLabel>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={()=>HandleNavigate('about')}>
          <Texts.ButtonLabel style={{color: Colors.LightBlue}}>CRIAR PEDIDOS</Texts.ButtonLabel>
        </TouchableOpacity>
      </View>
      
    </View>
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
    height: '10%',
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