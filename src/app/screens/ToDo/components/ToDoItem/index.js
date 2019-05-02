import React, { useCallback } from 'react'
import { View, Text, CheckBox } from 'react-native';
import Icon from "react-native-vector-icons/Ionicons";
import styles from './styles';

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

export default ToDoItem;
