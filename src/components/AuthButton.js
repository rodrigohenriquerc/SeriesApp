import React from 'react';
import { View, Button, StyleSheet } from 'react-native';

const AuthButton = props => {

  const { title, handleEvent, second, red, bottom } = props;

  return (
    <View style={[second ? styles.second : null, bottom ? styles.bottom : null]}>
      <Button
        title={title}
        color={red ? 'red' : '#303030'}
        onPress={() => handleEvent()}
      />
    </View>
  );

}

styles = StyleSheet.create({
  second: {
    marginTop: 30
  },

  bottom: {
    marginBottom: 50
  }
});

export default AuthButton;