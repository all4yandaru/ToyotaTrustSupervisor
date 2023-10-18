import React from 'react';
import {TextRegular, TextMedium, TextBold, InputText} from '../../global';
import {Colors} from '../../../styles';
import {ScrollView, TouchableOpacity, View, StyleSheet} from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome5';

export default function TrackingUIComponent() {
  return (
    <View style={{flex: 1, backgroundColor: Colors.GRAY}}>
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
          <TouchableOpacity
            style={{
              flex: 0.8,
              justifyContent: 'center',
              alignItems: 'center',
              borderRightWidth: 2,
              borderColor: Colors.GRAY,
            }}>
            <TextBold color={Colors.BLUE} text="Trade In" />
          </TouchableOpacity>
          <TouchableOpacity
            style={{flex: 0.8, justifyContent: 'center', alignItems: 'center'}}>
            <TextRegular color={Colors.DARK_BLUE} text="New Car" />
          </TouchableOpacity>
        </View>
      </View>
      <View style={{height: 30}} />
      <ScrollView showsVerticalScrollIndicator={false}>
        <View style={{height: 30}} />
        <View
          style={{
            marginHorizontal: 15,
            padding: 12,

            backgroundColor: Colors.WHITE,
            borderRadius: 6,
            borderWidth: 1,
            borderColor: Colors.GRAY,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TextRegular
              size={12}
              color={Colors.DARK_BLUE}
              text="TR-092018-246"
            />
            <TextBold
              size={12}
              color={Colors.DARK_BLUE}
              text="Sen, 17 Sep 2018 - 10:30"
            />
          </View>
          <View style={{height: 8}} />
          <TextBold color={Colors.DARK_BLUE} text="Avanza G2.0" />
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
              <TextBold color={Colors.DARK_BLUE} size={12} text="Handoko" />
              <View style={{height: 2}} />
              <TextRegular
                color={Colors.DARK_BLUE}
                size={12}
                text="Cabang Kelapa gading"
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
                text="Request Diskon Sudah Terupdate"
              />
            </View>
          </View>
        </View>
        <View style={{height: 10}} />
        <View
          style={{
            marginHorizontal: 15,
            padding: 12,

            backgroundColor: Colors.WHITE,
            borderRadius: 6,
            borderWidth: 1,
            borderColor: Colors.GRAY,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TextRegular
              size={12}
              color={Colors.DARK_BLUE}
              text="TR-092018-246"
            />
            <TextBold
              size={12}
              color={Colors.DARK_BLUE}
              text="Sen, 17 Sep 2018 - 10:30"
            />
          </View>
          <View style={{height: 8}} />
          <TextBold color={Colors.DARK_BLUE} text="Avanza G2.0" />
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
              marginTop: 5,
            }}>
            <View style={{width: '50%'}}>
              <TextBold color={Colors.DARK_BLUE} size={12} text="Handoko" />
              <View style={{height: 2}} />
              <TextRegular
                color={Colors.DARK_BLUE}
                size={12}
                text="Cabang Kelapa gading"
              />
            </View>
            <View
              style={{
                paddingHorizontal: 10,
                height: 30,
                backgroundColor: Colors.YELLOW,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TextMedium
                size={10}
                color={Colors.WHITE}
                text="Request MRP Sudah Terupdate"
              />
            </View>
          </View>
        </View>
        <View style={{height: 10}} />
        <View
          style={{
            marginHorizontal: 15,
            padding: 12,

            backgroundColor: Colors.WHITE,
            borderRadius: 6,
            borderWidth: 1,
            borderColor: Colors.GRAY,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TextRegular
              size={12}
              color={Colors.DARK_BLUE}
              text="TR-092018-246"
            />
            <TextBold
              size={12}
              color={Colors.DARK_BLUE}
              text="Sen, 17 Sep 2018 - 10:30"
            />
          </View>
          <View style={{height: 8}} />
          <TextBold color={Colors.DARK_BLUE} text="Avanza G2.0" />
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
              marginTop: 5,
            }}>
            <View style={{width: '50%'}}>
              <TextBold color={Colors.DARK_BLUE} size={12} text="Handoko" />
              <View style={{height: 2}} />
              <TextRegular
                color={Colors.DARK_BLUE}
                size={12}
                text="Cabang Kelapa gading"
              />
            </View>
            <View
              style={{
                paddingHorizontal: 10,
                height: 30,
                backgroundColor: Colors.DARK_BLUE,
                borderRadius: 10,
                justifyContent: 'center',
                alignItems: 'center',
              }}>
              <TextMedium
                size={10}
                color={Colors.WHITE}
                text="Sedang Dalam Request"
              />
            </View>
          </View>
        </View>
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
