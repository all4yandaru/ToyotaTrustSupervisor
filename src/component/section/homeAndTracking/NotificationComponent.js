import {
  StyleSheet,
  Text,
  View,
  Image,
  ScrollView,
  TouchableOpacity,
} from 'react-native';
import React from 'react';
import {Colors} from '../../../styles';
import {TextRegular, TextMedium} from '../../global';

const NotificationComponent = ({navigation}) => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <Image
            style={styles.back}
            source={require('../../../asset/Icons/backblack.png')}
          />
        </TouchableOpacity>
        <Text style={styles.title}>Notifications</Text>
      </View>
      <ScrollView>
        <View style={styles.content}>
          <View style={styles.card}>
            <View style={styles.info}>
              <TextRegular style={styles.kode} text="TR-092018-246" />
              <TextRegular
                style={styles.tanggal}
                text="19 Agustus 2020 - 15.43"
              />
            </View>
            <TextMedium style={styles.status} text="Approved Diskon by COO" />
          </View>
          <View style={styles.card}>
            <View style={styles.info}>
              <TextRegular style={styles.kode} text="TR-092018-246" />
              <TextRegular
                style={styles.tanggal}
                text="19 Agustus 2020 - 15.43"
              />
            </View>
            <TextMedium style={styles.status} text="Approved Subsidi by OM" />
          </View>
          <View style={styles.card}>
            <View style={styles.info}>
              <TextRegular style={styles.kode} text="TR-092018-246" />
              <TextRegular
                style={styles.tanggal}
                text="19 Agustus 2020 - 15.43"
              />
            </View>
            <TextMedium
              style={styles.status}
              text="Edit Request Diskon by COO"
            />
          </View>
          <View style={styles.card}>
            <View style={styles.info}>
              <TextRegular style={styles.kode} text="TR-092018-246" />
              <TextRegular
                style={styles.tanggal}
                text="19 Agustus 2020 - 15.43"
              />
            </View>
            <TextMedium style={styles.status} text="Reject Subsidi by OM" />
          </View>
          <View style={styles.card}>
            <View style={styles.info}>
              <TextRegular style={styles.kode} text="TR-092018-246" />
              <TextRegular
                style={styles.tanggal}
                text="19 Agustus 2020 - 15.43"
              />
            </View>
            <TextMedium style={styles.status} text="Approved Subsidi by OM" />
          </View>
          <View style={styles.card}>
            <View style={styles.info}>
              <TextRegular style={styles.kode} text="TR-092018-246" />
              <TextRegular
                style={styles.tanggal}
                text="19 Agustus 2020 - 15.43"
              />
            </View>
            <TextMedium
              style={styles.status}
              text="Edit Request Diskon by COO"
            />
          </View>
          <View style={styles.card}>
            <View style={styles.info}>
              <TextRegular style={styles.kode} text="TR-092018-246" />
              <TextRegular
                style={styles.tanggal}
                text="19 Agustus 2020 - 15.43"
              />
            </View>
            <TextMedium style={styles.status} text="Reject Subsidi by OM" />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default NotificationComponent;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.GRAY,
  },
  header: {
    backgroundColor: Colors.WHITE,
    height: 56,
    flexDirection: 'row',
    justifyContent: 'flex-start',
    shadowColor: Colors.BLACK,
    shadowOffset: 5,
    shadowRadius: 10,
    elevation: 5,
  },
  back: {
    width: 35,
    height: 35,
    alignSelf: 'center',
    marginLeft: 10,
  },
  title: {
    alignSelf: 'center',
    marginLeft: '30%',
    color: Colors.BLACK,
    fontSize: 16,
    fontWeight: 'bold',
  },
  content: {
    backgroundColor: Colors.GRAY,
  },
  card: {
    backgroundColor: Colors.WHITE,
    marginTop: 12,
    width: '90%',
    alignSelf: 'center',
    borderRadius: 8,
    padding: 15,
  },
  info: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  kode: {
    color: 'rgba(0, 37, 88, 0.4)',
    fontSize: 12,
  },
  tanggal: {
    color: 'rgba(0, 37, 88, 0.4)',
    fontSize: 12,
  },
  status: {
    color: '#002558',
    fontSize: 14,
    marginTop: 7,
  },
});
