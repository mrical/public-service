import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

const AuthContext = createContext({ user: { email: "" }, isLoggedIn: true });

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  useEffect(() => {}, []);
  return (
    <AuthContext.Provider value={{ user, isLoggedIn: !!user }}>
      {children}
    </AuthContext.Provider>
  );
}
