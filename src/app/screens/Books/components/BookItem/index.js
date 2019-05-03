import React, { useCallback } from 'react';
import { View, Image, Text, TouchableHighlight } from 'react-native';
import styles from './styles';

function BookItem({ book, navigation }) {
  const img = book.image_url === null ? require('../../../../assets/img-placeholder.jpg') : { uri: book.image_url };
  const navigateDetail = useCallback(() => {
    navigation.navigate('BookDetail', { book, img });
  }, [navigation, book]);
  return (
    <TouchableHighlight onPress={navigateDetail}>
      <View style={styles.booksItem}>
        <Image
          style={styles.bookImage}
          source={img}
        />
        <View style={styles.textContainer}>
          <Text style={styles.title}>{ book.title }</Text>
          <Text>{ book.author }</Text>
        </View>
      </View>
    </TouchableHighlight>
  );
}

export default BookItem;
