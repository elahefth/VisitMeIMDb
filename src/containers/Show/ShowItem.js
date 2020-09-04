import React, {useState} from 'react';
import {
  StyleSheet,
  View,
  Dimensions,
  Image,
  TouchableOpacity,
  Platform,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';
import {useDispatch, useSelector} from 'react-redux';
import {H1, H2, variables} from '../../components/main';

// ------------------------------------ Component ------------------------------------
const ShowItem = (props) => {
  const [buttonStatus, changeStatus] = useState('inactive');
  const dispatch = useDispatch();

  const navigation = useNavigation();
  const {show} = props;
  return (
    <TouchableOpacity onPress={() => {}} style={styles.container}>
      <View style={styles.main}>
        {!!show.image_url && (
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
                  <H2 style={styles.infoText}>{show.kind_translate}</H2>
                </View>
                {/*{show.genres.length > 0 && (*/}
                {/*  <View style={styles.infoBox2}>*/}
                {/*    <H2 style={styles.infoText}>{show.genres[0].title}</H2>*/}
                {/*  </View>*/}
                {/*)}*/}

                <View style={styles.infoBox3}>
                  <H2 style={styles.infoText}>{show.duration} دقیقه </H2>
                </View>
              </View>
            </View>
            {/*{show.age_range !== null && <AgeLimit age={show.age_range} />}*/}
          </View>
          <View style={styles.rate}>{/*<Rate />*/}</View>

          {/*<View style={styles.button}>*/}
          {/*  <ScheduleButton*/}
          {/*    status={buttonStatus}*/}
          {/*    onPress={() => {*/}
          {/*      onChange();*/}
          {/*    }}*/}
          {/*  />*/}
          {/*</View>*/}
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
    backgroundColor: variables.irantic.darkBodyColor,
    borderRadius: 10,
    marginTop: 20,
  },
  image: {
    width: width / 3.75,
    //height: width / 2.68,
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
    borderRightColor: variables.irantic.darkMediumColor,
    borderRightWidth: 1,
    paddingRight: 8,
  },
  infoBox2: {
    borderRightColor: variables.irantic.darkMediumColor,
    borderRightWidth: 1,
    paddingHorizontal: 8,
  },
  infoText: {
    color: variables.irantic.lightSubtitleColor,
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
    backgroundColor: variables.irantic.darkScheduleButtonColor,
  },
  schedulePrivateCard: {
    backgroundColor: variables.irantic.darkScheduleButtonColor,
  },
});
