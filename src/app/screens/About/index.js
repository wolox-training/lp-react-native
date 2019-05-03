import React from 'react'
import { Text, View } from 'react-native';
import styles from './styles';

function About() {
  return (
    <View style={styles.aboutContainer}>
      <Text style={styles.title}>About</Text>
      <Text>This is test App for learning React Native!</Text>
    </View>
  )
}

export default About;
