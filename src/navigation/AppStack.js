import React from 'react';
import {createDrawerNavigator} from '@react-navigation/drawer';
import Homescreen from '../screens/HomeScreen';

const Drawer = createDrawerNavigator();

const AppStack = () => {
  return (
    <Drawer.Navigator
      screenOptions={{
        animation: 'fade',
        headerShown: false,
      }}>
      <Drawer.Screen name="Home" component={Homescreen} />
    </Drawer.Navigator>
  );
};

export default AppStack;
