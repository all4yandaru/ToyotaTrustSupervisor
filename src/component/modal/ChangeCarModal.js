import React from 'react';
import {View, Modal, TouchableOpacity, StyleSheet} from 'react-native';
import {TextBold, TextRegular, TextMedium, InputText} from '../global';
import {Colors} from '../../styles';
import Icon from 'react-native-vector-icons/AntDesign';
import Icons from 'react-native-vector-icons/FontAwesome5';

const ChangeCarModal = ({show, onClose}) => {
  return (
    <Modal transparent visible={show} onRequestClose={onClose}>
      <View style={styles.container}>
        <View style={styles.body}>
          <View style={styles.header}>
            <TextBold text="New Car" color={Colors.DARK_BLUE} />
            <TouchableOpacity onPress={onClose}>
              <Icon name="close" color={Colors.DARK_BLUE} size={18} />
            </TouchableOpacity>
          </View>
          <View style={{height: 10}} />
          <View style={{flexDirection: 'row', padding: 5}}>
            <InputText
              style={{
                backgroundColor: Colors.GRAY,
                height: 48,
                width: '85%',
                justifyContent: 'center',
                alignSelf: 'flex-start',
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
                borderRightWidth: 0,
                borderColor: Colors.BLUE,
              }}
              placeholderText="Telusuri..."
            />
            <View
              style={{
                alignSelf: 'flex-end',
                height: 48,
                width: 48,
                backgroundColor: Colors.GRAY,
                borderTopRightRadius: 6,
                borderBottomRightRadius: 6,
                borderTopWidth: 1,
                borderBottomWidth: 1,
                borderRightWidth: 1,
                borderColor: Colors.BLUE,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icons name="search" color={Colors.BLUE} size={16} />
            </View>
          </View>
          <View style={{height: 10}} />
          <View
            style={{
              borderWidth: 1,
              borderColor: Colors.GRAY,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 6,
              marginHorizontal: 12,
              borderTopRightRadius: 5,
              borderBottomLeftRadius: 5,
            }}>
            <TextMedium
              color={Colors.DARK_BLUE}
              size={12}
              text="AVANZA VELOZ A/T 2020"
            />
            <TextRegular color={Colors.BLUE} size={12} text="Rp 250.000.00" />
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: Colors.GRAY,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 6,
              marginHorizontal: 12,
            }}>
            <TextMedium
              color={Colors.DARK_BLUE}
              size={12}
              text="GRAND NEWS VELOZ A/T 2020"
            />
            <TextRegular color={Colors.BLUE} size={12} text="Rp 320.000.00" />
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: Colors.GRAY,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 6,
              marginHorizontal: 12,
            }}>
            <TextMedium
              color={Colors.DARK_BLUE}
              size={12}
              text="ALL NEW KIJANG INNOVA"
            />
            <TextRegular color={Colors.BLUE} size={12} text="Rp 420.000.00" />
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: Colors.GRAY,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 6,
              marginHorizontal: 12,
            }}>
            <TextMedium
              color={Colors.DARK_BLUE}
              size={12}
              text="GRAND NEW VELOZ A/T 2020"
            />
            <TextRegular color={Colors.BLUE} size={12} text="Rp 475.000.00" />
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: Colors.GRAY,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 6,
              marginHorizontal: 12,
            }}>
            <TextMedium
              color={Colors.DARK_BLUE}
              size={12}
              text="TOYOTA ALL NEW ALPHARD"
            />
            <TextRegular color={Colors.BLUE} size={12} text="Rp 1.250.000.00" />
          </View>
          <View
            style={{
              borderWidth: 1,
              borderColor: Colors.GRAY,
              flexDirection: 'row',
              justifyContent: 'space-between',
              padding: 6,
              marginHorizontal: 12,
            }}>
            <TextMedium
              color={Colors.DARK_BLUE}
              size={12}
              text="TOYOTA FORTUNER"
            />
            <TextRegular color={Colors.BLUE} size={12} text="Rp 507.000.00" />
          </View>
        </View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#E4E7EB',
    borderBottomWidth: 1,
  },
  body: {
    width: '90%',
    alignSelf: 'center',
    backgroundColor: '#fff',
    borderRadius: 5,
    marginBottom: 16,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default ChangeCarModal;
