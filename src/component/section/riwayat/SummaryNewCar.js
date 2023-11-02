import React from 'react';
import {View, TouchableOpacity, ScrollView, StyleSheet} from 'react-native';
import {TextBold, TextMedium, TextRegular} from '../../global/Text';
import {Colors} from '../../../styles';
import Icon from 'react-native-vector-icons/Entypo';

const SummaryNewCar = (navigation, route) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        {/* <View
        style={styles.nnotifNoDeal}> */}
        <View style={styles.notifDeal}>
          <TextMedium text="Deal" size={15} color={Colors.WHITE} />
          {/* <TextMedium text="No Deal" size={15} color={Colors.WHITE} /> */}
          <TextRegular
            text="19 Agustus 2020 - 15.43"
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
            text="Customer Baru dan dan belum untuk memberikan Diskon yang Besar"
            size={15}
            color={Colors.DARK_BLUE}
          />
        </View>
        <View style={styles.headContentCard}>
          <TextMedium
            text="TR-092018-246"
            size={15}
            color={Colors.MEDIUM_GRAY}
          />
          <TextMedium
            text="Kepala Cabang Bintaro"
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
              text="NANDO DWIKI SATRIA"
              size={15}
              color={Colors.DARK_BLUE}
            />
          </View>
          <View style={styles.contentCard}>
            <TextMedium text="No.Hp" size={15} color={Colors.DARK_BLUE} />
            <TextMedium
              text="0822453820505"
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
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TextBold text="Rush S AT TRD" size={15} color={Colors.DARK_BLUE} />
            <TextBold
              text="RP. 276.600.000"
              size={15}
              color={Colors.DARK_BLUE}
            />
          </View>
        </View>
        <View style={styles.headContentCard}>
          <TextBold text="Request Diskon" color={Colors.DARK_BLUE} size={15} />
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
            <TextMedium text="Harga Mobil" size={15} color={Colors.DARK_BLUE} />
            <TextBold
              text="RP. 235.000.000"
              size={15}
              color={Colors.DARK_BLUE}
            />
          </View>
        </View>
      </ScrollView>
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
