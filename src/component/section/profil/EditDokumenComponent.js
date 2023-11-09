import React, {useState} from 'react';

import {
  View,
  Text,
  ScrollView,
  KeyboardAvoidingView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const EditDokumen = ({navigation}) => {
  return (
    <ScrollView>
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
          <View
            style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
            <Text style={{fontSize: 16, color: '#002558', fontWeight: 'bold'}}>
              Edit Dokumen{' '}
            </Text>
          </View>
        </View>

        <View
          style={{
            backgroundColor: 'white',
            weight: 328,
            height: 639,
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
            No. KTP
          </Text>
          <TextInput placeholder="" style={styles.TextInput} />
          <Text style={styles.textJudul2}>Foto KTP</Text>
          <View
            style={{
              borderRadius: 10,
              borderColor: '#E5E8EE',
              flexDirection: 'column',
              borderWidth: 1,
              paddingVertical: 20,
              alignItems: 'center',
              height: 188,
              weight: 304,
              borderRadius: 4,
            }}>
            <TouchableOpacity
              // onPress={() => navigation.navigate('Profil')}
              style={{
                weight: 280,
                height: 32,
                backgroundColor: '#287AE5',
                width: '100%',
                borderRadius: 4,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                bottom: 8,
              }}>
              {/* <Image
                style={{
                  height: 128,
                  width: 214,
                  marginBottom: 16,
                  marginTop: 4,
                  marginLeft: 12,
                }}
                source={require('./image/ktp.jpg')}
              /> */}
              <Text
                style={{
                  color: '#fff',
                  fontSize: 14,
                  fontWeight: 'bold',
                }}>
                UNGGAH KTP
              </Text>
            </TouchableOpacity>
          </View>
          <Text style={styles.textJudul2}>No. NPWP</Text>
          <TextInput placeholder="" style={styles.TextInput} />
          <Text style={styles.textJudul2}>Foto NPWP</Text>
          <View
            style={{
              borderRadius: 10,
              borderColor: '#E5E8EE',
              flexDirection: 'column',
              borderWidth: 1,
              paddingVertical: 20,
              alignItems: 'center',
              height: 188,
              weight: 304,
              borderRadius: 4,
            }}>
            {/* <Image
              style={{
                height: 128,
                width: 214,
                marginBottom: 16,
                marginTop: 4,
                marginLeft: 12,
              }}
              source={require('./image/npwp.png')}
            /> */}
            <TouchableOpacity
              // onPress={() => navigation.navigate('Profil')}
              style={{
                weight: 280,
                height: 32,
                backgroundColor: '#287AE5',
                width: '100%',
                borderRadius: 4,
                justifyContent: 'center',
                alignItems: 'center',
                position: 'absolute',
                bottom: 8,
              }}>
              <Text
                style={{
                  color: '#fff',
                  fontSize: 14,
                  fontWeight: 'bold',
                }}>
                UNGGAH NPWP
              </Text>
            </TouchableOpacity>
          </View>
        </View>

        <View
          style={{
            weight: 360,
            height: 60,
            backgroundColor: '#FFFFFF',
            marginTop: 5,
          }}>
          <TouchableOpacity
            onPress={() => navigation.navigate('ProfilScreen')}
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
    </ScrollView>
  );
};

const styles = StyleSheet.create({
  komponen: {
    flex: 1,
    backgroundColor: '#F7F7F7',
    paddingHorizontal: 20,
    // alignItems: 'center',
    // justifyContent: 'center',
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
    fontSize: 14,
    marginBottom: 16,
    marginTop: 4,
    color: '#002558',
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

export default EditDokumen;
