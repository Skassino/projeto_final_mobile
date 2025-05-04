import { StyleSheet } from "react-native";


const styles = StyleSheet.create({

    container:{
        flex: 1,
        backgroundColor: '#E5374B',
    },
    header: {
        backgroundColor: '#fff',
        padding: 32,
        shadowColor: 'black',
        shadowOffset: { width: 0, height: 5 },
        shadowOpacity: 0.2,
        shadowRadius: 5,
        width: '120%',
      },
      title: {
        fontSize: 24,
        color: '#E5374B',
        fontWeight: 'bold',
         backgroundColor: '#fff',
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
    caixaTitulo: {
        flexDirection: 'row',      // Imagem e texto lado a lado
        alignItems: 'center',      // Centraliza verticalmente
        backgroundColor: '#fff',   // Cor de fundo da caixa
        padding: 16,
        marginTop: 24,
        shadowColor: "#000",
        shadowOffset: { width: 0, height: 2 },
        shadowOpacity: 0.1,
        shadowRadius: 4,
        elevation: 3,              // Sombra no Android
      },
      imagemTitulo: {
        width: 60,
        height: 60,
        marginRight: 12,
      },
      textoTitulo: {
        fontSize: 18,
        fontWeight: 'bold',
        color: '#333',
      },
      espaco:{
        padding: 14
    },
});

export default styles;