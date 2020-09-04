import React, {useEffect, useState, useCallback} from 'react';
import {TouchableOpacity, View, StyleSheet, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import * as SearchAction from './SearchAction';
import ShowItem from '../Show/ShowItem';

const Screen = (props) => {


  const [error, setError] = useState();
  const navigation = useNavigation();

  const {shows} = useSelector((state) => state.SearchReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SearchAction.searchFetch());
  }, []);

  console.log('__________________')
  console.log(shows)

  return (
    <View>
      {/*{shows.map((show)=><ShowItem show={show}/>)}*/}
    </View>
  );
};

const styles = StyleSheet.create({
  centered: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default Screen;
