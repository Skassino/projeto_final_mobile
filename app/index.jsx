import React from 'react';
import { View, Image, Text} from 'react-native';
import logoPreto from '@/assets/images/logo-preto.png';
import styles from './style/style_index';
import { Link } from 'expo-router'

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
      <Link href="/(tabs)/tela_inicial" style={{padding: 20,paddingTop: 40,paddingBottom: 40,fontSize: 50, fontWeight: 'bold', color: 'white', textAlign: "center", backgroundColor: "rgba(0,0,0, 0.5)", borderRadius: 40}}>Comece aqui</Link>
    </View>
  );
};

export default Index;


