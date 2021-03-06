import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';
import theme from '../theme';

const styles = StyleSheet.create({
  container: {
    padding: 15,
    backgroundColor: 'white',
  },
  reviewContainer: {
    flexDirection: 'row',
  },
  rateContainer: {
    width: 50,
    height: 50,
    borderRadius: 50,
    borderColor: theme.colors.primary,
    borderStyle: 'solid',
    borderWidth: 2,
    marginRight: 15,
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  infoContainer: {
    display: 'flex',
    flexShrink: 1,
    alignItems: 'flex-start'
  },
});

const ReviewItem = ({ review }) => {
  return (
    <View style={styles.container}>
      <View style={styles.reviewContainer}>
        <View style={styles.rateContainer}>
          <Text fontWeight="bold" color="primary">{review.rating}</Text>
        </View>
        <View style={styles.infoContainer}>
          <Text fontWeight="bold" fontSize="subheading">{review.user.username}</Text>
          <Text color="textSecondary">{review.createdAt.slice(0,10)}</Text>
          <Text>{review.text}</Text>
        </View>
      </View>
    </View>
  );
};

export default ReviewItem;