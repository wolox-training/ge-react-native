import { StyleSheet } from 'react-native';
import { LIGHT_GREY, GREEN, RED } from '../../../utils/colors';

const styles = StyleSheet.create({
  container: {
   flex: 1,
   paddingTop: 22
  },
  sectionHeader: {
    paddingTop: 2,
    paddingRight: 10,
    paddingBottom: 2,
    paddingLeft: 10,
    fontSize: 14,
    fontWeight: 'bold',
    backgroundColor: 'rgba(247,247,247,1.0)',
    borderBottomColor: LIGHT_GREY,
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
    color: GREEN,
  },
  offlineBullet: {
    fontSize: 14  ,
    color: RED,
  }
});

export default styles;