import {Dimensions, Platform} from 'react-native';

const {width: SCREEN_WIDTH, height: SCREEN_HEIGHT} = Dimensions.get('window');

let fontFamily = 'Shabnam-FD';
let fontFamilyBold = 'Shabnam-FD-bold';

export default {
  fontFamily: fontFamily,
  fontFamilyBold: fontFamilyBold,

  boldFont: {
    ...Platform.select({
      ios: {
        fontFamily: fontFamily,
        fontWeight: 'bold',
      },
      android: {
        fontFamily: fontFamilyBold,
        fontWeight: 'normal',
      },
    }),
  },

  stackNavigator: {
    headerBackgroundColor: '#f8f8f8d1',
    headerColor: '#000',
    headerTintColor: '#007aff',
    headerBorderColor: '#d0d0d0',
  },

  tabNavigator: {
    activeColor: '#007aff',
    inactiveColor: '#8e8e93',
  },
};
