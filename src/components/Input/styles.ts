import {StyleSheet, Dimensions} from 'react-native';
import colors from '../../utils/colors';

export default StyleSheet.create({
  viewInput: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 5,
    borderWidth: 1,	
    borderRadius: 8,
    borderColor: colors.gray,
  },
  input: {
    flex: 1,
    height: 40,
    padding: 10,  
    color: colors.black
  },
  inputNoIcon: {
    borderLeftWidth: 1,
    borderTopLeftRadius: 8,
    borderBottomLeftRadius: 8,
  },
  viewIcon: {
    alignItems: 'center', 
    justifyContent: 'center', 
    borderRightWidth: 1, 
    borderRightColor: colors.gray, 
    width: 40, 
    height: 40
  }
})