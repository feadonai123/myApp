import React, { useContext, useState, createContext, useCallback } from 'react';

export const OrderContext = createContext({});

export const OrderProvider = ({ children }) => {
  const [itemsOrder, setItemsOrder] = useState([]);

  const addItem = useCallback(
    (id) => {
      console.log("adicionando item: " + id)
      if(itemsOrder.indexOf(id)===-1){
        setItemsOrder([...itemsOrder, id]);
        return(true)
      }else{
        return(false)
      }
    },
    [itemsOrder],
  );

  const deleteItem = useCallback(
    (id) => {
      const newArr = [...itemsOrder];
      const index = itemsOrder.indexOf(id);
      if(index!==-1){
        newArr.splice(index, 1);
        setItemsOrder(newArr);
        return(true)
      }else{
        return(false)
      }
    },
    [itemsOrder],
  );

  return (
    <OrderContext.Provider
      value={{
        itemsOrder,
        addItem,
        deleteItem,
      }}>
      {children}
    </OrderContext.Provider>
  );
};

export function useOrder() {
  const context = useContext(OrderContext);
  return context;
}
