import React from 'react';
import { View, Text } from 'react-native';

export default class SearchScreen extends React.Component {
  static navigationOptions = {
    title: 'Search',
  };

  render() {
    return (
      <View>
        <Text>
          Search Screen
        </Text>
      </View>
    );
  }
}