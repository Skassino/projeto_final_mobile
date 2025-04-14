import React from 'react';
import { View, Text, ScrollView } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import styles from '../style/style_suporte';

const Suporte = () => {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.title}>Suporte</Text>
      </View>

      <View style={styles.content}>
        <Text style={styles.subtitle}>Contato</Text>
        <Text style={styles.info}>
          Para obter ajuda ou relatar problemas, entre em contato conosco:
        </Text>
        <Text style={styles.contactInfo}>
          E-mail: suporte@exemplo.com
        </Text>
        <Text style={styles.contactInfo}>
          Telefone: +55 (11) 1234-5678
        </Text>

        <Text style={styles.subtitle} style={{ marginTop: 20 }}>
          Horário de Atendimento
        </Text>
        <Text style={styles.info}>
          Segunda a Sexta-feira: 09h00 às 18h00
        </Text>

        <Text style={styles.subtitle} style={{ marginTop: 20 }}>
          Localização
        </Text>
        <Text style={styles.info}>
          Rua Exemplo, 123 - São Paulo, SP
        </Text>

        <TouchableOpacity style={styles.button}>
          <Text style={styles.buttonText}>Abrir Ticket de Suporte</Text>
        </TouchableOpacity>

        <Text style={styles.info} style={{ marginTop: 20 }}>
          Agradecemos sua paciência e cooperação. Estamos aqui para ajudar!
        </Text>
      </View>
    </ScrollView>
  );
};

export default Suporte;
