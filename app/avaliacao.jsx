import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style/style_avaliacao';
import dow1 from '@/assets/images/d1.png'
import tis from '@/assets/images/tiste.jpg'
import pal from '@/assets/images/palmeirass.jpg'

// Array com 10 fotos e nomes
const fotos = [
  { imagem: pal, nome: 'Avaliação de Local', link: "https://sp156.prefeitura.sp.gov.br/portal/servicos/informacao?servico=812" },
  { imagem: tis, nome: 'Avaliação de Eutánasia', link: "https://sp156.prefeitura.sp.gov.br/portal/servicos/informacao?servico=805" },
]

const avaliacao = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Avaliação</Text>
        <Image
          source={dow1}
          style={styles.perfil}
          href='/cadastro'
        />
      </View>
      {/* Container com 2 colunas verticais */}
      <View style={styles.fotosContainer}>
        {fotos.map((item, index) => (
          <View key={index} style={styles.fotoItem}>
            <Image source={item.imagem} style={styles.perfil2} />
            <Text  href = {item.link} style={styles.nomeFoto}>{item.nome}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

export default avaliacao