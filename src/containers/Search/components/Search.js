import React from 'react';
import {StyleSheet, View} from 'react-native';
import {Input, variables} from '../../../components/main';
import SearchSvg from '../../../assets/svgs/search.svg';

// ------------------------------------ Component ------------------------------------
const Search = (props) => {
  return (
    <View style={styles.container}>
      <Input
        onChangeText={(value) => {
          props.onChangeText(value);
        }}
        value={props.value}
        placeholder={'Search movie titles'}
        style={styles.search}
        icon={
          <SearchSvg
            width={22}
            height={22}
            fill={variables.color.text.placeholder}
            style={styles.icon}
          />
        }
      />
    </View>
  );
};

export default Search;

// ------------------------------------ Styles ------------------------------------
const styles = StyleSheet.create({
  container: {
    width: '100%',
    paddingHorizontal: 20,
  },
  icon: {
    position: 'absolute',
    top: 8,
    left: 10,
  },
});
