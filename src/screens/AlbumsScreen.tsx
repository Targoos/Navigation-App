/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {AuthContext} from '../context/AuthContext';
import {styles} from '../theme/appTheme';

export const AlbumsScreen = () => {
  const insets = useSafeAreaInsets();

  const {
    logout,
    authState: {isLoggedIn},
  } = useContext(AuthContext);

  return (
    <View style={{marginTop: insets.top, alignSelf: 'center'}}>
      <Text style={styles.screenTitle}>Albums Screen</Text>

      {isLoggedIn && (
        <TouchableOpacity
          onPress={logout}
          style={{
            ...styles.button,
            flexDirection: 'row',
            width: 250,
            height: 50,
            marginTop: 10,
            borderRadius: 5,
            backgroundColor: '#a9def9',
          }}>
          <Text style={{...styles.buttonText, fontSize: 15}}>logout</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
