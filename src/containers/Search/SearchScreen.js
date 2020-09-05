import React, {useEffect, useState} from 'react';
import {View, StyleSheet, FlatList, SafeAreaView} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';

import * as SearchAction from './SearchAction';
import {variables, H2} from '../../components/main';
import ShowItem from '../Show/components/ShowItem';
import Search from './components/Search';

import NoItem from '../../assets/svgs/no_item.svg';

const SearchScreen = (props) => {
  const [searchValue, setSearchValue] = useState('dark');

  const {shows} = useSelector((state) => state.SearchReducer);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(SearchAction.searchFetch(searchValue));
  }, []);

  return (
    <View style={styles.container}>
      <SafeAreaView />

      <Search
        value={searchValue}
        onChangeText={(value) => {
          setSearchValue(value);
          dispatch(SearchAction.searchFetch(value));
        }}
      />

      {shows.length === 0 && (
        <View style={styles.noItem}>
          <NoItem width={80} height={80} />
          <H2 bold style={styles.noItemText}>
            Movie not found!
          </H2>
        </View>
      )}

      <FlatList
        data={shows}
        keyExtractor={(show) => show.imdbID}
        renderItem={({item}) => <ShowItem show={item} />}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: variables.applicationColor.mainBackground,
    paddingTop: 20,
    alignItems: 'center',
  },
  noItem: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    width: variables.deviceWidth - 40,
    height: variables.deviceHeight - 100,
  },
  noItemText: {
    marginTop: 20,
    color: '#676767',
  },
});

export default SearchScreen;
