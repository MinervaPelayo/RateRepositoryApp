import React from 'react';
import { View, StyleSheet } from 'react-native';
import { Route, Switch } from 'react-router-native';
import RepositoryList from './RepositoryList';
import SingleRepository from './SingleRepository';
import SignIn from './SignIn';
import SignOut from './SignOut';
import AppBar from './AppBar';
import theme from '../theme';
import Review from './Review';

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
        <Route path="/signout" component={SignOut} />
        <Route path="/review" component={Review} />
        <Route path="/:id" component={SingleRepository} />
      </Switch>
    </View>
  );
};

export default Main;