import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import { useQuery } from '@apollo/client';
import AppBarTab from './AppBarTab';
import Constants from 'expo-constants';
import theme from '../theme';
import { GET_LOGGED_USER } from '../graphql/queries';

const styles = StyleSheet.create({
  scrollView: {
    paddingTop: Constants.statusBarHeight,
    backgroundColor: theme.colors.appBarBackground,
    display: 'flex',
    flexDirection: 'row',
    maxHeight: 100
  },
  appBarTitle: {
    color: 'white',
    fontWeight: theme.fontWeights.bold,
    fontSize: 22,
    padding: 20,
  }
});

const AppBar = () => {
  const { data } = useQuery(GET_LOGGED_USER, {
    fetchPolicy: 'cache-and-network',
  });

  return (
    <ScrollView horizontal style={styles.scrollView}>
      {data && data.authorizedUser !== null &&
        <AppBarTab title="Repositories" path={"/"} />
      }
      {data && data.authorizedUser === null ? 
        <AppBarTab title="Sign In" path={"/signin"} /> : 
        <AppBarTab title="Sign Out" path={"/signout"} />
      }
    </ScrollView>
  );
};

export default AppBar;