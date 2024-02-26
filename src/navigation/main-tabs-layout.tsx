import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import {Home, UserCart, UserFavorites, UserProfile} from '../app';

const Tab = createBottomTabNavigator();

const MainTabsLayout = () => {
  return (
    <Tab.Navigator screenOptions={{headerShown: false}}>
      <Tab.Screen name="Home" component={Home} />
      <Tab.Screen name="UserCart" component={UserCart} />
      <Tab.Screen name="UserFavorites" component={UserFavorites} />
      <Tab.Screen name="UserProfile" component={UserProfile} />
    </Tab.Navigator>
  );
};

export default MainTabsLayout;

const styles = StyleSheet.create({});
