import React, { Component } from 'react';
import { Button, Input } from 'react-native-elements';
import { View, Text } from 'react-native';

import {db} from '../database/config';
import {styles} from './EntryFormStyles';

export default class AddEntry extends Component {
  constructor(props) {
    super(props);
    this.state = {name: '', address: '', position: '', submitMessage: ''};
    this.handleNameChange = this.handleNameChange.bind(this);
    this.handleAddressChange = this.handleAddressChange.bind(this);
    this.submitForm = this.submitForm.bind(this);

  }
  handleNameChange(name) {
    this.setState({name: name});
  }

  handleAddressChange(address) {
    this.setState({address: address});
  }

  submitForm() {
    this.setState({submitMessage: 'Loading'});
    // object destructuring
    const {name, address, position} = this.state;
    console.log(name)
    console.log(address)
    console.log(position)

    // pushing the data under the Employees category.
    // Then and Catch is to return results and catch errors
    db.ref('employees/').push({name, address, position}).then((data) => {
      this.setState({submitMessage: 'Successfully entered into database'})
    }).catch((error) => {
      this.setState({submitMessage: 'Error, try again later'})
    })
  }
  render() {
    return (
      <View>
        <Input
          placeholder='Name Here'
          containerStyle={styles.entry}
          errorStyle={{ color: 'red' }}
          errorMessage='Name is required'
          onChangeText={this.handleNameChange}
          />
          <Input
            placeholder='Address Here'
            containerStyle={styles.entry}
            onChangeText={this.handleAddressChange}
            />
          <Input
            placeholder='Employee Position Here'
            containerStyle={styles}
            onChangeText={(position) => this.setState({position})}
            />
        <Button raised rightIcon={{name: 'check'}} title='SUBMIT' onPress={this.submitForm}/>
        <Text>{this.state.submitMessage}</Text>
        <Button
          raised
          large
          title='Go back home'
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </View>
    )
  }
}
