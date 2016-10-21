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

class TabView1 extends Component {
  state = {
    movies: [],
    selectedTab: 'view1',
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

  onPressNavigationButtons() {
    console.log("Navigation bar button pressed")
    console.log(this.state)
  }

  render() {
    const list = this.state.movies.map(
      movie =>
      <MovieCell
        key={movie.id}
        movie={movie}
        onLike={() => this.onLike(movie.original_title)} />
    );

    return (
      <View style={styles.containerView}>
        <View>
          <StatusBar
            translucent={true} />
          <View style={styles.toolbar}>
            <TouchableOpacity onPress={() => this.onPressNavigationButtons()} >
              <Image
                style={styles.navigationButtonLeft}
                source={require('../img/liking.png')} />
            </TouchableOpacity>
            <View style={styles.toolbarTextView}>
              <Text style={styles.toolbarText}>MovieGuide</Text>
            </View>
            <TouchableOpacity onPress={() => this.onPressNavigationButtons()} >
              <Image
                style={styles.navigationButtonRight}
                source={require('../img/liking.png')} />
            </TouchableOpacity>
          </View>
        </View>
        <ScrollView
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false} >
          {list}
        </ScrollView>
      </View>
    );
  }

  componentDidMount() {
    console.log("Making API call now")
    fetch(IMDB_API)
      .then(response => response.json())
      .then((data) => {
        this.setState({movies: data.results})
      });
  }
}

const styles = StyleSheet.create({
  containerView: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.8)',
  },
  toolbar: {
    paddingTop: 20,
    height: 64,
    backgroundColor: 'rgba(0,0,0,0.8)',
    flexDirection: 'row',
  },
  toolbarTextView: {
    flex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    alignSelf: 'center',
  },
  toolbarText: {
    color: 'white',
    fontSize: 17,
  },
  navigationButtonLeft: {
    flex: 1,
    alignItems: 'flex-start'
  },
  navigationButtonRight: {
    flex: 1,
    alignItems: 'flex-end'
  },
});

export default TabView1;
