import React, { Component } from 'react';
import {
  ScrollView,
  View
} from 'react-native';

import MovieList from './movie_list'

class TabView1 extends Component {
  state = {
    selectedTab: 'view1',
  }

  movieList() {
    console.log(this.state)
    return this.state.now_playing ? <MovieList movies={this.state.now_playing} /> : <View />
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

export default TabView1;
