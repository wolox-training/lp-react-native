import { StyleSheet } from 'react-native';
import { colors } from '../../../../constants/colors';

const styles = StyleSheet.create({
  booksItem: {
    height: 80,
    alignItems: 'center',
    flexDirection: 'row',
    paddingHorizontal: 10,
    borderBottomColor: colors.boderColor,
    borderBottomWidth: StyleSheet.hairlineWidth
  },
  bookImage: {
    height: 50,
    width: 50,
    borderRadius: 100
  },
  textContainer: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'center'
  },
  title: {
    fontWeight: 'bold'
  }
});

export default styles;
