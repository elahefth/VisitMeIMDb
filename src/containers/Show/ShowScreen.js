import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {ScrollView, View, StyleSheet, StatusBar} from 'react-native';

import {variables} from '../../components/main';
import * as ShowAction from './ShowAction';
import ShowCard from './components/ShowCard';
import BackgroundImage from './components/BackgroundImage';
import H2 from '../../components/main/H2';

const ShowScreen = (props) => {
  const showFromLastRoute = props.route.params.show;

  useEffect(() => {
    dispatch(ShowAction.showFetch(showFromLastRoute.imdbID));
  }, []);

  const show = useSelector((state) => state.ShowReducer.show);
  const dispatch = useDispatch();

  return (
    <ScrollView style={styles.container}>
      <StatusBar hidden={true} />
      <BackgroundImage style={{flex: 1}} source={show.Poster} />
      <View style={{alignItems: 'center'}}>
        <View style={styles.showCard}>
          <View style={{alignItems: 'center'}}>
            <ShowCard key={show.id} show={show} />
          </View>

          <View style={styles.plot}>
            <H2 style={{color: '#808080'}}>{show.Plot}</H2>
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default ShowScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: variables.applicationColor.mainBackground,
  },
  showCard: {marginTop: -(variables.deviceHeight / 9.4)},
  plot: {padding: 20},
});
