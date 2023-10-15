import React, {Component} from 'react';
import {Text, View, Image, TouchableOpacity} from 'react-native';
import {Colors} from '../styles';

function MyTabBar({state, descriptors, navigation}) {
  return (
    <View style={{flexDirection: 'row'}}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({name: route.name, merge: true});
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{
              flex: 1,
              backgroundColor: 'white',
              alignItems: 'center',
              paddingTop: 24,
              paddingBottom: 16,
            }}>
            <Image
              style={{
                resizeMode: 'contain',
                width: 16,
                height: 16,
                tintColor: isFocused ? Colors.DARK_BLUE : Colors.MEDIUM_GRAY,
              }}
              source={checkLogo(label)}
            />
            <Text
              style={{
                color: isFocused ? Colors.DARK_BLUE : Colors.MEDIUM_GRAY,
                marginTop: 4,
                fontSize: 10,
              }}>
              {label}
            </Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}
const checkLogo = label => {
  if (label == 'Home') {
    return require('../asset/home.png');
  } else if (label == 'Tracking') {
    return require('../asset/tracking.png');
  } else if (label == 'Riwayat') {
    return require('../asset/riwayat.png');
  } else if (label == 'Insentif') {
    return require('../asset/insentif.png');
  } else if (label == 'Profil') {
    return require('../asset/profil.png');
  }
};

export default MyTabBar;
