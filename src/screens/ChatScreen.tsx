/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {View, Text} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../theme/appTheme';

export const ChatScreen = () => {
  const insets = useSafeAreaInsets();

  return (
    <View style={{marginTop: insets.top, alignSelf: 'center'}}>
      <Text style={styles.screenTitle}>Chat Screen</Text>
    </View>
  );
};
