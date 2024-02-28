import React, {useCallback, useEffect, useRef, useState} from 'react';
import {FlatList, RefreshControl, StyleSheet, View} from 'react-native';
import {
  Button,
  Cart,
  FocusAwareStatusBar,
  Header,
  Paragraph,
  SearchInput,
  VStack,
} from '../../components';
import {Colors} from '../../constants';
import {useGetProducts} from '../../hooks';
import RBSheet from 'react-native-raw-bottom-sheet';

const Home = () => {
  const {
    data,
    refreshing,
    onRefreshing,
    isLoading,
    refRBSheet,
    sortByPriceAscending,
    sortByPriceDescending,
    sortByAlphabeticalAscending,
    sortByAlphabeticalDescending,
  } = useGetProducts();
  const [searchText, setSearchText] = useState('');
  const [searchResults, setSearchResults] = useState(data);

  const handleSearch = (text: any) => {
    setSearchText(text);
    const results = data?.filter((item: any) =>
      item.name.toLowerCase().includes(text.toLowerCase()),
    );
    setSearchResults(results);
  };

  useEffect(() => {
    setSearchResults(data);
  }, [data]);

  return (
    <View>
      <Header title="E-Market" />
      <SearchInput onChangeText={handleSearch} value={searchText} />
      <VStack customStyle={styles.filterContainer}>
        <Paragraph size={18}>Filters:</Paragraph>
        <Button onPress={() => refRBSheet.current.open()} style={styles.button}>
          <Paragraph weight={'400'}>Select Filter</Paragraph>
        </Button>
      </VStack>
      <FlatList
        data={searchResults}
        renderItem={({item}) => <Cart item={item} />}
        showsVerticalScrollIndicator={false}
        numColumns={2}
        contentContainerStyle={{
          gap: 14,
          alignItems: 'center',
          paddingBottom: 300,
        }}
        columnWrapperStyle={{gap: 20}}
        refreshControl={
          <RefreshControl
            tintColor={Colors.primary}
            refreshing={refreshing}
            onRefresh={onRefreshing}
          />
        }
      />
      <FocusAwareStatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.primary}
      />
      <RBSheet
        height={600}
        ref={refRBSheet}
        closeOnDragDown={true}
        customStyles={{
          container: styles.RBContainer,
          wrapper: styles.wrapper,
          draggableIcon: styles.draggableIcon,
        }}>
        <View style={{paddingHorizontal: 20}}>
          <Paragraph>Sorting</Paragraph>
          <VStack customStyle={{justifyContent: 'space-between'}}>
            <Button onPress={sortByPriceAscending} style={styles.button}>
              <Paragraph>Sort by Price Ascending</Paragraph>
            </Button>
            <Button onPress={sortByPriceDescending} style={styles.button}>
              <Paragraph>Sort by Price Descending</Paragraph>
            </Button>
          </VStack>
          <Paragraph>Alphabetical Sorting</Paragraph>
          <VStack customStyle={{justifyContent: 'space-between'}}>
            <Button onPress={sortByAlphabeticalAscending} style={styles.button}>
              <Paragraph>A-Z</Paragraph>
            </Button>
            <Button
              onPress={sortByAlphabeticalDescending}
              style={styles.button}>
              <Paragraph>Z-A</Paragraph>
            </Button>
          </VStack>
        </View>
      </RBSheet>
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  filterContainer: {
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 18,
  },
  button: {
    width: 158,
    height: 36,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.gray_light,
    marginBottom: 24,
    marginTop: 14,
  },
  contentContainer: {
    flex: 1,
    alignItems: 'center',
  },
  RBContainer: {},
  wrapper: {},
  draggableIcon: {
    backgroundColor: '#E5E5E5',
    width: 76,
    height: 6,
    marginTop: 15,
  },
});
