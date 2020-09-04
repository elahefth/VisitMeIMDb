import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import {Platform, StyleSheet, I18nManager, TextInput, View} from 'react-native';

import variables from './_variables';
// import Icon from './Icon';
// import {numberNormalizer} from '../helpers';

const Input = (props) => {
  const [focused, changeFocused] = useState(false);
  const [value] = useState(null);
  useEffect(() => {
    if (props.value) {
      changeFocused(props.value);
    }
  }, []);

  const onBlur = () => {
    if (props.onBlur) {
      props.onBlur();
    }
    changeFocused(false);
  };

  const onFocus = () => {
    if (props.onFocus) {
      props.onFocus();
    }
    changeFocused(true);
  };

  const getIosRtlStyle = () => {
    if (Platform.OS !== 'ios') {
      return {};
    }

    if (value && value[0]) {
      if (/^[\u0600-\u06FF\s]$/.test(value[0])) {
        return {
          textAlign: 'left',
        };
      }
    } else if (props.placeholder && props.placeholder[0]) {
      if (/^[\u0600-\u06FF\s]$/.test(props.placeholder[0])) {
        return {
          textAlign: 'left',
        };
      }
    }

    return {
      textAlign: 'left',
    };
  };

  const style = StyleSheet.flatten([
    styles.base,
    props.style,

    // border style
    styles[props.kind],

    // focused style
    props.kind === 'default' && focused ? styles.primary : {},

    props.icon ? {paddingLeft: variables.inputPaddingLeft + 30} : {},

    // border style
    getIosRtlStyle(),

    // disable style
    props.disable ? styles.disable : {},
  ]);

  return (
    <View
      style={{
        width: style.width,
      }}>
      <TextInput
        keyboardType={props.keyboardType}
        underlineColorAndroid={variables.color.basic.transparent}
        // selectionColor={variables.color.text.regular}
        editable={!props.disable}
        placeholderTextColor={variables.color.text.placeholder}
        {...props}
        onChangeText={(value) => {
          changeFocused(value);

          // if (this.props.numberNormalize) {
          //   value = numberNormalizer(value);
          // }

          if (props.onChangeText) {
            props.onChangeText(value);
          }
        }}
        onBlur={onBlur}
        onFocus={onFocus}
        style={style}
      />
      {props.icon && {...props.icon}}
    </View>
  );
};

Input.propTypes = {
  kind: PropTypes.oneOf([
    'default',
    'success',
    'danger',
    'error',
    'primary',
    'info',
  ]),
  disable: PropTypes.bool,
  numberNormalize: PropTypes.bool,
};

Input.defaultProps = {
  kind: 'default',
  disable: false,
  numberNormalize: true,
};

// ------------------------------------ Styles ------------------------------------

const styles = StyleSheet.create({
  base: {
    fontFamily: variables.fontFamily,
    fontSize: variables.inputFontSize.large,

    color: variables.color.text.textInpute,
    //backgroundColor: variables.color.basic.black,

    borderWidth: variables.inputBorderWidth,
    borderRadius: variables.borderRadius,

    // height: 40, it's with padding
    // lineHeight: variables.inputHeight['large'],
    // height: variables.inputHeight['large'],
    width: '100%',

    paddingTop: variables.inputPaddingTop,
    paddingBottom: variables.inputPaddingBottom,
    paddingRight: variables.inputPaddingRight,
    paddingLeft: variables.inputPaddingLeft,
  },
  default: {
    borderColor: variables.color.border.base,
  },
  success: {
    borderColor: variables.color.success.main,
  },
  danger: {
    borderColor: variables.color.danger.main,
  },
  error: {
    borderColor: variables.color.danger.main,
  },
  primary: {
    borderColor: variables.color.primary.main,
  },
  info: {
    borderColor: variables.color.info.main,
  },
  disable: {
    borderColor: variables.color.border.light,
    backgroundColor: variables.color.background.disable,
  },
});

export default Input;
