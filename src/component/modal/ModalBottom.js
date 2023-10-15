import React from 'react';
import {View, Modal, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {TextBold, TextRegular} from '../global/Text';
import {Colors} from '../../styles';
import Icon from 'react-native-vector-icons/AntDesign';

const ModalBottom = ({show, onClose, title = 'Status', children}) => {
  return (
    <Modal transparent visible={show} onRequestClose={onClose}>
      <View style={styles.container}>
        <View style={styles.body}>
          <View style={styles.header}>
            <TextBold text={title} color={Colors.BLACK} size={18} />
            <TouchableOpacity onPress={onClose}>
              <Icon name="close" size={18} />
            </TouchableOpacity>
          </View>
          {children}
        </View>
      </View>
    </Modal>
  );
};

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
    borderTopLeftRadius: 12,
    borderTopRightRadius: 12,
  },
  container: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.4)',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
  },
});

export default ModalBottom;
