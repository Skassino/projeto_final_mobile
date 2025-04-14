import React from 'react';
import { View, Image, Text, TouchableOpacity} from 'react-native';
import logoPreto from '@/assets/images/logo-preto.png';
import styles from '../style/style_index';

const Index = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <Image source={logoPreto} style={styles.image} resizeMode="contain"/>
      <View style={styles.titleContainer}>
      <Text style={styles.title}>Controle de Zoonozes Taboão da Serra</Text>
      </View>
      <Text style={styles.description}>
        O Centro de Controle de Zoonoses, CCZ, de Taboão da Serra é responsável pela realização da vigilância e controle de doenças que podem ser transmitidas dos animais para a população humana, e pelo controle das populações animais existentes na cidade.
      </Text>
      <TouchableOpacity style={styles.button} onPress={() => navigation.navigate('OutraPagina')}>
        <Text style={styles.buttonText}>Comece aqui</Text>
      </TouchableOpacity>
    </View>
  );
};

export default Index;


