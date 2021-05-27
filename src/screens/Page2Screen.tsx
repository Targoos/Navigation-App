/* eslint-disable react-native/no-inline-styles */
import React, {useEffect} from 'react';
import {useNavigation} from '@react-navigation/core';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from '../theme/appTheme';

export const Page2Screen = () => {
  const navigator = useNavigation();

  useEffect(() => {
    navigator.setOptions({
      title: 'Hola Mundo',
      headerBackTitle: 'Atras',
    });
  }, [navigator]);

  return (
    <View style={styles.globalContainer}>
      <Text style={styles.screenTitle}>Page2Screen</Text>

      <TouchableOpacity
        style={{
          ...styles.button,
          flexDirection: 'row',
          backgroundColor: '#a9def9',
          width: 200,
        }}
        onPress={() => navigator.navigate('Page3Screen')}>
        <Text style={styles.buttonText}>Ir a la pagina 3</Text>
        <Text>
          <Icon name="caret-forward" size={30} color="black" />
        </Text>
      </TouchableOpacity>
    </View>
  );
};
