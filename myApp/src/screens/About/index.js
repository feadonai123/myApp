import React, { useState } from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {Styles} from '../../Styles/styles';
import User from '../../Services/WebServer/user';
import Button from '../../Components/DefaultButton';

const About = ({navigation}) => {
  const [items, setItems] = useState();
  const handleClick = async()=>{
    const all = await User.getAllOrders();
    setItems(all);
  }
  return(
    <View style={[Styles.mainContainer, {backgroundColor: '#f0f'}]}>
      <TouchableOpacity 
        style={{backgroundColor: '#ff0', padding: 20, borderRadius: 20}}
        onPress={()=>navigation.navigate('home')}>
        <Text>Ir Para Home</Text>
      </TouchableOpacity>
      <Button fn={handleClick} text='Pegar dados do banco'/>
      {items && items.map((element,index) => {
        console.log("oi " + element.name)
        return(<Text key={index}>{element.name}</Text>);
      })}
    </View>
  );
};
export default About;
