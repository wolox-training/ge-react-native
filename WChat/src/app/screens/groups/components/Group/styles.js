import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  groupContainer: {
    flex: 1,
    flexDirection: 'row',
    height: 30,
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 5,
    marginBottom: 5,
    borderBottomColor: '#AAA',
    borderBottomWidth: 1,
  },
  groupDataContainer: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  groupName: {
    fontWeight: 'bold',
    color: '#111',
  },
});

export default styles;