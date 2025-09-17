import React, { createContext, useState, useContext, ReactNode, useEffect } from 'react';

interface User {
  id: string;
  name: string;
  email: string;
  phone: string;
  areaCode: string;
  [key: string]: any; // allow extra fields from API
}

interface UserContextType {
  user: User | null;
  login: (userData: any) => void;
  logout: () => void;
  isLoading: boolean;
}

const UserContext = createContext<UserContextType | undefined>(undefined);

export const UserProvider = ({ children }: { children: ReactNode }) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);

  // Hydrate user from localStorage/sessionStorage on app load
  useEffect(() => {
    const storedUser = localStorage.getItem('userData') || sessionStorage.getItem('userData');
    const storedToken = localStorage.getItem('userToken') || sessionStorage.getItem('userToken');

    if (storedUser && storedToken) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error('Error parsing stored user data:', error);
        logout();
      }
    }
    setIsLoading(false);
  }, []);

  const login = (userData: any) => {
    const normalized: User = {
      id: userData.id || '',
      name: userData.name || userData.username || '',
      email: userData.email || '',
      phone: userData.phone || '',
      areaCode: userData.areaCode || '+264',
      ...userData,
    };
    setUser(normalized);
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem('userToken');
    localStorage.removeItem('userData');
    sessionStorage.removeItem('userToken');
    sessionStorage.removeItem('userData');
  };

  return (
    <UserContext.Provider value={{ user, login, logout, isLoading }}>
      {children}
    </UserContext.Provider>
  );
};

export const useUser = () => {
  const context = useContext(UserContext);
  if (context === undefined) {
    throw new Error('useUser must be used within a UserProvider');
  }
  return context;
};