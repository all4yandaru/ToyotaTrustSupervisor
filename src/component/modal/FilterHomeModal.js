import React from 'react';
import {View, Modal, StyleSheet, TouchableOpacity, Image} from 'react-native';
import {TextBold, TextMedium, TextRegular} from '../global/Text';
import {Colors} from '../../styles';
import Icon from 'react-native-vector-icons/AntDesign';
import {useState, useMemo} from 'react';
import RadioGroup from 'react-native-radio-buttons-group';

const ModalBottom = ({show, onClose, title = 'Filter', children}) => {
  const radioButtons = useMemo(
    () => [
      {
        id: 1,
        label: 'A - Z',
        value: 'option1',
      },
      {
        id: 2,
        label: 'Z - A',
        value: 'option2',
      },
      {
        id: 3,
        label: 'Terbaru',
        value: 'option3',
      },
      {
        id: 4,
        label: 'Terlama',
        value: 'option4',
      },
      {
        id: 5,
        label: 'Salesman',
        value: 'option5',
      },
    ],
    [],
  );

  const [selectedId, setSelectedId] = useState();

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
          <RadioGroup
            radioButtons={radioButtons}
            onPress={setSelectedId}
            selectedId={selectedId}
            layout="column"
          />
          <TouchableOpacity
            style={{
              backgroundColor: Colors.BLUE,
              height: 40,
              justifyContent: 'center',
              alignItems: 'center',
              width: '90%',
              alignSelf: 'center',
              margin: 15,
              borderRadius: 6,
            }}>
            <TextMedium text="SIMPAN" color={Colors.WHITE} />
          </TouchableOpacity>
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
