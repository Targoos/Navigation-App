import React from 'react';
import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Tab1Screen} from '../screens/Tab1Screen';
import {StackNagivator} from './StackNavigator';
import {colors} from '../theme/appTheme';
import {Platform, Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {TopTabNavigator} from './TopTabNavigator';

const bottomTabAndroid = createMaterialBottomTabNavigator();
const bottomTabIOS = createBottomTabNavigator();

export const BottomTabNavigator = () => {
  return Platform.OS === 'ios' ? <TabIOS /> : <TabAndroid />;
};

const TabAndroid = () => {
  return (
    <bottomTabAndroid.Navigator
      barStyle={{backgroundColor: colors.primary}}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName: string = '';

          switch (route.name) {
            case 'Tab1Screen':
              iconName = 'headset';
              break;
            case 'Tab2Screen':
              iconName = 'heart';
              break;
            case 'StackNagivator':
              iconName = 'grid';
              break;
          }

          return (
            <View>
              <Text style={{color}}>
                <Icon name={iconName} size={20} color="black" />
              </Text>
            </View>
          );
        },
      })}>
      <bottomTabAndroid.Screen
        name="Tab1Screen"
        options={{
          title: 'Tab1',
        }}
        component={Tab1Screen}
      />
      <bottomTabAndroid.Screen
        name="Tab2Screen"
        options={{title: 'Tab2'}}
        component={TopTabNavigator}
      />
      <bottomTabAndroid.Screen
        name="StackNagivator"
        options={{title: 'Stack'}}
        component={StackNagivator}
      />
    </bottomTabAndroid.Navigator>
  );
};

const TabIOS = () => (
  <bottomTabIOS.Navigator
    sceneContainerStyle={{
      backgroundColor: colors.background,
    }}
    tabBarOptions={{
      activeTintColor: colors.primary,
      style: {
        elevation: 5,
        borderTopWidth: 0,
        justifyContent: 'center',
      },
      labelStyle: {
        fontSize: 15,
        fontWeight: 'bold',
      },
    }}
    screenOptions={({route}) => ({
      tabBarIcon: ({color}) => {
        let iconName: string = '';

        switch (route.name) {
          case 'Tab1Screen':
            iconName = 'T1';
            break;
          case 'Tab2Screen':
            iconName = 'T2';
            break;
          case 'StackNagivator':
            iconName = 'S';
            break;
        }

        return <Text style={{color}}>{iconName}</Text>;
      },
    })}>
    <bottomTabIOS.Screen
      name="Tab1Screen"
      options={{
        title: 'Tab1',
      }}
      component={Tab1Screen}
    />
    <bottomTabIOS.Screen
      name="Tab2Screen"
      options={{title: 'Tab2'}}
      component={TopTabNavigator}
    />
    <bottomTabIOS.Screen
      name="StackNagivator"
      options={{title: 'Stack'}}
      component={StackNagivator}
    />
  </bottomTabIOS.Navigator>
);
