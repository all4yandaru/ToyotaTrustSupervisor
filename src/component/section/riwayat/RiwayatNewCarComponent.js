import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../../styles';
import {useNavigation} from '@react-navigation/native';

const RiwayatNewCarComponent = () => {
  return (
    <View style={{flex: 1, padding: 16}}>
      <TouchableOpacity
      // onPress={()=> }
      >
        <View
          style={{
            height: 150,
            borderRadius: 8,
            padding: 10,
            marginBottom: 10,
            backgroundColor: Colors.WHITE,
            justifyContent: 'space-around',
          }}>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            <Text style={{fontSize: 14}}>TR - 092018 - 246</Text>
            <Text style={{fontSize: 14, fontWeight: '500'}}>
              Sen, 17 Sep 2018 - 10.30
            </Text>
          </View>
          <View>
            <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 15}}>
              AVANZA G 2.0
            </Text>
            <View
              style={{borderBottomWidth: 1, borderBottomColor: '#CCD3DD'}}
            />
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <View>
              <Text style={{fontSize: 14, fontWeight: 'bold', marginBottom: 3}}>
                Handoko
              </Text>
              <Text style={{fontSize: 10}}>Cabang Kelapa Gading</Text>
            </View>
            <View
              style={{
                height: 25,
                padding: 6,
                borderRadius: 4,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: Colors.RED,
              }}>
              <Text style={{fontSize: 10, color: Colors.WHITE}}>No Deal</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View
          style={{
            height: 150,
            borderRadius: 8,
            padding: 10,
            marginBottom: 10,
            backgroundColor: Colors.WHITE,
            justifyContent: 'space-around',
          }}>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            <Text style={{fontSize: 14}}>TR - 092018 - 246</Text>
            <Text style={{fontSize: 14, fontWeight: '500'}}>
              Sen, 17 Sep 2018 - 10.30
            </Text>
          </View>
          <View>
            <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 15}}>
              AVANZA G 2.0
            </Text>
            <View
              style={{borderBottomWidth: 1, borderBottomColor: '#CCD3DD'}}
            />
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <View>
              <Text style={{fontSize: 14, fontWeight: 'bold', marginBottom: 3}}>
                Handoko
              </Text>
              <Text style={{fontSize: 10}}>Cabang Kelapa Gading</Text>
            </View>
            <View
              style={{
                height: 25,
                padding: 6,
                borderRadius: 4,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: Colors.GREEN,
              }}>
              <Text style={{fontSize: 10, color: Colors.WHITE}}>Deal</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>

      <TouchableOpacity>
        <View
          style={{
            height: 150,
            borderRadius: 8,
            padding: 10,
            marginBottom: 10,
            backgroundColor: Colors.WHITE,
            justifyContent: 'space-around',
          }}>
          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            <Text style={{fontSize: 14}}>TR - 092018 - 246</Text>
            <Text style={{fontSize: 14, fontWeight: '500'}}>
              Sen, 17 Sep 2018 - 10.30
            </Text>
          </View>
          <View>
            <Text style={{fontSize: 16, fontWeight: 'bold', marginBottom: 15}}>
              AVANZA G 2.0
            </Text>
            <View
              style={{borderBottomWidth: 1, borderBottomColor: '#CCD3DD'}}
            />
          </View>
          <View
            style={{
              alignItems: 'center',
              justifyContent: 'space-between',
              flexDirection: 'row',
            }}>
            <View>
              <Text style={{fontSize: 14, fontWeight: 'bold', marginBottom: 3}}>
                Handoko
              </Text>
              <Text style={{fontSize: 10}}>Cabang Kelapa Gading</Text>
            </View>
            <View
              style={{
                height: 25,
                padding: 6,
                borderRadius: 4,
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: Colors.GREEN,
              }}>
              <Text style={{fontSize: 10, color: Colors.WHITE}}>Deal</Text>
            </View>
          </View>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default RiwayatNewCarComponent;
