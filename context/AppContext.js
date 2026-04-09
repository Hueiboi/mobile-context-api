import React, { createContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const AppContext = createContext();

export const AppProvider = ({ children }) => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const checkLoginStatus = async () => {
      try {
        const value = await AsyncStorage.getItem('userLoginState');
        if(value !== null) {
          setIsLoggedIn(JSON.parse(value));
        }
      } catch (error) {
        console.error('Error reading login state:', error);
      } finally {
        setIsLoading(false);
      }
    }
    checkLoginStatus();
  }, []);

  const login = async () => {
    try {
      await AsyncStorage.setItem('userLoginState', JSON.stringify(true));
      setIsLoggedIn(true);
    } catch (error) {
      console.error('Error saving login state:', error);
    }
  }

  const logout = async () => {
    try {
      await AsyncStorage.removeItem('userLoginState');
      setIsLoggedIn(false);
    } catch (error) {
      console.error('Error removing user');
    }
  }

  return (
    <AppContext.Provider value={{ isLoggedIn, setIsLoggedIn, login, logout, isLoading }}>
      {children}
    </AppContext.Provider>
  );
};