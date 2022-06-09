import React from 'react';
import Text from './Text';
import FormikTextInput from './FormikTextInput';
import {Pressable, View, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  reviewform: {
    backgroundColor: 'white',
    padding: 20
  },
  submitbtn: {
    backgroundColor: theme.colors.primary,
    color: 'white',
    padding:10,
    borderRadius: 3,
    textAlign: 'center'
  }
});

const ReviewForm = ({onSubmit}) => {
  return ( 
    <View style={styles.reviewform}>
      <FormikTextInput name="username" placeholder="Repository owner name" />
      <FormikTextInput name="repository" placeholder="Repository name" />
      <FormikTextInput name="rating" placeholder="Rating between 0 and 100" keyboardType="numeric" />
      <FormikTextInput name="review" placeholder="Review" multiline/>
      <Pressable onPress={onSubmit}>
        <Text fontWeight='bold' style={styles.submitbtn}>Create a review</Text>
      </Pressable>
    </View>
  );
};
 
export default ReviewForm;