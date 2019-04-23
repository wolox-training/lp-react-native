import React, { Component } from 'react'
import { TextInput, StyleSheet } from 'react-native';

class AddInput extends Component {
  state = {
    text: ''
  };

  handleChange = text => this.setState({ text })

  handleSubmit = (event) => {
    const { addTodo } = this.props;
    addTodo(event.nativeEvent.text);
    this.setState({ text: '' });
  }

  render () {
    const { text } = this.state;

    return (
      <TextInput
        style={styles.addInput}
        placeholder="Write your toDo and press enter!"
        onChangeText={this.handleChange}
        value={text}
        onSubmitEditing={this.handleSubmit}
      />
    );
  }
}

const styles = StyleSheet.create({
  addInput: {
    width: '100%',
  },
});

export default AddInput;
