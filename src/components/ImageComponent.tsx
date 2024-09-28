import { View, Text, Image } from 'react-native'

const ImageComponent = () => {
  return (
    <View>
      <Text>Let's explore Image Now</Text>
      <View>
        <Image 
          source={require('../assets/pp.jpg')}
          style={{ width: 200, height: 200 }}
        />
      </View>
      <View>
        <Image 
          source={{uri : 'https://reactnative.dev/img/tiny_logo.png'}}
          style={{ width: 200, height: 200 }}
          />

      </View>
    </View>
  )
}

export default ImageComponent