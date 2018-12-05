import React from 'react';
import { View, Text } from 'react-native';

export default class SampleScreen extends React.Component {
  static navigationOptions = {
    title: 'Today',
  };

  render() {
    return (
      <View>
        <Text>
          Sample Screen
        </Text>
      </View>
    );
  }
}
