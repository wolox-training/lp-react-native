import { StyleSheet } from 'react-native';
import { boderColor, redText } from '../../../../constants/colors';

const styles = StyleSheet.create({
  deleteContainer: {
    borderTopWidth: 1,
    borderTopColor: boderColor,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    color: redText,
  }
});

export default styles;
