import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style/style_denuncia';
import dow1 from '@/assets/images/d1.png'
import abe from '@/assets/images/abelha.jpg'
import pom from '@/assets/images/pombo gover.jpg'
import ara from '@/assets/images/aranha.jpg'
import pat from '@/assets/images/patofoda.jpg'
import pal from '@/assets/images/palmeirass.jpg'
import pik from '@/assets/images/pikapenis.jpg'
import cob from '@/assets/images/cobra.jpg'
import esc from '@/assets/images/scropion.jpg'
import bat from '@/assets/images/batman.jpg'
import cri from '@/assets/images/malstratos.jpg'


// Array com 10 fotos e nomes
const fotos = [
  { imagem: esc, nome: 'Escorpião', link: "https://sp156.prefeitura.sp.gov.br/portal/servicos/informacao?servico=813"},
  { imagem: pom, nome: 'Pombos', link: "https://sp156.prefeitura.sp.gov.br/portal/servicos/informacao?servico=816"},
  { imagem: pik, nome: 'Ratos', link: "https://sp156.prefeitura.sp.gov.br/portal/servicos/informacao?servico=814"},
  { imagem: cob, nome: 'Cobras', link: ".../" },
  { imagem: ara, nome: 'Aranhas', link: ".../" },
  { imagem: bat, nome: 'Morcegos', link: "https://sp156.prefeitura.sp.gov.br/portal/servicos/informacao?servico=815"},
  { imagem: abe, nome: 'Colmeias', link: "https://sp156.prefeitura.sp.gov.br/portal/servicos/informacao?servico=811" },
  { imagem: pal, nome: 'Foco Mosquito', link: "https://sp156.prefeitura.sp.gov.br/portal/servicos/informacao?servico=812" },
  { imagem: cri, nome: 'Criação Inadequada', link: "https://sp156.prefeitura.sp.gov.br/portal/servicos/informacao?servico=809" },
  { imagem: pat, nome: 'Animal agressor', link: "https://sp156.prefeitura.sp.gov.br/portal/servicos/informacao?t=&a=NjE4&servico=808" },
]

const denuncia = () => {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Denuncia</Text>
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
            <Text href = {item.link} style={styles.nomeFoto}>{item.nome}</Text>
          </View>
        ))}
      </View>
    </View>
  )
}

export default denuncia