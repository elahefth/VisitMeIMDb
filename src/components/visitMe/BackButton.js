import React from 'react';
import {StyleSheet, TouchableOpacity} from 'react-native';

import Back from './../../assets/svgs/arrow_left.svg';
import variables from './../main/_variables';

const BackButton = (props) => {
  return (
    <TouchableOpacity style={styles.container} onPress={props.onPress}>
      <Back width={24} height={24} fill={'#fff'} style={styles.back} />
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    width: variables.deviceWidth / 9,
    height: variables.deviceWidth / 9,
    backgroundColor: '#171717',
    justifyContent: 'center',
    alignItems: 'center',

    borderRadius: 8,
  },
});
export default BackButton;
