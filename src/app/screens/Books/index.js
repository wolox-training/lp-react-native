import React, { Component } from 'react';
import { View, FlatList } from 'react-native';
import books from '../../constants/books';
import BookItem from './components/BookItem';
import styles from './styles';

class Books extends Component {
  keyExtractor = item => item.id.toString()

  renderItem = ({ item }) => {
    return (
      <BookItem
        {...item}
      />
    );
  }

  render () {
    return (
      <View style={styles.booksContainer}>
        <FlatList
          style={styles.booksList}
          data={books}
          renderItem={this.renderItem}
          keyExtractor={this.keyExtractor}
        />
      </View>
    )
  }
}

export default Books;
