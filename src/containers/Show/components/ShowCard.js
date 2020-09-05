import React from 'react';
import {StyleSheet, View, Dimensions, Image} from 'react-native';

import {H1, H2, variables} from '../../../components/main';
import Tag from './Tag';

// ------------------------------------ Component ------------------------------------
const ShowCard = (props) => {
  const show = props.show;

  return (
    <View style={styles.container}>
      <View style={{flexDirection: 'row'}}>
        <Image style={styles.image} source={{uri: show.Poster}} />
        <View>
          <View style={styles.titleContainer}>
            <H1 style={styles.title}>{show.Title}</H1>
          </View>
          <View style={styles.directorContainer}>
            {!!show.Director && show.Director && (
              <H2 numberOfLines={1} style={styles.directors}>
                Director:
                <H2 style={styles.directors} bold>
                  {show.Director}
                </H2>
              </H2>
            )}
          </View>
          {!!show.Country && (
            <H2 style={styles.directors}>
              Country:
              <H2 style={styles.directors} bold>
                {show.Country}
              </H2>
            </H2>
          )}
          <View style={styles.row}>
            {show.Rated && <Tag title={show.Rated} />}
            {show.Runtime && <Tag title={show.Runtime} />}
          </View>
        </View>
      </View>
      <View style={styles.others}>
        {show.Genre &&
          show.Genre.split(',')
            .slice(0, 3)
            .map((genre) => <Tag title={genre} key={genre} />)}
      </View>
    </View>
  );

  // ------------------------------------ Methods ------------------------------------
};

export default ShowCard;

// ------------------------------------ Styles ------------------------------------
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    width: width - 40,
    backgroundColor: variables.applicationColor.darkBackground,
    borderRadius: 10,
  },
  image: {
    width: width / 3.75,
    height: (width / 3.75) * 1.4,
    borderRadius: 10,
    marginTop: -23,
    marginLeft: 16,
  },
  titleContainer: {
    width: width / 2,
  },
  title: {
    color: '#FAFAFA',
    marginLeft: 16,
    marginTop: 18,
  },
  directorContainer: {
    width: width / 2,
  },
  directors: {
    marginLeft: 16,
    marginTop: 8,
    color: '#BDBDBD',
  },
  rate: {
    marginLeft: 16,
    marginTop: 10,
  },
  row: {
    flexDirection: 'row',
    marginTop: 10,
    marginLeft: 16,
  },
  others: {
    flexDirection: 'row',
    marginTop: 16,
    marginLeft: 16,
    marginBottom: 16,
  },
  toggleButton: {
    width: width / 2.5,
    alignItems: 'center',
  },
  buyButtonText: {
    color: '#FAFAFA',
  },
  aboutButtonText: {
    color: '#0A0A0A',
  },
  about: {
    width: '100%',
    backgroundColor: '#212121',
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 10,
    paddingBottom: 10,
    borderBottomLeftRadius: 10,
    borderBottomRightRadius: 10,
  },
});
