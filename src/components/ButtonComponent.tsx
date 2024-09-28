import { View, Text, TouchableOpacity, Pressable, Button } from 'react-native'

const ButtonComponent = () => {
  return (
    <View>
      <Button title="Press me with Button" color='crimson' onPress={() => console.log("Press me with Button")} />
      <TouchableOpacity onPress={()=> console.log("Press me with TouchableOpacity")}>
        <Text style={{backgroundColor: '#000', color:'#fff'}}>Press TO</Text>
      </TouchableOpacity>
      <Pressable onPress={() => console.log("Press me with Pressable OnPress")}>
        <Text style={{backgroundColor: '#ccc', color:'#fff'}}>Press me</Text>
      </Pressable>
      <Pressable onPressIn={() => console.log("Press me with Pressable OnPressIn")}>
        <Text style={{backgroundColor: '#fad', color:'#fff'}}>Press me</Text>
      </Pressable>
      <Pressable onPressOut={() => console.log("Press me with Pressable OnPressOut")}>
        <Text style={{backgroundColor: '#bae', color:'#fff'}}>Press me</Text>
      </Pressable>
      <Pressable onLongPress={() => console.log("Press me with Pressable OnLongPress")}>
        <Text style={{backgroundColor: '#ca0', color:'#fff'}}>Press me</Text>
      </Pressable>
    </View>
  )
}

export default ButtonComponent