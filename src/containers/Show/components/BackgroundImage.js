import React from 'react';
import {useNavigation} from '@react-navigation/native';
import LinearGradient from 'react-native-linear-gradient';
import {
  StyleSheet,
  View,
  ImageBackground,
  Dimensions,
  SafeAreaView,
} from 'react-native';
// import BackButton from '../../../components/irantic/BackButton';
// import ShareButton from '../../../components/irantic/ShareButton';
// import PlayTrailer from './../../../assets/svgs/play_trailer.svg';

// ------------------------------------ Component ------------------------------------
const BackgroundImage = (props) => {
  const navigation = useNavigation();
  return (
    <View style={{flex: 1}}>
      <ImageBackground
        //source={}
        source={{uri: props.source}}
        style={styles.backgroundImage}>
        {/*<LinearGradient*/}
        {/*  start={{*/}
        {/*    x: 0.0,*/}
        {/*    y: 0.4,*/}
        {/*  }}*/}
        {/*  end={{*/}
        {/*    x: 0,*/}
        {/*    y: 1,*/}
        {/*  }}*/}
        {/*  colors={['#00000010', '#10101060', '#101010']}*/}
        {/*  style={styles.linearGradient}*/}
        {/*/>*/}
        {/*<View*/}
        {/*  style={{*/}
        {/*    position: 'absolute',*/}
        {/*  }}>*/}
        {/*  <SafeAreaView />*/}
        {/*  <View style={styles.view1}>*/}
        {/*    <BackButton*/}
        {/*      onPress={() => {*/}
        {/*        navigation.goBack();*/}
        {/*      }}*/}
        {/*    />*/}

        {/*    <View style={styles.bodyLeft}>*/}
        {/*      /!*<AgeLimit age={this.props.show.age_range} />*!/*/}
        {/*      <ShareButton />*/}
        {/*    </View>*/}
        {/*  </View>*/}
        {/*  <View style={styles.view2}>*/}
        {/*    <PlayTrailer width={42} height={42} />*/}
        {/*  </View>*/}
        {/*</View>*/}
      </ImageBackground>
    </View>
  );
};

export default BackgroundImage;

// ------------------------------------ Styles ------------------------------------
const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  linearGradient: {flex: 1},
  backgroundImage: {
    width: width,
    height: width / 1.25,
  },
  view1: {
    width: width,
    flexDirection: 'row',
    justifyContent: 'space-between',
    // marginTop: 30,
    paddingHorizontal: 20,
  },
  view2: {
    alignItems: 'center',
    marginTop: 60,
  },
  bodyLeft: {
    flexDirection: 'row',
  },
});
