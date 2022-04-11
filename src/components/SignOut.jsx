import React from 'react';
import {Pressable, View, StyleSheet } from 'react-native';
import { useHistory } from 'react-router-native';
import Text from './Text';
import theme from '../theme';
import useAuthStorage from '../hooks/useAuthStorage';
import { useApolloClient } from '@apollo/client';

const styles = StyleSheet.create({
  signoutbtn: {
    backgroundColor: theme.colors.primary,
    color: 'white',
    padding:10,
    borderRadius: 3,
    textAlign: 'center'
  }
});

const SignOut = () => {
  let history = useHistory();
  const authStorage = useAuthStorage();
  const apolloClient = useApolloClient();

  const onSubmit = async () => {
    await authStorage.removeAccessToken();
    apolloClient.resetStore();
    history.push('/signin');
  };

  return (
    <View style={styles.signoutbtn}>
      <Pressable onPress={onSubmit}>
        <Text fontWeight='bold' style={styles.signoutbtn}>Click to sign out</Text>
      </Pressable>
    </View>
  );
};

export default SignOut;