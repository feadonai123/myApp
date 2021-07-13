import React, {useEffect} from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {View, Text, StyleSheet} from 'react-native';
import {percentHeightScreen, percentWidthScreen} from './Styles/styles';
import * as Colors from './Styles/colors';
import Texts from './Styles/texts';
import {OrderProvider} from './Hooks/OrdersContext';
import { PopUpProvider } from './Hooks/PopUpContext';
import Login from './screens/Login';
import { useUser } from './Hooks/UserContext';
import Routes from './Routes';

const Tab = createBottomTabNavigator();

export default Main = () => {

    const {isLogin} = useUser();
    useEffect(() => {
        console.log("main: ")
        console.log(isLogin)
    },[]);
    
    return (
        <View style={{flex: 1}}>
            {isLogin?
                <OrderProvider>
                    <PopUpProvider>
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
                                name="Countacts" 
                                children={()=>(
                                    <View style={styles.offsetTabBar}>
                                        <Routes screenName='countacts'></Routes>
                                    </View>
                                )} 
                                options={{
                                    tabBarIcon: ({ color, size, focused })=>{
                                        return(<Texts.Subtitle style={{color: color}}>Contatos</Texts.Subtitle>);
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
                            <Tab.Screen
                                name="UserPerfil" 
                                children={()=>(
                                    <View style={styles.offsetTabBar}>
                                        <Routes screenName='userPerfil'></Routes>
                                    </View>
                                )} 
                                options={{
                                    tabBarIcon: ({ color, size, focused })=>{
                                        return(<Texts.Subtitle style={{color: color}}>Perfil</Texts.Subtitle>);
                                    }
                                }}
                            /> 
                        </Tab.Navigator>
                    </PopUpProvider>
                </OrderProvider>
            :
            <Login></Login>
            }
        </View>
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