import React from 'react';
// import PropTypes from 'prop-types';
// import { connect } from 'react-redux';
import { View, StyleSheet, FlatList, Text } from 'react-native';
// import { fetchOrders } from '../../src/actions';
import colors from '../src/constants/colors';
import AddOrders from '../components/AddOrders';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  card: {
    flex: 1,
    borderWidth: 1,
    borderColor: colors.lightGrey,
    padding: '1%',
    margin: '1%',
    elevation: 2,
    backgroundColor: colors.white,
  },
  divider: {
    margin: '1%',
  },
  heading: {
    color: colors.primaryColor,
    fontSize: 16,
  },
  item: {
    color: colors.blue,
    fontSize: 16,
  },
});

export default class OrderingScreen extends React.Component {
  constructor(props) {
    super(props)
  }


  mapItems = items => items.map(item => (
    <View>
      <Text>{`ItemId: ${item.id}`}</Text>
      <Text>{`Price: Rs. ${item.price}`}</Text>
    </View>
  ))

  
  render() {

    return (
      <View style={styles.container}>
        
        <AddOrders navigation={this.props.navigation} />
      </View>
    );
  }
}

// OrdersList.propTypes = {
//   ordersList: PropTypes.arrayOf(PropTypes.object).isRequired,
//   fetchOrders: PropTypes.func.isRequired,
// };

// const mapStateToProps = ({ orders }) => ({ ordersList: orders.ordersList });

// export default connect(mapStateToProps, { fetchOrders })(OrdersList);
