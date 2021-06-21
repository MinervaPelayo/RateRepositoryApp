import React from 'react';
import { View, StyleSheet } from 'react-native';
import Text from './Text';

const cardFooterStyles = StyleSheet.create({
  section: {
    alignItems: 'center'
  }
});

const FooterSection = ({ label, count, ...props }) => {
  let newCount = count;

  if(count >= 1000){
    newCount = (count/1000).toFixed(1) + 'k'; 
  }

  return (
    <View style={cardFooterStyles.section} {...props}>
      <Text fontWeight="bold">{newCount}</Text>
      <Text color="textSecondary">{label}</Text>
    </View>
  );
};

export default FooterSection;