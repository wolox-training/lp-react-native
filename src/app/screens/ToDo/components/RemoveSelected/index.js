import React from 'react'
import {
  View,
  TouchableHighlight,
  Text,
} from 'react-native';
import styles from './styles';

function RemoveSelected({ removeSelectedTodos }) {
  return (
    <View style={styles.deleteContainer}>
      <TouchableHighlight onPress={removeSelectedTodos}>
        <Text style={styles.button}>
          Remove selected items
        </Text>
      </TouchableHighlight>
    </View>
  )
}

export default RemoveSelected;
