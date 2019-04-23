import React, { Component } from 'react'
import { connect } from 'react-redux';
import { View, FlatList, StyleSheet } from 'react-native';
import {
  addTodo as addTodoAction,
  removeTodo as removeTodoAction,
  removeSelectedTodos as removeSelectedTodosAction,
  selectTodo as selectTodoAction,
} from '../../../redux/todo/actions';
import ToDoItem from './components/ToDoItem';
import AddInput from './components/AddInput';
import RemoveSelected from './components/RemoveSelected';

class ToDo extends Component {
  keyExtractor = item => item.id

  renderItem = ({ item }) => {
    const { selectTodo, removeTodo } = this.props;

    return (
      <ToDoItem
        selectTodo={selectTodo}
        removeTodo={removeTodo}
        {...item}
      />
    );
  }

  render() {
    const {
      todos,
      addTodo,
      removeSelectedTodos,
    } = this.props;

    return (
      <View style={styles.todoContainer}>
        <AddInput addTodo={addTodo}/>
        <FlatList
          style={styles.listContainer}
          data={todos}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
        <RemoveSelected removeSelectedTodos={removeSelectedTodos}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  todoContainer: {
    flex: 1,
    backgroundColor: 'white',
  },
  listContainer: {
    paddingHorizontal: 10
  }
});

const mapStateToProps = state => ({
  todos: state.todos.todos,
});

const mapDispatchToProps = dispatch => ({
  addTodo: todo => dispatch(addTodoAction(todo)),
  removeTodo: todo => dispatch(removeTodoAction(todo)),
  selectTodo: todoId => dispatch(selectTodoAction(todoId)),
  removeSelectedTodos: () => dispatch(removeSelectedTodosAction()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ToDo);
