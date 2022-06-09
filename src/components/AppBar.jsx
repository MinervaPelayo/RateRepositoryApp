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
  }
});

const AppBar = () => {
  const { data } = useQuery(GET_LOGGED_USER, {
    fetchPolicy: 'cache-and-network',
  });

  return (
    <ScrollView horizontal style={styles.scrollView}>
      {data && data.authorizedUser !== null &&
        <>
          <AppBarTab title="Repositories" path={"/"} />
          {/* <AppBarTab title="Create a review" path={"/review"} /> */}
        </>
      }
      {data && data.authorizedUser === null ? 
        <AppBarTab title="Sign Out" path={"/signout"} /> :
        <AppBarTab title="Sign In" path={"/signin"} />
      }
    </ScrollView>
  );
};

export default AppBar;