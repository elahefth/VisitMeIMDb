import React, {Component} from 'react';
import {connect} from 'react-redux';
import i18n from 'i18n-js';
import {StyleSheet, View, Text} from 'react-native';

// ------------------------------------ Component ------------------------------------
class SearchScreen extends Component {
  static navigationOptions = ({navigation}) => ({
    title: i18n.t('navigation.home'),
  });

  state = {};

  render() {
    return (
      <View>
        <Text>search</Text>
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);

// ------------------------------------ Styles ------------------------------------
const styles = StyleSheet.create({});
