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

import TabNavigator from 'react-native-tab-navigator';

import TabView1 from '../components/tab_view_1'
import TabView2 from '../components/tab_view_2'

class App extends Component {
  state = {
    selectedTab: 'view1',
  }

  render() {
    return (
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
    );
  }
}

const styles = StyleSheet.create({
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
