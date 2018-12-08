import React from 'react';
import {
  View, Text, Platform, StyleSheet, Image,
} from 'react-native';

import TabBarIcon from '../components/TabBarIcon';
import Layout from '../constants/Layout';

import config from '../config/config';

const styles = StyleSheet.create({
  header: {
    textAlign: 'center',
    fontSize: 28,
    marginTop: 40,
  },
  caption: {
    textAlign: 'center',
  },
});

export default class HomeScreen extends React.Component {
  static navigationOptions = {
    title: 'Home',
    tabBarIcon: ({ focused }) => (
      <TabBarIcon focused={focused} name={Platform.OS === 'ios' ? 'ios-home' : 'md-home'} />
    ),
  };

  constructor(props) {
    super(props);
    this.state = {
      todaysAPOD: null,
    };
  }

  async componentDidMount() {
    // eslint-disable-next-line no-undef
    const { _bodyInit } = await fetch(
      `https://api.nasa.gov/planetary/apod?api_key=${config.API_KEY}`,
    );
    const todaysAPOD = JSON.parse(_bodyInit);
    this.setState({ todaysAPOD });
  }

  render() {
    const { todaysAPOD } = this.state;

    if (todaysAPOD) {
      return (
        <View style={styles.container}>
          <Text style={styles.header}>Browse Astronomy pictures of the day!</Text>
          <Image
            style={{ width: Layout.window.width, height: 300 }}
            source={{ uri: todaysAPOD.url }}
          />
          <Text style={styles.caption}>{todaysAPOD.title}</Text>
          <Text style={styles.caption}>{todaysAPOD.copyright}</Text>
          <Text style={styles.caption}>{todaysAPOD.date}</Text>
        </View>
      );
    }
    return (
      <View>
        <Text style={styles.header}>Browse Astronomy pictures of the day!</Text>
      </View>
    );
  }
}
