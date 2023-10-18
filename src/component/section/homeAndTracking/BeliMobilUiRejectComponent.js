import React from 'react';
import {TextRegular, TextMedium, TextBold} from '../../global';
import {Colors} from '../../../styles';
import {ScrollView, TouchableOpacity, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/Entypo';
import Icoons from 'react-native-vector-icons/FontAwesome';

export default function BeliMobilUiRejectComponent() {
  const activeOpacity = 0.8;
  return (
    <View style={{flex: 1, backgroundColor: Colors.GRAY}}>
      <View
        style={{
          padding: 16,
          flexDirection: 'row',
          backgroundColor: 'white',
          alignItems: 'center',
          justifyContent: 'space-between',
        }}>
        <TouchableOpacity>
          <Icon name="arrow-left" size={24} color={Colors.BLACK} />
        </TouchableOpacity>
        <TextBold color={Colors.DARK_BLUE} text="Beli Mobil" size={16} />
        <TouchableOpacity>
          <Icons name="share" size={24} color={Colors.BLACK} />
        </TouchableOpacity>
      </View>
      <View style={{height: 2}} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            flexDirection: 'row',
            padding: 16,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TextRegular
            size={14}
            color={Colors.DARK_GRAY}
            text="TR-092018-246"
          />
          <TextMedium
            color={Colors.DARK_BLUE}
            size={14}
            text="Sen,17 Sep 2018-10:30"
          />
        </View>
        <View style={{height: 2}} />
        <View style={styles.body}>
          <View style={styles.bodySection}>
            <TextMedium color={Colors.DARK_BLUE} text="Nama Customer" />
            <TextBold color={Colors.DARK_BLUE} text="NANDO DWIKI SATRIA" />
          </View>
          <View style={{height: 16}} />
          <View style={styles.bodySection}>
            <TextMedium color={Colors.DARK_BLUE} text="No.Hp" />
            <TextBold color={Colors.DARK_BLUE} text="082245884655" />
          </View>
        </View>
        <View style={{height: 8}} />
        <View style={styles.body}>
          <TextBold color={Colors.DARK_BLUE} size={14} text="Detail Mobil" />
        </View>
        <View style={{height: 2}} />
        <View style={styles.body}>
          <View>
            <TextRegular color={Colors.DARK_BLUE} size={12} text="New car" />
            <View style={styles.bodySection}>
              <TextBold color={Colors.DARK_BLUE} text="Rush S AT TRD" />
              <TextBold color={Colors.DARK_BLUE} text="Rp 276.600.000" />
            </View>
          </View>
        </View>
        <View style={{height: 8}} />
        <View style={styles.body}>
          <TextBold size={14} color={Colors.DARK_BLUE} text="Diskon" />
        </View>
        <View style={{height: 2}} />
        <View style={styles.body}>
          <View style={[styles.bodySection, {marginVertical: 12}]}>
            <TextMedium color={Colors.DARK_BLUE} text="Request Disc." />
            <TextBold color={Colors.BLUE} text="Rp 15.000.000" />
          </View>
          <View style={styles.bodySection}>
            <TextMedium color={Colors.DARK_BLUE} text="Harga Mobil" />
            <TextMedium color={Colors.DARK_BLUE} text="Rp 235.000.000" />
          </View>
          <View style={{height: 12}} />
        </View>
        <View style={{height: 2}} />
        <View style={styles.body}>
          <TextMedium
            text="Request Direksi:"
            color={Colors.DARK_BLUE}
            size={12}
          />
          <View style={{height: 20}} />
          <View style={styles.bodySection}>
            <TextMedium color={Colors.DARK_BLUE} text="Discount" />
            <TextBold color={Colors.DARK_BLUE} text="Rp 5.000.000" />
          </View>
          <View style={{height: 24}} />
          <View style={styles.bodySection}>
            <TextMedium color={Colors.DARK_BLUE} text="Total Bonus Produk" />
            <TextBold color={Colors.DARK_BLUE} text="4.800.000" />
          </View>
          <View style={{height: 4}} />
          <TouchableOpacity activeOpacity={0.8}>
            <TextRegular
              style={{fontStyle: 'italic'}}
              color={Colors.BLUE}
              size={12}
              text="Lihat Detail"
            />
          </TouchableOpacity>
          <View style={{height: 16}} />
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                height: 2,
                width: '95%',
                backgroundColor: Colors.DARK_GRAY,
              }}
            />
            <TextMedium size={16} color={Colors.DARK_GRAY} text="+" />
          </View>
          <View style={{height: 8}} />
          <View style={styles.bodySection}>
            <TextMedium color={Colors.DARK_BLUE} text="Total Diskon" />
            <TextBold color={Colors.BLUE} text="Rp 9.800.000" />
          </View>
          <View style={{height: 8}} />
        </View>
        <View style={{height: 20}} />
        <View style={styles.body}>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              justifyContent: 'space-between',
            }}>
            <View style={{width: '55%'}}>
              <TextBold size={12} color={Colors.RED} text="Rejected by COO" />
              <View style={{height: 3}} />
              <View
                style={{
                  flexDirection: 'row',
                  justifyContent: 'space-between',
                }}>
                <View
                  style={{
                    flex: 0.65,
                    borderRightWidth: 1,
                    borderColor: Colors.MEDIUM_GRAY,
                    alignItems: 'flex-start',
                  }}>
                  <TextRegular
                    size={10}
                    color={Colors.DARK_BLUE}
                    text="Sen, 17 Sep 2018 - 10:30"
                  />
                </View>
                <View
                  style={{
                    flex: 0.35,
                    alignItems: 'flex-start',
                    marginLeft: 10,
                  }}>
                  <TextRegular
                    size={10}
                    color={Colors.DARK_BLUE}
                    text="Helmi Chandra"
                  />
                </View>
              </View>
            </View>
            <TouchableOpacity
              style={{
                height: 24,
                width: 24,
                borderRadius: 5,
                backgroundColor: Colors.GREEN,
                alignItems: 'center',
                justifyContent: 'center',
              }}>
              <Icoons name="whatsapp" size={20} color={Colors.WHITE} />
            </TouchableOpacity>
          </View>
          <View
            style={{
              height: 2,
              backgroundColor: Colors.GRAY,
              marginTop: 8,
              marginBottom: 8,
            }}
          />
          <TextRegular color={Colors.DARK_BLUE} size={10} text="Notes :" />
          <View style={{height: 8}} />
          <TextMedium
            color={Colors.DARK_BLUE}
            size={10}
            style={{marginRight: '35%', marginBottom: 12}}
            numberOfLines={2}
            text="Penawaran diskon terlalu tinggi, perbaiki sesuai dengan standar Toyota"
          />
        </View>
        <View style={{height: 48}} />
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    backgroundColor: 'white',
    padding: 10,
  },
  bodySection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  textSection: {maxWidth: '50%'},
});
