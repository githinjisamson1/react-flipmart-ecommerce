import React, { useContext, useState } from "react";

// AuthContext
const AuthContext = React.createContext();

// AuthProvider
export const AuthProvider = ({ children }) => {
  // state for user
  const [user, setUser] = useState({ email: "", password: "" });
  return (
    <AuthContext.Provider value={{ user, setUser }}>
      {children}
    </AuthContext.Provider>
  );
};

// useGlobalAuthContext can be accessed globally
export const useGlobalAuthContext = () => {
  return useContext(AuthContext);
};
