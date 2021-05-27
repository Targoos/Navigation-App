/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {AuthContext} from '../context/AuthContext';
import {Text, View} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../theme/appTheme';

export const SettingsScreen = () => {
  const insets = useSafeAreaInsets();

  const {authState} = useContext(AuthContext);

  return (
    <View style={{marginTop: insets.top, alignSelf: 'center'}}>
      <Text style={styles.screenTitle}>Settings Screen</Text>
      <Text>{JSON.stringify(authState, null, 4)}</Text>

      <Text style={styles.icon}>
        {authState.favoriteIcon && (
          <Icon name={authState.favoriteIcon} size={200} color="blue" />
        )}
      </Text>
    </View>
  );
};
