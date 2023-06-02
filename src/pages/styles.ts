import { StyleSheet, Dimensions } from 'react-native';
import colors from '../utils/colors';

export const globalStyle = StyleSheet.create({
  container: {
    flex: 1,
    paddingVertical: 35,
    backgroundColor: colors.background,
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
  },
  logoSmall: {
    alignSelf: 'flex-start',
    top: 20,
    left: 20,
    width: 46,
    resizeMode: 'contain'
  },
  logoLarge: {
    alignSelf: 'flex-start',
    top: 0,
    left: 20,
    resizeMode: 'contain'
  },
  content: {
    flex: 1,
    width: Dimensions.get('screen').width,
    alignItems: 'center',
    justifyContent: 'space-between',
  }
});