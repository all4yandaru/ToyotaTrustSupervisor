import React, {Component} from 'react';
import {
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import {Colors} from '../../../styles';
import {TextBold, TextRegular} from '../../global';

const DetailAppraisalComponent = ({route, navigation}) => {
  return (
    <ScrollView contentContainerStyle={{flexGrow: 1}}>
      <ImageBackground
        style={localStyles.header}
        resizeMode="cover"
        source={require('../../../asset/Image/background_blue.png')}>
        {/* HEADER ================================================================= */}
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TouchableOpacity style={{alignSelf: 'center'}}>
            <Icon name="arrow-back-outline" size={16} color={Colors.WHITE} />
          </TouchableOpacity>
          <TextBold text={'Summary'} size={16} color={Colors.WHITE} />
          <View style={{width: 16, height: 16}}>
            {/* untuk mengisi ruang kosong */}
          </View>
        </View>
      </ImageBackground>

      {/* CARD MOBIL ================================================================== */}
      <View style={[localStyles.card, {marginTop: -80}]}>
        {/* Bagian atas */}
        <View style={{flexDirection: 'row'}}>
          <Image
            source={require('../../../asset/Image/real_car.png')}
            style={localStyles.carImage}
          />
          <View style={{flex: 1, marginLeft: 8}}>
            <TextBold
              text={'Avanza tipe \nG/AT 2015'}
              color={Colors.DARK_BLUE}
              size={16}
            />
            <HorizontalStrikeLine />
            <TextRegular
              text={'Harga Final :'}
              size={16}
              color={Colors.BLUE}
              style={{marginTop: 8}}
            />
            <TextBold text={'76.500.000'} size={16} color={Colors.BLUE} />
          </View>
        </View>

        {/* Bagian bawah */}
        <HorizontalStrikeLine />
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-evenly',
            marginTop: 8,
          }}>
          {/* BEBAS BANJIR */}
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={[localStyles.circleImage, {marginRight: 8}]}>
              <Image source={require('../../../asset/Icons/sea.png')} />
            </View>
            <TextRegular
              text={'Bebas Banjir'}
              size={12}
              color={Colors.DARK_BLUE}
            />
          </View>
          <View style={{flexDirection: 'row', alignItems: 'center'}}>
            <View style={[localStyles.circleImage, {marginRight: 8}]}>
              <Image source={require('../../../asset/Icons/car.png')} />
            </View>
            <TextRegular
              text={'Bebas Kecelakaan'}
              size={12}
              color={Colors.DARK_BLUE}
            />
          </View>
        </View>
      </View>

      {/* CARD PERHITUNGAN ========================================================================== */}
      <View style={[localStyles.card, {marginTop: 12}]}>
        <TextBold
          text={'Hasil Perhitungan Final'}
          color={Colors.DARK_BLUE}
          size={16}
          style={{alignSelf: 'center'}}
        />
        <HorizontalStrikeLine />

        {/* Overview */}
        <View style={{flexDirection: 'row', marginTop: 8, marginBottom: 4}}>
          <Image source={require('../../../asset/Icons/overview_icon.png')} />
          <TextBold
            text={'Overview'}
            color={Colors.DARK_BLUE}
            size={16}
            style={{alignSelf: 'center', paddingLeft: 8}}
          />
        </View>
        <TextBetween textLeft={'Nomor Polisi'} textRight={'AB 5921 YV'} />
        <TextBetween
          textLeft={'Nomor Mesin'}
          textRight={'161613516156451325'}
        />
        <TextBetween textLeft={'Nomor Rangka'} textRight={'72149GHG68'} />
        <TextBetween textLeft={'Warna Eksterior'} textRight={'Putih'} />
        <TextBetween textLeft={'Jarak Tempuh'} textRight={'40.000'} />
        <TextBetween textLeft={'Tahun STNK'} textRight={'2017'} />
        <TextBetweenHarga
          textLeft={'Kilometer'}
          textRight={'Diatas 100.000 Km'}
          textHarga={'- Rp 800.000'}
        />
        <TextBetweenHarga
          textLeft={'R. Mesin'}
          textRight={'Oli Rembes'}
          textHarga={'- Rp 800.000'}
        />
        <TextBetweenHarga
          textLeft={'Banjir'}
          textRight={'Ya'}
          textHarga={'- Rp 800.000'}
        />
        <HorizontalStrikeLine />

        {/* Kendaraan */}
        <View style={{flexDirection: 'row', marginTop: 8, marginBottom: 4}}>
          <Image source={require('../../../asset/Icons/kendaraan_icon.png')} />
          <TextBold
            text={'Kendaraan'}
            color={Colors.DARK_BLUE}
            size={16}
            style={{alignSelf: 'center', paddingLeft: 8}}
          />
        </View>
        <FrameBaik />
        <HorizontalStrikeLine />

        {/* Engine */}
        <View style={{flexDirection: 'row', marginTop: 8, marginBottom: 4}}>
          <Image source={require('../../../asset/Icons/engine_icon.png')} />
          <TextBold
            text={'Engine'}
            color={Colors.DARK_BLUE}
            size={16}
            style={{alignSelf: 'center', paddingLeft: 8}}
          />
        </View>
        <TextBetweenHarga
          textLeft={'Engine Defect'}
          textRight={'Perlu perbaikan Engine Oil Leakage'}
          textHarga={'- Rp 800.000'}
        />
        <TextBetweenHarga
          textLeft={'Engine Defect'}
          textRight={'Perlu perbaikan White Smoke'}
          textHarga={'- Rp 800.000'}
        />
        <HorizontalStrikeLine />

        {/* Interior */}
        <View style={{flexDirection: 'row', marginTop: 8, marginBottom: 4}}>
          <Image source={require('../../../asset/Icons/interior_icon.png')} />
          <TextBold
            text={'Interior'}
            color={Colors.DARK_BLUE}
            size={16}
            style={{alignSelf: 'center', paddingLeft: 8}}
          />
        </View>
        <TextBetweenHarga
          textLeft={'Small'}
          textRight={'Interior Kotor'}
          textHarga={'- Rp 800.000'}
        />
        <HorizontalStrikeLine />

        {/* Exterior */}
        <View style={{flexDirection: 'row', marginTop: 8, marginBottom: 4}}>
          <Image source={require('../../../asset/Icons/exterior_icon.png')} />
          <TextBold
            text={'Eksterior'}
            color={Colors.DARK_BLUE}
            size={16}
            style={{alignSelf: 'center', paddingLeft: 8}}
          />
        </View>
        <TextBetweenHarga
          textLeft={'Front'}
          textRight={'Perlu perbaikan Front Spoiler'}
          textHarga={'- Rp 800.000'}
        />
        <TextBetweenHarga
          textLeft={'Front'}
          textRight={'Perlu perbaikan Front Bumper'}
          textHarga={'- Rp 800.000'}
        />
        <TextBetweenHarga
          textLeft={'Back'}
          textRight={'Perlu perbaikan Rear Bumper'}
          textHarga={'- Rp 800.000'}
        />
        <HorizontalStrikeLine />

        {/* TOTAL */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: 8,
            justifyContent: 'space-between',
          }}>
          <TextRegular
            text={'Total pengurangan'}
            color={Colors.DARK_BLUE}
            size={14}
            style={{alignSelf: 'center'}}
          />
          <TextBold
            text={'-Rp 6.400.000'}
            color={Colors.RED}
            size={14}
            style={{alignSelf: 'center'}}
          />
        </View>

        {/* HARGA UTAMA */}
        <View
          style={{
            flexDirection: 'row',
            marginTop: 8,
            justifyContent: 'space-between',
          }}>
          <TextRegular
            text={'Harga Utama'}
            color={Colors.DARK_BLUE}
            size={14}
            style={{alignSelf: 'center'}}
          />
          <TextBold
            text={'87.900.000'}
            color={Colors.DARK_BLUE}
            size={14}
            style={{alignSelf: 'center'}}
          />
        </View>
      </View>

      {/* HARGA FINAL ====================================================== */}
      <HorizontalStrikeLine />
      <View
        style={{
          flexDirection: 'row',
          marginTop: 8,
          marginHorizontal: 22,
          justifyContent: 'space-between',
        }}>
        <TextBold
          text={'Harga Final'}
          color={Colors.DARK_BLUE}
          size={16}
          style={{alignSelf: 'center'}}
        />
        <TextBold
          text={'87.900.000'}
          color={Colors.DARK_BLUE}
          size={16}
          style={{alignSelf: 'center'}}
        />
      </View>

      {/* DATA CUSTOMER ============================================ */}
      <View style={[localStyles.card, {marginTop: 12, marginBottom: 24}]}>
        <TextBold
          text={'Data Customer'}
          color={Colors.DARK_BLUE}
          size={16}
          style={{alignSelf: 'center'}}
        />
        <HorizontalStrikeLine />

        <TextBetween textLeft={'Pemilik Kendaraan'} textRight={'Budi Sarudi'} />
        <HorizontalStrikeLine />

        <TextBetween textLeft={'No. HP Customer'} textRight={'085212457896'} />
        <HorizontalStrikeLine />

        <TextBetween
          textLeft={'E-mail Customer'}
          textRight={'budi@gmail.com'}
        />
      </View>
    </ScrollView>
  );
};

const HorizontalStrikeLine = () => {
  return (
    <View
      style={{
        borderBottomColor: Colors.GRAY,
        borderBottomWidth: 2,
        marginTop: 8,
      }}
    />
  );
};
const TextBetween = ({textLeft, textRight}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 8,
        justifyContent: 'space-between',
      }}>
      <TextRegular
        text={textLeft}
        color={Colors.DARK_BLUE}
        size={12}
        style={{alignSelf: 'center'}}
      />
      <TextBold
        text={textRight}
        color={Colors.DARK_BLUE}
        size={12}
        style={{alignSelf: 'center'}}
      />
    </View>
  );
};

const FrameBaik = () => {
  return (
    <View
      style={{
        backgroundColor: '#EBFDF5',
        padding: 12,
        alignItems: 'center',
        borderRadius: 4,
      }}>
      <TextBold text={'Frame dalam kondisi baik'} color={Colors.DARK_BLUE} />
    </View>
  );
};
const TextBetweenHarga = ({textLeft, textRight, textHarga}) => {
  return (
    <View
      style={{
        flexDirection: 'row',
        marginTop: 8,
        justifyContent: 'space-between',
      }}>
      <TextRegular
        text={textLeft}
        color={Colors.DARK_BLUE}
        size={12}
        style={{alignSelf: 'flex-start'}}
      />
      <View>
        <TextBold
          text={textRight}
          color={Colors.DARK_BLUE}
          size={12}
          style={{alignSelf: 'flex-end'}}
        />
        <TextBold
          text={textHarga}
          color={Colors.RED}
          size={12}
          style={{alignSelf: 'flex-end'}}
        />
      </View>
    </View>
  );
};

const localStyles = StyleSheet.create({
  header: {padding: 12, height: 168},
  card: {
    backgroundColor: Colors.WHITE,
    borderRadius: 8,
    padding: 12,
    marginHorizontal: 12,
  },
  circleImage: {
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: Colors.WHITE,
    width: 32,
    height: 32,
    borderRadius: 16,
    shadowColor: Colors.BLACK,
    shadowOpacity: 1,
    elevation: 1,
  },
  carImage: {
    height: 112,
    width: 164,
  },
});

export default DetailAppraisalComponent;
