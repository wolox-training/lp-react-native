import React from 'react'
import { View, Text } from 'react-native';
import styles from './styles';

function Title({ title }) {
  return (
    <View style={styles.titleContainer}>
      <Text  style={styles.titleText}>{title}</Text>
    </View>
  )
}

export default Title;
