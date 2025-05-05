import { View, Text, Image } from 'react-native'
import React from 'react'
import styles from './style/style_denuncia';
import dow1 from '@/assets/images/d1.png'

const denuncia = () => {
  return (
    <View style= {styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Denuncia</Text>
        <Image
        source={dow1}
        style={styles.perfil}
        href='/cadastro'
      />
      </View>
    </View>
  )
}

export default denuncia