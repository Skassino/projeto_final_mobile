import React from 'react';
import { View, Text, Image } from 'react-native';
import dow1 from "@/assets/images/d1.png";
import bate from "@/assets/images/bater-papo.png"
import contrato from "@/assets/images/contrato.png"
import excluir from "@/assets/images/excluir.png"
import ponto from "@/assets/images/ponto-de-exclamacao.png"
import vacina from "@/assets/images/vacina.png"
import styles from '../style/style_animais';

const Adocao = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Serviços</Text>
        <Image
        source={dow1}
        style={styles.perfil}
        href='/cadastro'
        />
      </View>
    <View style={styles.caixaTitulo} href = "/cadastro">
    <Image
          source={vacina}
          style={styles.imagemTitulo}
    />
    <Text style={styles.textoTitulo}>Informações de Vacinação</Text>
    </View>
    <View style={styles.espaco}></View>
    <View style={styles.caixaTitulo} href = "/cadastro">
    <Image
          source={contrato}
          style={styles.imagemTitulo}
    />
    <Text style={styles.textoTitulo}>Informações sobre Enviar animais para identificação</Text>
    </View>
    <View style={styles.espaco}></View>
    <View style={styles.caixaTitulo} href = "/cadastro">
    <Image
          source={excluir}
          style={styles.imagemTitulo}
    />
    <Text style={styles.textoTitulo}>Denunciar Local</Text>
    </View>
    <View style={styles.espaco}></View>
    <View style={styles.caixaTitulo} href = "/cadastro">
    <Image
          source={bate}
          style={styles.imagemTitulo}
    />
    <Text style={styles.textoTitulo}>Solicitar Avaliação</Text>
    </View>
    <View style={styles.espaco}></View>
    <View style={styles.caixaTitulo} href = "/cadastro">
    <Image
          source={ponto}
          style={styles.imagemTitulo}
    />
    <Text style={styles.textoTitulo}>Solicitar Remoção - Animal Grande Porte</Text>
    </View>
    </View>
  );
};

export default Adocao;
