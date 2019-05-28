import React from 'react';
import { View, Text, Image } from 'react-native';
import styles from './styles';

function BookDetail ({ navigation }) {
  const book = navigation.getParam('book');
  const img = navigation.getParam('img');
  return (
    <View style={styles.detailsContainer}>
      <Text style={styles.title}>{ `Title: ${book.title}` }</Text>
      <View style={styles.info}>
        <View style={styles.imgContainer}>
          <Image
            style={styles.bookImage}
            source={img}
          />
        </View>
        <View style={styles.dataContainer}>
          <Text>{ `Author: ${book.author}` }</Text>
          <Text>{ `Year: ${book.year}` }</Text>
          <Text>{ `Publisher: ${book.publisher}` }</Text>
          <Text>{ `Genre: ${book.genre}` }</Text>
        </View>
      </View>
    </View>
  );
}

export default BookDetail;
