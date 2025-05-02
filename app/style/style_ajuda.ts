import { StyleSheet } from "react-native";


const styles = StyleSheet.create({
  container: {
    flex: 1,
    textAlign: "center",
    justifyContent: 'center'
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
  title1: {
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
  backgroundImage: {
    position: 'absolute',
    top: 98,
    left: 0,
    width: '100%',
    height: 200, // Ajuste a altura da imagem
    resizeMode: 'cover',
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 200, // Ajuste para compensar a altura da imagem
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
    textAlign: "center",
  },
  button: {
    backgroundColor: '#4CAF50', // Verde
    paddingVertical: 12,
    paddingHorizontal: 40,
    borderRadius: 8,
  },
  buttonText: {
    fontSize: 18,
    color: '#FFFFFF',
    fontWeight: 'bold',
  },
});

export default styles;
