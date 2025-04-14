import React from 'react';
import { View, Text, Image } from 'react-native';
import dow1 from "@/assets/images/d1.png";
import dow2 from "@/assets/images/d2.png";
import dow3 from "@/assets/images/d3.jpg";
import styles from '../style/style_animais';

const Adocao = () => {
  return (
    <View style={styles.container}>
      <View style={styles.caixa}>
        <View style={styles.alinhamento}>
          <Image 
            source={dow1} 
            style={styles.img_Perfil}
          />
          <View>
            <Text style={styles.nome_animais}>REX 🚀</Text>
            <Text style={styles.descricao_animais}>Eu sou um cachorro muito carinhoso.</Text>
          </View>
        </View>
      </View>
      <View style={styles.espaco}></View>
      <View style={styles.caixa}>
        <View style={styles.alinhamento}>
          <Image 
            source={dow2} 
            style={styles.img_Perfil}
          />
          <View>
            <Text style={styles.nome_animais}>Mingual 🍼</Text>
            <Text style={styles.descricao_animais}>Eu sou um gato muito dorminhoco.</Text>
          </View>
        </View>
      </View>
      <View style={styles.descricao_animais}></View>
      <View style={styles.caixa}>
        <View style={styles.alinhamento}>
          <Image 
            source={dow3} 
            style={styles.img_Perfil}
          />
          <View>
            <Text style={styles.nome_animais}>BUFUS 😎🥶🤠🧐</Text>
            <Text style={styles.descricao_animais}>BUFUS BUFUS BUFUS BUFUS BUFUS</Text>
            <Text style={styles.descricao_animais}>BUFUS BUFUS BUFUS BUFUS BUFUS </Text>
            <Text style={styles.descricao_animais}>BUFUS BUFUS BUFUS BUFUS BUFUS </Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default Adocao;
