import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';


export const mainPageStyles = StyleSheet.create({

    mainContainer: {
       flex: 1,
    },

    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: '#4CAF50',
    },

    secondContainer: {
        flex: 1,
        backgroundColor: '#4CAF50',
        alignItems: 'center',
    },
    titlecontainer:{
        backgroundColor:'',
        borderRadius:20,
        borderWidth:4,
        borderColor:'white',
        alignItems:'center',
    },
    title: {
        fontSize: 28,
        fontWeight: '800',
        color:'white',
        padding:20,
        paddingHorizontal:30,

    },

    logintitle: {
        fontSize: 24,
        fontWeight:'700',
        color:'white',
        marginHorizontal:14
    },

    loginsubtitle: {
        fontSize: 18,
        fontWeight:'400',
        color:'white',
        margin:14
    },

    firstChatContainer: {
        backgroundColor: '#4CAF50',
    },

    phoneContainer: {
        borderColor: 'white',
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding:12,
        marginHorizontal:20, 
        marginBottom:20
    },
    logo:{
        height:80,
        width:80,
        marginTop:12
    },

    button: {
        backgroundColor: 'black',
        borderRadius: 25,
        borderWidth: 1,
        borderRadius: 10,
        shadowColor: 'red',
        width:'90%'
    },

    textInButton: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf:'center',
        padding:8,
    },

    whiteArrow: {
        width: '7%',
        position: 'relative',
        height: '4%',
        bottom: '33%',
        left: '32%',
    },

    bottomContain: {
        height: '10%',
        position: 'absolute',
        display: 'flex-end',
        flexDirection: 'row',
        top: '80%',
        width: '20%',
        left: '10%',
        alignContent: 'center',
        alignItems: 'center',
    },

    numberHeading: {
        alignContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        color: 'white',
    },

    firstText2: {
        alignContent: 'center',
        textAlign: 'center',
        fontSize: 14,
        color: 'white',
    },

    secondText2: {
        width: 110,
        alignContent: 'center',
        textAlign: 'center',
        fontSize: 14,
        color: 'white',
    },

    thirdText2: {
        alignContent: 'center',
        textAlign: 'center',
        fontSize: 14,
        color: 'white',
    },

    line: {
        height: '100%',
        width: 1,
        backgroundColor: 'white',
        marginHorizontal: 15,
    },
    flag: {
        width: 40,
        height: 35,
        borderRadius: 6,
    },

    formButton: {
        opacity: 0,
    }
})