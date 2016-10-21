import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  ScrollView,
  View,
  Text,
} from 'react-native';

import MovieList from './movie_list'

class TabView2 extends Component {
  movieList() {
    return this.props.now_playing ? <MovieList movies={this.state.now_playing} /> : <View />
  }

  render() {
    console.log("AYAYAYAYYAY 222222222")
    return (
      <ScrollView
        scrollEventThrottle={16}
        showsVerticalScrollIndicator={false} >
        <Text> Hello world </Text>
        {this.movieList()}
      </ScrollView>
    );
  }
}

export default connect( )( TabView2 )
