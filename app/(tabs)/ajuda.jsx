import React, { useEffect, useState } from 'react';
import { View, Image, Text, ImageBackground, Dimensions, ScrollView, ActivityIndicator } from 'react-native';
import styles from '../style/style_ajuda';
import dow1 from '@/assets/images/d1.png';

export default function TelaAdocao() {
  const [imagens, setImagens] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch('https://dog.ceo/api/breeds/image/random/8')
      .then(res => res.json())
      .then(data => {
        setImagens(data.message); // array com URLs das imagens
        setLoading(false);
      })
      .catch(() => setLoading(false));
  }, []);

  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color="#333" />
        <Text>Carregando imagens...</Text>
      </View>
    );
  }

  return (
    <ScrollView contentContainerStyle={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title1}>Ajuda</Text>
        <Image
          source={dow1}
          style={styles.perfil}
          href = "/cadastro"
        />
      </View>
      <View style={styles.espaco}></View>
      {/* Grid de imagens */}
      {Array.from({ length: 4 }).map((_, row) => (
        <View key={row} style={{ flexDirection: 'row', marginBottom: 16 }}>
          {[0, 1].map(col => {
            const idx = row * 2 + col;
            if (!imagens[idx]) return null;
            return (
              <View
                key={col}
                style={{
                  width: 194,
                  height: 150,
                  marginRight: col === 0 ? 16 : 0,
                  borderRadius: 12,
                  overflow: 'hidden',
                  backgroundColor: '#eee',
                }}
              >
                <ImageBackground
                  source={{ uri: imagens[idx] }}
                  style={{ flex: 1, justifyContent: 'flex-start' }}
                  imageStyle={{ resizeMode: 'cover' }}
                >
                  <View style={{
                    backgroundColor: 'rgba(0,0,0,0.5)',
                    paddingVertical: 8,
                    paddingHorizontal: 12,
                  }}>
                    <Text style={{
                      color: '#fff',
                      fontWeight: 'bold',
                      fontSize: 16,
                    }}>
                      Cachorro {idx + 1}
                    </Text>
                  </View>
                </ImageBackground>
              </View>
            );
          })}
        </View>
      ))}
    </ScrollView>
  );
}


