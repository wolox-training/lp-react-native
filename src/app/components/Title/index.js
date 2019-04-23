import React from 'react'
import { View, Text, StyleSheet } from 'react-native';

function Title({ title }) {
  return (
    <View style={styles.titleContainer}>
      <Text  style={styles.titleText}>{title}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  titleContainer: {
    height: 40,
    backgroundColor: '#87ceeb',
    justifyContent: 'center',
    alignItems: 'center',
  },
  titleText: {
    color: 'white',
  }
});

export default Title;
