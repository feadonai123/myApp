import React, { useState } from 'react';
import {View, StyleSheet, KeyboardAvoidingView, Modal, Text} from 'react-native';
import * as Colors from '../../Styles/colors';
import { percentHeightScreen } from '../../Styles/styles';
import Texts from '../../Styles/texts';
import DefaultButton from '../../Components/DefaultButton';
import DefaultInput from '../../Components/DefaulImput';
import DropdownCategories from '../DropdownCategories';
import User from '../../Services/WebServer/user';

import ModalDefault from '../default';
const CreateOrder = ({
  onClose,
})=>{
  const defaultCategorie = '';
  const [nameValue, setNameValue] = useState('');
  const [descriptionValue, setDescriptionValue] = useState('');
  const [categorieValue, setCategorieValue] = useState(defaultCategorie);
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
  const handleClickCreate = async()=>{
    if(nameValue == '' || descriptionValue=='' || categorieValue==''){
      alert("Preencha todos os campos");
      return;
    }
    const response  = await User.createOrder({
      name: nameValue,
      description: descriptionValue,
      categorie: categorieValue,
    })
    setNameValue('');
    setCategoriesVisible(defaultCategorie);
    setDescriptionValue('');
    if(response){
      onClose({id: response.id});
    }else{
      alert("Algo deu errado. Favor tende novamente");
    }
  }
  return(
    <ModalDefault>
      <Modal 
        transparent= {true}
        animationType='slide'
        visible={categoriesVisible}
        onRequestClose={HandleClickDropdown}>
        <DropdownCategories onClose={HandleClickDropdown}></DropdownCategories>
      </Modal>
      <View>
        <DefaultInput
          title='Nome'
          placeholder='Seu Nome'
          fn={handleOnChangeName}
          value={nameValue}
        />
        <DefaultInput
          title='Descri????o'
          placeholder='Descri????o'
          fn={handleOnChangeDescription}
          value={descriptionValue}
        />
        <View style={styles.separator}></View>
        <Texts.Title>Categorias:</Texts.Title>
        <DefaultButton 
          fn={()=>setCategoriesVisible(!categoriesVisible)}
          text={categorieValue}
          backgroundColor={Colors.LightBlue}
          color='#000'
        />
      </View>
      <View style={{justifyContent:'flex-end', paddingBottom: 40}}>
        <DefaultButton 
          fn={handleClickCreate}
          text='Criar'
          backgroundColor={Colors.Blue}
          color='#000'
        />
          <View style={styles.separator}></View>
        <DefaultButton 
          fn={onClose}
          text='Cancelar'
          backgroundColor={Colors.Red}
          color='#000'
        />
      </View>
    </ModalDefault>
  );
}
export default CreateOrder;

const styles = StyleSheet.create({
  separator:{
    borderWidth: 1,
    borderRadius: 1,
    borderStyle:'solid',
    width: '100%', 
    marginVertical: 15
  }
});