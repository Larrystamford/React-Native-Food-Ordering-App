import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  entry: {
    width: '75%'
  },
  text: {
    width: '75%'
  },
  item_style: {
    height: 200,
    width: 200,
    // borderWidth: 1,
    // borderColor: '#ff00ff'
  },
  container: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-between',
    margin: 10
  },
  button: {
    backgroundColor: 'green',
    width: '40%',
    height: 40
  },
  counter_button: {
    justifyContent: 'center',
    alignItems: 'flex-end',
    width: 50,
    flex: 0
  }
})
