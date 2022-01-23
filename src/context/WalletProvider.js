import React, { useState } from 'react';
import walletContext from './walletContext';

const WalletProvider = ({ children }) => {
  const [expenses, setExpenses] = useState([]);
  const [currencies, setCurrencies] = useState([]);
  return (
    <walletContext.Provider value={{expenses, setExpenses, currencies, setCurrencies}} >
      {children}
    </walletContext.Provider>
  );
}

export default WalletProvider;