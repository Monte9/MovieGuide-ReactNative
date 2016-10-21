import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  ScrollView,
  View,
  Text,
} from 'react-native';

import MovieList from '../movie/movie_list'

class TabView4 extends Component {
  movieList() {
    return this.props.upcoming ? <MovieList movies={this.state.upcoming} /> : <View />
  }

  render() {
    return (
      <ScrollView
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false} >
        {this.movieList()}
      </ScrollView>
    );
  }
}

export default connect( )( TabView4 )
