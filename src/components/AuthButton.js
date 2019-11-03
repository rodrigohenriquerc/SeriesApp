import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const AuthButton = props => {

  const { title, handleEvent, second } = props;

  return (
    <View style={second ? styles.second : null}>
      <Button
        title={title}
        color='#303030'
        onPress={() => handleEvent()}
      />
    </View>
  );

}

styles = StyleSheet.create({
  second: {
    marginTop: 30
  }
});

export default AuthButton;