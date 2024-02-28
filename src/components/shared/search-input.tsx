import React, {FC} from 'react';
import {StyleSheet, TextInput, TextInputProps, ViewStyle} from 'react-native';
import {VStack, VectorIcons} from '..';
import {Colors} from '../../constants';

type SearchInput = TextInputProps & {
  customStyle?: ViewStyle;
};

const SearchInput: FC<SearchInput> = ({customStyle, ...props}) => {
  return (
    <VStack customStyle={styles.container}>
      <VectorIcons type="ant-design" name="search1" size={24} color={'gray'} />
      <TextInput
        style={[styles.input, customStyle]}
        placeholderTextColor={'gray'}
        placeholder="Search"
        {...props}
      />
    </VStack>
  );
};

export default SearchInput;

const styles = StyleSheet.create({
  container: {
    gap: 10,
    height: 40,
    backgroundColor: '#FFFFFFFA',
    borderRadius: 8,
    paddingHorizontal: 8,
    paddingTop: 8,
    paddingBottom: 8,
    marginTop: 14,
    alignItems: 'center',
    marginHorizontal: 18,
  },
  input: {
    fontFamily: 'Montserrat',
    fontSize: 18,
    width: '90%',

  },
});
