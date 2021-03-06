import React from 'react';
import { TextInput as NativeTextInput, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  inputError: {
    borderColor: '#d73a4a'
  }
});

const TextInput = ({ style, error, ...props }) => {
  let textInputStyle = [style];

  if(error){
    textInputStyle.push(styles.inputError);
  }

  return <NativeTextInput style={textInputStyle} {...props} />;
};

export default TextInput;