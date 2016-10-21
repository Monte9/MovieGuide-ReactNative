/* @flow */

import React, { Component } from 'react';
import { connect } from 'react-redux'
import {
  AppRegistry,
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

import { ENDPOINTS, IMDB_API, API_KEY } from '../root/constants';

import { saveMovies, setSelectedTab } from '../actions/movies'

import TabView1 from '../components/tabs/tab_view_1'
import TabView2 from '../components/tabs/tab_view_2'
import TabView3 from '../components/tabs/tab_view_3'
import TabView4 from '../components/tabs/tab_view_4'
import TabView5 from '../components/tabs/tab_view_5'

class App extends Component {
  setup() {
    ENDPOINTS.map(
      endpoint => {
        fetch(IMDB_API + endpoint + API_KEY)
          .then(response => response.json())
          .then((data) => {
            this.props.dispatch( saveMovies(endpoint, data.results) )
          });
      }
    )
    this.props.dispatch( setSelectedTab( "view1" ) )
  }

  onPressNavigationButtons() {
    console.log("Navigation bar button pressed")
  }

  render() {
    this.setup()

    console.log(this.props)

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
        <TabNavigator tabBarStyle={styles.tabBar}>
          <TabNavigator.Item
            selected={this.props.selectedTab === 'view1'}
            title="View 1"
            renderIcon={() => <Image source={require('../img/star_empty.png')} />}
            renderSelectedIcon={() => <Image source={require('../img/liking.png')} />}
            titleStyle={styles.tabTitle}
            tabStyle={styles.tab}
            onPress={() => {
              this.props.dispatch( setSelectedTab( "view1" ) )
            }}>
            <TabView1 />
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.props.selectedTab === 'view2'}
            renderIcon={() => <Image source={require('../img/star_empty.png')} />}
            renderSelectedIcon={() => <Image source={require('../img/liking.png')} />}
            title="View 2"
            titleStyle={styles.tabTitle}
            tabStyle={styles.tab}
            onPress={() => {
              this.props.dispatch( setSelectedTab( "view2" ) )
            }}>
            <TabView2 />
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.props.selectedTab === 'view3'}
            renderIcon={() => <Image source={require('../img/star_empty.png')} />}
            renderSelectedIcon={() => <Image source={require('../img/liking.png')} />}
            tabStyle={styles.addButton}
            onPress={() => {
              this.props.dispatch( setSelectedTab( "view3" ) )
            }}>
            <TabView3 />
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.props.selectedTab === 'view4'}
            renderIcon={() => <Image source={require('../img/star_empty.png')} />}
            renderSelectedIcon={() => <Image source={require('../img/liking.png')} />}
            title="View 4"
            titleStyle={styles.tabTitle}
            tabStyle={styles.tab}
            onPress={() => {
              this.props.dispatch( setSelectedTab( "view4" ) )
            }}>
            <TabView4 />
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.props.selectedTab === 'view5'}
            renderIcon={() => <Image source={require('../img/star_empty.png')} />}
            renderSelectedIcon={() => <Image source={require('../img/liking.png')} />}
            title="View 5"
            titleStyle={styles.tabTitle}
            tabStyle={styles.tab}
            onPress={() => {
              this.props.dispatch( setSelectedTab( "view5" ) )
            }}>
            <TabView5 />
          </TabNavigator.Item>
        </TabNavigator>
      </View>
    );
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
  tabContent: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#000'
  },
  tabBar: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#294163',
  },
  tab:{
    marginTop: 2,
  },
  addButton:{
    marginBottom: -5,
    bottom: -5
  },
  tabTitle: {
    color: '#ffffff',
  },
});

export default connect()( App )
