import React from 'react';
import {
  View,
  Image,
  TouchableOpacity,
  TextInput,
  StyleSheet,
} from 'react-native';
import {Colors} from '../../styles';
import Icon from 'react-native-vector-icons/Entypo';

export const InputText = ({
  placeholderText = 'Masukkan Email',
  placeholderTextColor = 'grey',
  isPassword = false,
  showPassword = false,
  setShowPassword,
  multiline = false,
  numberOfLines = 1,
  onChangeText,
  value,
  style,
  keyboardType = 'default',
}) => {
  return (
    <View style={[styles.container, style]}>
      <TextInput
        placeholder={placeholderText}
        placeholderTextColor={placeholderTextColor}
        style={{
          width: '90%',
          paddingHorizontal: 10,
        }}
        multiline={multiline}
        numberOfLines={numberOfLines}
        secureTextEntry={showPassword}
        onChangeText={text => onChangeText(text)}
        value={value}
        keyboardType={keyboardType}
      />
      {isPassword ? (
        <TouchableOpacity
          style={{
            width: '10%',
            justifyContent: 'flex-end',
            paddingVertical: 10,
          }}
          onPress={() => setShowPassword(!showPassword)}>
          {showPassword ? (
            <Icon name="eye" size={17} />
          ) : (
            <Icon name="eye-with-line" size={17} />
          )}
        </TouchableOpacity>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderColor: '#dedede',
    borderWidth: 1,
    borderRadius: 6,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
