import React, {useEffect, useState, useCallback} from 'react';
import {TouchableOpacity, View, StyleSheet, ScrollView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import * as SearchAction from './SearchAction';
import ShowItem from '../Show/ShowItem';
import variables from '../../components/main/_variables';

const Screen = (props) => {
  const [error, setError] = useState();
  const navigation = useNavigation();

  const {shows} = useSelector((state) => state.SearchReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SearchAction.searchFetch('dark'));
  }, []);

  console.log('__________________');
  console.log(shows);

  return (
    <View style={styles.screen}>
      <ScrollView>
        {shows.map((show) => (
          <ShowItem show={show} />
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: variables.irantic.mainBackground,
    paddingTop: 20,
    alignItems: 'center',
  },
});

export default Screen;
