import { createContext, useContext, useState } from "react";

const Usercontext = createContext();
export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  return (
    <Usercontext.Provider value={{ user, setUser }}>
      {children}
    </Usercontext.Provider>
  );
};
export const useUser = () => useContext(Usercontext);
