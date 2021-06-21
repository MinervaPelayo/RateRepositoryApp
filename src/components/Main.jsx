import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Route, Switch } from 'react-router-native';
import RepositoryList from './RepositoryList';
import SignIn from './SignIn';
import AppBar from './AppBar';
import theme from '../theme';

const styles = StyleSheet.create({
  main: {
    backgroundColor: theme.colors.mainBackground,
    flex: 1
  },
});

const Main = () => {
  return (
    <View style= {styles.main}>
      <AppBar />
      <Switch>
        <Route exact path="/" component={RepositoryList} />
        <Route path="/signin" component={SignIn} />
      </Switch>
    </View>
  );
};

export default Main;