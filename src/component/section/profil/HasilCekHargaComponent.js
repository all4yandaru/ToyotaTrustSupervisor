import React, {Component} from 'react';
import {
  Text,
  View,
  ScrollView,
  TouchableOpacity,
  StyleSheet,
  TextInput,
  Dimensions,
} from 'react-native';
import {Colors} from '../../../styles';
import Icon from 'react-native-vector-icons/Ionicons';
import Feather from 'react-native-vector-icons/Feather';
import {TextBold, TextRegular, TextMedium} from '../../global/Text';

const HasilCekHargaComponent = ({navigation}) => {
  return (
    // <View>
    <ScrollView Style={{flexGrow: 1}}>
      {/* TOP CONTENT =============================================================== */}
      <View
        style={{
          padding: 16,

          paddingRight: '35%',
          flexDirection: 'row',
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginBottom: 5,
        }}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Feather name="arrow-left" size={24} color={Colors.BLACK} />
        </TouchableOpacity>
        <TextBold color={Colors.DARK_BLUE} text="Hasil Cek Harga" size={16} />
      </View>
      <View style={{backgroundColor: Colors.WHITE}}>
        <View
          style={{
            alignItems: 'center',
            paddingTop: 15,
          }}>
          <TextBold text="Perkiraan Harga" size={18} color={Colors.DARK_BLUE} />
        </View>
        {/* MERK MOBILE ============================================================= */}
        <View
          style={{
            borderWidth: 2,
            paddingBottom: 10,
            width: 200,
            height: 110,
            alignSelf: 'center',
            marginTop: 37,
            borderRadius: 5,
            borderColor: '#E5E8EE',
          }}>
          <View
            style={{
              backgroundColor: Colors.BLUE,
              paddingVertical: 8,
              borderRadius: 5,
              marginTop: -17,
              marginEnd: 45,
              marginStart: 45,
            }}>
            <TextMedium
              text="TOYOTA"
              size={16}
              color={Colors.WHITE}
              style={{alignSelf: 'center'}}
            />
          </View>
          <View>
            <TextBold
              text="Camry"
              size={24}
              color={Colors.DARK_BLUE}
              style={{alignSelf: 'center', marginTop: 11}}
            />
            <TextRegular
              text="All New Camry 3.5 Q AT"
              size={15}
              color={Colors.DARK_BLUE}
              style={{alignSelf: 'center', marginTop: 11}}
            />
          </View>
        </View>
        {/* RATE ====================================================================== */}
        <View
          style={{
            backgroundColor: '#287AE5',
            marginHorizontal: 16,
            marginTop: 20,
            borderRadius: 5,
          }}>
          <View
            style={{
              marginHorizontal: 8,
              marginTop: 8,
              alignItems: 'center',
              backgroundColor: '#5fa0d9',
              borderRadius: 5,
              marginBottom: 5,
              paddingVertical: 5,
            }}>
            <TextRegular
              text="*Harga berlaku untuk Plat B"
              size={15}
              color={Colors.WHITE}
            />
          </View>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-evenly',
              alignItems: 'center',
              marginBottom: 11,
            }}>
            <TextRegular text="Rp 80.000.000" size={14} color={Colors.WHITE} />
            <View style={{height: 1, width: 80, backgroundColor: 'white'}} />
            <TextRegular text="Rp 100.000.000" size={14} color={Colors.WHITE} />
          </View>
        </View>
        {/* ESTIMASI ========================================================================*/}
        <View
          style={{
            borderColor: '#E5E8EE',
            borderWidth: 3,
            backgroundColor: 'white',
            marginHorizontal: 16,
            marginTop: 20,
            borderRadius: 5,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            paddingVertical: 20,
          }}>
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <TextRegular
              text="Estimasi Kilometer"
              size={12}
              color={Colors.DARK_BLUE}
            />
            <TextMedium text="< 180.000" size={16} color={Colors.DARK_BLUE} />
          </View>
          <View style={styles.lineStyle} />
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <TextRegular
              text="Estimasi Warna"
              size={12}
              color={Colors.DARK_BLUE}
            />
            <TextMedium
              text="Non Hitam/Putih"
              size={16}
              color={Colors.DARK_BLUE}
            />
          </View>
          <View style={styles.lineStyle} />
          <View style={{flexDirection: 'column', alignItems: 'center'}}>
            <TextRegular
              text="Estimasi Tahun"
              size={12}
              color={Colors.DARK_BLUE}
            />
            <TextMedium text="2007" size={16} color={Colors.DARK_BLUE} />
          </View>
        </View>
        {/* KETERANGAN ================================================================ */}
        <View
          style={{
            backgroundColor: 'white',
            marginHorizontal: 16,
            marginVertical: 20,
            borderRadius: 5,
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            paddingVertical: 30,
            borderColor: '#E5E8EE',
            borderWidth: 2,
            paddingHorizontal: 5,
          }}>
          <View style={{alignItems: 'center'}}>
            <TextMedium text="Keterangan" size={18} color={Colors.DARK_BLUE} />
            <View
              style={{
                height: 2,
                width: '20%',
                backgroundColor: '#E5E8EE',
              }}
            />
            <TextMedium
              text="Harga yang diberikan merupakan estimasi awal yang dapat di tawarkan Toyota Trust dan bukan merupakan harga final setelah proses appraisal."
              size={14}
              color={Colors.DARK_BLUE}
              style={{marginTop: 10}}
            />
          </View>
        </View>
      </View>
    </ScrollView>
  );
};

export default HasilCekHargaComponent;

const styles = StyleSheet.create({
  lineStyle: {
    borderWidth: 0.5,
    borderColor: 'black',
    marginVertical: 0,
  },
});
