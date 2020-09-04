import React, {useState, useEffect} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {ScrollView, View, StyleSheet, StatusBar} from 'react-native';

import {variables} from '../../components/main';
import * as ShowAction from './ShowAction';
import ShowCard from './components/ShowCard';
import BackgroundImage from './components/BackgroundImage';

const ShowScreen = (props) => {
  const showFromLastRoute = props.route.params.show;

  useEffect(() => {
    dispatch(ShowAction.showFetch(showFromLastRoute.imdbID));
  }, []);

  const show = useSelector((state) => state.ShowReducer.show);
  const [view, switchView] = useState('schedule');
  const dispatch = useDispatch();

  console.log('*******************')
  console.log(show)


  const toggleView = () => {
    view === 'schedule' ? switchView('about') : switchView('schedule');
  };

  return (
    <ScrollView style={styles.container}>
      <StatusBar hidden={true} />
      <BackgroundImage style={{flex: 1}} source={show.Poster} />
      <View style={{alignItems: 'center'}}>
        <View style={styles.showCard}>
          <View style={{alignItems: 'center'}}>
            <ShowCard
              key={show.id}
              show={show}
              toggleView={() => toggleView()}
              activeView={view}
            />
          </View>
          {/*{view === 'schedule' && (*/}
          {/*  <View>*/}
          {/*    <SchedulesView />*/}
          {/*  </View>*/}
          {/*)}*/}
          {/*{view === 'about' && (*/}
          {/*  <View>*/}
          {/*    <ShowInfo show={show} />*/}
          {/*  </View>*/}
          {/*)}*/}
        </View>
      </View>
    </ScrollView>
  );
};

export default ShowScreen;
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: variables.irantic.mainBackground,
  },
  showCard: {marginTop: -(variables.deviceHeight / 9.4)},
});
