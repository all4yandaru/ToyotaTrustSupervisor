import React, {useEffect, useState} from 'react';
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
import {useIsFocused} from '@react-navigation/native';
import {useSelector} from 'react-redux';
import riwayatHelper from '../../../apiManagement/riwayatHelper';

const SummaryTradeIn = ({navigation, route}) => {
  const {session} = useSelector(state => state.session);
  const {account} = useSelector(state => state.account);

  const [TradeInData, setTradeInData] = useState(null);

  const isFocused = useIsFocused();

  useEffect(() => {
    if (session.token && account) {
      TradeInDataProcess();
    }
  }, [isFocused]);

  const TradeInDataProcess = async () => {
    const res = await riwayatHelper.RiwayatTradeInDetail(
      session.token,
      route.params.id,
    );
    setTradeInData(res);
  };
  return (
    TradeInData && (
      <View style={styles.container}>
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
            text="Summary Trade In"
            size={16}
          />
        </View>
        <View style={styles.headInfo}>
          <TextMedium
            text={TradeInData.approvalTradeIn.Appraisal.Booking.noBooking}
            size={12}
            color={Colors.DARK_GRAY}
            style={{alignItems: 'center'}}
          />
          <TextRegular
            text={TradeInData.approvalTradeIn.Appraisal.Booking.bookingTime}
            size={15}
            color={Colors.DARK_BLUE}
          />
        </View>
        <ScrollView>
          <View style={styles.headCard}>
            <TextBold
              text="Used Car Information"
              size={16}
              color={Colors.DARK_BLUE}
            />
          </View>
          <View style={styles.contentCard}>
            <View style={styles.cardField}>
              <TextRegular text="Mobil" size={14} color={Colors.DARK_BLUE} />
              <TextBold
                text={TradeInData.approvalTradeIn.Appraisal.carName}
                size={14}
                color={Colors.DARK_BLUE}
              />
            </View>
            <View style={styles.cardField}>
              <TextRegular
                text="Plat Nomor"
                size={14}
                color={Colors.DARK_BLUE}
              />
              <TextBold
                text={TradeInData.approvalTradeIn.Appraisal.carDetail[7].value}
                size={14}
                color={Colors.DARK_BLUE}
              />
            </View>
            <TouchableOpacity
              style={styles.btnFull}
              onPress={() =>
                navigation.navigate('DetailTradeIn', {TradeInData})
              }>
              <TextRegular
                text="Lihat Detail Appraisal"
                size={14}
                color={Colors.WHITE}
              />
              <Icon name="arrow-right" size={20} color={Colors.WHITE} />
            </TouchableOpacity>
          </View>
          <View style={styles.headCard}>
            <TextBold
              text="New Car Information"
              size={16}
              color={Colors.DARK_BLUE}
            />
          </View>
          <View style={styles.contentCard}>
            <View style={styles.cardField}>
              <TextRegular text="Mobil" size={14} color={Colors.DARK_BLUE} />
              <TextBold
                text={TradeInData.approvalTradeIn.NewCar.carName}
                size={14}
                color={Colors.DARK_BLUE}
              />
            </View>
            <View style={styles.cardField}>
              <TextRegular text="OTR" size={14} color={Colors.DARK_BLUE} />
              <TextBold
                text={`Rp ${TradeInData.approvalTradeIn.NewCar.otr}`}
                size={14}
                color={Colors.DARK_BLUE}
              />
            </View>
          </View>
          <View style={styles.headCard}>
            <TextBold
              text="Ruang Nego Harga"
              size={16}
              color={Colors.DARK_BLUE}
            />
            <TextRegular text="terupdate*" size={14} color={Colors.DARK_GRAY} />
          </View>
          <View style={styles.contentCard}>
            <View style={styles.cardField}>
              <TextRegular
                text="Harga Penawaran"
                size={14}
                color={Colors.DARK_BLUE}
              />
              <TextBold
                text={`Rp ${TradeInData.approvalTradeIn.calculationDetail[1].price}`}
                size={14}
                color={Colors.DARK_BLUE}
              />
            </View>
            <View style={styles.cardField}>
              <TextRegular
                text="Ruang Nego"
                size={14}
                color={Colors.DARK_BLUE}
              />
              <TextBold
                text={`Rp ${TradeInData.approvalTradeIn.calculationDetail[6].price}`}
                size={14}
                color={Colors.DARK_BLUE}
              />
            </View>
            <View style={styles.cardField}>
              <TextRegular
                text="MRP (Max Harga)"
                size={14}
                color={Colors.DARK_BLUE}
              />
              <TextBold text={'-'} size={14} color={Colors.DARK_BLUE} />
            </View>
          </View>
          <View style={styles.headCard}>
            <TextBold text="Diskon" size={16} color={Colors.DARK_BLUE} />
            <TextRegular text="terupdate*" size={14} color={Colors.DARK_GRAY} />
          </View>
          <View style={styles.contentCard}>
            <View style={styles.cardField}>
              <TextRegular
                text="Diskon Kacab"
                size={14}
                color={Colors.DARK_BLUE}
              />
              <TextBold text={'-'} size={14} color={Colors.DARK_BLUE} />
            </View>
            <View style={styles.cardField}>
              <TextRegular
                text="Pengajuan Diskon BOD"
                size={14}
                color={Colors.DARK_BLUE}
              />
              <TextBold text={'-'} size={14} color={Colors.DARK_BLUE} />
            </View>
            <View style={styles.cardField}>
              <TextRegular
                text="Proyeksi GP (After Disc)"
                size={14}
                color={Colors.DARK_BLUE}
              />
              <TextBold
                text={`Rp ${TradeInData.approvalTradeIn.calculationDetail[7].price}`}
                size={14}
                color={Colors.DARK_BLUE}
              />
            </View>
          </View>
          <View style={styles.headCard}>
            <TextBold
              text="Gross Profit AAT"
              size={16}
              color={Colors.DARK_BLUE}
            />
            <TextRegular text="terupdate*" size={14} color={Colors.DARK_GRAY} />
          </View>
          <View style={styles.contentCard}>
            <View style={styles.cardField}>
              <TextRegular
                text="Proyeksi Harga Jual"
                size={14}
                color={Colors.DARK_BLUE}
              />
              <TextBold
                text={`Rp ${TradeInData.approvalTradeIn.calculationDetail[2].price}`}
                size={14}
                color={Colors.DARK_BLUE}
              />
            </View>
            <View style={styles.cardField}>
              <TextRegular
                text="COGS (harga beli + biaya rekondisi) + OPEX "
                size={14}
                color={Colors.DARK_BLUE}
                style={{maxWidth: '60%'}}
              />
              <TextBold
                text={`Rp ${TradeInData.approvalTradeIn.calculationDetail[3].price}`}
                size={14}
                color={Colors.DARK_BLUE}
              />
            </View>
            <View style={styles.cardField}>
              <TextRegular
                text="Proyeksi NPBT AAT"
                size={14}
                color={Colors.DARK_BLUE}
              />
              <TextBold
                text={`Rp ${TradeInData.approvalTradeIn.calculationDetail[4].price}`}
                size={14}
                color={Colors.DARK_BLUE}
              />
            </View>
          </View>
          <View style={{alignItems: 'center', marginBottom: 10}}>
            <TextBold
              text="Request Section"
              size={17}
              color={Colors.DARK_BLUE}
            />
            <View
              style={{
                backgroundColor: Colors.MEDIUM_GRAY,
                width: '90%',
                height: 1,
                marginVertical: 10,
              }}
            />
          </View>
          <View style={styles.cardSmall}>
            <TextBold
              text="Request Diskon BOD"
              size={17}
              color={Colors.DARK_BLUE}
            />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{
                  marginVertical: 5,
                }}>
                <TextBold
                  text="Appove by OM senilai 10.000.000"
                  size={14}
                  color={Colors.LIGHT_GREEN}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <TextRegular
                    text="Sen, 17 Sep 2018 - 10:30"
                    size={12}
                    color={Colors.DARK_BLUE}
                  />
                  <View
                    style={{
                      backgroundColor: Colors.MEDIUM_GRAY,
                      width: 2,
                      height: 20,
                      marginHorizontal: 10,
                    }}
                  />
                  <TextRegular
                    text="Helmi Candra"
                    size={12}
                    color={Colors.DARK_BLUE}
                  />
                </View>
              </View>
              <TouchableOpacity style={styles.btnContact}>
                <AppIcon name="whatsapp" size={23} color={Colors.WHITE} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.cardSmall}>
            <TextBold text="Request MRP" size={17} color={Colors.DARK_BLUE} />

            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                alignItems: 'center',
              }}>
              <View
                style={{
                  marginVertical: 5,
                }}>
                <TextBold
                  text="Appove by OM senilai 10.000.000"
                  size={14}
                  color={Colors.LIGHT_GREEN}
                />
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <TextRegular
                    text="Sen, 17 Sep 2018 - 10:30"
                    size={12}
                    color={Colors.DARK_BLUE}
                  />
                  <View
                    style={{
                      backgroundColor: Colors.MEDIUM_GRAY,
                      width: 2,
                      height: 20,
                      marginHorizontal: 10,
                    }}
                  />
                  <TextRegular
                    text="Helmi Candra"
                    size={12}
                    color={Colors.DARK_BLUE}
                  />
                </View>
              </View>
              <TouchableOpacity style={styles.btnContact}>
                <AppIcon name="whatsapp" size={23} color={Colors.WHITE} />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.content}>
            <TextMedium
              size={14}
              text="Harga Final"
              color={Colors.DARK_BLUE}
              style={{marginBottom: 5}}
            />
            <TextInput
              value="RP. 170.000.000"
              style={{
                width: '100%',
                borderWidth: 1,
                borderColor: Colors.MEDIUM_GRAY,
                borderRadius: 5,
                paddingHorizontal: 10,
                color: Colors.DARK_BLUE,
                fontSize: 14,
                height: 40,
                marginBottom: 10,
              }}
            />

            <TextMedium
              size={14}
              text="Total Benefit TI (Final)"
              color={Colors.DARK_BLUE}
              style={{marginBottom: 5}}
            />
            <TextInput
              value="RP. 2.000.000"
              editable={false}
              style={{
                width: '100%',
                borderRadius: 5,
                paddingHorizontal: 10,
                color: Colors.DARK_BLUE,
                fontSize: 14,
                height: 40,
                marginBottom: 10,
                backgroundColor: Colors.GRAY,
              }}
            />

            <TextMedium
              text="Last Status : "
              size={14}
              color={Colors.DARK_BLUE}
              style={{marginVertical: 5}}
            />
            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              {/* <TextBold text="DEAL" size={18} color={Colors.LIGHT_GREEN} /> */}
              <TextBold text="NO DEAL" size={16} color={'#FF5656'} />
              <View
                style={{
                  backgroundColor: Colors.MEDIUM_GRAY,
                  width: 2,
                  height: 20,
                  marginHorizontal: 10,
                }}
              />
              <TextMedium
                text="19 Agustus 2020 - 15:43"
                size={16}
                color={Colors.DARK_BLUE}
              />
            </View>
          </View>
        </ScrollView>
      </View>
    )
  );
};

export default SummaryTradeIn;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.GRAY,
    paddingVertical: 5,
    marginBottom: 10,
  },
  headInfo: {
    backgroundColor: Colors.WHITE,
    paddingHorizontal: 20,
    paddingVertical: 15,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },
  headCard: {
    backgroundColor: Colors.WHITE,
    marginHorizontal: 20,
    padding: 10,
    marginBottom: 3,
    borderTopLeftRadius: 5,
    borderTopRightRadius: 5,
    marginTop: 10,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  contentCard: {
    backgroundColor: Colors.WHITE,
    marginHorizontal: 20,
    padding: 10,
    marginBottom: 10,
    borderBottomLeftRadius: 5,
    borderBottomRightRadius: 5,
  },
  btnFull: {
    backgroundColor: Colors.BLUE,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 10,
    paddingHorizontal: 15,
    marginVertical: 10,
    borderRadius: 5,
  },
  cardSmall: {
    backgroundColor: Colors.WHITE,
    borderRadius: 5,
    marginHorizontal: 20,
    padding: 10,
    justifyContent: 'center',
    marginBottom: 10,
  },
  content: {
    marginHorizontal: 20,
    backgroundColor: Colors.WHITE,
    padding: 10,
  },
  btnContact: {
    width: 30,
    height: 30,
    backgroundColor: Colors.GREEN,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 10,
  },
  cardField: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 15,
  },
});
