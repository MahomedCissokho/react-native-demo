import { StyleSheet } from "react-native";

const externalStyle  = StyleSheet.create({

    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: '100%',
        height: '100%',
        flex: 1,
        gap: 10,
        flexWrap: 'wrap',
        paddingTop: 20,
    },
    firstViewStyle: {
        width : 200,
        height : 200,
        backgroundColor : 'red',
        borderWidth : 2,
        borderColor : 'black',
        borderRadius : 10,
        shadowColor: '#fff',
        shadowOffset: {
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
        elevation: 5,
    },
    secondViewStyle: {
        width : 200,
        height : 200,
        backgroundColor : 'blue',
        borderWidth : 2,
        borderColor : 'black',
        borderRadius : 10,
    },
    thirdViewStyle: {
        width : 200,
        height : 200,
        backgroundColor : 'green',
        borderWidth : 2,
        borderColor : 'black',
        borderRadius : 10,
    },
    fourthViewStyle: {
        width : 200,
        height : 200,
        backgroundColor : 'yellow',
        borderWidth : 2,
        borderColor : 'black',
        borderRadius : 10,
    }

})

export default externalStyle;

