import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {Page1Screen} from '../screens/Page1Screen';
import {Page2Screen} from '../screens/Page2Screen';
import {Page3Screen} from '../screens/Page3Screen';
import {PersonScreen} from '../screens/PersonScreen';
import {colors} from '../theme/appTheme';

export type RootStackParams = {
  Page1Screen: undefined;
  Page2Screen: undefined;
  Page3Screen: undefined;
  PersonScreen: {id: number; name: string};
};

const Stack = createStackNavigator<RootStackParams>();

export const StackNagivator = () => (
  <Stack.Navigator
    // initialRouteName="Pagina2Screen"
    screenOptions={{
      cardStyle: {
        backgroundColor: colors.background,
      },
    }}>
    <Stack.Screen
      name="Page1Screen"
      options={{title: 'Pagina 1'}}
      component={Page1Screen}
    />
    <Stack.Screen
      name="Page2Screen"
      options={{title: 'Pagina 2'}}
      component={Page2Screen}
    />
    <Stack.Screen
      name="Page3Screen"
      options={{title: 'Pagina 3'}}
      component={Page3Screen}
    />
    <Stack.Screen name="PersonScreen" component={PersonScreen} />
  </Stack.Navigator>
);
