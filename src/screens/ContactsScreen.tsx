/* eslint-disable react-native/no-inline-styles */
import React, {useContext} from 'react';
import {View, Text} from 'react-native';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {useSafeAreaInsets} from 'react-native-safe-area-context';
import {styles} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';

export const ContactsScreen = () => {
  const insets = useSafeAreaInsets();

  const {
    signIn,
    authState: {isLoggedIn},
  } = useContext(AuthContext);

  return (
    <View style={{marginTop: insets.top, alignSelf: 'center'}}>
      <Text style={styles.screenTitle}>Contacts</Text>

      {!isLoggedIn && (
        <TouchableOpacity
          onPress={signIn}
          style={{
            ...styles.button,
            flexDirection: 'row',
            width: 250,
            height: 50,
            marginTop: 10,
            borderRadius: 5,
            backgroundColor: '#a9def9',
          }}>
          <Text style={{...styles.buttonText, fontSize: 15}}>Log In</Text>
        </TouchableOpacity>
      )}
    </View>
  );
};
