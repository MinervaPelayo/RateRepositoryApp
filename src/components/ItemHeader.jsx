import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import theme from '../theme';
import Text from './Text';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  avatar: {
    width: 50,
    height: 50,
    borderRadius: 5,
  },
  avatarContainer: {
    paddingRight: 15,
  },
  infoContainer: {
    display: 'flex',
    flexShrink: 1,
    alignItems: 'flex-start'
  },
  languageText: {
    color: 'white',
    backgroundColor: theme.colors.primary,
    padding: 5,
    borderRadius: 5
  }
});

const ItemHeader = ({ item }) => {
  return (
    <View style={styles.container}>
      <View style={styles.avatarContainer}>
        <Image style={styles.avatar} source={{ uri: item.ownerAvatarUrl }} />
      </View>
      <View style={styles.infoContainer}>
        <Text testID="repositoryFullName" fontWeight="bold" fontSize="subheading">{item.fullName}</Text>
        <Text testID="repositoryDescription" color="textSecondary">{item.description}</Text>
        <View>
          <Text testID="repositoryLanguage" style={styles.languageText}>{item.language}</Text>
        </View>
      </View>
    </View>
  );
};

export default ItemHeader;