import { StyleSheet } from 'react-native';
import { todoItemBackground } from '../../../../constants/colors';

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
    backgroundColor: todoItemBackground,
    elevation: 4,
    paddingHorizontal: 8,
    borderRadius: 4,
    marginBottom: 5,
  },
  text: {
    flex: 3,
  },
  actions: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-evenly',
    flex: 1,
  }
});

export default styles;
