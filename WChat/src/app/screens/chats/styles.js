import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingLeft: 10,
    paddingRight: 10,
    paddingBottom: 2,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
    borderBottomColor: '#AAA',
    borderBottomWidth: 1,
    marginBottom: 5,
  },
  item: {
    padding: 10,
    fontSize: 18,
    height: 44,
  },
  onlineBullet: {
    fontSize: 14  ,
    color: 'green',
  },
  offlineBullet: {
    fontSize: 14  ,
    color: 'red',
  }
});

export default styles;