import { StyleSheet, Dimensions } from 'react-native';
import colors from '../../utils/colors';

export const styles = StyleSheet.create({
  card: {
    backgroundColor: colors.white,
    borderRadius: 8,
    elevation: 5,
    maxWidth: Dimensions.get('screen').width - 10,
    width: '100%',
    height: 130,
    marginVertical: 5,
    borderLeftWidth: 8,
    borderLeftColor: colors.blueQpay,
    marginHorizontal: 5,
  },
  cardChecked: {
    borderLeftColor: colors.green,
  },
  checkboxBase: {
    width: 24,
    height: 24,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 4,
    borderWidth: 1,
    borderColor: colors.gray,
    backgroundColor: 'transparent',
  },
  checkboxChecked: {
    borderColor: colors.green,
    backgroundColor: colors.green,
  },
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
  },
  checkboxLabel: {
    marginLeft: 8,
    fontWeight: 500,
    fontSize: 18,
  },
  description: {
    flex: 1,
    marginHorizontal: 10
  },
  sublime: {
    textDecorationLine: 'line-through',
  },
  topView: {
    flexDirection: 'row',
    flex: 0.6,
    alignItems: 'center',
    paddingHorizontal: 15
  },
  bottomView: {
    flexDirection: 'row',
    flex: 0.4,
    borderTopWidth: .5,
    borderTopColor: colors.gray,
    paddingHorizontal: 15,
    alignItems: 'center'
  }
})
