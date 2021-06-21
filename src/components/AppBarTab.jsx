import React from 'react';
import { StyleSheet, Text } from 'react-native';
import { Link } from "react-router-native";
import theme from '../theme';

const styles = StyleSheet.create({
  appBarTitle: {
    color: 'white',
    fontWeight: theme.fontWeights.bold,
    fontSize: 22,
    padding: 20,
  }
});

const AppBarTab = ({ title, path }) => {
  return (
      <Link to={path}>
        <Text style={styles.appBarTitle}>{title}</Text>
      </Link>
  );
};

export default AppBarTab;