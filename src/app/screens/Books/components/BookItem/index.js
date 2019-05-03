import React from 'react';
import { View, Image, Text } from 'react-native';
import styles from './styles';

function BookItem({ title, author, image_url }) {
  const img = image_url === null ? require('../../../../assets/img-placeholder.jpg') : { uri: image_url };
  return (
    <View style={styles.booksItem}>
      <Image
        style={styles.bookImage}
        source={img}
      />
      <View style={styles.textContainer}>
        <Text style={styles.title}>{ title }</Text>
        <Text>{ author }</Text>
      </View>
    </View>
  );
}

export default BookItem;
