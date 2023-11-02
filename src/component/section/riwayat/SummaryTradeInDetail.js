import React from 'react';
import {
  View,
  TouchableOpacity,
  ScrollView,
  TextInput,
  StyleSheet,
} from 'react-native';
import {TextBold, TextMedium, TextRegular, InputText} from '../../global';
import {Colors} from '../../../styles';
import Icon from 'react-native-vector-icons/Feather';
import AppIcon from 'react-native-vector-icons/FontAwesome';

const SummaryDetailTradeIn = ({navigation, route}) => {
  return (
    <ScrollView>
      <View style={styles.container}>
        {/* <View style={styles.notifNoDeal}> */}
        <View style={styles.notifDeal}>
          <TextMedium text="Deal" size={15} color={Colors.WHITE} />
          {/* <TextMedium text="No Deal" size={15} color={Colors.WHITE} /> */}
          <TextRegular
            text="19 Agustus 2020 - 15.43"
            size={13}
            color={Colors.WHITE}
          />
        </View>
        <View
          style={{
            backgroundColor: Colors.WHITE,
            paddingHorizontal: 20,
            paddingVertical: 10,
            marginBottom: 10,
          }}>
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
        <View style={styles.headCard}>
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
        <View style={styles.contentCard}>
          <View
            style={{
              backgroundColor: Colors.WHITE,
              paddingVertical: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
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
          <View
            style={{
              backgroundColor: Colors.WHITE,
              paddingVertical: 10,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <TextMedium text="No.Hp" size={15} color={Colors.DARK_BLUE} />
            <TextMedium
              text="0822453820505"
              size={15}
              color={Colors.DARK_BLUE}
            />
          </View>
        </View>
        <View style={styles.headCard}>
          <TextBold text="Detail Mobil" color={Colors.DARK_BLUE} size={15} />
        </View>
        <View style={styles.contentCard}>
          <TextMedium text="Used Car" size={13} color={Colors.DARK_GRAY} />
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginBottom: 20,
            }}>
            <TextBold
              text="AVANZA G AT 2016"
              size={15}
              color={Colors.DARK_BLUE}
            />
            <TextBold
              text="RP. 81.500.000"
              size={15}
              color={Colors.DARK_BLUE}
            />
          </View>
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
        <View style={styles.headCard}>
          <TextBold text="Request Diskon" color={Colors.DARK_BLUE} size={15} />
        </View>
        <View style={styles.contentCard}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 10,
            }}>
            <TextMedium text="Diskon" size={15} color={Colors.DARK_BLUE} />
            <TextBold text="RP. 9.000.000" size={15} color={Colors.DARK_BLUE} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 10,
            }}>
            <TextMedium
              text="Proyeksi GP (After Disc)"
              size={15}
              color={Colors.DARK_BLUE}
            />
            <TextBold text="RP. 3.000.000" size={15} color={Colors.DARK_BLUE} />
          </View>
        </View>
        <View style={styles.headCard}>
          <TextBold text="Request Subsidi" color={Colors.DARK_BLUE} size={15} />
        </View>
        <View style={styles.contentCard}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 10,
            }}>
            <TextMedium
              text="Nominal Request"
              size={15}
              color={Colors.DARK_BLUE}
            />
            <TextBold text="RP. 3.000.000" size={15} color={Colors.DARK_BLUE} />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 10,
            }}>
            <TextMedium
              text="Proyeksi GP Trade In"
              size={15}
              color={Colors.DARK_BLUE}
            />
            <TextBold text="RP. 7.000.000" size={15} color={Colors.DARK_BLUE} />
          </View>
        </View>
        <View style={styles.headCard}>
          <TextBold text="Request MRP" color={Colors.DARK_BLUE} size={15} />
        </View>
        <View style={styles.contentCard}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 10,
            }}>
            <TextMedium
              text="Nominal Request"
              size={15}
              color={Colors.DARK_BLUE}
            />
            <TextBold
              text="RP. 156.187.500"
              size={15}
              color={Colors.DARK_BLUE}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              paddingVertical: 10,
            }}>
            <TextMedium text="Ruang Nego" size={15} color={Colors.DARK_BLUE} />
            <TextBold
              text="+ RP. 4.685.000"
              size={15}
              color={Colors.LIGHT_GREEN}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default SummaryDetailTradeIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.GRAY,
    marginBottom: 20,
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
  headCard: {
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
    paddingVertical: 10,
    paddingHorizontal: 20,
    marginBottom: 10,
  },
});
