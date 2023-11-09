import {
  Dimensions,
  Image,
  ImageBackground,
  ScrollView,
  StyleSheet,
  Text,
  TextInput,
  Touchable,
  TouchableOpacity,
  View,
  useWindowDimensions,
} from 'react-native';
import React, {useState} from 'react';
import {TextBold, TextRegular, TextMedium} from '../../global';
import {Colors} from '../../../styles';
import {TabView, SceneMap, TabBar} from 'react-native-tab-view';
import FilterHomeModal from '../../modal/FilterHomeModal';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome6';

export default function HomeComponent({navigation}) {
  const [filterModal, setFilterModal] = useState(false);

  const FirstRoute = () => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: Colors.GRAY,
          paddingTop: 12,
          paddingHorizontal: 20,
        }}>
        <TouchableOpacity
          onPress={() =>
            navigation.navigate('Tracking', {screen: 'ToolsTradeIn'})
          }
          style={{
            padding: 12,
            backgroundColor: Colors.WHITE,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: Colors.GRAY,
            height: 125,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TextRegular
              text="TR-092018-246"
              color={Colors.DARK_BLUE}
              size={12}
            />
            <TextMedium
              text="Sen, 17 Sep 2018 - 10.30"
              color={Colors.DARK_BLUE}
              size={12}
            />
          </View>
          <TextBold
            text="Avanza G AT 2016"
            style={{marginTop: 8}}
            color={Colors.DARK_BLUE}
            size={14}
          />
          <View
            style={{
              borderStyle: 'dashed',
              borderWidth: 1,
              borderColor: Colors.GRAY,
              height: 1,
              marginVertical: 10,
            }}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <TextBold text="Handoko" color={Colors.DARK_BLUE} size={12} />
              <TextRegular
                text="Cabang Kelapa Gading"
                color={Colors.DARK_BLUE}
                size={10}
              />
            </View>
            <View
              style={{
                backgroundColor: Colors.BLUE,
                width: 74,
                height: 20,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 6,
                marginTop: 10,
              }}>
              <TextRegular text="New Approval" color={Colors.WHITE} size={10} />
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
      <TouchableOpacity onPress={() => navigation.navigate('ToolTradeIn')}>
        <View
          style={{
            padding: 12,
            backgroundColor: Colors.WHITE,
            borderRadius: 8,
            borderWidth: 1,
            borderColor: Colors.GRAY,
            height: 125,
          }}>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <TextRegular
              text="TR-092018-246"
              color={Colors.DARK_BLUE}
              size={12}
            />
            <TextMedium
              text="Sen, 17 Sep 2018 - 10.30"
              color={Colors.DARK_BLUE}
              size={12}
            />
          </View>
          <TextBold
            text="Avanza G AT 2016"
            style={{marginTop: 8}}
            color={Colors.DARK_BLUE}
            size={14}
          />
          <View
            style={{
              borderStyle: 'dashed',
              borderWidth: 1,
              borderColor: Colors.GRAY,
              height: 1,
              marginVertical: 10,
            }}
          />
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <View>
              <TextBold text="Handoko" color={Colors.DARK_BLUE} size={12} />
              <TextRegular
                text="Cabang Kelapa Gading"
                color={Colors.DARK_BLUE}
                size={10}
              />
            </View>
            <View
              style={{
                backgroundColor: Colors.BLUE,
                width: 74,
                height: 20,
                alignItems: 'center',
                justifyContent: 'center',
                borderRadius: 6,
                marginTop: 10,
              }}>
              <TextRegular text="New Approval" color={Colors.WHITE} size={10} />
            </View>
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
  // const navigation = useNavigation();
  return (
    <View style={styles.container}>
      <ScrollView>
        <ImageBackground
          source={require('../../../asset/Image/backgroundHome.png')}
          style={styles.imagebg}>
          <View style={{padding: 15, flexDirection: 'row'}}>
            <View>
              <TextRegular text="Supervisor" size={12} color={Colors.WHITE} />
              <TextRegular
                text="Cabang Bintaro"
                size={16}
                color={Colors.WHITE}
              />
            </View>
            <View style={{position: 'absolute', right: 40, top: 20}}>
              <TouchableOpacity
                onPress={() => navigation.navigate('Notification')}>
                <FontAwesome5
                  name="bell"
                  size={26}
                  style={{color: Colors.WHITE}}
                />
              </TouchableOpacity>
            </View>
          </View>
          <View style={styles.statuscard}>
            <TextRegular
              text="1 Sep - 12 September 2020"
              color={Colors.DARK_BLUE}
              style={styles.period}
            />
            <View style={styles.garis} />
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}>
              <View style={styles.cardinfo}>
                <View
                  style={{
                    backgroundColor: Colors.BLUE,
                    width: 2,
                    height: 16,
                    position: 'absolute',
                    top: 10,
                  }}
                />
                <TextRegular
                  text="Cek Harga"
                  size={12}
                  color={Colors.DARK_BLUE}
                />
                <TextBold text="32" size={20} color={Colors.DARK_BLUE} />
              </View>
              <View style={styles.cardinfo}>
                <View
                  style={{
                    backgroundColor: Colors.GREEN,
                    width: 2,
                    height: 16,
                    position: 'absolute',
                    top: 10,
                  }}
                />
                <TextRegular
                  text="Total Appraisal"
                  size={12}
                  color={Colors.DARK_BLUE}
                />
                <TextBold text="16" size={20} color={Colors.DARK_BLUE} />
              </View>
            </View>
            <View
              style={{
                flexDirection: 'row',
                justifyContent: 'space-between',
                marginTop: 12,
              }}>
              <View style={styles.cardinfo}>
                <View
                  style={{
                    backgroundColor: Colors.YELLOW,
                    width: 2,
                    height: 16,
                    position: 'absolute',
                    top: 10,
                  }}
                />
                <TextRegular text="PO" size={12} color={Colors.DARK_BLUE} />
                <TextBold text="12" size={20} color={Colors.DARK_BLUE} />
              </View>
              <View style={styles.cardinfo}>
                <View
                  style={{
                    backgroundColor: Colors.RED,
                    width: 2,
                    height: 16,
                    position: 'absolute',
                    top: 10,
                  }}
                />
                <TextRegular
                  text="PO Valid"
                  size={12}
                  color={Colors.DARK_BLUE}
                />
                <TextBold text="4" size={20} color={Colors.DARK_BLUE} />
              </View>
            </View>
          </View>
        </ImageBackground>
        <FilterHomeModal
          show={filterModal}
          onClose={() => setFilterModal(false)}
          title="Filter"
        />
        <View
          style={{
            flexDirection: 'row',
            marginTop: -40,
            paddingHorizontal: 15,
          }}>
          <View style={styles.inputbox}>
            <TextInput
              style={styles.input}
              placeholder="Telusuri..."
              placeholderTextColor={'rgba(0, 37, 88, 0.4)'}
            />
            <Image
              source={require('../../../asset/Icons/search.png')}
              style={styles.searchlogo}
            />
          </View>
          <TouchableOpacity
            style={styles.filterbtn}
            onPress={() => setFilterModal(true)}>
            <Image
              source={require('../../../asset/Icons/filter.png')}
              style={styles.filtericon}
            />
          </TouchableOpacity>
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
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.GRAY,
  },
  imagebg: {
    flex: 1,
    width: '100%',
    height: 310,
  },
  statuscard: {
    backgroundColor: Colors.WHITE,
    borderRadius: 6,
    width: '90%',
    height: 200,
    padding: 12,
    marginTop: 5,
    alignSelf: 'center',
  },
  period: {
    fontSize: 14,
  },
  garis: {
    backgroundColor: Colors.GRAY,
    height: 2,
    width: '100%',
    marginVertical: 12,
  },
  cardinfo: {
    backgroundColor: Colors.GRAY,
    width: '48%',
    height: 60,
    paddingVertical: 8,
    paddingHorizontal: 10,
    borderRadius: 6,
  },
  searchlogo: {
    width: 16,
    height: 16,
    alignSelf: 'center',
    marginRight: 15,
  },
  inputbox: {
    backgroundColor: Colors.WHITE,
    width: '80%',
    height: 48,
    borderRadius: 6,
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  input: {
    width: '80%',
    padding: 10,
  },
  filterbtn: {
    marginTop: 16,
    backgroundColor: Colors.WHITE,
    width: '15%',
    height: 48,
    borderRadius: 6,
    justifyContent: 'center',
    position: 'absolute',
    right: 16,
  },
  filtericon: {
    width: 24,
    height: 24,
    alignSelf: 'center',
  },
});
