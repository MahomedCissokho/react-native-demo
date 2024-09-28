import { View, Text, Image, Pressable } from 'react-native'

const Card = () => {
  return (
    <View style={{width:'100%', height:'100%', display: 'flex', alignItems:'center', flexDirection: 'column', justifyContent: 'center', gap:20}}>
      <Image
        source={require('../assets/pp.jpg')}
        style={{ width: 200, height: 200, borderRadius:100 }}
      />
      <Text style={{fontSize:20, fontWeight: 'bold'}}>Profile</Text>
      <Text>My Name is Mahomed CISSOKHO</Text>
      <Pressable onPress={() => alert("Good job Cisco !")}>
        <Text style={{fontSize:20, fontWeight: 'semibold', backgroundColor:'#ddd', width:200, textAlign: 'center', padding:10, borderRadius:7}}>See Profile</Text>
      </Pressable>
    </View>
  )
}

export default Card