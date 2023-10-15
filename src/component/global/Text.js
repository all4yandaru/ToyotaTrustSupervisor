import React from 'react';
import {Text, StyleSheet} from 'react-native';

export const TextRegular = ({text, numberOfLines, size = 14, color, style}) => {
  return (
    <Text
      style={[
        styles.regularText,
        {
          fontSize: size,
          color: color,
        },
        style,
      ]}
      numberOfLines={numberOfLines}>
      {text}
    </Text>
  );
};

export const TextMedium = ({text, numberOfLines, size = 14, color, style}) => {
  return (
    <Text
      style={[
        styles.semiBoldText,
        {
          fontSize: size,
          color: color,
        },
        style,
      ]}
      numberOfLines={numberOfLines}>
      {text}
    </Text>
  );
};

export const TextBold = ({text, numberOfLines, size = 14, color, style}) => {
  return (
    <Text
      style={[
        styles.boldText,
        {
          fontSize: size,
          color: color,
        },
        style,
      ]}
      numberOfLines={numberOfLines}>
      {text}
    </Text>
  );
};

const styles = StyleSheet.create({
  regularText: {
    color: '#000',
  },
  semiBoldText: {
    color: '#000',
    fontWeight: '500',
  },
  boldText: {
    color: '#000',
    fontWeight: 'bold',
  },
});
