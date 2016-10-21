import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
} from 'react-native';

import { BASE_IMG_URL } from '../../root/constants';
import RatingText from '../rating_text';

class MovieCell extends Component {
  render() {
    const backdropImageUrl = BASE_IMG_URL + this.props.movie.backdrop_path
    const posterImageUrl = BASE_IMG_URL + this.props.movie.poster_path
    const overviewText = this.props.movie.overview.substring(0, 160) + '...'

    return (
      <View style={styles.movieCell}>
        <Image
        style={{height: 220}}
        source={{uri: backdropImageUrl}}>
          <View style={styles.badge}>
            <Image
              style={styles.posterImage}
              source={{uri: posterImageUrl}} />
            <View style={styles.moreInfo}>
              <Text style={styles.movieTitle}>{this.props.movie.original_title}</Text>
              <RatingText vote_count={this.props.movie.vote_count} vote_average={this.props.movie.vote_average} onLike={this.props.onLike}/>
              <Text style={styles.movieOverview}>{overviewText}</Text>
            </View>
          </View>
        </Image>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  movieCell: {
    paddingTop: 2,
    paddingBottom: 2,
  },
  details: {
    padding: 10,
  },
  badge: {
    position: 'absolute',
    left: 5,
    bottom: 5,
    paddingRight: 5,
    flexDirection: 'row',
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  posterImage: {
    height: 105,
    width: 70,
    left: 5,
    alignItems: 'center',
    alignSelf: 'center',
  },
  moreInfo: {
    flex: 1,
    flexDirection: 'column',
    flexWrap: 'wrap',
    paddingBottom: 10,
  },
  movieTitle: {
    color: 'white',
    paddingLeft: 10,
    paddingTop: 10,
    fontSize: 13,
    fontFamily: 'menlo',
  },
  movieOverview: {
    color: 'grey',
    paddingLeft: 10,
    paddingRight: 10,
    fontSize: 11,
    fontFamily: 'menlo',
  }

});

export default MovieCell;
