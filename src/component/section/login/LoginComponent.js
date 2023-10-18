import {
  StyleSheet,
  Text,
  View,
  Image,
  TouchableOpacity,
  ScrollView,
  TextInput,
} from 'react-native';
import React from 'react';
import {Colors} from '../../../styles';
import {InputText, TextBold, TextRegular} from '../../global';

const LoginComponent = () => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.body}>
          <Image
            source={require('../../../asset/Image/toyota_trust.png')}
            style={styles.image}
          />
          <View style={styles.inputbox}>
            <Image
              source={require('../../../asset/Icons/emaillogo.png')}
              style={styles.inputimg}
            />
            <InputText
              placeholderText="Alamat Email"
              placeholderTextColor={Colors.DARK_BLUE}
              style={{borderWidth: 0}}
            />
          </View>
          <View style={styles.inputbox}>
            <Image
              source={require('../../../asset/Icons/lock.png')}
              style={styles.inputimg}
            />
            <InputText
              placeholderText="Password"
              placeholderTextColor={Colors.DARK_BLUE}
              isPassword={true}
              style={{borderWidth: 0}}
            />
          </View>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'flex-end',
              marginRight: 30,
            }}>
            <TouchableOpacity>
              <TextRegular style={styles.resetpw} text="Reset Password" />
            </TouchableOpacity>
          </View>
          <TouchableOpacity style={styles.btn}>
            <TextBold style={styles.btntext} text="LOGIN" />
          </TouchableOpacity>
        </View>
        <View style={styles.card}>
          <TextBold style={styles.cardtext} text="Digital Approval" />
        </View>
      </ScrollView>
    </View>
  );
};

export default LoginComponent;

const styles = StyleSheet.create({
  container: {backgroundColor: Colors.GRAY, flex: 1},
  card: {
    backgroundColor: Colors.DARK_BLUE,
    width: 170,
    height: 36,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    position: 'absolute',
    top: 180,
  },
  cardtext: {
    color: Colors.WHITE,
    fontSize: 16,
    fontWeight: 'bold',
  },
  body: {
    backgroundColor: Colors.WHITE,
    width: '90%',
    alignSelf: 'center',
    marginVertical: 200,
    borderRadius: 8,
  },
  image: {
    width: 127,
    height: 55,
    marginTop: 45,
    alignSelf: 'center',
    marginBottom: 14,
  },
  inputbox: {
    borderWidth: 1,
    borderColor: Colors.GRAY,
    width: '90%',
    marginTop: 24,
    alignSelf: 'center',
    borderRadius: 8,
    height: 48,
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 10,
  },
  inputimg: {
    width: 16,
    height: 16,
    marginRight: 5,
  },
  resetpw: {
    color: Colors.BLUE,
    fontStyle: 'italic',
    marginTop: 16,
    marginBottom: 24,
  },
  btn: {
    backgroundColor: Colors.BLUE,
    width: '90%',
    height: 48,
    alignSelf: 'center',
    borderRadius: 8,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 20,
  },
  btntext: {
    fontSize: 16,
    color: Colors.WHITE,
    fontWeight: 'bold',
  },
});
