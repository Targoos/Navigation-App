/* eslint-disable react-native/no-inline-styles */
import React from 'react';
import {Text, View} from 'react-native';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {TouchableIcon} from '../components/TouchableIcon';
import {styles} from '../theme/appTheme';

export const Tab1Screen = () => {
  const insets = useSafeAreaInsets();
  return (
    <View style={{marginTop: insets.top}}>
      <Text style={styles.screenTitle}>Icons</Text>
      <View style={styles.iconsWrapper}>
        <TouchableIcon name="american-football" />
        <TouchableIcon name="boat" />
        <TouchableIcon name="business" />
        <TouchableIcon name="camera" />
        <TouchableIcon name="flask" />
        <TouchableIcon name="heart-half" />
        <TouchableIcon name="hand-right" />
        <TouchableIcon name="nutrition" />
        <TouchableIcon name="paw" />
      </View>
    </View>
  );
};
