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
    caixa:{
        backgroundColor: '#f0f0f0', // Cor de fundo da caixa
        padding: 22,
        borderRadius: 10, // Arredondamento das bordas da caixa
        shadowColor: '#000',
        shadowOffset: {
          width: 0,
          height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },

    alinhamento:{
        flexDirection: 'row',
        alignItems: 'center',
    },

    img_Perfil:{
        width: 80, // Tamanho menor para a imagem
        height: 80,
        borderRadius: 40, // Arredondamento para imagem circular
        marginRight: 10, // Espaçamento entre a imagem e o texto
    },
    nome_animais:{
        fontSize: 18,
        fontWeight: 'bold'
    },
    descricao_animais:{
        fontSize: 16
    },
    espaco:{
        padding: 40
    },



});

export default styles;