import React, {useEffect, useState, useCallback} from 'react';
import {TouchableOpacity, View, StyleSheet, Text} from 'react-native';
import {useSelector, useDispatch} from 'react-redux';
import {useNavigation} from '@react-navigation/native';
import variables from '../../components/main/_variables';

const Screen = (props) => {
  const [error, setError] = useState();
  const navigation = useNavigation();

  const products = useSelector((state) => state);
  const dispatch = useDispatch();

  useEffect(() => {}, []);

  return (
    <View style={styles.screen}>
      <Text bold style={{color:'#f8f8f8',fontSize:18}}>coming soon</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  screen: {
    flex: 1,
    backgroundColor: variables.irantic.mainBackground,
    paddingTop: 20,
    alignItems: 'center',
    justifyContent:'center'
  },
});

export default Screen;
