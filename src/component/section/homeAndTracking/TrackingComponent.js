import React, {useState} from 'react';
import {TextRegular, TextMedium, TextBold, InputText} from '../../global';
import {Colors} from '../../../styles';
import {
  ScrollView,
  TouchableOpacity,
  View,
  StyleSheet,
  Dimensions,
  useWindowDimensions,
} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

export default function TrackingComponent({
  navigation,
  dataTradeIn,
  dataNewCar,
}) {
  const FirstRoute = () => {
    return (
      <View>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('TrackingRouting', {screen: 'ToolsTradeIn'})
          }>
          {dataTradeIn.length > 0 ? (
            dataTradeIn.map((item, i) => (
              <View
                style={{
                  marginHorizontal: 15,
                  padding: 12,
                  marginTop: 10,
                  backgroundColor: Colors.WHITE,
                  borderRadius: 6,
                  borderWidth: 1,
                  borderColor: Colors.GRAY,
                }}>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
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
                  text={item.ApprovalTradeIn.Appraisal.carDetail[5].value}
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
                        item.ApprovalTradeIn.Appraisal.Booking.SalesProfile
                          .Branch.branch
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
            ))
          ) : (
            <View style={{alignItems: 'center'}}>
              <TextMedium
                text={'No Data Available'}
                style={{color: Colors.DARK_GRAY}}
              />
            </View>
          )}
        </TouchableOpacity>
      </View>
    );
  };
  const SecondRoute = () => (
    <View>
      <TouchableOpacity
        onPress={() =>
          navigation.navigate('TrackingRouting', {screen: 'BeliMobil'})
        }>
        {dataNewCar.length > 0 ? (
          dataNewCar.map(item => (
            <View
              style={{
                marginHorizontal: 15,
                padding: 12,
                marginTop: 10,
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
          ))
        ) : (
          <View style={{alignItems: 'center'}}>
            <TextMedium
              text={'No Data Available'}
              style={{color: Colors.DARK_GRAY}}
            />
          </View>
        )}
      </TouchableOpacity>
    </View>
  );

  const renderScene = SceneMap({first: FirstRoute, second: SecondRoute});

  const layout = useWindowDimensions();
  const [index, setIndex] = useState(0);
  const [routes] = useState([
    {key: 'first', title: 'Trade In'},
    {key: 'second', title: 'New Car'},
  ]);
  return (
    <ScrollView style={{flex: 1, backgroundColor: Colors.GRAY}}>
      <View
        style={{
          backgroundColor: Colors.BLUE,
          height: 150,
          position: 'absolute',
        }}
      />
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
      </View>
      <TabView
        style={{
          backgroundColor: Colors.GRAY,
          height: Dimensions.get('window').height,
        }}
        navigationState={{index, routes}}
        renderScene={renderScene}
        onIndexChange={setIndex}
        initialLayout={{width: layout.width}}
        renderTabBar={props => (
          <TabBar
            {...props}
            activeColor={Colors.BLUE}
            inactiveColor={Colors.BLACK}
            indicatorStyle={{
              backgroundColor: Colors.WHITE,
            }}
            style={{
              backgroundColor: Colors.WHITE,
              width: '90%',
              borderRadius: 8,
              alignSelf: 'center',
              marginTop: 12,
            }}
          />
        )}
      />
    </ScrollView>
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
