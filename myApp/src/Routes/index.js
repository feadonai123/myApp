import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {StyleSheet} from 'react-native';
import {percentWidthScreen} from '../Styles/styles';

import Home from '../screens/Home';
import About from '../screens/About';

const Stack = createStackNavigator();

const Routes = ({screenName}) => {
  return (
    <Stack.Navigator
      initialRouteName={screenName}
      screenOptions={{headerShown: false}}
      screenOptions={{
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
          title: "about", 
          headerShown: true, 
          headerTitleAlign: 'center',
          headerTransparent: false,
        }}
      />
    </Stack.Navigator>
  );
};

export default Routes;

const styles = StyleSheet.create({
  headerStyle:{
    backgroundColor: '#ff0',
    height: percentWidthScreen(20),
  },
  headerTitleStyle:{
    color: '#f00',
    fontSize: 32,
  }
});
