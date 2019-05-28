import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  detailsContainer: {
    flex: 1,
    paddingHorizontal: 10,
  },
  title: {
    flexBasis: 50,
    textAlign: 'center',
    height: 50,
    fontSize: 20,
    fontWeight: 'bold'
  },
  info: {
    flex: 1,
    flexDirection: 'row'
  },
  imgContainer: {
    flex: 1,
    height: 250,
    marginRight: 5
  },
  bookImage: {
    height: '100%',
    width: '100%'
  },
  dataContainer: {
    flex: 1
  }
});

export default styles;
