import React from 'react';
import {I18nManager} from 'react-native';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import RNRestart from 'react-native-restart';

import './../../boot/translate';
import {store, persistor} from './../../boot/redux';
import AppNavigator from '../../routes/AppNavigator';

export default class App extends React.Component {
  constructor(props) {
    super(props);

    if (!I18nManager.isRTL) {
      I18nManager.forceRTL(false);
      RNRestart.Restart();
    }
  }

  render() {
    return (
      <Provider store={store}>
        <PersistGate loading={null} persistor={persistor}>
          <AppNavigator />
        </PersistGate>
      </Provider>
    );
  }
}
