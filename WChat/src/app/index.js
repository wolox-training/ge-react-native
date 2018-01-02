import React, { Component } from 'react';
import {
  View
} from 'react-native';
import styles from './styles';
import RootNavigator from './components/RootNavigator';
import { connect } from 'react-redux';
import userActions from './redux/user/actions';


class App extends Component {

  componentDidMount(){
    this.props.initApp(this.props.username);
  }

  render(){
    return (
      <View style={styles.container}>
        <RootNavigator screenProps={{user: this.props.user, appLoading: this.props.appLoading}}/>
      </View>
    );
  }
}

const mapStateToProps = (store) => ({
  username: store.user.username,
  appLoading: store.user.appLoading
})

const mapDispatchToProps = (dispatch) => ({
  initApp: () => {
    dispatch(userActions.initApp());
  }
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
