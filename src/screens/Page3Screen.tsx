/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../theme/appTheme';
import {TouchableOpacity} from 'react-native-gesture-handler';

interface Props extends StackScreenProps<any, any> {}

export const Page3Screen = ({navigation}: Props) => (
  <View style={styles.globalContainer}>
    <Text style={styles.screenTitle}>Page3Screen</Text>
    <View>
      <TouchableOpacity
        style={{
          ...styles.button,
          backgroundColor: '#a9def9',
          flexDirection: 'row',
          width: 200,
          marginVertical: 10,
        }}
        onPress={() => navigation.pop()}>
        <Text>
          <Icon name="caret-back" size={30} color="black" />
        </Text>
        <Text style={styles.buttonText}>Regresar</Text>
      </TouchableOpacity>

      <TouchableOpacity
        style={{
          ...styles.button,
          backgroundColor: '#a9def9',
          flexDirection: 'row',
          width: 200,
          marginVertical: 10,
        }}
        onPress={() => navigation.popToTop()}>
        <Text>
          <Icon name="caret-back" size={30} color="black" />
        </Text>
        <Text style={styles.buttonText}>Ir al Home</Text>
      </TouchableOpacity>
    </View>
  </View>
);
