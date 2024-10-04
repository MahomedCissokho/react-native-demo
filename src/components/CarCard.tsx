import { View, Text, Image, Pressable } from 'react-native'

const CarCard = () => {
  const car = {
    price : 250000,
    name : "Toyota",
    rating : 4.5,
    image : require('../assets/image.png'),
    description : "Here is some random car description"
  }
  return (
    <View>
      <Text style={{fontSize:20, marginBottom: 10, fontWeight: 'semibold', backgroundColor:'#000', color:'#fff', width:200, textAlign: 'center', padding:10, borderRadius:7}}>$ {car.price}</Text>
      <Image
        source={car.image}
        style={{ width: 200, height: 200, position: 'relative'}}
        resizeMode='contain'
        borderRadius={10}
      />
      <View style={{width: 200, marginVertical: 10, flexDirection: 'row', justifyContent: 'space-between'}}>
        <Text>{car.name}</Text>
        <Text>{car.rating}</Text>
      </View>
      <Text style={{fontSize:16, fontWeight: '300', color:'#333', width: 200, }}>{car.description}</Text>
      <Pressable style={{marginTop: 10}}>
        <Text style={{fontSize:20, fontWeight: 'semibold', backgroundColor:'#ddd', width:200, textAlign: 'center', padding:10, borderRadius:7}}>Buy</Text>
      </Pressable>
    </View>
  )
}

export default CarCard