import React, { useState } from 'react';
import {View} from 'react-native';
import Texts from '../../Styles/texts';
import * as Colors from '../../Styles/colors';

import DefaultButton from '../../Components/DefaultButton';
import { useUser } from '../../Hooks/UserContext';
import DefaultInput from '../../Components/DefaulImput';
const Login = ()=>{
  const {Login, Logoff} = useUser();
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  return(
    <View style={{
      flex: 1, 
      backgroundColor: Colors.LightBlue, 
      justifyContent: 'center', 
    }}>
      <View style={{
        alignItems: 'stretch',
        justifyContent: 'space-between',
        backgroundColor: Colors.Blue,
        marginHorizontal: 20,
        padding: 10,
        borderRadius: 20,
      }}>
        <View style={{paddingBottom: 100, paddingTop: 20}}>
          <View style={{alignItems: 'center', paddingBottom: 20}}>
            <Texts.Title>Login</Texts.Title>
          </View>
          <DefaultInput placeholder="Email" title="Email" value={email} fn={setEmail}></DefaultInput>
          <DefaultInput placeholder="Senha" title="Senha" value={pass} fn={setPass}></DefaultInput>
        </View>
        <DefaultButton text="Registrar" fn={()=>{}}></DefaultButton>
        <DefaultButton text="Logar" fn={Login} backgroundColor={Colors.Blue}></DefaultButton>
      </View>
      
    </View>
  );
 
}

export default Login;