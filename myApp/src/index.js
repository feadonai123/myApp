import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, StyleSheet} from 'react-native';
import {percentHeightScreen, percentWidthScreen} from './Styles/styles';
import * as Colors from './Styles/colors';
import Texts from './Styles/texts';

import Routes from './Routes';

const Tab = createBottomTabNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: Colors.LightBlue,
        inactiveTintColor: Colors.DarkBlue,
        showLabel: false,
        style: styles.TabBar,
      }}>
        <Tab.Screen 
            name="Home" 
            children={()=>(
                <View style={styles.offsetTabBar}>
                    <Routes screenName='home'></Routes>
                </View>
            )} 
            options={{
                tabBarIcon: ({ color, size, focused })=>{
                    return(<Texts.Subtitle style={{color: color}}>Home</Texts.Subtitle>);
                }
            }}
        />
        <Tab.Screen
            name="About" 
            children={()=>(
                <View style={styles.offsetTabBar}>
                    <Routes screenName='about'></Routes>
                </View>
            )} 
            options={{
                tabBarIcon: ({ color, size, focused })=>{
                    return(<Texts.Subtitle style={{color: color}}>About</Texts.Subtitle>);
                }
            }}
        /> 
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
    TabBar:{
        backgroundColor: Colors.Blue,
        //backgroundColor: 'transparent',
        borderTopColor: 'transparent',
        height: percentWidthScreen(15),
        position: 'absolute',
        bottom: 0,
        borderTopLeftRadius: 20,//dar paddingBotton no ultimo componente da tela para ScrollView contentContainerStyle={{paddingBottom: 20}}
        borderTopRightRadius: 20,
    },
    offsetTabBar:{
        paddingBottom: percentWidthScreen(15)-20,
        flex: 1,
    }
});