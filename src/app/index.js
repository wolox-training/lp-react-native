import React from 'react';
import { Provider } from 'react-redux';
import { StyleSheet, View } from 'react-native';

import ToDo from './screens/ToDo';
import store from '../redux/store';
import Title from './components/Title';

const title = 'ToDo App';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Title title={title}/>
        <ToDo />
      </View>
    </Provider>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
});