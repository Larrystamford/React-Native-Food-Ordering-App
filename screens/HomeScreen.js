import React, { Component } from 'react';
import {ImageBackground, View, Text, Button } from 'react-native';

export default class HomeScreen extends Component {
  render() {
    return (
      <ImageBackground source={require('./mala_background.jpg')} style={{width:'100%', height:'100%'}} resizeMode='cover'>
      <View>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          <Text></Text>
          
          {/* <Button
            title="Add an Item"
            onPress={() => this.props.navigation.navigate('AddEntry')}
          />
          <Button
            title="List of Items"
            color="green"
            onPress={() => this.props.navigation.navigate('List')}
          /> */}
          <Button
            title="Order Now"
            color="blue"
            onPress={() => this.props.navigation.navigate('Ordering')}
          />
      </View>
      </ImageBackground>
    );
  }
}
