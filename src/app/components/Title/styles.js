import { StyleSheet } from 'react-native';
import { blueBackground, white } from '../../constants/colors';

const styles = StyleSheet.create({
  titleContainer: {
    height: 40,
    backgroundColor: blueBackground,
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: white,
  }
});

export default styles;