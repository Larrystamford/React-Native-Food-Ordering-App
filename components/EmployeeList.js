import React, {Component} from 'react';
import { View, Text } from 'react-native';

import Employee from './Employee';

export default class EmployeeList extends Component {
  renderEmployees() {
    if (this.props.employees.length === 0) {
      return <Text> No Employees :(</Text>
    } else {
      return this.props.employees.map((employee) => {
        const {address, name, position} = employee;
        return (
          <Employee address={address} name={name} position={position} key={name}/>
        )
      })
    }

  }
  render() {
    return (
      <View>{this.renderEmployees()}</View>
    )
  }
}
