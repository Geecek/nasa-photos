import React from 'react';
import {
  View, Text, Platform, StyleSheet, Image,
} from 'react-native';

import TabBarIcon from '../components/TabBarIcon';
import Layout from '../constants/Layout';

import config from '../config/config';

const styles = StyleSheet.create({
  container: {
    marginTop: 25,
  },
  caption: {
    marginHorizontal: 12,
    marginVertical: 5,
  },
  emphasized: {
    fontWeight: 'bold',
    fontSize: 20,
  },
  separator: {
    marginTop: 15,
    borderBottomWidth: 1,
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
          <View style={styles.apod}>
            <Text style={[styles.emphasized, styles.caption]}>{todaysAPOD.date}</Text>
            <Image
              style={{ width: Layout.window.width, height: 300 }}
              source={{ uri: todaysAPOD.url }}
            />
            <Text style={[styles.emphasized, styles.caption]}>{todaysAPOD.title}</Text>
            <Text style={styles.caption}>{todaysAPOD.copyright}</Text>
            <View style={styles.separator} />
          </View>
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
