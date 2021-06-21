import React from 'react';
import { StyleSheet, ScrollView } from 'react-native';
import AppBarTab from './AppBarTab';
import Constants from 'expo-constants';
import theme from '../theme';

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
  return (
    <ScrollView horizontal style={styles.scrollView}>
      <AppBarTab title="Repositories" path={"/"} />
      <AppBarTab title="Sign In" path={"/signin"} />
    </ScrollView>
  );
};

export default AppBar;