import React from 'react';
import {View} from 'react-native';
import * as Colors from '../../Styles/colors';
import {Styles} from '../../Styles/styles';
import Texts from '../../Styles/texts';
import { useUser } from '../../Hooks/UserContext';
import DefaultButton from '../../Components/DefaultButton';

const UserPerfil = ()=>{
  const {Login, Logoff} = useUser();

  return(
    <View style={[Styles.mainContainer ,{backgroundColor: Colors.Red}]}>
      <Texts.Title>UserPefil</Texts.Title>
      <DefaultButton text="Deslogar" fn={Logoff}></DefaultButton>
    </View>
  );
}
export default UserPerfil;

