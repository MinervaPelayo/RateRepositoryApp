import React from 'react';
import { View, StyleSheet } from 'react-native';
import ItemHeader from './ItemHeader';
import ItemFooter from './ItemFooter';

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: 'white',
  }
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <ItemHeader item={item} />
      <ItemFooter item={item}/>
    </View>
  );
};

export default RepositoryItem;