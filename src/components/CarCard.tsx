import { View, Text } from 'react-native'

const CarCard = () => {
  const car = {
    price : 250000,
    name : "Toyota",
    rating : 4.5,
    image : require('../assets/pp.jpg'),
    description : "Here is some random car description"
  }
  return (
    <View>
      <Text>CarCard</Text>
    </View>
  )
}

export default CarCard