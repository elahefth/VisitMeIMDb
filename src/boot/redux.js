import {createStore, applyMiddleware, compose} from 'redux';

import {persistStore, persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';

import thunk from 'redux-thunk';
import {createLogger} from 'redux-logger';

import reducers from './reducers';

const middleware = [thunk];
middleware.push(createLogger());

const rootPersistConfig = {
  key: 'root',
  storage: AsyncStorage,
  whitelist: ['SettingReducer'],
};
const persistedReducer = persistReducer(rootPersistConfig, reducers);

export const store = createStore(
  persistedReducer,
  undefined,
  compose(applyMiddleware(...middleware)),
);

export const persistor = persistStore(store);
