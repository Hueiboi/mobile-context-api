import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { AppContext } from '../context/AppContext';
import { View, ActivityIndicator } from 'react-native';

import AuthStack from './AuthStack';
import MainStack from './MainStack';

export default function RootNavigator() {
  const { isLoggedIn, isLoading } = useContext(AppContext);

  if(isLoading) {
    return (
      <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center' }}>
        <ActivityIndicator size="large" color="#000" />
      </View>
    );
  }

  return (
    <NavigationContainer>
      {isLoggedIn ? <MainStack /> : <AuthStack />}
    </NavigationContainer>
  );
}