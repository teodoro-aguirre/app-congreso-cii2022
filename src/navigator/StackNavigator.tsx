import React from 'react';


import { createStackNavigator } from '@react-navigation/stack';
import { LoginScreen } from '../screens/LoginScreen';
import { MenuScreen } from '../screens/MenuScreen';

const Stack = createStackNavigator();

export const StackNavigator = () => {
  return (
    <Stack.Navigator
    screenOptions={{
        headerStyle: {
          elevation: 0,
          shadowColor: 'transparent'
        },
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="LoginScreen" options={{title: 'Iniciar sesion'}} component={ LoginScreen } />
      <Stack.Screen name="MenuScreen" options={{title: 'Menú'}} component={ MenuScreen } />
    </Stack.Navigator>
  );
}