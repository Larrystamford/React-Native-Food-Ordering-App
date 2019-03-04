import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { createStackNavigator, createAppContainer } from 'react-navigation';

import HomeScreen from './screens/HomeScreen';
import AddEntryScreen from './screens/AddEntryScreen';
import ListScreen from './screens/ListScreen';
import OrderingScreen from './screens/OrderingScreen';



const AppNavigator = createStackNavigator({
  Home: {
    screen: HomeScreen
  },
  AddEntry: {
    screen: AddEntryScreen
  },
  List: {
    screen: ListScreen
  },
  Ordering: {
    screen: OrderingScreen
  }
});

const AppContainer = createAppContainer(AppNavigator);

export default class App extends React.Component {

  render() {
    return <AppContainer styles={styles.container}/>
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  }
});
