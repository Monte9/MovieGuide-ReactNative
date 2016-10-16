/* @flow */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
} from 'react-native';
import { fetch } from 'fetch';
import { IMDB_API } from './data';

class MainScreen extends Component {
  render() {
    return (
      <View style={styles.container}>
        <View style={{marginTop: 20}}>
          <Text style={styles.helloText}>Hello, fox!</Text>
        </View>
      </View>
    );
  }

  componentDidMount() {
    fetch(IMDB_API)
      .then(response => response.json())
      .then((data) => {
        console.log('Response from API:', data);
      });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5FCFF',
  },
  helloText: {
    fontSize: 14,
  },
});

export default MainScreen;
