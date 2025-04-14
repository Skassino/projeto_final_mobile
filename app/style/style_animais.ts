import { StyleSheet } from "react-native";


const styles = StyleSheet.create({

    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 20,
        backgroundColor: '#E5374B'
    },

    caixa:{
        backgroundColor: '#f0f0f0', // Cor de fundo da caixa
        padding: 20,
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