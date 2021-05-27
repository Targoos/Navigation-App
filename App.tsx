import 'react-native-gesture-handler';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {DrawerNavigator} from './src/navigator/DrawerNagivator';
import {AuthProvider} from './src/context/AuthContext';
// import {StackNagivator} from './src/navigator/StackNavigator';
// import {DrawerNavigator} from './src/navigator/DrawerNagivator';

export const App = () => (
  <NavigationContainer>
    <AppState>
      {/* <StackNagivator /> */}
      {/* <DrawerNavigator /> */}
      <DrawerNavigator />
    </AppState>
  </NavigationContainer>
);

const AppState = ({children}: any) => {
  return <AuthProvider>{children}</AuthProvider>;
};
