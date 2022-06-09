import React from 'react';
import { View, StyleSheet, Pressable, Linking } from 'react-native';
import ItemHeader from './ItemHeader';
import ItemFooter from './ItemFooter';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: 'white',
  },
  btn: {
    backgroundColor: theme.colors.primary,
    color: 'white',
    padding:15,
    borderRadius: 3,
    textAlign: 'center',
    marginTop: 10
  }
});

const RepositoryItem = ({ item }) => {
  return (
    <View style={styles.container}>
      <ItemHeader item={item} />
      <ItemFooter item={item}/>
      {item.url &&
        <Pressable onPress={()=> Linking.openURL(item.url)}>
          <Text fontWeight='bold' style={styles.btn}>Open in GitHub</Text>
        </Pressable>
      }
    </View>
  );
};

export default RepositoryItem;