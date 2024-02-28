import {StyleSheet, Text, TextProps, TextStyle, View, ViewStyle} from 'react-native';
import React, {FC} from 'react';
import {Colors} from '../../constants';

type ParagraphProps = TextProps & {
  customStyle?: TextStyle;
  color?: string;
  weight?: any;
  size?: string | any;
};

const Paragraph: FC<ParagraphProps> = ({
  children,
  color = Colors.text,
  weight,
  size,
  customStyle,
  ...props
}) => {
  return (
    <Text
      style={[
        styles.text,
        customStyle,
        {color: color, fontWeight: weight, fontSize: size},
      ]}
      {...props}>
      {children}
    </Text>
  );
};

export default Paragraph;

const styles = StyleSheet.create({
  text: {
    fontFamily: 'Montserrat',
  },
});
