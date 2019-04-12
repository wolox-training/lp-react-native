import React, { useCallback } from 'react'
import { View, Text, StyleSheet, CheckBox } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";

function ToDoItem({
  name,
  id,
  isSelected,
  selectTodo,
  removeTodo,
}) {
  const handleChange = useCallback(
    () => {
      selectTodo(id);
    },
    [id],
  );

  const handleDelete = useCallback(
    () => {
      removeTodo(id)
    },
    [id],
  );

  return (
    <View style={styles.todoItem}>
      <Text style={styles.text}>{name}</Text>
      <View style={styles.actions}>
        <CheckBox
          value={isSelected}
          onValueChange={handleChange}
        />
        <Icon
          onPress={handleDelete}
          name="md-close"
          size={24}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  todoItem: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 40,
    backgroundColor: '#eaf2f7',
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

export default ToDoItem;
