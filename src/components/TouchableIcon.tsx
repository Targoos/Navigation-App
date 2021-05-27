import React, {useContext} from 'react';
import {Text} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {TouchableOpacity} from 'react-native-gesture-handler';
import {styles} from '../theme/appTheme';
import {AuthContext} from '../context/AuthContext';

interface Props {
  name: string;
}

export const TouchableIcon = ({name}: Props) => {
  const {
    setFavIcon,
    authState: {isLoggedIn},
  } = useContext(AuthContext);

  return (
    <TouchableOpacity
      onPress={() => {
        // eslint-disable-next-line curly
        if (!isLoggedIn) return;
        setFavIcon(name);
      }}>
      <Text style={styles.icon}>
        <Icon name={name} size={70} color="blue" />
      </Text>
    </TouchableOpacity>
  );
};
