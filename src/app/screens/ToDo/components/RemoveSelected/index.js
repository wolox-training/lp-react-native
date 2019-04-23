import React from 'react'
import {
  View,
  TouchableHighlight,
  Text,
  StyleSheet,
} from 'react-native';

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

const styles = StyleSheet.create({
  deleteContainer: {
    borderTopWidth: 1,
    borderTopColor: '#e8dfde',
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    color: '#db2f29',
  }
});

export default RemoveSelected;
