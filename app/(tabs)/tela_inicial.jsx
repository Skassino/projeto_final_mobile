import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from '../style/style_tela_inicial'
import dow1 from '@/assets/images/d1.png'

const noticia = {
  titulo: "Animal de Grande Porte Solto",
  imagem: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEjdEHHQbjKRlYbk_UJssfzgkpEwYVry-ugWoxkui-siz8x-jRoQi3fFzafAgzG8wQkjOPifBP_zQvYq1v8Amm6_XlRxSoqLCg0Z5G9F3djHw3XMRruKYOkjWUSJ82ebnB5A8laPS9rdTxau/s1600/Ninja!.jpg",
  texto: "A Polícia Militar Ambiental capturou a onça-pintada, a força-tarefa contou com um pesquisador, dois guias e quatro policiais militares ambientais, que irão avaliar o animal e tentar esclarecer os fatos."
};

const campanha = {
  titulo: "Vacinação Contra Raiva Animal",
  imagem: "https://www.veterinaria-atual.pt/wp-content/uploads/sites/4/2016/12/c%C3%A3o-a-ser-vacinado-Veterin%C3%A1ria-Atual.jpg",
  texto: "O município de São Paulo oferece vacinação contra raiva para cães e gatos em Posto Permanente na Divisão de Vigilância de Zoonoses e outros disponibilizados na UVIS. "
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
        <Text style={styles.portalTitulo}>{campanha.titulo}</Text>
        <Image
          source={{ uri: campanha.imagem }}
          style={styles.portalImagem}
        />
        <Text style={styles.portalTexto}>{campanha.texto}</Text>
      </View>
    </View>
  )
}

export default tela_inicial