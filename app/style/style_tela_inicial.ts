import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f0f0',
  },
  header: {
    backgroundColor: '#E5374B',
    padding: 32,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    width: '120%',
  },
  title: {
    fontSize: 24,
    color: '#fff',
    fontWeight: 'bold',
     backgroundColor: '#E5374B',
  },
  perfil:{
    width: 72, // Tamanho menor para a imagem
    height: 72,
    borderRadius: 40, // Arredondamento para imagem circular
    marginRight: 10, // Espaçamento entre a imagem e o texto;
    position: 'absolute',
    right: 100,
    top: 10
},
portalContainer: {
  marginTop: 30,
  backgroundColor: '#f9f9f9',
  padding: 16,
  borderRadius: 12,
  alignItems: 'center',
  shadowColor: '#000',
  shadowOpacity: 0.08,
  shadowRadius: 8,
  elevation: 3,
},
portalTitulo: {
  fontSize: 22,
  fontWeight: 'bold',
  marginBottom: 12,
  textAlign: 'center',
},
portalImagem: {
  width: '100%',
  height: 180,
  borderRadius: 8,
  marginBottom: 12,
},
portalTexto: {
  fontSize: 16,
  color: '#444',
  textAlign: 'justify',
},
});

export default styles;
