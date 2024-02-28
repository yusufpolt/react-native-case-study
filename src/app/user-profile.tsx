import {StyleSheet, Text, View} from 'react-native';
import React from 'react';
import {FocusAwareStatusBar, Header} from '../components';
import {Colors} from '../constants';

const UserProfile = () => {
  return (
    <View>
      <Header title="Profile" />
      <Text>user-profile</Text>
      <FocusAwareStatusBar
        barStyle={'light-content'}
        backgroundColor={Colors.primary}
      />
    </View>
  );
};

export default UserProfile;

const styles = StyleSheet.create({});
