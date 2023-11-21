import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Colors} from './Colors';
import {TextReguler, TextMedium, TextBold} from './Text';
import Icon from 'react-native-vector-icons/AntDesign';

import {
  View,
  Text,
  Image,
  ScrollView,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
} from 'react-native';

export default function ProfilComponent({profilData, navigation}) {
  console.log('profilComponent', profilData);
  return (
    <ScrollView>
      <View
        style={{
          flex: 1,
          backgroundColor: '#F7F7F7',
        }}>
        <View
          style={{
            justifyContent: 'center',
            alignItems: 'center',
            marginTop: 10,
          }}>
          <Image
            source={require('../../../asset/Image/bg.png')}
            style={{
              flex: 1,
              weight: 360,
              height: 142,
              width: '100%',
              justifyContent: 'center',
              alignItems: 'center',
              position: 'absolute',
              opacity: 1,
            }}
          />
          <View
            style={{
              flexDirection: 'row',
            }}>
            <Image
              style={{
                height: 64,
                width: 64,
                borderRadius: 100,
              }}
              source={require('../../../asset/Image/foto.png')}
            />
            <Icon
              name="login"
              size={16}
              color="#FFF"
              style={{
                position: 'absolute',
                left: 350,
              }}></Icon>
          </View>
          <Text
            style={{
              fontSize: 20,
              fontWeight: '500',
              color: '#FFFFFF',
              marginVertical: 5,
            }}>
            {profilData.profile.name}
          </Text>
        </View>
        <View style={{marginTop: 16}}>
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('ProfilRouting', {
                screen: 'CekHargaKendaraan',
              })
            }
            style={{
              weight: 328,
              height: 48,
              backgroundColor: '#287AE5',
              borderRadius: 4,
              alignItems: 'center',
              marginTop: 16,
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingHorizontal: 16,
            }}>
            <Text
              style={{
                color: '#fff',
                fontSize: 14,
                fontWeight: 'bold',
              }}>
              Cek Harga Kendaraan
            </Text>
            <Icon name="right" size={16} color="#FFF" />
          </TouchableOpacity>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            weight: 328,
            height: 340,
            paddingVertical: 10,
            paddingHorizontal: 12,
            marginTop: 12,
            marginBottom: 12,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginRight: 12,
              marginLeft: 12,
            }}>
            <Text style={styles.boldText}>Data Diri</Text>
            <Text
              onPress={() => {
                navigation.navigate('ProfilRouting', {screen: 'EditDataDiri'});
              }}
              style={{color: '#287AE5', fontSize: 12, fontStyle: 'italic'}}>
              Edit Data Diri
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <View style={{flex: 1, height: 2, backgroundColor: '#F7F7F7'}} />
          </View>
          <Text style={styles.regularText}>Nama Supervisor</Text>
          <Text style={styles.semiBoldText}>{profilData.profile.name}</Text>
          <Text style={styles.regularText}>Cabang</Text>
          <Text style={styles.semiBoldText}>
            {profilData.profile.SalesBranch.branch}
          </Text>
          <Text style={styles.regularText}>NRP</Text>
          <Text style={styles.semiBoldText}>{profilData.profile.nrp}</Text>
          <Text style={styles.regularText}>No.Telepon</Text>
          <Text style={styles.semiBoldText}>{profilData.user.phone}</Text>
          <Text style={styles.regularText}>Tanggal Lahir</Text>
          <Text style={styles.semiBoldText}>
            {profilData.profile.dateOfBirth}
          </Text>
        </View>

        <View
          style={{
            backgroundColor: 'white',
            paddingVertical: 10,
            paddingHorizontal: 12,
            marginTop: 12,
            marginBottom: 12,
            weight: 328,
            height: 220,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginRight: 12,
              marginLeft: 12,
            }}>
            <Text style={styles.boldText}>Data Rekening</Text>
            <Text
              onPress={() => {
                navigation.navigate('ProfilRouting', {
                  screen: 'EditDataRekening',
                });
              }}
              style={{color: '#287AE5', fontSize: 12, fontStyle: 'italic'}}>
              Edit Data Rekening
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <View style={{flex: 1, height: 2, backgroundColor: '#F7F7F7'}} />
          </View>
          <Text style={styles.regularText}>Bank</Text>
          <Text style={styles.semiBoldText}>{profilData.profile.bankName}</Text>
          <Text style={styles.regularText}>Nama Pemilik Rekening</Text>
          <Text style={styles.semiBoldText}>{profilData.profile.name}</Text>
          <Text style={styles.regularText}>No. Rekening</Text>
          <Text style={styles.semiBoldText}>
            {profilData.profile.bankAccNo}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: 'white',
            paddingVertical: 10,
            paddingHorizontal: 12,
            marginTop: 12,
            marginBottom: 12,
            weight: 328,
            height: 493,
          }}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginRight: 12,
              marginLeft: 12,
            }}>
            <Text style={styles.boldText}>Dokumen</Text>
            <Text
              onPress={() => {
                navigation.navigate('ProfilRouting', {screen: 'EditDokumen'});
              }}
              style={{color: '#287AE5', fontSize: 12, fontStyle: 'italic'}}>
              Edit Dokumen
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginBottom: 10,
            }}>
            <View style={{flex: 1, height: 2, backgroundColor: '#F7F7F7'}} />
          </View>
          <Text style={styles.regularText}>No.KTP</Text>
          <Text style={styles.semiBoldText}>{profilData.profile.noKTP}</Text>
          <Text style={styles.regularText}>Foto KTP</Text>
          <Image
            style={{
              height: 128,
              width: 214,
              marginBottom: 16,
              marginTop: 4,
              marginLeft: 12,
            }}
            // source={require('../../../asset/Image/ktp.jpg')}
            source={{uri: profilData.profile.ktp}}
          />
          <Text style={styles.regularText}>No. NPWP</Text>
          <Text style={styles.semiBoldText}>{profilData.profile.noNPWP}</Text>
          <Text style={styles.regularText}>Foto NPWP</Text>
          <Image
            style={{
              height: 128,
              width: 214,
              marginBottom: 16,
              marginTop: 4,
              marginLeft: 12,
            }}
            // source={require('../../../asset/Image/npwp.png')}
            source={{uri: profilData.profile.npwp}}
          />
        </View>
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  regularText: {
    color: '#002558',
    fontSize: 12,
    marginLeft: 12,
  },
  semiBoldText: {
    color: '#002558',
    fontWeight: '500',
    marginLeft: 12,
    fontSize: 14,
    marginTop: 4,
    marginBottom: 16,
  },
  boldText: {
    color: '#002558',
    fontWeight: 'bold',
    fontSize: 14,
    marginBottom: 10,
  },
});
