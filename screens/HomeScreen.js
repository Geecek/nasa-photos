import React from 'react';
import { View, Text, Platform } from 'react-native';

import TabBarIcon from '../components/TabBarIcon';

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'} />
    ),
  };

  render() {
    return (
      <View>
        <Text>Home Screen</Text>
      </View>
    );
  }
}
