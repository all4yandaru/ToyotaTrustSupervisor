import React, {useState, useEffect} from 'react';
import {View, Text, TouchableOpacity} from 'react-native';
import {Colors} from '../../../styles';
import moment from 'moment/moment';
import 'moment/locale/id';
import riwayatHelper from '../../../apiManagement/riwayatHelper';
import {useSelector} from 'react-redux';

const RiwayatTradeInComponent = ({navigation, tradeInParams}) => {
  // const limitedTradeInParams = tradeInParams.slice(0, 20);

  moment.locale('id');

  return (
    <View style={{flex: 1, padding: 16}}>
      {tradeInParams &&
        tradeInParams.map((item, index) => (
          <TouchableOpacity
            key={index}
            onPress={() =>
              navigation.navigate('RiwayatRouting', {
                screen: 'SummaryTradeIn',
                params: item,
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
                <Text style={{fontSize: 14}}>
                  {item.Appraisal.Booking.noBooking}
                </Text>
                <Text style={{fontSize: 14, fontWeight: '500'}}>
                  {moment(new Date(item.updatedAt)).format(
                    'ddd, DD MMM YYYY, HH:mm',
                  )}
                </Text>
              </View>
              <View>
                <Text
                  style={{fontSize: 16, fontWeight: 'bold', marginBottom: 15}}>
                  {item.Appraisal.carName}
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
                    {item.Appraisal.Booking.SalesProfile.name}
                  </Text>
                  <Text style={{fontSize: 10}}>
                    {item.Appraisal.Booking.SalesProfile.SalesBranch.branch}
                  </Text>
                </View>
                <View
                  style={{
                    height: 25,
                    padding: 6,
                    borderRadius: 4,
                    justifyContent: 'center',
                    alignItems: 'center',
                    backgroundColor:
                      item.approvalStatus === 'Deal'
                        ? Colors.GREEN
                        : Colors.RED,
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

export default RiwayatTradeInComponent;
