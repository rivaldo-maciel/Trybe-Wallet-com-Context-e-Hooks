import React, { useState } from 'react';
import usercontext from './userContext';

const UserProvider = ({ children }) => {
  const [user, setUser] = useState({ email: '', password: '' })

  return (
    <usercontext.Provider value={{ user, setUser }} >
      { children }
    </usercontext.Provider>
  );
}

export default UserProvider;