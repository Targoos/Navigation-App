/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Image, Text, useWindowDimensions, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {
  createDrawerNavigator,
  DrawerContentComponentProps,
  DrawerContentOptions,
  DrawerContentScrollView,
} from '@react-navigation/drawer';
import {SettingsScreen} from '../screens/SettingsScreen';
import {styles} from '../theme/appTheme';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {BottomTabNavigator} from './BottomTabNavigator';

const Drawer = createDrawerNavigator();

export const DrawerNavigator = () => {
  const {width} = useWindowDimensions();

  //

  return (
    <Drawer.Navigator
      drawerContent={props => <InternalMenu {...props} />}
      drawerType={width >= 768 ? 'permanent' : 'front'}>
      <Drawer.Screen name="BottomTabNavigator" component={BottomTabNavigator} />
      <Drawer.Screen name="Settings" component={SettingsScreen} />
    </Drawer.Navigator>
  );
};

const InternalMenu = ({
  navigation,
}: DrawerContentComponentProps<DrawerContentOptions>) => {
  return (
    <DrawerContentScrollView>
      <View style={styles.globalContainer}>
        <Image
          style={styles.avatar}
          source={{
            uri:
              'https://images.assetsdelivery.com/compings_v2/nexusby/nexusby1810/nexusby181000286.jpg',
          }}
        />
        <View>
          <TouchableOpacity
            onPress={() => navigation.navigate('BottomTabNavigator')}
            style={{
              ...styles.button,
              flexDirection: 'row',
              width: 250,
              height: 50,
              marginTop: 10,
              borderRadius: 5,
              backgroundColor: '#a9def9',
            }}>
            <Text style={{...styles.buttonText, fontSize: 15}}>
              Bottom Tab Navigator
            </Text>
            <Text>
              <Icon name="caret-forward" size={30} color="black" />
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => navigation.navigate('Settings')}
            style={{
              ...styles.button,
              flexDirection: 'row',
              width: 250,
              height: 50,
              marginTop: 10,
              borderRadius: 5,
              backgroundColor: '#a9def9',
            }}>
            <Text style={{...styles.buttonText, fontSize: 15}}>Settings</Text>
            <Text>
              <Icon name="caret-forward" size={30} color="black" />
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </DrawerContentScrollView>
  );
};
