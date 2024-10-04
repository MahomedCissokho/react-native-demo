import { View, Text, StyleSheet, ScrollView, StatusBar } from 'react-native'

const InternalStyle = () => {
  return (
    <ScrollView>
        <StatusBar backgroundColor={'#000'} />
        <View style={styles.container}>
            <View style={styles.firstViewStyle}></View>
            <View style={styles.secondViewStyle}></View>
            <View style={styles.thirdViewStyle}></View>
            <View style={styles.fourthViewStyle}></View>
        </View>
    </ScrollView>
  )
}

export default InternalStyle

const styles  = StyleSheet.create({
    container: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'center',
        backgroundColor: 'orange',
        width: '100%',
        height: '100%',
        flex: 1,
        gap: 10,
        paddingTop: 20,
    },
    firstViewStyle: {
        width : 200,
        height : 200,
        backgroundColor : 'red',
        borderWidth : 2,
        borderColor : 'black',
        borderRadius : 10,
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