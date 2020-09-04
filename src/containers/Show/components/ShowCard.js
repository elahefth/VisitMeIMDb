import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
} from 'react-native';

import {H1, H2, variables} from '../../../components/main';
import Tag from './Tag';
// import Rate from '../../../components/irantic/Rate';

// ------------------------------------ Component ------------------------------------
const ShowCard = (props) => {
  const show = props.show;
  console.log('?///7777¶77¶7');
  console.log(show);
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
          {!!show.Language && (
            <H2 style={styles.directors}>
              Language:
              <H2 style={styles.directors} bold>
                {show.Language}
              </H2>
            </H2>
          )}
          <View style={styles.rate}>{/*<Rate />*/}</View>
        </View>
      </View>
      <View style={styles.others}>
        {/*{show.Released && <Tag title={show.Released} />}*/}
        {/*<Tag title={show.Runtime} />*/}
        {show.Genre &&
          show.Genre.split(',')
            .slice(0, 3)
            .map((genre) => <Tag title={genre} />)}
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
    backgroundColor: variables.irantic.darkBackground,
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
