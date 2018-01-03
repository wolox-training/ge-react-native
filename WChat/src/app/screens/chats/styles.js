import { StyleSheet } from 'react-native';
import { LIGHT_GREY} from '../../../utils/colors';

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
});

export default styles;