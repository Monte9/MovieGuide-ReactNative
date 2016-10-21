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
  StatusBar,
  TouchableOpacity,
} from 'react-native';

import { fetch } from 'fetch';
import TabNavigator from 'react-native-tab-navigator';

import { ENDPOINTS, IMDB_API, API_KEY } from '../root/constants';

import TabView1 from '../components/tab_view_1'
import TabView2 from '../components/tab_view_2'

class App extends Component {
  state = {
    selectedTab: 'view1',
  }

  componentDidMount() {
    ENDPOINTS.map(
      endpoint => {
        fetch(IMDB_API + endpoint + API_KEY)
          .then(response => response.json())
          .then((data) => {
            this.setState({[endpoint]: data.results})
          });
      }
    )
  }

  onPressNavigationButtons() {
    console.log("Navigation bar button pressed")
    console.log(this.state)
  }

  render() {
    console.log(this.state)
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
            selected={this.state.selectedTab === 'view1'}
            title="View 1"
            renderIcon={() => <Image source={require('../img/star_empty.png')} />}
            renderSelectedIcon={() => <Image source={require('../img/liking.png')} />}
            titleStyle={styles.tabTitle}
            tabStyle={styles.tab}
            onPress={() => {
                this.setState({
                    selectedTab: 'view1',
                });
            }}
            >
            <TabView1 />
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'view2'}
            renderIcon={() => <Image source={require('../img/star_empty.png')} />}
            renderSelectedIcon={() => <Image source={require('../img/liking.png')} />}
            title="View 2"
            titleStyle={styles.tabTitle}
            tabStyle={styles.tab}
            onPress={() => {
                this.setState({
                    selectedTab: 'view2',
                });
            }}
            >
            <TabView2 />
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'view3'}
            renderIcon={() => <Image source={require('../img/star_empty.png')} />}
            renderSelectedIcon={() => <Image source={require('../img/liking.png')} />}
            tabStyle={styles.addButton}
            onPress={() => {
                this.setState({
                    selectedTab: 'view3',
                });
            }}
            >
            //insert shit here
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'view4'}
            renderIcon={() => <Image source={require('../img/star_empty.png')} />}
            renderSelectedIcon={() => <Image source={require('../img/liking.png')} />}
            title="View 4"
            titleStyle={styles.tabTitle}
            tabStyle={styles.tab}
            onPress={() => {
                this.setState({
                    selectedTab: 'view4',
                });
            }}
            >
            // shit here
          </TabNavigator.Item>

          <TabNavigator.Item
            selected={this.state.selectedTab === 'view5'}
            renderIcon={() => <Image source={require('../img/star_empty.png')} />}
            renderSelectedIcon={() => <Image source={require('../img/liking.png')} />}
            title="View 5"
            titleStyle={styles.tabTitle}
            tabStyle={styles.tab}
            onPress={() => {
                this.setState({
                    selectedTab: 'view5',
                });
            }}
            >
            // shit here
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

export default App;
