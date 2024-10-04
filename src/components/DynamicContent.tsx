import { View, Text } from 'react-native'

const DynamicContent = () => {
  const username = "Cisco"
  const multiply = (a:number, b:number) => a * b
  return (
    <View>
      <Text>{username}</Text>
      <Text>2 * 3 = {2 * 3}</Text>
      <Text>2 * 3 = {multiply(2, 3)}</Text>
    </View>
  )
}

export default DynamicContent