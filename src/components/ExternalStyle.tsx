import { View, Text, ScrollView, StatusBar } from 'react-native'
import styles from '../utils/style'
const ExternalStyle = () => {
  return (
    <ScrollView>
    <StatusBar backgroundColor={'#afadac'} />
    <View style={styles.container}>
        <View style={styles.firstViewStyle}></View>
        <View style={styles.secondViewStyle}></View>
        <View style={styles.thirdViewStyle}></View>
        <View style={styles.fourthViewStyle}></View>
    </View>
</ScrollView>
  )
}

export default ExternalStyle