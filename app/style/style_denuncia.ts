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
}
});

export default styles;
