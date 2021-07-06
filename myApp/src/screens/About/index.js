import React from 'react';
import {View, TouchableOpacity, Text} from 'react-native';
import {Styles} from '../../Styles/styles';

const About = ({navigation}) => {
  return(
    <View style={[Styles.mainContainer, {backgroundColor: '#f0f'}]}>
      <TouchableOpacity 
        style={{backgroundColor: '#ff0', padding: 20, borderRadius: 20}}
        onPress={()=>navigation.navigate('home')}>
        <Text>Ir Para Home</Text>
      </TouchableOpacity>
    </View>
  );
};
export default About;
