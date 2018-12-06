import React from 'react';
import { View, Text } from 'react-native';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
  };

  render() {
    return (
      <View>
        <Text>
          Home Screen
        </Text>
      </View>
    );
  }
}
