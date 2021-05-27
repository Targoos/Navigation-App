import {StyleSheet} from 'react-native';

export const colors = {
  primary: '#a9def9',
  secondary: '#fcf6bd',
  terciary: '#d0f4de',
  danger: '#e71d36',
  background: 'white',
};

export const styles = StyleSheet.create({
  globalContainer: {
    marginHorizontal: 20,
    alignItems: 'center',
    backgroundColor: '#fbf9ff',
  },
  screenTitle: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 20,
    padding: 10,
    borderRadius: 10,
    color: 'black',
    textAlign: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: '300',
    marginVertical: 30,
  },
  buttonsWrapper: {
    flexDirection: 'row',
  },
  button: {
    width: 100,
    height: 100,
    marginHorizontal: 20,
    backgroundColor: colors.danger,
    borderRadius: 20,
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,

    elevation: 3,
  },
  buttonText: {
    textAlign: 'center',
    fontSize: 10,
    fontWeight: 'bold',
    color: 'black',
    textTransform: 'uppercase',
  },
  jsonObject: {
    fontSize: 20,
    fontWeight: 'bold',
    marginVertical: 30,
    color: 'white',
    backgroundColor: 'black',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 100,
  },
  iconsWrapper: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  icon: {
    margin: 30,
  },
});
