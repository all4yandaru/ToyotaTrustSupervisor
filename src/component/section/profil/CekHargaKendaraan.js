import React from 'react';
import {View, TouchableOpacity, ScrollView, StyleSheet} from 'react-native';
import {TextBold, TextMedium, TextRegular} from '../../global/Text';
import {Colors} from '../../../styles';
import Icon from 'react-native-vector-icons/Entypo';
import SelectDropdown from 'react-native-select-dropdown';

const dropdownIcon = () => {
  return <Icon name="chevron-small-down" size={25} />;
};

const CekHargaKendaraan = (navigation, route) => {
  const brandData = ['Toyota', 'Hyundai', 'Mitsubishi', 'Honda'];
  const modelData = ['Model A', 'Model B', 'Model C', 'Model D'];
  const tipeData = ['Tipe A', 'Tipe B', 'Tipe C', 'Tipe D'];

  return (
    <View style={styles.container}>
      <ScrollView>
        <View style={styles.content}>
          <TextMedium text="Brand" size={14} color={Colors.DARK_BLUE} />
          <SelectDropdown
            data={brandData}
            defaultButtonText="Pilih Brand"
            buttonStyle={styles.dropDownBtn}
            buttonTextStyle={styles.dropDownBtnText}
            dropdownStyle={{
              borderColor: Colors.MEDIUM_GRAY,
            }}
            renderDropdownIcon={dropdownIcon}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
          <TextMedium
            text="Model"
            size={14}
            color={Colors.DARK_BLUE}
            style={{
              marginTop: 5,
            }}
          />
          <SelectDropdown
            data={modelData}
            defaultButtonText="Pilih Model"
            buttonStyle={styles.dropDownBtn}
            buttonTextStyle={styles.dropDownBtnText}
            dropdownStyle={{
              borderColor: Colors.MEDIUM_GRAY,
            }}
            renderDropdownIcon={dropdownIcon}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
          <TextMedium
            text="Tipe"
            size={14}
            color={Colors.DARK_BLUE}
            style={{
              marginTop: 5,
            }}
          />
          <SelectDropdown
            data={tipeData}
            defaultButtonText="Pilih Tipe"
            buttonStyle={styles.dropDownBtn}
            buttonTextStyle={styles.dropDownBtnText}
            dropdownStyle={{
              borderColor: Colors.MEDIUM_GRAY,
            }}
            renderDropdownIcon={dropdownIcon}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />
          <TextMedium
            text="Tahun"
            size={14}
            color={Colors.DARK_BLUE}
            style={{
              marginTop: 5,
            }}
          />
          <SelectDropdown
            data={modelData}
            defaultButtonText="Pilih Tahun"
            buttonStyle={styles.dropDownBtn}
            buttonTextStyle={styles.dropDownBtnText}
            dropdownStyle={{
              borderColor: Colors.MEDIUM_GRAY,
            }}
            renderDropdownIcon={dropdownIcon}
            onSelect={(selectedItem, index) => {
              console.log(selectedItem, index);
            }}
            buttonTextAfterSelection={(selectedItem, index) => {
              return selectedItem;
            }}
            rowTextForSelection={(item, index) => {
              return item;
            }}
          />

          <View style={styles.columnContent}>
            <TextMedium
              text="Kuota cek harga hari ini: "
              size={14}
              color={Colors.DARK_BLUE}
            />

            <TextBold text="0/50" size={15} color={Colors.DARK_BLUE} />
          </View>
          <TouchableOpacity
            style={{
              backgroundColor: Colors.BLUE,
              paddingVertical: 8,
              borderRadius: 5,
              marginTop: 15,
            }}>
            <TextMedium
              text="CEK HARGA"
              size={16}
              color={Colors.WHITE}
              style={{alignSelf: 'center'}}
            />
          </TouchableOpacity>

          <TouchableOpacity
            style={{
              backgroundColor: Colors.WHITE,
              paddingVertical: 8,
              borderRadius: 5,
              marginTop: 15,
              borderWidth: 2,
              borderColor: Colors.BLUE,
            }}>
            <TextMedium
              text="MOBIL TIDAK ADA DI LIST"
              size={16}
              color={Colors.BLUE}
              style={{alignSelf: 'center'}}
            />
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export default CekHargaKendaraan;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.GRAY,
  },
  content: {
    backgroundColor: Colors.WHITE,
    margin: 20,
    padding: 10,
  },
  dropDownBtn: {
    width: '100%',
    height: 35,
    borderWidth: 1,
    borderColor: Colors.MEDIUM_GRAY,
    borderRadius: 5,
    marginTop: 10,
    alignItems: 'center',
    justifyContent: 'space-between',
    backgroundColor: Colors.WHITE,
  },
  dropDownBtnText: {
    color: Colors.DARK_BLUE,
    fontSize: 14,
    fontWeight: '500',
    textAlign: 'auto',
  },
  columnContent: {
    marginTop: 15,
    borderWidth: 1,
    backgroundColor: Colors.GRAY,
    borderColor: Colors.MEDIUM_GRAY,
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 5,
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
});
