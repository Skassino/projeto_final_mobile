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
  content: {
    padding: 20,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 5,
  },
  info: {
    fontSize: 16,
    marginBottom: 10,
  },
  contactInfo: {
    fontSize: 16,
    color: '#666',
    marginBottom: 5,
  },
  button: {
    backgroundColor: '#E5374B',
    padding: 10,
    borderRadius: 5,
    marginTop: 20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  buttonText: {
    fontSize: 16,
    color: '#fff',
  },
});

export default styles;