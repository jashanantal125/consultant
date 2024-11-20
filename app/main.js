import { Colors } from '@/constants/Colors';
import { StyleSheet } from 'react-native';
import { Dimensions } from 'react-native';


export const mainPageStyles = StyleSheet.create({

    mainContainer: {
       flex: 1,
       backgroundColor:Colors.secondary
    },

    topView:{
     backgroundColor:Colors.primary,
     height:50,
     marginBottom:10
    },

    container: {
        alignItems: 'center',
        justifyContent: 'center',
        marginTop:50,
        borderWidth:2,
        marginHorizontal:50,
        borderRadius:10,
        borderColor:Colors.primary
    },

    secondContainer: {
        flex: 1,
        backgroundColor: Colors.secondary,
        alignItems: 'center',
    },
    logo:{
        height:100, width:200, resizeMode:'contain'
    },
    titlecontainer:{
        alignItems:'center',
    },
    title: {
        fontSize: 28,
        fontWeight: '800',
        color:Colors.primary,
        padding:20,
        paddingHorizontal:30,

    },

    logintitle: {
        fontSize: 28,
        fontWeight:'700',
        color:Colors.tertiary,
        marginHorizontal:18
    },

    loginsubtitle: {
        fontSize: 16,
        fontWeight:'400',
        color:Colors.tertiary,
        marginHorizontal:18
    },

    firstChatContainer: {
        backgroundColor: Colors.secondary,
        marginTop:'10%',
        gap:12
    },

    phoneContainer: {
        borderColor: Colors.tertiary,
        borderWidth: 1,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        padding:12,
        marginHorizontal:20, 
        marginVertical:20
    },

    button: {
        backgroundColor: Colors.primary,
        borderRadius: 25,
        borderRadius: 22,
        shadowColor: 'red',
        width:'90%',
        marginTop:12,
    },

    textInButton: {
        color: Colors.secondary,
        fontSize: 16,
        fontWeight: 'bold',
        alignSelf:'center',
        padding:12,
    },

    whiteArrow: {
        width: '7%',
        position: 'relative',
        height: '4%',
        bottom: '33%',
        left: '32%',
    },

    bottomContain: {
        flexDirection: 'row',
        alignContent: 'center',
        alignItems: 'center',
    },

    numberHeading: {
        alignContent: 'center',
        textAlign: 'center',
        fontWeight: 'bold',
        fontSize: 18,
        color: Colors.secondary,
    },

    firstText2: {
        alignContent: 'center',
        textAlign: 'center',
        fontSize: 14,
        color:Colors.secondary,
    },

    secondText2: {
        width: 110,
        alignContent: 'center',
        textAlign: 'center',
        fontSize: 14,
        color: Colors.secondary,
    },

    thirdText2: {
        alignContent: 'center',
        textAlign: 'center',
        fontSize: 14,
        color:Colors.secondary,
    },

    line: {
        height: '100%',
        width: 1,
        backgroundColor: Colors.secondary,
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