import React, { Component } from 'react';
import {
  Image,
  TouchableOpacity,
  StyleSheet
} from 'react-native';

class LikeButton extends Component {
  render() {
    const source = this.props.isLiked
      ? require('../img/liking.png')
      : require('../img/like.png');
    return (
      <TouchableOpacity onPress={this.props.onPress}>
        <Image source={source} />
      </TouchableOpacity>
    );
  }
}

export default LikeButton;
