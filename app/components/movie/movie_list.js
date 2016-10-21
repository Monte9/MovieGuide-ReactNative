import React, { Component } from 'react';
import {
  Alert,
} from 'react-native';

import MovieCell from './movie_cell'

class MovieList extends Component {
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
    return (
      this.props.movies.map(
      movie =>
      <MovieCell
        key={movie.id}
        movie={movie}
        onLike={() => this.onLike(movie.original_title)} />
      )
    )
  }
}

export default MovieList;
