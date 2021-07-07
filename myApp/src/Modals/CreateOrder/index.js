import React, { useState } from 'react';
import {View, StyleSheet, KeyboardAvoidingView, Modal, Text} from 'react-native';
import * as Colors from '../../Styles/colors';
import { percentHeightScreen } from '../../Styles/styles';
import Texts from '../../Styles/texts';
import DefaultButton from '../../Components/DefaultButton';
import DefaultInput from '../../Components/DefaulImput';
import DropdownCategories from '../DropdownCategories';

const CreateOrder = ({
  onClose,
})=>{
  const [nameValue, setNameValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');
  const [categorieValue, setCategorieValue] = useState('games');
  const [categoriesVisible, setCategoriesVisible] = useState(false);

  const handleOnChangeName =(e)=>{
    setNameValue(e)
  }
  const handleOnChangeDescription =(e)=>{
    setDescriptionValue(e)
  }
  const HandleClickDropdown = (value='')=>{//arrumar esse value para ter default ''1
    setCategoriesVisible(!categoriesVisible)
    if(value!==''){
      setCategorieValue(value)
    }
  }
  const handleClickCreate =()=>{
    alert('Criando...')
  }
  return(
    <View style={{marginTop: percentHeightScreen(20)}}>
      <Modal 
        transparent= {true}
        animationType='slide'
        visible={categoriesVisible}
        onRequestClose={HandleClickDropdown}>
        <DropdownCategories onClose={HandleClickDropdown}></DropdownCategories>
      </Modal>
      <KeyboardAvoidingView>
        <View style={styles.container}>
          <View>
            <DefaultInput
              title='Nome'
              placeholder='Seu Nome'
              fn={handleOnChangeName}
              value={nameValue}
            />
            <DefaultInput
              title='Descrição'
              placeholder='Descrição'
              fn={handleOnChangeDescription}
              value={descriptionValue}
            />
            <View style={styles.separator}></View>
            <Texts.Title>Categorias:</Texts.Title>
            <DefaultButton 
              fn={()=>setCategoriesVisible(!categoriesVisible)}
              value = {nameValue}
              text={categorieValue}
              backgroundColor={Colors.LightBlue}
              color='#000'
            />
          </View>
          <View style={{justifyContent:'flex-end', paddingBottom: 40}}>
            <DefaultButton 
              fn={handleClickCreate}
              value = {nameValue}
              text='Criar'
              backgroundColor={Colors.Blue}
              color='#000'
            />
             <View style={styles.separator}></View>
            <DefaultButton 
              fn={onClose}
              value = {nameValue}
              text='Cancelar'
              backgroundColor={Colors.Red}
              color='#000'
            />
          </View>
        </View>
      </KeyboardAvoidingView> 
    </View>
  );
}
export default CreateOrder;

const styles = StyleSheet.create({
  container:{
    height: percentHeightScreen(80),
    backgroundColor: Colors.DarkBlue, 
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderBottomEndRadius: 20,
    marginHorizontal: 20,
    padding: 20,
    alignItems: 'stretch',
    justifyContent: 'space-around',
  },
  separator:{
    borderWidth: 1,
    borderRadius: 1,
    borderStyle:'solid',
    width: '100%', 
    marginVertical: 15
  }
});