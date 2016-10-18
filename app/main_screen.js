/* @flow */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import { fetch } from 'fetch';
import { IMDB_API } from './data';
import MovieCell from './components/movie_cell'

class MainScreen extends Component {
  state = {
    movies: [],
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

  render() {
    const list = this.state.movies.map(
      movie => <MovieCell key={movie.id} movie={movie} onLike={() =>    this.onLike(movie.original_title)}></MovieCell>
    );

    return (
      <ScrollView style={styles.scrollView}>
        <View style={styles.container}>
          <View style={{marginTop: 20}}>
            {list}
          </View>
        </View>
      </ScrollView>
    );
  }

  componentDidMount() {
    fetch(IMDB_API)
      .then(response => response.json())
      .then((data) => {
        this.setState({movies: data.results})
      });
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    backgroundColor: 'rgba(0,0,0,0.8)',
  }
});

export default MainScreen;
