import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Alert,
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import { fetch } from 'fetch';
import TabNavigator from 'react-native-tab-navigator';

import { IMDB_API } from '../root/constants';

import MovieCell from './movie_cell'

class TabView2 extends Component {
  state = {
    movies: [],
    selectedTab: 'view2',
  }

  onLike(title) {
    Alert.alert(
      `Liked: ${title}`,
      'Thanks for your feedback',
      [
        {text: 'Rate It!', onPress: () => console.log('User wants to rate it!'), style: 'cancel'},
        {text: 'Dismiss', onPress: () => console.log('Dismiss')},
      ]
    )
  }

  movieList() {
    return (
      this.state.movies.map(
      movie =>
      <MovieCell
        key={movie.id}
        movie={movie}
        onLike={() => this.onLike(movie.original_title)} />
      )
    )
  }

  render() {
    return (
      <ScrollView
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false} >
      </ScrollView>
    );
  }
}

const styles = StyleSheet.create({
});

export default TabView2;
