import React from 'react';
import {StyleSheet, View, Text} from 'react-native';
import H2 from '../../../components/main/H2';
import { variables } from '../../../components/main';

// ------------------------------------ Component ------------------------------------
const Tag = (props) => {
  return (
    <View style={styles.container}>
      <H2 style={{color: '#BDBDBD'}}>{props.title}</H2>
    </View>
  );
};

export default Tag;

// ------------------------------------ Styles ------------------------------------
const styles = StyleSheet.create({
  container: {
    backgroundColor: variables.irantic.darkMediumColor,
    paddingHorizontal: 16,
    paddingVertical: 4,
    borderRadius: 4,
    marginRight: 8,
  },
});
