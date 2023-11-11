import React, {createContext, useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import axios from 'axios';
import {BASE_URL} from '../config';

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [userToken, setUserToken] = useState(null);
  const [userInfo, setUserInfo] = useState(null);

  const login = (username, password) => {
    setIsLoading(true);
    axios
      .post(`${BASE_URL}/api/authaccount/login`, {username, password})
      .then(res => {
        console.log(res.data);
        let userData = res.data;
        setUserInfo(userData);
        setUserToken(userData.data.token);

        AsyncStorage.setItem('userInfo', JSON.stringify(userData));
        AsyncStorage.setItem('userToken', userData.data.token);
      })
      .catch(e => {
        console.log('Login error: ', e);
      });

    // setUserToken('asdfghjkl');
    // AsyncStorage.setItem('userToken', 'asdfghjkl');
    setIsLoading(false);
  };

  const logout = () => {
    setIsLoading(true);
    setUserToken(null);
    AsyncStorage.removeItem('userToken');
    AsyncStorage.removeItem('userInfo');
    setIsLoading(false);
  };

  const isLoggedIn = async () => {
    try {
      setIsLoading(true);
      let storedToken = await AsyncStorage.getItem('userToken');
      let storedInfo = await AsyncStorage.getItem('userInfo');
      storedInfo = JSON.parse(userInfo);

      if (userInfo) {
        setUserToken(storedToken);
        setUserInfo(storedInfo);
      }
      setIsLoading(false);
    } catch (error) {
      console.log(`login error: ${error}`);
    }
  };

  useEffect(() => {
    isLoggedIn();
  }, []);

  return (
    <AuthContext.Provider
      value={{login, logout, isLoading, userToken, userInfo}}>
      {children}
    </AuthContext.Provider>
  );
};
