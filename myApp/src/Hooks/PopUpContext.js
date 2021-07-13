import React, { useContext, useState, createContext, useCallback } from 'react';
import {Modal} from 'react-native';
import PopUpDefault from '../Components/PopUpDefault';

export const PopUpContext = createContext({});

export const PopUpProvider = ({ children }) => {
  const [popUpDefaultVisible, setPopUpDefaultVisible] = useState(false);
  const [titlePopUp, setTitlePopUp] = useState("");
  const [subtitlePopUp, setSubtitlePopUp] = useState("");

  const openPopUpText = ({title, subtitle})=>{
    setTitlePopUp(title);
    setSubtitlePopUp(subtitle);
    setPopUpDefaultVisible(true);
  }
  const closePopUpDefaul = ()=>{
    setPopUpDefaultVisible(false);
  }
  return (
    <PopUpContext.Provider
      value={{
        openPopUpText
      }}>
      <Modal 
        transparent= {true}
        animationType='slide'
        visible={popUpDefaultVisible}
        onRequestClose={closePopUpDefaul}>
        <PopUpDefault 
          title={titlePopUp} 
          subtitle={subtitlePopUp} 
          fn={closePopUpDefaul}
        />
      </Modal>
      {children}
    </PopUpContext.Provider>
  );
};

export function usePopUp() {
  const context = useContext(PopUpContext);
  return context;
}
