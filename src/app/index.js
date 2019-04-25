import React from 'react';
import { Provider } from 'react-redux';
import { View } from 'react-native';

import store from '../redux/store';
import Title from './components/Title';
import AppNavigator from './navigation/AppNavigator';
import styles from './styles';

const title = 'ToDo App';

export default function App() {
  return (
    <Provider store={store}>
      <View style={styles.container}>
        <Title title={title}/>
        <AppNavigator />
      </View>
    </Provider>
  );
}
