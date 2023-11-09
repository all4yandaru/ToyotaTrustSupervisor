import React, {useState} from 'react';
import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  FlatList,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {DATAREK} from './dummy/DataRekening';
import SelectDropdown from 'react-native-select-dropdown';

const icon = () => {
  return (
    <Icon
      name="chevron-down"
      size={20}
      color="#002558"
      onPress={() => navigation.navigate('ProfilComponent')}></Icon>
  );
};

const EditDataRekening = ({navigation}) => {
  const countries = ['BCA', 'BRI', 'BNI', 'Mandiri'];
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: '#F7F7F7',
      }}>
      <View
        style={{
          flexDirection: 'row',
          backgroundColor: 'white',
          weight: 360,
          height: 56,
        }}>
        <TouchableOpacity
          style={{bottom: 0, position: 'absolute', marginBottom: 15}}>
          <Icon
            name="arrow-back"
            size={25}
            color="#002558"
            onPress={() => navigation.goBack()}></Icon>
        </TouchableOpacity>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <Text style={{fontSize: 16, color: '#002558', fontWeight: 'bold'}}>
            Edit Data Rekening{' '}
          </Text>
        </View>
      </View>

      <View
        style={{
          backgroundColor: 'white',
          weight: 328,
          height: 259,
          paddingHorizontal: 12,
          marginTop: 12,
        }}>
        <Text style={styles.textJudul1}>Data Rekening</Text>
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'center',
          }}>
          <View style={{flex: 1, height: 2, backgroundColor: '#F7F7F7'}} />
        </View>
        <Text
          style={{
            fontSize: 12,
            marginBottom: 4,
            marginTop: 10,
            color: '#002558',
          }}>
          Bank
        </Text>
        <SelectDropdown
          buttonStyle={{
            backgroundColor: '#fff',
            borderWidth: 1,
            borderColor: '#E5E8EE',
            width: '100%',
            borderRadius: 4,
            height: 32,
          }}
          renderDropdownIcon={icon}
          buttonTextStyle={{
            color: '#002558',
            fontSize: 14,
            textAlign: 'left',
            textAlignVertical: 'center',
          }}
          defaultButtonText="Pilih Bank"
          data={countries}
          onSelect={(selectedItem, index) => {
            console.log(selectedItem, index);
          }}
          buttonTextAfterSelection={(selectedItem, index) => {
            return selectedItem;
          }}
          rowTextForSelection={(item, index) => {
            return item;
          }}
        />
        <Text style={styles.textJudul2}>Nama Pemilik Rekening</Text>
        <TextInput value="" style={styles.TextInput} />
        <Text style={styles.textJudul2}>No. Rekening</Text>
        <TextInput placeholder="" style={styles.TextInput} />
      </View>
      <View
        style={{
          weight: 360,
          height: 60,
          backgroundColor: '#FFFFFF',
          bottom: -285,
        }}>
        <TouchableOpacity
          onPress={() => navigation.navigate('ProfilComponent')}
          style={{
            weight: 328,
            height: 36,
            backgroundColor: '#287AE5',
            borderRadius: 4,
            width: '100%',
            justifyContent: 'center',
            alignItems: 'center',
            bottom: 0,
            position: 'absolute',
            marginBottom: 15,
          }}>
          <Text
            style={{
              color: '#fff',
              fontSize: 14,
              fontWeight: 'bold',
            }}>
            SIMPAN
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  komponen: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    paddingHorizontal: 20,
  },
  kontainer1: {
    width: 328,
    height: 395,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  kontainer2: {
    width: 395,
    height: 60,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
  },
  TextInput: {
    width: '100%',
    height: 32,
    weight: 324,
    backgroundColor: '#FFFFFF',
    borderColor: '#E5E8EE',
    borderWidth: 1,
    borderRadius: 4,
  },
  textJudul1: {
    fontSize: 14,
    marginTop: 10,
    marginBottom: 10,
    fontWeight: 'bold',
    color: '#002558',
  },
  textJudul2: {
    fontSize: 12,
    marginBottom: 4,
    marginTop: 16,
    color: '#002558',
  },
  textIsi: {
    marginBottom: 16,
    marginTop: 4,
    color: '#002558',
    fontSize: 14,
  },
  button: {
    weight: 328,
    height: 36,
    backgroundColor: '#287AE5',
    width: '100%',
    borderRadius: 4,
    justifyContent: 'center',
    alignItems: 'center',
    position: 'absolute',
    bottom: 16,
  },
});

export default EditDataRekening;
