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
import H2 from '../../components/main/H2';

const SearchScreen = (props) => {
  const [value, onChangeText] = useState('');
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
          onChangeText={(value) => {
            onChangeText(value);
            dispatch(SearchAction.searchFetch(value));
          }}
          value={value}
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
        {shows.length === 0 && (
          <View>
            <H2>no item</H2>
          </View>
        )}

        <FlatList
          data={shows}
          keyExtractor={(show) => show.imdbID}
          renderItem={({item}) => <ShowItem show={item} />}
        />

        {/*{!!shows.length && shows.length===0 && <View><H2>no item</H2></View>}*/}
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
