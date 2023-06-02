import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  view: {
    flex: 1,
    paddingVertical: 5,
    backgroundColor: 'transparent',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    flexDirection: 'row',    
    alignItems: "center",
    justifyContent: "center",
    padding: 10,
    gap: 10,
    elevation: 2,
    borderRadius: 8,
    backgroundColor: colors.blue,
    height: 50
  }
});