import React, {useState} from 'react';
import Icon from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/Feather';
import {TextRegular, TextMedium, TextBold} from '../../global';
import {Colors} from '../../../styles';
import {
  ScrollView,
  TouchableOpacity,
  View,
  StyleSheet,
  useWindowDimensions,
  Dimensions,
} from 'react-native';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';

export default function ToolTradeInComponent({navigation}) {
  const activeOpacity = 0.8;

  const FirstRoute = () => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.GRAY,
          paddingTop: 12,
          paddingHorizontal: 20,
        }}>
        <TouchableOpacity style={styles.body}>
          <TextBold
            size={12}
            color={Colors.LIGHT_GREEN}
            text="Approved by OM "
          />
          <View style={{height: 3}} />
          <View
            style={{
              flexDirection: 'row',
              width: '70%',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flex: 0.5,
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
                flex: 0.5,
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
        </TouchableOpacity>
        <TouchableOpacity style={styles.body}>
          <TextBold
            color={Colors.DARK_BLUE}
            size={16}
            text="Request Diskon BOD"
          />
          <View style={{height: 8}} />
          <TextBold
            size={12}
            color={Colors.LIGHT_GREEN}
            text="Approved by OM "
          />
          <View style={{height: 3}} />
          <View
            style={{
              flexDirection: 'row',
              width: '70%',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flex: 0.5,
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
                flex: 0.5,
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
        </TouchableOpacity>
        <TouchableOpacity style={styles.body}>
          <TextBold color={Colors.DARK_BLUE} size={16} text="Request MRP" />
          <View style={{height: 8}} />
          <TextBold size={12} color={Colors.RED} text="Rejected by OM " />
          <View style={{height: 3}} />
          <View
            style={{
              flexDirection: 'row',
              width: '70%',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flex: 0.5,
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
                flex: 0.5,
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
        </TouchableOpacity>
      </View>
    );
  };
  const SecondRoute = () => (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.GRAY,
        paddingTop: 12,
        paddingHorizontal: 20,
      }}>
      <TouchableOpacity style={styles.body}>
        <TextBold size={12} color={Colors.LIGHT_GREEN} text="Approved by OM " />
        <View style={{height: 3}} />
        <View
          style={{
            flexDirection: 'row',
            width: '70%',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flex: 0.5,
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
              flex: 0.5,
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
      </TouchableOpacity>
      <TouchableOpacity style={styles.body}>
        <TextBold
          color={Colors.DARK_BLUE}
          size={16}
          text="Request Diskon BOD"
        />
        <View style={{height: 8}} />
        <TextBold size={12} color={Colors.LIGHT_GREEN} text="Approved by OM " />
        <View style={{height: 3}} />
        <View
          style={{
            flexDirection: 'row',
            width: '70%',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flex: 0.5,
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
              flex: 0.5,
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
      </TouchableOpacity>
      <TouchableOpacity style={styles.body}>
        <TextBold color={Colors.DARK_BLUE} size={16} text="Request MRP" />
        <View style={{height: 8}} />
        <TextBold size={12} color={Colors.RED} text="Rejected by OM " />
        <View style={{height: 3}} />
        <View
          style={{
            flexDirection: 'row',
            width: '70%',
            justifyContent: 'space-between',
          }}>
          <View
            style={{
              flex: 0.5,
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
              flex: 0.5,
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
    <View style={{flex: 1, backgroundColor: Colors.GRAY}}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <View
          style={{
            padding: 16,
            paddingRight: '40%',
            flexDirection: 'row',
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <Icon name="arrow-left" size={24} color={Colors.BLACK} />
          </TouchableOpacity>
          <TextBold color={Colors.DARK_BLUE} text="Tools Trade In" size={16} />
        </View>
        <View style={{height: 2}} />
        <View
          style={{
            flexDirection: 'row',
            padding: 16,
            backgroundColor: 'white',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}>
          <TextRegular
            size={12}
            color={Colors.DARK_GRAY}
            text="TR-092018-246"
          />
          <TextMedium
            color={Colors.DARK_BLUE}
            size={12}
            text="Sen,17 Sep 2018-10:30"
          />
        </View>
        <View style={{height: 22}} />
        <View style={styles.body}>
          <TextBold
            size={14}
            color={Colors.DARK_BLUE}
            text="Used Car Information"
          />
        </View>
        <View style={{height: 2}} />
        <View style={styles.body}>
          <View style={styles.bodySection}>
            <TextMedium color={Colors.DARK_BLUE} text="Mobil" />
            <TextBold color={Colors.DARK_BLUE} text="AVANZA G AT 2016" />
          </View>
          <View style={{height: 16}} />
          <View style={styles.bodySection}>
            <TextMedium color={Colors.DARK_BLUE} text="Plat Nomor" />
            <TextBold color={Colors.DARK_BLUE} text="B 1234 TES" />
          </View>
          <View style={{height: 16}} />
          <TouchableOpacity
            activeOpacity={activeOpacity}
            style={[
              styles.bodySection,
              {
                borderRadius: 5,
                backgroundColor: Colors.BLUE,
                padding: 10,
                alignItems: 'center',
              },
            ]}
            onPress={() => navigation.navigate('DetailAppraisal')}>
            <TextMedium color="white" text="Lihat Detail Appraisal" />
            <Icons name="arrow-right" color={Colors.WHITE} size={12} />
          </TouchableOpacity>
        </View>
        <View style={{height: 16}} />
        <View style={styles.body}>
          <View style={styles.bodySection}>
            <TextMedium color={Colors.DARK_BLUE} text="Mobil" />
            <TextBold color={Colors.DARK_BLUE} text="RUSH S AT  TRD" />
          </View>
          <View style={{height: 6}} />
          <TouchableOpacity activeOpacity={activeOpacity}>
            <TextRegular
              style={{alignSelf: 'flex-end'}}
              color={Colors.BLUE}
              size={12}
              text="Change car"
            />
          </TouchableOpacity>
          <View style={{height: 10}} />
          <View style={styles.bodySection}>
            <TextMedium color={Colors.DARK_BLUE} text="OTR" />
            <TextBold color={Colors.DARK_BLUE} text="Rp 276.600.000" />
          </View>
          <View style={{height: 16}} />
        </View>
        <View style={{height: 16}} />
        <View style={styles.body}>
          <TextBold
            size={14}
            color={Colors.DARK_BLUE}
            text="Ruang Nego Harga"
          />
        </View>
        <View style={{height: 2}} />
        <View style={styles.body}>
          <View style={styles.bodySection}>
            <TextMedium color={Colors.DARK_BLUE} text="Harga penawaran" />
            <TextBold color={Colors.DARK_BLUE} text="Rp 78.500.000" />
          </View>
          <View style={{height: 16}} />
          <View style={styles.bodySection}>
            <TextMedium color={Colors.DARK_BLUE} text="Ruang Nego" />
            <TextBold color={Colors.DARK_BLUE} text="Rp 3.000.000" />
          </View>
          <View style={{height: 16}} />
          <View style={styles.bodySection}>
            <TextMedium color={Colors.DARK_BLUE} text="MRP (Harga Max)" />
            <TextBold color={Colors.DARK_BLUE} text="Rp 81.500.000" />
          </View>
        </View>
        <View style={{height: 16}} />
        <View style={styles.body}>
          <TextBold size={14} color={Colors.DARK_BLUE} text="Diskon" />
        </View>
        <View style={{height: 2}} />
        <View style={styles.body}>
          <View style={styles.bodySection}>
            <TextMedium color={Colors.DARK_BLUE} text="Diskon Kacab" />
            <TextBold color={Colors.DARK_BLUE} text="Rp 2.000.000" />
          </View>
          <View style={{height: 16}} />
          <View style={styles.bodySection}>
            <TextMedium color={Colors.DARK_BLUE} text="pengajuan Diskon BOD" />
            <TextBold color={Colors.DARK_BLUE} text="-" />
          </View>
          <View style={{height: 16}} />
          <View style={styles.bodySection}>
            <TextMedium
              color={Colors.DARK_BLUE}
              text="Proyeksi GP (After Disc)"
            />
            <TextBold color={Colors.DARK_BLUE} text="-" />
          </View>
        </View>
        <View style={{height: 16}} />
        <View style={styles.body}>
          <TextBold
            size={14}
            color={Colors.DARK_BLUE}
            text="Gross Profit Trust"
          />
        </View>
        <View style={{height: 2}} />
        <View style={styles.body}>
          <View style={styles.bodySection}>
            <TextMedium color={Colors.DARK_BLUE} text="Proyeksi Harga Jual" />
            <TextBold color={Colors.DARK_BLUE} text="Rp 120.000.000" />
          </View>
          <View style={{height: 16}} />
          <View style={styles.bodySection}>
            <TextMedium
              style={styles.textSection}
              color={Colors.DARK_BLUE}
              numberOfLines={2}
              text="COGS (harga beli+{biaya rekondisi)+OPEX"
            />
            <TextBold color={Colors.DARK_BLUE} text="Rp 109.550.000" />
          </View>
          <View style={{height: 16}} />
          <View style={styles.bodySection}>
            <TextMedium color={Colors.DARK_BLUE} text="Proyeksi NBPT Trust" />
            <TextBold color={Colors.DARK_BLUE} text="Rp 10.450.000" />
          </View>
        </View>
        <TextBold
          style={{alignSelf: 'center', marginTop: 24, marginBottom: 32}}
          size={16}
          color={Colors.DARK_BLUE}
          text="Request Section"
        />
        <View style={styles.body}>
          <TextBold size={16} color={Colors.DARK_BLUE} text="Request MRP" />
          <View style={{height: 8}} />
          <TextBold
            size={12}
            color={Colors.LIGHT_GREEN}
            text="Approved by OM senilai  10.000.000"
          />
          <View style={{height: 3}} />
          <View
            style={{
              flexDirection: 'row',
              width: '70%',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flex: 0.5,
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
                flex: 0.5,
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
        <View style={{height: 16}} />
        <View style={styles.body}>
          <TextBold
            size={16}
            color={Colors.DARK_BLUE}
            text="Request Diskon BOD"
          />
          <View style={{height: 8}} />
          <TextBold
            size={12}
            color={Colors.LIGHT_GREEN}
            text="Approved by OM senilai  10.000.000"
          />
          <View style={{height: 3}} />
          <View
            style={{
              flexDirection: 'row',
              width: '70%',
              justifyContent: 'space-between',
            }}>
            <View
              style={{
                flex: 0.5,
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
                flex: 0.5,
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
        <View style={{height: 16}} />
        <View style={styles.body}>
          <TextRegular color={Colors.DARK_BLUE} size={12} text="Harga Final" />
          <View style={{height: 5}} />
          <View
            style={{
              borderWidth: 1,
              borderColor: Colors.GRAY,
              paddingVertical: 6,
              paddingLeft: 12,
              borderRadius: 5,
            }}>
            <TextRegular
              size={14}
              color={Colors.DARK_BLUE}
              text="Rp 170.000.000"
            />
          </View>
          <View style={{height: 16}} />
          <TextRegular
            color={Colors.DARK_BLUE}
            size={12}
            text="Sisa Ruang Nego"
          />
          <View style={{height: 5}} />
          <View
            style={{
              backgroundColor: Colors.GRAY,
              paddingVertical: 6,
              paddingLeft: 12,
              borderRadius: 5,
            }}>
            <TextRegular
              size={14}
              color={Colors.DARK_BLUE}
              text="Rp 2.000.000"
            />
          </View>
          <View style={{height: 16}} />
          <TextRegular
            color={Colors.DARK_BLUE}
            size={12}
            text="Total Benefit TI (Final)"
          />
          <View style={{height: 5}} />
          <View
            style={{
              backgroundColor: Colors.GRAY,
              paddingTop: 6,
              paddingLeft: 12,
              borderRadius: 5,
              justifyContent: 'center',
            }}>
            <TextRegular
              size={14}
              color={Colors.DARK_BLUE}
              text="Rp 2.000.000"
            />
            <View style={{height: 12}} />
          </View>
        </View>
        <TextBold
          style={{alignSelf: 'center', marginTop: 24, marginBottom: 32}}
          size={16}
          color={Colors.DARK_BLUE}
          text="History Log"
        />
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
    </View>
  );
}

const styles = StyleSheet.create({
  body: {
    width: '95%',
    backgroundColor: 'white',
    padding: 10,
    alignSelf: 'center',
    marginTop: 15,
  },
  bodySection: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
  },
  textSection: {maxWidth: '50%'},
});
