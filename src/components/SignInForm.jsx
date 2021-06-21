import React from 'react';
import Text from './Text';
import FormikTextInput from './FormikTextInput';
import {Pressable, View, StyleSheet } from 'react-native';
import theme from '../theme';

const styles = StyleSheet.create({
  signinform: {
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

const SignInForm = ({onSubmit}) => {
  return (
    <View style={styles.signinform}>
      <FormikTextInput name="username" placeholder="Username" />
      <FormikTextInput name="password" placeholder="Password" secureTextEntry />
      <Pressable onPress={onSubmit}>
        <Text fontWeight='bold' style={styles.submitbtn}>Sign in</Text>
      </Pressable>
    </View>
  );
};

export default SignInForm;