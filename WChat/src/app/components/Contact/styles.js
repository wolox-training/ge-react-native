import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  contactContainer: {
    flex: 1,
    flexDirection: 'row',
    paddingRight: 10,
    paddingLeft: 10,
    paddingBottom: 5,
    marginBottom: 5,
    borderBottomColor: '#AAA',
    borderBottomWidth: 1,
  },
  contactImage: {
    width: 50,
    height: 50,
    marginRight: 10,
    borderRadius: 50,
    borderWidth: 0.5,
    borderColor: '#d6d7da',
  },
  contactDataContainer: {
    flex: 4,
    flexDirection: 'column',
    justifyContent: 'space-around'
  },
  contactName: {
    fontWeight: 'bold',
    color: '#111',
  },
  contactLastMessage: {
    color: '#AAA',
  },
});

export default styles;