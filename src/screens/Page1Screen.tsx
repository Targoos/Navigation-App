/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {Text, View, TouchableOpacity} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {DrawerScreenProps} from '@react-navigation/drawer';
// import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../theme/appTheme';

interface Props extends DrawerScreenProps<any, any> {}
// interface Props extends StackScreenProps<any, any> {}

export const Page1Screen = ({navigation}: Props) => {
  useEffect(() => {
    navigation.setOptions({
      headerLeft: () => (
        <TouchableOpacity
          style={{
            ...styles.button,
            backgroundColor: 'black',
            width: 30,
            height: 30,
            borderRadius: 5,
            marginHorizontal: 5,
          }}
          onPress={() => navigation.toggleDrawer()}>
          <Text>
            <Icon name="menu" size={30} color="#a9def9" />
          </Text>
        </TouchableOpacity>
      ),
    });
  }, [navigation]);

  return (
    <View style={styles.globalContainer}>
      <Text style={styles.screenTitle}>Page1Screen</Text>

      <TouchableOpacity
        style={{
          ...styles.button,
          flexDirection: 'row',
          backgroundColor: '#a9def9',
          width: 200,
        }}
        onPress={() => navigation.navigate('Page2Screen')}>
        <Text style={styles.buttonText}>Ir a la pagina 2</Text>
        <Text>
          <Icon name="caret-forward" size={30} color="black" />
        </Text>
      </TouchableOpacity>

      <Text style={styles.title}>Navegar con argumentos</Text>

      <View style={styles.buttonsWrapper}>
        <TouchableOpacity
          style={{...styles.button, backgroundColor: '#fcf6bd'}}
          onPress={() =>
            navigation.navigate('PersonScreen', {id: 1, name: 'Mabel'})
          }>
          <Text>
            <Icon name="woman" size={30} color="black" />
          </Text>
          <Text style={styles.buttonText}>Mabel</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={{...styles.button, backgroundColor: '#d0f4de'}}
          onPress={() =>
            navigation.navigate('PersonScreen', {id: 2, name: 'Liliana'})
          }>
          <Text>
            <Icon name="woman" size={30} color="black" />
          </Text>
          <Text style={styles.buttonText}>Liliana</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
