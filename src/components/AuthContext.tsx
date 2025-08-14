import React, { createContext, useState, useContext } from 'react';

const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const login = (email, password) => {
    // simple mock auth - replace with real API
    if (email && password) {
      const mockUser = { id: 1, name: 'Student', email };
      setUser(mockUser);
      return { ok: true };
    }
    return { ok: false, error: 'Invalid' };
  };

  const logout = () => setUser(null);

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export const useAuth = () => useContext(AuthContext);