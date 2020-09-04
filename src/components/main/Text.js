import React, {Component} from 'react';
import PropTypes from 'prop-types';
import {Platform, StyleSheet, I18nManager, Text as RNText} from 'react-native';
import _variables from './_variables';
import {sizeNormalizer} from '../../boot/sizeNormalizer';

const styles = StyleSheet.create({
  base: {
    fontFamily: _variables.fontFamily,
    fontSize: _variables.fontSizeText,
    color: _variables.irantic.lightTextColor,

    writingDirection: I18nManager.isRTL ? 'rtl' : 'ltr',

    ...Platform.select({
      ios: {
        textAlign: 'justify',
      },
      android: {
        textAlign: I18nManager.isRTL ? 'left' : 'right',
      },
    }),
  },
  bold: {
    ...Platform.select({
      ios: {
        fontFamily: 'Shabnam-FD',
        fontWeight: '700',
      },
      android: {
        fontFamily: 'Shabnam-Bold-FD',
      },
    }),
  },
});

const Text = (props) => {
  const style = StyleSheet.flatten([
    styles.base,
    props.style,

    // bold condition
    props.bold ? styles.bold : {},
  ]);

  style.fontSize = sizeNormalizer(style.fontSize);

  return (
    <RNText {...props} style={style}>
      {props.children}
    </RNText>
  );
};

Text.propTypes = {
  bold: PropTypes.bool,
};

Text.defaultProps = {
  bold: false,
};

export default Text;
