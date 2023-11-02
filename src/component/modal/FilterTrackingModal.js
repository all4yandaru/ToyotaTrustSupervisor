import React, {useState} from 'react';
import {View, Modal, StyleSheet, TouchableOpacity, Text} from 'react-native';
import {TextBold, TextMedium} from '../global';
import {Colors} from '../../styles';
import Icon from 'react-native-vector-icons/AntDesign';

const RadioButton = ({selected, onSelect}) => {
  return (
    <TouchableOpacity
      activeOpacity={0.8}
      style={styles.radioButton}
      onPress={onSelect}>
      <View style={styles.radioCircle}>
        {selected && <View style={styles.selectedRb} />}
      </View>
    </TouchableOpacity>
  );
};

export default function FilterTrackingModal() {
  const [showModal, setShowModal] = useState(false);
  const [selected, setSelected] = useState('first');
  const ModalBottom = ({show, onClose, children}) => {
    return (
      <Modal transparent visible={show} onRequestClose={onClose}>
        <View style={styles.container}>
          <View style={styles.body}>
            <View style={styles.header}>
              <TextBold text="Filter" color={Colors.DARK_BLUE} size={16} />
              <TouchableOpacity onPress={onClose}>
                <Icon name="close" color={Colors.DARK_BLUE} size={16} />
              </TouchableOpacity>
            </View>
            <View style={{height: 2}} />
            <View>
              <View style={[styles.header, {borderBottomWidth: 0}]}>
                <TextMedium
                  color={Colors.DARK_BLUE}
                  size={16}
                  text="Request Diskon"
                />
                <RadioButton
                  selected={selected === 'first'}
                  onSelect={() => setSelected('first')}
                />
              </View>
              <View style={[styles.header, {borderBottomWidth: 0}]}>
                <TextMedium
                  color={Colors.DARK_BLUE}
                  size={16}
                  text="Request Subsidi"
                />
                <RadioButton
                  selected={selected === 'second'}
                  onSelect={() => setSelected('second')}
                />
              </View>
              <View style={[styles.header, {borderBottomWidth: 0}]}>
                <TextMedium
                  color={Colors.DARK_BLUE}
                  size={16}
                  text="Request MRP"
                />
                <RadioButton
                  selected={selected === 'third'}
                  onSelect={() => setSelected('third')}
                />
              </View>
            </View>
          </View>
        </View>
      </Modal>
    );
  };
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: Colors.GRAY,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <TouchableOpacity
        onPress={() => setShowModal(true)}
        style={{
          height: 100,
          width: 100,
          backgroundColor: Colors.BLUE,
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Text style={{color: Colors.WHITE, fontSize: 20, fontWeight: 'bold'}}>
          Pencet
        </Text>
      </TouchableOpacity>
      <ModalBottom show={showModal} onClose={() => setShowModal(false)} />
    </View>
  );
}

const styles = StyleSheet.create({
  header: {
    width: '100%',
    paddingHorizontal: 16,
    paddingVertical: 10,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    borderBottomColor: '#E4E7EB',
    borderBottomWidth: 1,
  },
  body: {
    width: '100%',
    backgroundColor: '#fff',
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
  radioCircle: {
    borderRadius: 16,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center',
    borderColor: Colors.BLUE,
    height: 16,
    width: 16,
  },
  selectedRb: {
    width: 6,
    height: 6,
    borderRadius: 6,
    backgroundColor: Colors.BLUE,
  },
});
