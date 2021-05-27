/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../theme/appTheme';

export const Tab2Screen = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{marginTop: insets.top, alignSelf: 'center'}}>
      <Text style={styles.screenTitle}>Tab2 Screen</Text>
    </View>
  );
};
