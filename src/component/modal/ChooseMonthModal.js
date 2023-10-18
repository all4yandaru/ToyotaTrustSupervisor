import React from 'react';
import {
  View,
  Modal,
  TouchableOpacity,
  StyleSheet,
  ScrollView,
  TextInput,
} from 'react-native';
import {TextBold, TextRegular} from '../global/Text';
import {Colors} from '../../styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {InputText} from '../global/InputText';
import ModalCenter from './ModalCenter';

const ChooseMonthModal = () => {
  return (
    <ModalCenter
      show={true}
      title="Pilih Bulan"
      children={
        <ScrollView Style={{flexGrow: 1}}>
          {/* SEACRH ======================================================================= */}
          <View style={[styles.ChooseMonthStyle, {paddingBottom: 6}]}>
            <View style={[styles.textInputImageForm]}>
              <InputText
                placeholderText="Cari"
                style={{flex: 1, borderWidth: 0}}
              />
              <Icon
                style={[styles.iconTittle]}
                name="search1"
                size={16}
                color="#287AE5"
              />
            </View>
          </View>
          {/* LIST MONTH 1 ========================================================================  */}
          <View style={[styles.DetailMonthStyle]}>
            <View
              style={{
                alignItems: 'flex-start',
              }}>
              <View style={[styles.ListRiwayatStyle]}>
                <View
                  style={{
                    alignItems: 'flex-start',
                  }}></View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <TextRegular
                    text="September 2021"
                    size={12}
                    color={Colors.DARK_BLUE}
                    style={{marginTop: 4}}
                  />
                  <TextBold
                    text="Rp 3.000.000"
                    size={14}
                    color={Colors.BLUE}
                    style={{
                      marginRight: 10,
                      marginTop: 4,
                    }}
                  />
                </View>
              </View>
            </View>
            {/* LIST MONTH 2 ========================================================================  */}
            <View
              style={{
                alignItems: 'flex-start',
              }}>
              <View style={[styles.ListRiwayatStyle]}>
                <View
                  style={{
                    alignItems: 'flex-start',
                  }}></View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <TextRegular
                    text="Agustus 2021"
                    size={12}
                    color={Colors.DARK_BLUE}
                    style={{marginTop: 0}}
                  />
                  <TextBold
                    text="Rp 3.000.000"
                    size={14}
                    color={Colors.BLUE}
                    style={{
                      marginRight: 10,
                      marginTop: 4,
                    }}
                  />
                </View>
              </View>
            </View>
            {/* LIST MONTH 3 ========================================================================  */}
            <View
              style={{
                alignItems: 'flex-start',
              }}>
              <View style={[styles.ListRiwayatStyle]}>
                <View
                  style={{
                    alignItems: 'flex-start',
                  }}></View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <TextRegular
                    text="Juli 2021"
                    size={12}
                    color={Colors.DARK_BLUE}
                    style={{marginTop: 0}}
                  />
                  <TextBold
                    text="Rp 3.000.000"
                    size={14}
                    color={Colors.BLUE}
                    style={{
                      marginRight: 10,
                      marginTop: 4,
                    }}
                  />
                </View>
              </View>
            </View>
            {/* LIST MONTH 4 ========================================================================  */}
            <View
              style={{
                alignItems: 'flex-start',
              }}>
              <View style={[styles.ListRiwayatStyle]}>
                <View
                  style={{
                    alignItems: 'flex-start',
                  }}></View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <TextRegular
                    text="Juni 2021"
                    size={12}
                    color={Colors.DARK_BLUE}
                    style={{marginTop: 0}}
                  />
                  <TextBold
                    text="Rp 3.000.000"
                    size={14}
                    color={Colors.BLUE}
                    style={{
                      marginRight: 10,
                      marginTop: 4,
                    }}
                  />
                </View>
              </View>
            </View>
            {/* LIST MONTH 5 ========================================================================  */}
            <View
              style={{
                alignItems: 'flex-start',
              }}>
              <View style={[styles.ListRiwayatStyle]}>
                <View
                  style={{
                    alignItems: 'flex-start',
                  }}></View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <TextRegular
                    text="Mei 2021"
                    size={12}
                    color={Colors.DARK_BLUE}
                    style={{marginTop: 0}}
                  />
                  <TextBold
                    text="Rp 3.000.000"
                    size={14}
                    color={Colors.BLUE}
                    style={{
                      marginRight: 10,
                      marginTop: 4,
                    }}
                  />
                </View>
              </View>
            </View>
            {/* LIST MONTH 6 ========================================================================  */}
            <View
              style={{
                alignItems: 'flex-start',
              }}>
              <View style={[styles.ListRiwayatStyle]}>
                <View
                  style={{
                    alignItems: 'flex-start',
                  }}></View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <TextRegular
                    text="April 2021"
                    size={12}
                    color={Colors.DARK_BLUE}
                    style={{marginTop: 0}}
                  />
                  <TextBold
                    text="Rp 3.000.000"
                    size={14}
                    color={Colors.BLUE}
                    style={{
                      marginRight: 10,
                      marginTop: 4,
                    }}
                  />
                </View>
              </View>
            </View>
            {/* LIST MONTH 7 ========================================================================  */}
            <View
              style={{
                alignItems: 'flex-start',
              }}>
              <View style={[styles.ListRiwayatStyle]}>
                <View
                  style={{
                    alignItems: 'flex-start',
                  }}></View>
                <View
                  style={{
                    flexDirection: 'row',
                    justifyContent: 'space-between',
                  }}>
                  <TextRegular
                    text="Maret 2021"
                    size={12}
                    color={Colors.DARK_BLUE}
                    style={{marginTop: 0}}
                  />
                  <TextBold
                    text="Rp 3.000.000"
                    size={14}
                    color={Colors.BLUE}
                    style={{
                      marginRight: 10,
                      marginTop: 4,
                    }}
                  />
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      }
    />
  );
};

export default ChooseMonthModal;

const styles = StyleSheet.create({
  ChooseMonthStyle: {
    marginTop: 12,
    paddingHorizontal: 12,
    backgroundColor: 'white',
    marginStart: 16,
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
  DetailMonthStyle: {
    paddingHorizontal: 12,
    marginEnd: 16,
    marginStart: 16,
    paddingBottom: 16,
    paddingTop: 12,
  },
  ListRiwayatStyle: {
    paddingHorizontal: 12,
    paddingVertical: 18,
    backgroundColor: '#F6F8FF',
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#EDEDED',
  },
});
