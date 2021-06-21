import React from 'react';
import { View, StyleSheet } from 'react-native';
import FooterSection from './FooterSection';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-around',
  }
});

const ItemFooter = ({ item }) => {
  return (
    <View style={styles.container}>
      <FooterSection label={"Stars"} count={item.stargazersCount} />
      <FooterSection label={"Forks"} count={item.forksCount} />
      <FooterSection label={"Reviews"} count={item.reviewCount} />
      <FooterSection label={"Rating"} count={item.ratingAverage} />
    </View>
  );
};

export default ItemFooter;