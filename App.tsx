import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {Paragraph, VectorIcons} from './src/components';
import MainTabsLayout from './src/navigation/main-tabs-layout';

const App = () => {
  return (
    <NavigationContainer>
      <MainTabsLayout />
    </NavigationContainer>
  );
};

export default App;

const styles = StyleSheet.create({});
