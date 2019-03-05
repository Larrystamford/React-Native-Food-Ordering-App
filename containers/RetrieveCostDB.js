import React, {Component} from 'react';
import {ScrollView, RefreshControl, Text, Button} from 'react-native';
import { NavigationEvents } from 'react-navigation';

import {db} from '../database/config';
import Monies from '../components/Monies';

// Can be done with getParam, https://reactnavigation.org/docs/en/params.html

class RetrieveCostDB extends Component {
  constructor(props) {
    super(props)
    this.state = {payload: []};
  }

  componentDidMount() {
    const moniesRef = db.ref('/cost');
    //retrieve DBContainer
    moniesRef.on('value', (snapshot) => {
            let data = snapshot.val();
            let payload = Object.values(data);
            console.log(payload);
            const costs = payload.map((data) => {
              return data["total_cost"]
            })
            // console.log(costs)
            const cost = costs.reverse()
            this.setState({payload: cost[0]});
         });

  }

  render(){

    return (
      <ScrollView>
        <Monies cost={this.state.payload}/>
        <Button
          title="Go Back"
          color="green"
          onPress={() => this.props.navigation.navigate('Home')}
        />
      </ScrollView>
    )

  }
}

export default RetrieveCostDB
