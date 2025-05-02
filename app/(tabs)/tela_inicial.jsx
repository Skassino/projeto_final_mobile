import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from '../style/style_tela_inicial'
import dow1 from '@/assets/images/d1.png'

const noticia = {
  titulo: "Novidades no Mundo da Tecnologia",
  imagem: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?auto=format&fit=crop&w=800&q=80",
  texto: "Acompanhe as últimas tendências e inovações que estão transformando o setor tecnológico. Descubra novidades sobre inteligência artificial, gadgets, startups e muito mais!"
};

const tela_inicial = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Home</Text>
        <Image
          source={dow1}
          style={styles.perfil}
          href='/cadastro'
        />
      </View>

      {/* Portal de Notícias */}
      <View style={styles.portalContainer}>
        <Text style={styles.portalTitulo}>{noticia.titulo}</Text>
        <Image
          source={{ uri: noticia.imagem }}
          style={styles.portalImagem}
        />
        <Text style={styles.portalTexto}>{noticia.texto}</Text>
      </View>
      <View style={styles.portalContainer}>
        <Text style={styles.portalTitulo}>{noticia.titulo}</Text>
        <Image
          source={{ uri: noticia.imagem }}
          style={styles.portalImagem}
        />
        <Text style={styles.portalTexto}>{noticia.texto}</Text>
      </View>
    </View>
  )
}

export default tela_inicial