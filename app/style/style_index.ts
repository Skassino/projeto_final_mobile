import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#E5374B',
    padding: 20,
  },
  titleContainer: { // Novo estilo para o container do título
    backgroundColor: 'white',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 10,
    width: '120%', // Ajuste a largura conforme necessário
    marginBottom: 20,
    shadowColor: 'black',
    shadowOffset: { width: 0, height: 5 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
  },
  title: {
    fontSize: 36,
    fontWeight: '900',
    color: 'black', // Troquei para a cor original
    textAlign: 'center',

  },
  image: {
    width: 300,
    height: 64,
    marginBottom: 20,
    position: "absolute",
    top: 40,
  },
  description: {
    paddingTop: 50,
    fontSize: 22,
    color: 'black', 
    textAlign: 'center',
    marginBottom: 30,
    fontWeight: '500',
    backgroundColor: "rgba(255, 255, 255, 0.4)",
    paddingBottom: 50,
    borderRadius: 40
  },
  button: {
    backgroundColor: 'white',
    paddingVertical: 15,
    paddingHorizontal: 40,
    borderRadius: 90,
    position: 'absolute',
    bottom: 80,
    width: 220,
    height: 100
  },
  buttonText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#E5374B', 
  },
});

export default styles;
