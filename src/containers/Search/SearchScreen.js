import React, {useEffect, useState, useCallback} from 'react';
import {
  TouchableOpacity,
  View,
  StyleSheet,
  ScrollView,
  FlatList,
  SafeAreaView,
} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';

import * as SearchAction from './SearchAction';
import variables from '../../components/main/_variables';
import ShowItem from '../Show/components/ShowItem';
import {Input} from '../../components/main';

import Search from '././../../assets/svgs/search.svg';

const SearchScreen = (props) => {
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
      {/*<FlatList*/}
      {/*  data={shows}*/}
      {/*  keyExtractor={(item) => item.imdbID}*/}
      {/*  renderItem={(itemData) => (*/}
      {/*    <ShowItem show={shows} key={itemData.imdbID} />*/}
      {/*  )}*/}
      {/*/>*/}
      <ScrollView>
        <SafeAreaView />
        <Input
          placeholder={'Search movie titles'}
          style={styles.search}
          icon={
            <Search
              width={22}
              height={22}
              fill={variables.color.text.placeholder}
              style={{position: 'absolute', top: 8, left: 10}}
            />
          }
        />

        {shows.map((show) => (
          <ShowItem show={show} key={show.imdbID} />
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

export default SearchScreen;
