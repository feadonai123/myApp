import React, { useState } from 'react';
import {View, ScrollView, Text} from 'react-native';
import User from '../../Services/WebServer/user';
import {Styles, percentHeightScreen, percentWidthScreen} from '../../Styles/styles';
import Texts from '../../Styles/texts';
import * as Colors from '../../Styles/colors';
import ContactsList from '../../Components/ContactsList';
import SaveOrders from '../../Components/SaveOrders';

const Contacts = ({navigation}) => {
  const [scrollPage, setScrollPage] = useState(1);

  const setPage = (offset) => {
    let i;
    for (i = 1; i <= 2; i++) {
      if (offset < (percentWidthScreen(90) / 2) * i) {
        break;
      }
      if (i == 2) {
        break;
      }
    }
    if(scrollPage!==i){
      setScrollPage(i);
    }
  }
  return(
    <View style={Styles.mainContainer}>
      <View style={{flex: 1, width: percentWidthScreen(90)}}>
        <View style={{height: 100, marginTop: 10, width: percentWidthScreen(90)}}>
          <ScrollView
            horizontal={true} 
            decelerationRate="fast"
            pagingEnabled
            onScroll={data => {
              setPage(data.nativeEvent.contentOffset.x);
            }}
            scrollEventThrottle={200}
            showsHorizontalScrollIndicator={false}
          >
            <View style={{
              backgroundColor: Colors.LightBlue,
              alignItems: 'center', 
              justifyContent: 'center',
              width: percentWidthScreen(90),
            }}>
              <Texts.Title>Contatos</Texts.Title>
            </View>
            <View style={{
              alignItems: 'center',
              backgroundColor: Colors.LightBlue, 
              justifyContent: 'center',
              width: percentWidthScreen(90),
            }}>
              <Texts.Title>Salvos</Texts.Title>
            </View>
          </ScrollView>
          <View style={{
            position: 'absolute',
            width:  percentWidthScreen(20),
            bottom: 0,
            left: percentWidthScreen(35),
            flexDirection: 'row',
            justifyContent: 'center',
          }}>
            <Text style={{fontSize: 32, fontWeight: scrollPage===1?'bold':'normal'}}> . </Text>
            <Text style={{fontSize: 32, fontWeight: scrollPage===2?'bold':'normal'}}> . </Text>
          </View>
          
        </View>
        <View style={{flex: 1, marginBottom: 40}}>
          {scrollPage===1?
          <ContactsList/>
          :
          <SaveOrders/>
          }

        </View>
      </View>
    </View>
  );
}
export default Contacts;