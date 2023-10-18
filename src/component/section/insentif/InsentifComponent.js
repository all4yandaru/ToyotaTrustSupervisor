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
import Icon from 'react-native-vector-icons/AntDesign';
import {TextBold, TextRegular} from '../../global/Text';
import {InputText} from '../../global/InputText';
import * as Progress from 'react-native-progress';

const InsentifComponent = () => {
  return (
    // <View>
    <ScrollView Style={{flexGrow: 1}}>
      {/* TOP CONTENT =============================================================== */}
      <View style={styles.topContent}>
        <TextBold
          text="Insentif"
          size={25}
          color={Colors.WHITE}
          style={[styles.textSubTitle]}
        />
        <View style={{flexDirection: 'row', marginTop: 20}}>
          <View style={[styles.textInputImageForm]}>
            <InputText
              placeholderText="Telusuri"
              style={{flex: 1, borderWidth: 0}}
            />
            <Icon
              style={[styles.iconTittle]}
              name="search1"
              size={16}
              color="black"
            />
          </View>
        </View>
      </View>
      {/*LIST ITEM dan Date ================================================================== */}
      <View style={styles.itemContent}>
        <TextBold text="September 2021" size={20} color={Colors.DARK_BLUE} />
        <TouchableOpacity>
          <Icon name="calendar" size={21} color="black" />
        </TouchableOpacity>
      </View>
      <View style={styles.rowSpaceBetween}>
        <TextRegular text="Total Insentif" size={14} color={Colors.DARK_BLUE} />
        <TextBold
          text="Rp 3.000.000"
          size={14}
          color={Colors.DARK_BLUE}
          style={{marginLeft: 12}}
        />
      </View>
      {/* PROGRESS TARGET =====================================================================*/}
      <View style={[styles.safeAreaContent]}>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextRegular
            text=" Target Bulanan"
            size={12}
            color={Colors.DARK_BLUE}
          />
          <TextBold
            text="80%"
            size={12}
            color={Colors.DARK_BLUE}
            style={{marginRight: 10}}
          />
        </View>
        <Progress.Bar
          progress={0.8}
          height={12}
          borderRadius={20}
          marginTop={10}
          width={Dimensions.get('window').width * 0.85}
        />
        <View style={{alignItems: 'flex-end', marginTop: 8}}>
          <TextRegular
            text=" 8/10 Unit PO Valid"
            size={12}
            color={Colors.MEDIUM_GRAY}
            style={{marginRight: 10}}
          />
        </View>
      </View>
      {/* LIST CABANG 1 =======================================================================*/}
      <View style={styles.itemContent}>
        <TextBold text="Cabang Bintaro" size={16} color={Colors.DARK_BLUE} />
      </View>
      <View style={[styles.ListStyle]}>
        <View style={{alignItems: 'flex-start'}}>
          <TextRegular
            text="TR-092018-246"
            size={12}
            color={Colors.MEDIUM_GRAY}
            style={{marginRight: 10}}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextRegular
            text="Sen, 17 Sep 2018 - 10:30"
            size={12}
            color={Colors.DARK_BLUE}
          />
          <TextBold
            text="CREATE"
            size={10}
            color={Colors.WHITE}
            style={{
              marginRight: 10,
              backgroundColor: '#287AE5',
              borderRadius: 5,
              paddingVertical: 4,
              paddingHorizontal: 4,
            }}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextRegular
            text=" Target Bulanan"
            size={12}
            color={Colors.DARK_BLUE}
            style={{marginTop: 15}}
          />
          <TextBold
            text="Rp 1.000.000"
            size={14}
            color={Colors.DARK_BLUE}
            style={{
              marginRight: 10,
              marginTop: 15,
              paddingBottom: 10,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderTopWidth: 1,
            borderTopColor: '#EDEDED',
          }}>
          <TextRegular
            text="Nama Salesman"
            size={12}
            color={Colors.DARK_BLUE}
            style={{marginTop: 13}}
          />
          <TextBold
            text="Kukuh Hadi"
            size={14}
            color={Colors.DARK_BLUE}
            style={{
              marginRight: 10,
              marginTop: 13,
            }}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextRegular
            text="Cabang Auto2000"
            size={12}
            color={Colors.DARK_BLUE}
            style={{marginTop: 4}}
          />
          <TextBold
            text="Ciledug"
            size={12}
            color={Colors.DARK_BLUE}
            style={{
              marginRight: 10,
              marginTop: 4,
            }}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextRegular
            text="Tipe Mobil"
            size={12}
            color={Colors.DARK_BLUE}
            style={{marginTop: 4}}
          />
          <TextBold
            text="Toyota Agya G A/T TRD 2015"
            size={14}
            color={Colors.DARK_BLUE}
            style={{
              marginRight: 10,
              marginTop: 4,
            }}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextRegular
            text="Nomor Polisi"
            size={12}
            color={Colors.DARK_BLUE}
            style={{marginTop: 4}}
          />
          <TextBold
            text="B 1234 TES"
            size={14}
            color={Colors.DARK_BLUE}
            style={{
              marginRight: 10,
              marginTop: 4,
            }}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextRegular
            text="Nama Customer"
            size={12}
            color={Colors.DARK_BLUE}
            style={{marginTop: 4}}
          />
          <TextBold
            text="Aji Bayu Wirrotama"
            size={14}
            color={Colors.DARK_BLUE}
            style={{
              marginRight: 10,
              marginTop: 4,
            }}
          />
        </View>
      </View>
      {/* LIST CABANG 2 =======================================================================*/}
      <View style={styles.itemContent}>
        <TextBold
          text="Cabang Kelapa Gading"
          size={16}
          color={Colors.DARK_BLUE}
        />
      </View>
      <View style={[styles.ListStyle]}>
        <View style={{alignItems: 'flex-start'}}>
          <TextRegular
            text="TR-092018-246"
            size={12}
            color={Colors.MEDIUM_GRAY}
            style={{marginRight: 10}}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextRegular
            text="Sen, 17 Sep 2018 - 10:30"
            size={12}
            color={Colors.DARK_BLUE}
          />
          <TextBold
            text="PAID"
            size={10}
            color={Colors.WHITE}
            style={{
              marginRight: 10,
              backgroundColor: '#287AE5',
              borderRadius: 5,
              paddingVertical: 4,
              paddingHorizontal: 4,
            }}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextRegular
            text=" Target Bulanan"
            size={12}
            color={Colors.DARK_BLUE}
            style={{marginTop: 15}}
          />
          <TextBold
            text="Rp 1.000.000"
            size={14}
            color={Colors.DARK_BLUE}
            style={{
              marginRight: 10,
              marginTop: 15,
              paddingBottom: 10,
            }}
          />
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            borderTopWidth: 1,
            borderTopColor: '#EDEDED',
          }}>
          <TextRegular
            text="Nama Salesman"
            size={12}
            color={Colors.DARK_BLUE}
            style={{marginTop: 13}}
          />
          <TextBold
            text="Kukuh Hadi"
            size={14}
            color={Colors.DARK_BLUE}
            style={{
              marginRight: 10,
              marginTop: 13,
            }}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextRegular
            text="Cabang Auto2000"
            size={12}
            color={Colors.DARK_BLUE}
            style={{marginTop: 4}}
          />
          <TextBold
            text="Ciledug"
            size={12}
            color={Colors.DARK_BLUE}
            style={{
              marginRight: 10,
              marginTop: 4,
            }}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextRegular
            text="Tipe Mobil"
            size={12}
            color={Colors.DARK_BLUE}
            style={{marginTop: 4}}
          />
          <TextBold
            text="Toyota Agya G A/T TRD 2015"
            size={14}
            color={Colors.DARK_BLUE}
            style={{
              marginRight: 10,
              marginTop: 4,
            }}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextRegular
            text="Nomor Polisi"
            size={12}
            color={Colors.DARK_BLUE}
            style={{marginTop: 4}}
          />
          <TextBold
            text="B 1234 TES"
            size={14}
            color={Colors.DARK_BLUE}
            style={{
              marginRight: 10,
              marginTop: 4,
            }}
          />
        </View>
        <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
          <TextRegular
            text="Nama Customer"
            size={12}
            color={Colors.DARK_BLUE}
            style={{marginTop: 4}}
          />
          <TextBold
            text="Aji Bayu Wirrotama"
            size={14}
            color={Colors.DARK_BLUE}
            style={{
              marginRight: 10,
              marginTop: 4,
            }}
          />
        </View>
      </View>
    </ScrollView>
    // </View>
  );
};

export default InsentifComponent;

const styles = StyleSheet.create({
  topContent: {
    backgroundColor: Colors.BLUE,
    paddingHorizontal: 22,
    paddingBottom: 28,
  },
  textSubTitle: {
    fontSize: 25,
    fontWeight: '900',
    marginTop: 15,
    color: 'white',
  },
  textInputImageForm: {
    backgroundColor: '#F6F8FF',
    flexDirection: 'row',
    flex: 1,
    marginRight: 16,
    borderRadius: 12,
    alignItems: 'center',
  },
  iconTittle: {
    marginRight: 16,
  },
  // PROGRESS TARGET ====================================================================//
  safeAreaContent: {
    paddingHorizontal: 12,
    paddingVertical: 18,
    marginTop: 16,
    backgroundColor: 'white',
    marginEnd: 16,
    marginStart: 16,
    borderRadius: 10,
  },
  itemContent: {
    marginTop: 16,
    paddingHorizontal: 22,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    fontWeight: '900',
  },
  rowSpaceBetween: {
    paddingHorizontal: 25,
    flexDirection: 'row',
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
  },
  // LIST CABANG ====================================================================//
  ListStyle: {
    paddingHorizontal: 12,
    paddingVertical: 18,
    marginTop: 16,
    backgroundColor: 'white',
    marginEnd: 16,
    marginStart: 16,
    borderRadius: 10,
  },
});
