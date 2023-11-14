import React, {useEffect, useState} from 'react';
import {TextRegular, TextMedium, TextBold, InputText} from './src/global';
import {Colors} from './src/styles';
import {
  ScrollView,
  TouchableOpacity,
  View,
  StyleSheet,
  TouchableHighlight,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {BASE_URL, TOKEN} from './src/sampleui/url';
import Axios from 'axios';

export default function TrackingUI() {
  useEffect(() => {
    getDataAprroval();
    getDataNewCar();
  }, []);

  const [dataApproval, setDataApproval] = useState([]);

  const getDataAprroval = async () => {
    Axios.get(`${BASE_URL}approval/trade-in/tracking`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: TOKEN,
      },
    })
      .then(response => {
        // console.log('res get approval', response);
        if (response.status === 200) {
          setDataApproval(response.data);
        } else {
          if (response.status === 400 || response.status === 402) {
            return false;
          }
        }
      })
      .catch(error => {
        console.log('error get approval', error);
      });
  };

  const [dataNewCar, setDataNewCar] = useState([]);
  const getDataNewCar = async () => {
    Axios.get(`${BASE_URL}approval/new-car/tracking`, {
      headers: {
        'Content-Type': 'application/json',
        Authorization: TOKEN,
      },
    })
      .then(response => {
        // console.log('res get approval', response);
        if (response.status === 200) {
          setDataNewCar(response.data);
        } else {
          if (response.status === 400 || response.status === 402) {
            return false;
          }
        }
      })
      .catch(error => {
        console.log('error get new car', error);
      });
  };
  console.log(dataNewCar);
  // console.log(dataNewCar);
  // if (dataNewCar[5]) {
  //   const index = dataApproval[5].ApprovalTradeIn.Appraisal.carDetail.findIndex(
  //     val => val.fieldName == 'Tipe',
  //   );
  //   console.log(
  //     dataApproval[5].ApprovalTradeIn.Appraisal.carDetail[index].value,
  //   );
  // }

  // dataNewCar.forEach(data => {
  //   console.log(data);
  // });
  // if (dataApproval[5]) {
  //   const index = dataApproval[5].ApprovalTradeIn.Appraisal.carDetail.findIndex(
  //     val => val.fieldName == 'Tipe',
  //   );
  //   console.log(
  //     dataApproval[5].ApprovalTradeIn.Appraisal.carDetail[index].value,
  //   );
  // }
  const [activeTab, setActiveTab] = useState(0);
  const TradeIn = () => {
    return (
      <View>
        <View style={{height: 20}} />
        {dataApproval.map((item, index) => {
          const i = item.ApprovalTradeIn.Appraisal.carDetail.findIndex(
            val => val.fieldName == 'Tipe',
          );
          return (
            <View
              style={{
                padding: 12,
                backgroundColor: Colors.WHITE,
                borderRadius: 6,
                borderWidth: 1,
                borderColor: Colors.GRAY,
                marginBottom: 10,
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TextRegular
                  size={12}
                  color={Colors.DARK_BLUE}
                  text={item.ApprovalTradeIn.Appraisal.Booking.noBooking}
                />
                <TextBold
                  size={12}
                  color={Colors.DARK_BLUE}
                  text={item.updatedAt}
                />
              </View>
              <View style={{height: 8}} />
              <TextBold
                color={Colors.DARK_BLUE}
                text={item.ApprovalTradeIn.Appraisal.carDetail[i].value}
              />
              <View style={{height: 12}} />
              <View
                style={{
                  height: 1,
                  borderTopWidth: 1,
                  borderStyle: 'dashed',
                  borderColor: Colors.MEDIUM_GRAY,
                }}
              />
              <View style={{height: 8}} />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: 4,
                }}>
                <View style={{width: '50%'}}>
                  <TextBold
                    color={Colors.DARK_BLUE}
                    size={12}
                    text={
                      item.ApprovalTradeIn.Appraisal.Booking.SalesProfile.name
                    }
                  />
                  <View style={{height: 2}} />
                  <TextRegular
                    color={Colors.DARK_BLUE}
                    size={12}
                    text={
                      item.ApprovalTradeIn.Appraisal.Booking.SalesProfile.Branch
                        .branch
                    }
                  />
                </View>
                <View
                  style={{
                    paddingHorizontal: 10,
                    height: 30,
                    backgroundColor: Colors.BLUE,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TextMedium
                    size={10}
                    color={Colors.WHITE}
                    text={item.ApprovalTradeIn.approvalStatus}
                  />
                </View>
              </View>
            </View>
          );
        })}
      </View>
    );
  };
  const NewCar = () => {
    return (
      <View>
        <View style={{height: 30}} />
        {dataNewCar.map(item => {
          return (
            <View
              style={{
                marginBottom: 10,
                padding: 12,
                backgroundColor: Colors.WHITE,
                borderRadius: 6,
                borderWidth: 1,
                borderColor: Colors.GRAY,
              }}>
              <View
                style={{flexDirection: 'row', justifyContent: 'space-between'}}>
                <TextRegular
                  size={12}
                  color={Colors.DARK_BLUE}
                  text={item.ApprovalNewCar.noNewCar}
                />
                <TextBold
                  size={12}
                  color={Colors.DARK_BLUE}
                  text={item.updatedAt}
                />
              </View>
              <View style={{height: 8}} />
              <TextBold
                color={Colors.DARK_BLUE}
                text={item.ApprovalNewCar.NewCar.carName}
              />
              <View style={{height: 12}} />
              <View
                style={{
                  height: 1,
                  borderTopWidth: 1,
                  borderStyle: 'dashed',
                  borderColor: Colors.MEDIUM_GRAY,
                }}
              />
              <View style={{height: 8}} />
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginTop: 4,
                }}>
                <View style={{width: '50%'}}>
                  <TextBold
                    color={Colors.DARK_BLUE}
                    size={12}
                    text={item.ApprovalNewCar.SalesBranch.BranchHead.name}
                  />
                  <View style={{height: 2}} />
                  <TextRegular
                    color={Colors.DARK_BLUE}
                    size={12}
                    text={item.ApprovalNewCar.SalesBranch.branch}
                  />
                </View>
                <View
                  style={{
                    paddingHorizontal: 10,
                    height: 30,
                    backgroundColor: Colors.RED,
                    borderRadius: 10,
                    justifyContent: 'center',
                    alignItems: 'center',
                  }}>
                  <TextMedium
                    size={10}
                    color={Colors.WHITE}
                    text={item.ApprovalNewCar.approvalStatus}
                  />
                </View>
              </View>
            </View>
          );
        })}
      </View>
    );
  };
  const tabs = [
    {title: 'Trade In', content: TradeIn()},
    {title: 'New Car', content: NewCar()},
  ];
  return (
    <View style={{flex: 1, backgroundColor: Colors.GRAY}}>
      <ScrollView showsHorizontalScrollIndicator={false}>
        <View style={{padding: 15, backgroundColor: Colors.BLUE}}>
          <TextBold
            color={Colors.WHITE}
            size={20}
            text="TRACKING"
            style={{marginBottom: 16}}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View style={{flexDirection: 'row'}}>
              <InputText
                style={{
                  backgroundColor: Colors.WHITE,
                  height: 48,
                  width: '75%',
                  justifyContent: 'center',
                  alignSelf: 'flex-start',
                  borderTopRightRadius: 0,
                  borderBottomRightRadius: 0,
                  borderRightWidth: 0,
                }}
                placeholderText="Telusuri..."
              />
              <View
                style={{
                  alignSelf: 'flex-end',
                  height: 48,
                  width: 48,
                  backgroundColor: Colors.WHITE,
                  borderTopRightRadius: 6,
                  borderBottomRightRadius: 6,
                  borderTopWidth: 1,
                  borderBottomWidth: 1,
                  borderRightWidth: 1,
                  borderColor: Colors.GRAY,
                  justifyContent: 'center',
                  alignItems: 'center',
                }}>
                <Icon name="search" size={16} />
              </View>
            </View>
            <TouchableOpacity
              style={{
                alignSelf: 'flex-end',
                height: 48,
                width: 48,
                backgroundColor: Colors.WHITE,
                borderRadius: 6,
                borderWidth: 1,
                borderColor: Colors.GRAY,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <Icon name="sliders-h" size={20} color={Colors.BLUE} />
            </TouchableOpacity>
          </View>
          <View style={{height: 12}} />
          <View
            style={{
              height: 48,
              backgroundColor: Colors.WHITE,
              borderRadius: 6,
              borderWidth: 1,
              borderColor: Colors.GRAY,
              marginBottom: -40,
              flexDirection: 'row',
              alignSelf: 'center',
            }}>
            {tabs.map((tab, index) => (
              <TouchableHighlight
                key={index}
                onPress={() => setActiveTab(index)}
                underlayColor={false}
                style={{
                  flex: 0.8,
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRightWidth: 2,
                  borderColor: Colors.GRAY,
                }}>
                {activeTab === index ? (
                  <TextBold color={Colors.BLUE} text={tab.title} />
                ) : (
                  <TextRegular color={Colors.DARK_BLUE} text={tab.title} />
                )}
              </TouchableHighlight>
            ))}
          </View>
        </View>
        <View style={{padding: 16}}>{tabs[activeTab].content}</View>
        <View style={{height: 20}} />
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
