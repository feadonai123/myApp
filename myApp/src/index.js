import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, StyleSheet} from 'react-native';
import {percentWidthScreen} from './Styles/styles';

import Routes from './Routes';

const Tab = createBottomTabNavigator();

export default App = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator 
      initialRouteName="Home"
      tabBarOptions={{
        activeTintColor: '#000',
        inactiveTintColor: '#ccc',
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
                tabBarIcon: ()=>{
                    return(<View><Text>Home</Text></View>);
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
                tabBarIcon: ()=>{
                    return(<View><Text>About</Text></View>);
                }
            }}
        /> 
      </Tab.Navigator>
    </NavigationContainer>
  );
};

const styles = StyleSheet.create({
    TabBar:{
        backgroundColor: '#ff0',
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