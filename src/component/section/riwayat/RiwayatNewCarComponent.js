import React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';
import {Colors} from '../../../styles';
import moment from 'moment/moment';
import 'moment/locale/id';
import {useNavigation} from '@react-navigation/native';

const RiwayatNewCarComponent = ({navigation, newCarParams}) => {
  const limitedNewCarParams = newCarParams.slice(0, 20);
  moment.locale('id');

  return (
    <View style={{flex: 1, padding: 16}}>
      {limitedNewCarParams.map((item, index) => (
        <TouchableOpacity
          key={index}
          onPress={() =>
            navigation.navigate('RiwayatRouting', {
              screen: 'SummaryNewCar',
              params: {selectedItem: item},
            })
          }>
          <View
            style={{
              height: 150,
              borderRadius: 8,
              padding: 10,
              marginBottom: 10,
              backgroundColor: Colors.WHITE,
              justifyContent: 'space-around',
            }}>
            <View
              style={{justifyContent: 'space-between', flexDirection: 'row'}}>
              <Text style={{fontSize: 14}}>{item.noNewCar}</Text>
              <Text style={{fontSize: 14, fontWeight: '500'}}>
                {moment(new Date(item.updatedAt)).format(
                  'ddd, DD MMM YYYY, HH:mm',
                )}
              </Text>
            </View>
            <View>
              <Text
                style={{fontSize: 16, fontWeight: 'bold', marginBottom: 15}}>
                {item.NewCar.carName}
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
                <Text
                  style={{fontSize: 14, fontWeight: 'bold', marginBottom: 3}}>
                  {item.SalesBranch.BranchHead.name}
                </Text>
                <Text style={{fontSize: 10}}>{item.SalesBranch.branch}</Text>
              </View>
              <View
                style={{
                  height: 25,
                  padding: 6,
                  borderRadius: 4,
                  justifyContent: 'center',
                  alignItems: 'center',
                  backgroundColor:
                    item.approvalStatus === 'Deal' ? Colors.GREEN : Colors.RED,
                }}>
                <Text style={{fontSize: 10, color: Colors.WHITE}}>
                  {item.approvalStatus}
                </Text>
              </View>
            </View>
          </View>
        </TouchableOpacity>
      ))}
    </View>
  );
};

export default RiwayatNewCarComponent;
