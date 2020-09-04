import React from 'react';
import {StyleSheet} from 'react-native';
import Text from './Text';
import  variables  from './_variables';

const styles = StyleSheet.create({
  base: {
    fontSize: variables.fontSizeH4,
  },
});

const H2 = (props) => {
  const style = StyleSheet.flatten([styles.base, props.style]);

  return (
    <Text {...props} style={style}>
      {props.children}
    </Text>
  );
};

export default H2;
