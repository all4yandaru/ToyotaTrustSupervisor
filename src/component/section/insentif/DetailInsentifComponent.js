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
import {TextBold, TextRegular} from '../../global/Text';

const DetailInsentifComponent = () => {
  return (
    // <View>
    <ScrollView Style={{flexGrow: 1}}>
      {/* TOP CONTENT =============================================================== */}
      <View
        style={{
          flexDirection: 'row',
          padding: 25,
          backgroundColor: 'white',
          bottom: 10,
        }}>
        <TouchableOpacity>
          <Icon name="arrow-back" size={25} color={Colors.DARK_BLUE}></Icon>
        </TouchableOpacity>
        <View style={{flex: 1, justifyContent: 'center', alignItems: 'center'}}>
          <TextBold text="Detail Insentif" size={25} color={Colors.DARK_BLUE} />
        </View>
      </View>
      <View
        style={{
          flex: 1,
          flexDirection: 'row',
          justifyContent: 'center',
        }}></View>
      {/* LIST DETAIL =======================================================================*/}
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
      {/* RIWAYAT =============================================================================*/}
      <View style={[styles.RiwayatStyle]}>
        <View
          style={{
            alignItems: 'flex-start',
          }}>
          <TextRegular text="Riwayat" size={14} color={Colors.DARK_BLUE} />
        </View>
      </View>
      {/* LIST PAID ========================================================================  */}
      <View style={[styles.DetailRiwayatStyle]}>
        <View
          style={{
            alignItems: 'flex-start',
          }}>
          <View style={[styles.ListRiwayatStyle]}>
            <View
              style={{
                alignItems: 'flex-start',
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <Icon
                    name="checkmark-circle"
                    size={14}
                    color={Colors.DARK_BLUE}></Icon>
                </View>
                <TextRegular
                  text="Rabu, 5 Des 2018 Pukul 17:02"
                  size={12}
                  color={Colors.DARK_BLUE}
                  style={{
                    marginStart: 10,
                  }}
                />
              </View>
              <View>
                <TextRegular
                  text="PAID"
                  size={14}
                  color={Colors.BLUE}
                  style={{
                    marginStart: 10,
                    fontWeight: '900',
                    paddingHorizontal: 15,
                    marginTop: 8,
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      {/* LIST VALIDATED ========================================================================  */}
      <View style={[styles.DetailRiwayatStyle]}>
        <View
          style={{
            alignItems: 'flex-start',
          }}>
          <View style={[styles.ListRiwayatStyle]}>
            <View
              style={{
                alignItems: 'flex-start',
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <Icon
                    name="checkmark-circle"
                    size={14}
                    color={Colors.DARK_BLUE}></Icon>
                </View>
                <TextRegular
                  text="Selasa, 4 Des 2018 Pukul 10:00"
                  size={12}
                  color={Colors.DARK_BLUE}
                  style={{
                    marginStart: 10,
                  }}
                />
              </View>
              <View>
                <TextRegular
                  text="VALIDATED"
                  size={14}
                  color={Colors.BLUE}
                  style={{
                    marginStart: 10,
                    fontWeight: '900',
                    paddingHorizontal: 15,
                    marginTop: 8,
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
      {/* LIST CREATE ========================================================================  */}
      <View style={[styles.DetailRiwayatStyle]}>
        <View
          style={{
            alignItems: 'flex-start',
          }}>
          <View style={[styles.ListRiwayatStyle]}>
            <View
              style={{
                alignItems: 'flex-start',
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <View>
                  <Icon
                    name="checkmark-circle"
                    size={14}
                    color={Colors.DARK_BLUE}></Icon>
                </View>
                <TextRegular
                  text="Senin, 3 Des 2018 Pukul 09:30"
                  size={12}
                  color={Colors.DARK_BLUE}
                  style={{
                    marginStart: 10,
                  }}
                />
              </View>
              <View>
                <TextRegular
                  text="CREATE"
                  size={14}
                  color={Colors.BLUE}
                  style={{
                    marginStart: 10,
                    fontWeight: '900',
                    paddingHorizontal: 15,
                    marginTop: 8,
                  }}
                />
              </View>
            </View>
          </View>
        </View>
      </View>
    </ScrollView>
    // </View>
  );
};

export default DetailInsentifComponent;

const styles = StyleSheet.create({
  topContent: {
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 22,
    paddingBottom: 28,
    flexDirection: 'row',
    alignItems: 'center',
  },
  textSubTitle: {
    fontSize: 25,
    fontWeight: '900',
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
  // RIWAYAT STYLE =================================================================//
  RiwayatStyle: {
    paddingHorizontal: 12,
    paddingVertical: 18,
    marginTop: 16,
    backgroundColor: 'white',
    marginEnd: 16,
    marginStart: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#EDEDED',
  },
  DetailRiwayatStyle: {
    paddingHorizontal: 12,
    backgroundColor: 'white',
    marginEnd: 16,
    marginStart: 16,
  },
  ListRiwayatStyle: {
    paddingHorizontal: 12,
    paddingVertical: 18,
    backgroundColor: '#F6F8FF',
    borderRadius: 10,
    width: '100%',
    marginTop: 6,
    marginBottom: 6,
  },
});
