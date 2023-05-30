import {StyleSheet} from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({  
  input: {
    height: 40,
    width: '100%',
    padding: 10,
    borderWidth: 1,
    borderTopRightRadius: 8,
    borderBottomRightRadius: 8,
    borderLeftWidth: 0,
    borderColor: colors.grey,
  },
  viewIcon: {
    alignItems: 'center', 
    justifyContent: 'center', 
    borderWidth: 1, 
    borderColor: colors.grey, 
    width: 40, 
    height: 40, 
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8 
  }
})