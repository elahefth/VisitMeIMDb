import React, {Component} from 'react';
import {connect} from 'react-redux';
import i18n from 'i18n-js';
import {StyleSheet, View, Text} from 'react-native';

// ------------------------------------ Component ------------------------------------
class HomeScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: i18n.t('navigation.home'),
  });

  state = {};

  render() {
    return (
      <View>
        <Text>home</Text>
      </View>
    );
  }

  // ------------------------------------ Methods ------------------------------------
}

// ------------------------------------ Redux ------------------------------------
const mapStateToProps = (store) => ({
  // Ex. SettingReducer: store.SettingReducer,
});

const mapDispatchToProps = (dispatch) => ({
  // Ex. billInquiry: language => dispatch(setLanguage(language)),
});

export default connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

// ------------------------------------ Styles ------------------------------------
const styles = StyleSheet.create({});
