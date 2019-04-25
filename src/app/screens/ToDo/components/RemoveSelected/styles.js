import { StyleSheet } from 'react-native';
import { colors } from '../../../../constants/colors';

const styles = StyleSheet.create({
  deleteContainer: {
    borderTopWidth: 1,
    borderTopColor: colors.boderColor,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    color: colors.redText,
  }
});

export default styles;
