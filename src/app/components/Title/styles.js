import { StyleSheet } from 'react-native';
import { colors } from '../../constants/colors';

const styles = StyleSheet.create({
  titleContainer: {
    height: 40,
    backgroundColor: colors.blueBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: colors.white,
  }
});

export default styles;