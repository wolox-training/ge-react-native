import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  filterAddBarContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    height: 40,
  },
  filterSearchIcon: {
    flex: 1, 
    textAlign: 'center'
  },
  filterTextInput: {
    flex: 8
  },
  filterClose: {
    flex: 1, 
    textAlign: 'center', 
    fontSize: 30,
  },
  filterAdd: {
    flex: 1, 
    textAlign: 'center'
  },
  hiddenNode: {
    display: 'none'
  }

});

export default styles;