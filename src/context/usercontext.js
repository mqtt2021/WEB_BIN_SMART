import React from "react";
import { createContext } from "react";
// @function  UserContext

export const UserContext =createContext({ email: '', auth: false });

// @function  UserProvider
// Create function to provide UserContext
const UserProvider = ({ children }) => {
  const [user, setUser] = React.useState({ email: '', auth: false });
  
  const loginContext = (email) => {
    localStorage.setItem('email',email);
    
    setUser((user) => ({
      email: email,
      auth: true,
    }));
    
  };

  const logout = () => {
    localStorage.removeItem('email');
    setUser((user) => ({
      email: '',
      auth: false,
    }));
  };

  return (
    <UserContext.Provider value={{ user, loginContext, logout }}>
      {children}
    </UserContext.Provider>
  );
};
export default UserProvider


