import React, {Component} from 'react';
import {ScrollView, RefreshControl, Text, Button} from 'react-native';
import { NavigationEvents } from 'react-navigation';

import {db} from '../database/config';
import EmployeeList from '../components/EmployeeList';

class RetrieveDBContainer extends Component {
  constructor(props) {
    super(props)
    this.state = {payload: []};
    this.getEmployees = this.getEmployees.bind(this);
  }

  componentDidMount() {
    this.getEmployees()
  }

  getEmployees() {
    const employeesRef = db.ref('/employees');
    //retrieve DBContainer
    employeesRef.on('value', (snapshot) => {
            let data = snapshot.val();
            let payload = Object.values(data);
            this.setState({payload: payload});
         });

  }
  render(){

    return (
      <ScrollView>
        <EmployeeList employees={this.state.payload} />
        <Button
          title="Go Back"
          color="green"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </ScrollView>
    )

  }
}

export default RetrieveDBContainer
