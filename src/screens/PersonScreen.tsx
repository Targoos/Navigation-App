/* eslint-disable react-native/no-inline-styles */
import React, {useContext, useEffect} from 'react';
import {Text, View} from 'react-native';
import {StackScreenProps} from '@react-navigation/stack';
import {styles} from '../theme/appTheme';
import {RootStackParams} from '../navigator/StackNavigator';
import {AuthContext} from '../context/AuthContext';

// Forma facil de tipar las props que entran al componente
// interface RouterParams {
//   id: number;
//   name: string;
// }

interface Props extends StackScreenProps<RootStackParams, 'PersonScreen'> {}

export const PersonScreen = ({route, navigation}: Props) => {
  //   console.log(JSON.stringify(props, null, 3)); mejor forma de ver las props en consola

  const params = route.params;

  const {setName} = useContext(AuthContext);

  useEffect(() => {
    setName(params.name);
  }, []);

  useEffect(() => {
    navigation.setOptions({
      title: params.name,
    });
  }, [navigation, params]);

  return (
    <View style={{...styles.globalContainer, backgroundColor: 'black'}}>
      <Text style={styles.jsonObject}>{JSON.stringify(params, null, 3)}</Text>
    </View>
  );
};
