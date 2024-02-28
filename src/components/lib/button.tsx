import {
  ActivityIndicator,
  StyleSheet,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import React, {FC} from 'react';
import {Colors} from '../../constants';

type ButtonProps = TouchableOpacityProps & {
  loading?: boolean;
};

const Button: FC<ButtonProps> = ({children, loading, ...props}) => {
  let content;

  if (loading) {
    content = (
      <ActivityIndicator size={'small'} color={Colors.backgroundColor} />
    );
  } else {
    content = children;
  }
  return (
    <TouchableOpacity disabled={loading} activeOpacity={0.7} {...props}>
      {content}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({});
