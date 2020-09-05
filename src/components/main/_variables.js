import {Platform, Dimensions, PixelRatio} from 'react-native';

const deviceHeight = Dimensions.get('window').height;
const deviceWidth = Dimensions.get('window').width;
const platform = Platform.OS;
const isIphoneX =
  platform === 'ios' &&
  (deviceHeight === 812 ||
    deviceWidth === 812 ||
    deviceHeight === 896 ||
    deviceWidth === 896);

export default {
  platform,
  deviceWidth,
  deviceHeight,
  isIphoneX,
  //iPhoneX SafeArea
  Inset: {
    portrait: {
      topInset: 24,
      leftInset: 0,
      rightInset: 0,
      bottomInset: 34,
    },
    landscape: {
      topInset: 0,
      leftInset: 44,
      rightInset: 44,
      bottomInset: 21,
    },
  },

  // container
  containerBackgroundColor: '#171717',

  stack_navigator_header_background_color: '#f7f7f7',
  stack_navigator_header_color: '#000',
  stack_navigator_header_tint_color: '#007aff',
  stack_navigator_header_border_color: '#d0d0d0',

  // Content
  contentPadding: 10,

  // typography
  fontFamily: 'Shabnam-FD',
  fontFamilyBold: 'Shabnam-Bold-FD',
  boldFontWeight: '700',

  fontSizeH1: 20,
  fontSizeH2: 18,
  fontSizeH3: 16,
  fontSizeH4: 12,
  fontSizeH5: 10,
  fontSizeH6: 8,
  fontSizeText: 14,
  fontSizeCompatible: true,

  // Button
  alertPaddingTop: 12,
  alertPaddingBottom: 12,
  alertPaddingRight: 20,
  alertPaddingLeft: 20,
  alertBorderRadius: 4,

  // Button
  buttonHeight: 48,
  buttonPaddingTop: 10,
  buttonPaddingBottom: 10,
  buttonPaddingRight: 20,
  buttonPaddingLeft: 20,
  buttonBorderWidth: 1,
  buttonBorderRadius: 4,
  buttonBorderRadiusRound: 24,
  submitMarginBottom: 5,

  // FormItem
  FormItemMarginBottom: 5,

  // Label
  labelPaddingBottom: 5,

  // input
  inputPaddingTop: 9,
  inputPaddingBottom: 9,
  inputPaddingRight: 15,
  inputPaddingLeft: 15,
  inputBorderWidth: 1,
  inputHeight: {
    mini: 28,
    small: 32,
    medium: 36,
    large: 40,
  },
  inputFontSize: {
    mini: 13,
    small: 14,
    medium: 14,
    large: 14,
  },

  borderRadius: 4,

  // Icon
  iconFamily: 'FontAwesome5',
  iconFontSize: platform === 'ios' ? 30 : 28,

  // color

  seatStatus: {
    reserve: '#FBCD35',
    sold: '#645215',
    0: '#171717',
    7: '#676767',
  },
  seatStatusBorder: {
    reserve: '#FBCD35',
    sold: '#645215',
    0: '#676767',
    7: '#676767',
  },

  applicationColor: {
    mainBackground: '#101010',
    darkBackground: '#181818',
    darkBodyColor: '#202020',
    darkButtonColor: '#141414',
    darkScheduleButtonColor: '#303030',
    darkMediumColor: '#404040',
    darkGlitterColor: '#606060',
    darkSecondaryColor: '#808080',
    lightSubtitleColor: '#B8B8B8',
    lightMediumColor: '#D0D0D0',
    lightTextColor: '#F8F8F8',
    darkMode: {
      secondary: '#007EEF',
      darkSecondary: '#0064BF',
      darkError: '#D44169',
      eyeCatching: '#FBCD35',
    },
  },
  color: {
    success: {
      main: '#67C23A',
      second: '#e1f3d8',
      third: '#f0f9eb',
    },
    warning: {
      main: '#E6A23C',
      second: '#faecd8',
      third: '#fdf6eb',
    },
    danger: {
      main: '#f56c6c',
      second: '#fde2e2',
      third: '#fff6f7',
    },
    primary: {
      main: '#409eff',
      second: '#b3d8ff',
      third: '#ecf5ff',
    },
    info: {
      main: '#909399',
      second: '#e9e9eb',
      third: '#f4f4f5',
    },
    text: {
      textInpute: '#4ca4f3',
      primary: '#424242',
      regular: '#606266',
      secondary: '#909399',
      placeholder: '#606060',
      disabled: '#C0C4CC',
    },
    basic: {
      black: '#000000',
      white: '#ffffff',
      transparent: 'rgba(0,0,0,0)',
    },
    border: {
      base: '#424242',
      light: '#E4E7ED',
      lighter: '#EBEEF5',
      extra_light: '#F2F6FC',
    },
    background: {
      main: '#ffffff',
      disable: '#f5f7fa',
      disable_darker: '#f8fafd11',
    },
  },

  shadows: {
    e1: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.18,
      shadowRadius: 1.0,

      elevation: 1,
    },
    e2: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 1.41,

      elevation: 2,
    },
    e3: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.22,
      shadowRadius: 2.22,

      elevation: 3,
    },
    e4: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.23,
      shadowRadius: 2.62,

      elevation: 4,
    },
    e5: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 2,
      },
      shadowOpacity: 0.25,
      shadowRadius: 3.84,

      elevation: 5,
    },
    e6: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.27,
      shadowRadius: 4.65,

      elevation: 6,
    },
    e7: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 3,
      },
      shadowOpacity: 0.29,
      shadowRadius: 4.65,

      elevation: 7,
    },
    e8: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.3,
      shadowRadius: 4.65,

      elevation: 8,
    },
    e9: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 4,
      },
      shadowOpacity: 0.32,
      shadowRadius: 5.46,

      elevation: 9,
    },
    e10: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.34,
      shadowRadius: 6.27,

      elevation: 10,
    },
    e11: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 5,
      },
      shadowOpacity: 0.36,
      shadowRadius: 6.68,

      elevation: 11,
    },
    e12: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.37,
      shadowRadius: 7.49,

      elevation: 12,
    },
    e13: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 6,
      },
      shadowOpacity: 0.39,
      shadowRadius: 8.3,

      elevation: 13,
    },
    e14: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.41,
      shadowRadius: 9.11,

      elevation: 14,
    },
    e15: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 7,
      },
      shadowOpacity: 0.43,
      shadowRadius: 9.51,

      elevation: 15,
    },
    e16: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.44,
      shadowRadius: 10.32,

      elevation: 16,
    },
    e17: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 8,
      },
      shadowOpacity: 0.46,
      shadowRadius: 11.14,

      elevation: 17,
    },
    e18: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 9,
      },
      shadowOpacity: 0.48,
      shadowRadius: 11.95,

      elevation: 18,
    },
    e19: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 9,
      },
      shadowOpacity: 0.5,
      shadowRadius: 12.35,

      elevation: 19,
    },
    e20: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.51,
      shadowRadius: 13.16,

      elevation: 20,
    },
    e21: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 10,
      },
      shadowOpacity: 0.53,
      shadowRadius: 13.97,

      elevation: 21,
    },
    e22: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 11,
      },
      shadowOpacity: 0.55,
      shadowRadius: 14.78,

      elevation: 22,
    },
    e23: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 11,
      },
      shadowOpacity: 0.57,
      shadowRadius: 15.19,

      elevation: 23,
    },
    e24: {
      shadowColor: '#000',
      shadowOffset: {
        width: 0,
        height: 12,
      },
      shadowOpacity: 0.58,
      shadowRadius: 16.0,

      elevation: 24,
    },
  },
};
