import React from 'react';
import {StyleSheet, Dimensions, TouchableOpacity} from 'react-native';
import Share from './../../assets/svgs/share.svg';

// ------------------------------------ Component ------------------------------------
const ShareButton = (props) => {
  return (
    <TouchableOpacity style={styles.container}>
      <Share width={24} height={24} fill={'#fff'} />
    </TouchableOpacity>
  );

  // ------------------------------------ Methods ------------------------------------
};

export default ShareButton;

// ------------------------------------ Styles ------------------------------------
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    width: width / 9,
    height: width / 9,
    backgroundColor: '#171717',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 8,
  },
});
