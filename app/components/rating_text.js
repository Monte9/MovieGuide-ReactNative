import React, { Component } from 'react';
import {
  Text,
  View,
  Image,
  StyleSheet,
} from 'react-native';

import LikeButton from './like_button';

class RatingText extends Component {
  render() {
    const {vote_count, vote_average, onLike} = this.props;
    const stars = [];
    for (let star = 1; star <= 10; star++) {
      const source = vote_average >= star
        ? require('../img/star_full.png')
        : require('../img/star_empty.png');
      stars.push(<Image key={star} source={source} />);
    }
    return (
      <View style={styles.detailWrapper}>
        <Text style={styles.ratingText}>
          {stars}
          {' '}
          ({vote_count})
          {' '}
        </Text>
        <LikeButton isLiked={false} onPress={onLike} />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  detailWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    alignSelf: 'flex-start',
    paddingLeft: 10,
    justifyContent: 'center',
  },
  starImage: {
    paddingLeft: 10,
  },
  ratingText: {
    color: 'grey',
    paddingLeft: 10,
    fontSize: 11,
    fontFamily: 'menlo',
  }
});

export default RatingText;
