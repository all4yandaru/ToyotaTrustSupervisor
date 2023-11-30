import React from 'react';
import {TextRegular, TextMedium, TextBold} from '../../global';
import {Colors} from '../../../styles';
import {ScrollView, TouchableOpacity, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/Entypo';

export default function BeliMobilUiApprovedComponent({
  navigation,
  beliMobilData,
}) {
  console.log('data: ', beliMobilData);
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
        <TouchableOpacity onPress={() => navigation.goBack()}>
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
            padding: 12,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TextBold size={14} color={Colors.DARK_BLUE} text="Detail Customer" />
        </View>
        <View style={{height: 2}} />
        <View style={styles.body}>
          <View style={styles.bodySection}>
            <TextMedium color={Colors.DARK_BLUE} text="Nama" />
            <TextBold
              color={Colors.DARK_BLUE}
              text={beliMobilData.approvalNewCar.customerName}
            />
          </View>
          <View style={{height: 16}} />
          <View style={styles.bodySection}>
            <TextMedium color={Colors.DARK_BLUE} text="No.Hp" />
            <TextBold
              color={Colors.DARK_BLUE}
              text={beliMobilData.approvalNewCar.phone}
            />
          </View>
        </View>
        <View style={{height: 8}} />
        <View style={styles.body}>
          <TextBold
            color={Colors.DARK_BLUE}
            size={14}
            text="New Car Information"
          />
        </View>
        <View style={{height: 2}} />
        <View style={styles.body}>
          <View style={styles.bodySection}>
            <TextMedium color={Colors.DARK_BLUE} text="Mobil" />
            <TextMedium
              color={Colors.DARK_BLUE}
              text={beliMobilData.approvalNewCar.NewCar.carName}
            />
          </View>
          <View style={styles.bodySection}>
            <TextMedium color={Colors.DARK_BLUE} text="OTR" />
            <TextMedium
              color={Colors.BLUE}
              text={beliMobilData.approvalNewCar.NewCar.otr}
            />
          </View>
        </View>
        <View style={{height: 8}} />
        <View style={styles.body}>
          <TextBold size={14} color={Colors.DARK_BLUE} text="Diskon" />
        </View>
        <View style={{height: 2}} />
        <View style={styles.body}>
          <TextMedium color={Colors.DARK_BLUE} text="N/A" />
          {/* <View style={[styles.bodySection, {marginVertical: 12}]}>
            <TextMedium color={Colors.DARK_BLUE} text="Request Disc." />
            <TextBold color={Colors.BLUE} text="Rp 15.000.000" />
          </View>
          <View style={styles.bodySection}>
            <TextMedium color={Colors.DARK_BLUE} text="Akumulasi OTR" />
            <TextMedium color={Colors.DARK_BLUE} text="Rp 235.000.000" />
          </View> */}
          <View style={{height: 12}} />
        </View>
        <View style={{height: 8}} />
        {/* <View style={styles.body}>
          <TextBold size={12} color={Colors.GREEN} text="Approved by COO" />
          <View style={{height: 3}} />
          <View
            style={{
              width: '55%',
              flexDirection: 'row',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flex: 0.6,
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
                flex: 0.4,
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
        </View> */}
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
