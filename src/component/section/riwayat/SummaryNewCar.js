import React, {useEffect, useState} from 'react';
import {View, TouchableOpacity, ScrollView, StyleSheet} from 'react-native';
import {TextBold, TextMedium, TextRegular} from '../../global/Text';
import {Colors} from '../../../styles';
import Icon from 'react-native-vector-icons/Feather';
import {useSelector} from 'react-redux';
import riwayatHelper from '../../../apiManagement/riwayatHelper';
import {useIsFocused} from '@react-navigation/native';
import moment from 'moment/moment';

const SummaryNewCar = ({navigation, route}) => {
  const {session} = useSelector(state => state.session);
  const {account} = useSelector(state => state.account);

  const [newCarData, setNewCarData] = useState(null);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (session.token && account) {
      NewCarDataProcess();
    }
  }, [isFocused]);

  const NewCarDataProcess = async () => {
    const res = await riwayatHelper.RiwayatNewCarDetail(
      session.token,
      route.params.id,
    );
    setNewCarData(res);
    console.log('detail data: ', res);
  };

  return (
    <View style={styles.container}>
      {newCarData && (
        <ScrollView>
          {/* <View
        style={styles.nnotifNoDeal}> */}
          <View
            style={{
              padding: 16,
              paddingRight: '40%',
              flexDirection: 'row',
              backgroundColor: 'white',
              alignItems: 'center',
              justifyContent: 'space-between',
              marginBottom: 5,
            }}>
            <TouchableOpacity onPress={() => navigation.goBack()}>
              <Icon name="arrow-left" size={24} color={Colors.BLACK} />
            </TouchableOpacity>
            <TextBold
              color={Colors.DARK_BLUE}
              text="Summary New Car"
              size={16}
            />
          </View>
          <View
            style={[
              styles.notifDeal,
              {
                backgroundColor:
                  newCarData.approvalNewCar.approvalStatus != 'Deal'
                    ? Colors.RED
                    : Colors.LIGHT_GREEN,
              },
            ]}>
            <TextMedium
              text={newCarData.approvalNewCar.approvalStatus}
              size={15}
              color={Colors.WHITE}
            />
            {/* <TextMedium text="No Deal" size={15} color={Colors.WHITE} /> */}
            <TextRegular
              text={moment(
                new Date(newCarData.approvalNewCar.updatedAt),
              ).format('ddd, DD MMM YYYY, HH:mm')}
              size={13}
              color={Colors.WHITE}
            />
          </View>
          <View style={styles.cardComment}>
            <TextMedium
              text="Alasan Penolakan"
              size={14}
              color={Colors.MEDIUM_GRAY}
            />
            <TextMedium
              text={newCarData.approvalNewCar.noDealNotes}
              size={15}
              color={Colors.DARK_BLUE}
            />
          </View>
          <View style={styles.headContentCard}>
            <TextMedium
              text={route.params.noNewCar}
              size={15}
              color={Colors.MEDIUM_GRAY}
            />
            <TextMedium
              text={newCarData.approvalNewCar.SalesBranch.BranchHead.name}
              size={15}
              color={Colors.DARK_BLUE}
            />
          </View>
          <View
            style={{
              backgroundColor: Colors.WHITE,
              marginBottom: 10,
            }}>
            <View style={styles.contentCard}>
              <TextMedium
                text="Nama Customer"
                size={15}
                color={Colors.DARK_BLUE}
              />
              <TextBold
                text={newCarData.approvalNewCar.customerName}
                size={15}
                color={Colors.DARK_BLUE}
              />
            </View>
            <View style={styles.contentCard}>
              <TextMedium text="No.Hp" size={15} color={Colors.DARK_BLUE} />
              <TextMedium
                text={newCarData.approvalNewCar.phone}
                size={15}
                color={Colors.DARK_BLUE}
              />
            </View>
          </View>
          <View style={styles.headContentCard}>
            <TextBold text="Detail Mobil" color={Colors.DARK_BLUE} size={15} />
          </View>
          <View
            style={{
              backgroundColor: Colors.WHITE,
              paddingVertical: 10,
              paddingHorizontal: 20,
              marginBottom: 10,
            }}>
            <TextMedium text="New Car" size={13} color={Colors.DARK_GRAY} />
            <View
              style={{flexDirection: 'row', justifyContent: 'space-between'}}>
              <TextBold
                text={newCarData.approvalNewCar.NewCar.carName}
                size={15}
                color={Colors.DARK_BLUE}
              />
              <TextBold
                text={`Rp ${newCarData.approvalNewCar.NewCar.otr}`}
                size={15}
                color={Colors.DARK_BLUE}
              />
            </View>
          </View>
          <View style={styles.headContentCard}>
            <TextBold
              text="Request Diskon"
              color={Colors.DARK_BLUE}
              size={15}
            />
          </View>
          <View
            style={{
              backgroundColor: Colors.WHITE,
              paddingVertical: 10,
              // paddingHorizontal: 20,
              marginBottom: 10,
            }}>
            <View style={styles.contentCard}>
              <TextMedium text="Diskon" size={15} color={Colors.DARK_BLUE} />
              <TextBold
                text="RP. 15.000.000"
                size={15}
                color={Colors.DARK_BLUE}
              />
            </View>
            <View style={styles.contentCard}>
              <TextMedium
                text="Harga Mobil"
                size={15}
                color={Colors.DARK_BLUE}
              />
              <TextBold
                text={`Rp ${newCarData.approvalNewCar.NewCar.otr}`}
                size={15}
                color={Colors.DARK_BLUE}
              />
            </View>
          </View>
        </ScrollView>
      )}
    </View>
  );
};

export default SummaryNewCar;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.GRAY,
  },
  cardComment: {
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 20,
    paddingVertical: 10,
    marginBottom: 10,
  },
  headContentCard: {
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 3,
  },
  contentCard: {
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 20,
    paddingVertical: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  notifDeal: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Colors.LIGHT_GREEN,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  notifNoDeal: {
    paddingVertical: 10,
    paddingHorizontal: 20,
    backgroundColor: Colors.RED,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
});
