import React from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  TouchableOpacity,
  Platform,
  Image,
} from 'react-native';
import FastImage from 'react-native-fast-image';
import {useNavigation} from '@react-navigation/native';
import {H1, H2, variables} from '../../../components/main';

// ------------------------------------ Component ------------------------------------
const ShowItem = (props) => {
  const navigation = useNavigation();
  const {show} = props;
  return (
    <TouchableOpacity
      onPress={() => {
        navigation.navigate('ShowScreen', {show: show});
      }}
      style={styles.container}>
      <View style={styles.main}>
        {!!show.Poster && (
          <Image style={styles.image} source={{uri: show.Poster}} />
        )}
        <View style={styles.view2}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View>
              <View style={styles.titleContainer}>
                <H1>{show.Title}</H1>
              </View>
              <View style={styles.details}>
                <View style={styles.infoBox}>
                  <H2 style={styles.infoText}>{show.Type}</H2>
                </View>

                <View style={styles.infoBox3}>
                  <H2 style={styles.infoText}>{show.Year} </H2>
                </View>
              </View>
            </View>
          </View>
          <View style={styles.rate}>{/*<Rate />*/}</View>
        </View>
      </View>
    </TouchableOpacity>
  );

  // ------------------------------------ Methods ------------------------------------
};

export default ShowItem;

// ------------------------------------ Styles ------------------------------------
const {width} = Dimensions.get('window');
const styles = StyleSheet.create({
  container: {
    width: width - 40,
    backgroundColor: variables.applicationColor.darkBodyColor,
    borderRadius: 10,
    marginTop: 20,
  },
  image: {
    width: width / 3.75,
    height: width / 2.68,
    ...Platform.select({
      ios: {
        borderTopLeftRadius: 10,
        borderBottomLeftRadius: 10,
      },
      android: {
        borderTopRightRadius: 10,
        borderBottomRightRadius: 10,
      },
    }),
  },
  main: {
    flexDirection: 'row',
  },
  view2: {
    flex: 1,
    padding: 16,
    justifyContent: 'space-between',
  },
  titleContainer: {width: width / 2.3},
  details: {
    flexDirection: 'row',
    marginTop: 8,
  },
  infoBox: {
    paddingRight: 8,
  },
  infoBox2: {
    borderRightColor: variables.applicationColor.darkMediumColor,
    borderRightWidth: 1,
    paddingHorizontal: 8,
  },
  infoText: {
    color: variables.applicationColor.lightSubtitleColor,
  },

  infoBox3: {
    paddingLeft: 8,
  },
  rate: {
    marginTop: 8,
  },

  button: {
    marginTop: 8,
  },
  schedulesContainer: {
    alignItems: 'center',
  },
  scheduleCard: {
    backgroundColor: variables.applicationColor.darkScheduleButtonColor,
  },
  schedulePrivateCard: {
    backgroundColor: variables.applicationColor.darkScheduleButtonColor,
  },
});
