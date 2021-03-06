import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {percentWidthScreen} from '../Styles/styles';

import Home from '../screens/Home';
import About from '../screens/About';
import Orders from '../screens/Orders';
import Contacts from '../screens/Contacts';
import * as Colors from '../Styles/colors'
import UserPerfil from '../screens/UserPerfil';
const Stack = createStackNavigator();

const Routes = ({screenName}) => {
  return (
    <Stack.Navigator
      initialRouteName={screenName}
      screenOptions={{headerShown: false}}
      screenOptions={{
        //headerLeft: null,
        headerStyle: styles.headerStyle,
        headerTitleStyle: styles.headerTitleStyle,
      }}
      >
      <Stack.Screen 
        name="home" 
        component={Home}
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="about" 
        component={About} 
        options={{
          title: "", 
          headerShown: false, 
          headerTitleAlign: 'center',
          headerTransparent: false,
        }}
      />
      <Stack.Screen
        name="seeOrders" 
        component={Orders} 
        options={({navigation})=>{
          return({
            title: 'Pedidos',
            headerShown: true,
            headerTitleAlign: 'center',
            headerTransparent: false,
            /*headerLeft: ()=>{
              return(
                <TouchableOpacity onPress={()=>navigation.goBack()}>
                  <Text>Voltar</Text>
                </TouchableOpacity>
              );
            }*/
          });
        }}
      />
      <Stack.Screen
        name="countacts" 
        component={Contacts} 
        options={({navigation})=>{
          return({
            title: 'Contatos',
            headerShown: false,
            headerTitleAlign: 'center',
            headerTransparent: false,
          });
        }}
      />
      <Stack.Screen
        name="userPerfil" 
        component={UserPerfil} 
        options={({navigation})=>{
          return({
            title: 'Perfil',
            headerShown: false,
            headerTitleAlign: 'center',
            headerTransparent: false,
          });
        }}
      />
    </Stack.Navigator>
  );
};

export default Routes;

const styles = StyleSheet.create({
  headerStyle:{
    backgroundColor: Colors.LightBlue,
    height: percentWidthScreen(20),
  },
  headerTitleStyle:{
    color: Colors.DarkBlue,
    fontSize: 32,
  }
});
