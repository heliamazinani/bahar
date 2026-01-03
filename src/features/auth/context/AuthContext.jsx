import { createContext, useContext, useEffect, useState } from "react";

const AuthContext = createContext(null);

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const savedUser = localStorage.getItem("authUser");
    if (savedUser) {
      setUser(JSON.parse(savedUser));
    }
    setLoading(false);
  }, []);

  const login = async ({ email }) => {
    // ✅ TEMP (until backend)
    const fakeUser = {
      id: "1",
      email,
    };

    setUser(fakeUser);
    localStorage.setItem("authUser", JSON.stringify(fakeUser));
    return fakeUser;
  };

  const register = async ({ name, email }) => {
    // ✅ TEMP
    const newUser = {
      id: "1",
      name,
      email,
    };

    setUser(newUser);
    localStorage.setItem("authUser", JSON.stringify(newUser));
    return newUser;
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("authUser");
  };

  return (
    <AuthContext.Provider
      value={{
        user,
        isAuthenticated: !!user,
        login,
        register,
        logout,
        loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);
