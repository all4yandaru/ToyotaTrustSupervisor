import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Profil from '../screen/Profil';
import {useNavigation} from '@react-navigation/native';
import CekHargaKendaraanComponent from '../component/section/profil/CekHargaKendaraanComponent';
import HasilCekHargaComponent from '../component/section/profil/HasilCekHargaComponent';
import EditDataDiri from '../component/section/profil/EditDataDiriComponent';
import EditDataRekening from '../component/section/profil/EditDataRekeningComponent';
import EditDokumen from '../component/section/profil/EditDokumenComponent';

const Stack = createStackNavigator();
const ProfilRouting = ({}) => {
  const navigation = useNavigation();
  return (
    <Stack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName="ProfilScreen">
      <Stack.Screen name="ProfilScreen" component={Profil} />
      <Stack.Screen
        name="CekHargaKendaraan"
        component={CekHargaKendaraanComponent}
      />
      <Stack.Screen name="HasilCekHarga" component={HasilCekHargaComponent} />
      <Stack.Screen name="EditDataDiri" component={EditDataDiri} />
      <Stack.Screen name="EditDataRekening" component={EditDataRekening} />
      <Stack.Screen name="EditDokumen" component={EditDokumen} />
    </Stack.Navigator>
  );
};

export default ProfilRouting;
