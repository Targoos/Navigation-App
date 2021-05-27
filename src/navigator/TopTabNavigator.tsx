/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {ChatScreen} from '../screens/ChatScreen';
import {ContactsScreen} from '../screens/ContactsScreen';
import {AlbumsScreen} from '../screens/AlbumsScreen';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {colors} from '../theme/appTheme';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const Tab = createMaterialTopTabNavigator();

export const TopTabNavigator = () => {
  const insets = useSafeAreaInsets();

  return (
    <Tab.Navigator
      style={{paddingTop: insets.top}}
      sceneContainerStyle={{backgroundColor: colors.background}}
      tabBarOptions={{
        pressColor: colors.primary,
        showIcon: true,
        indicatorStyle: {
          backgroundColor: colors.primary,
        },
        style: {
          borderBottomWidth: 0,
          elevation: 0,
        },
      }}
      screenOptions={({route}) => ({
        tabBarIcon: ({color}) => {
          let iconName: string = '';

          switch (route.name) {
            case 'ChatScreen':
              iconName = 'chatbox-ellipses';
              break;
            case 'ContactsScreen':
              iconName = 'people';
              break;
            case 'AlbumsScreen':
              iconName = 'albums';
              break;
          }

          return (
            <Text style={{color}}>
              <Icon name={iconName} size={25} color="black" />
            </Text>
          );
        },
      })}>
      <Tab.Screen
        name="ChatScreen"
        options={{title: 'Chat'}}
        component={ChatScreen}
      />
      <Tab.Screen
        name="ContactsScreen"
        options={{title: 'Contacts'}}
        component={ContactsScreen}
      />
      <Tab.Screen
        name="AlbumsScreen"
        options={{title: 'Album'}}
        component={AlbumsScreen}
      />
    </Tab.Navigator>
  );
};
