import { View, Text, ScrollView, StatusBar } from "react-native";

const InternalStyle = () => {
  return (
    <ScrollView >
      <View
        style={{
          backgroundColor: "#24292e",
          flexDirection: "column",
          width: "100%",
          height: "100%",
          flex: 1,
        }}
      >
        <View
          style={{
            width: 200,
            height: 200,
            backgroundColor: "teal",
            marginVertical: 10,
            borderWidth: 10,
            borderColor: "#ddd",
            borderRadius: 10,
          }}
        ></View>
        <View
          style={{
            width: 200,
            height: 200,
            backgroundColor: "orange",
            margin: 10,
            borderWidth: 10,
            borderColor: "violet",
            borderRadius: 10,
          }}
        ></View>
        <View
          style={{
            width: 200,
            height: 200,
            backgroundColor: "brown",
            margin: 10,
            borderWidth: 10,
            borderColor: "blue",
            borderRadius: 10,
          }}
        ></View>
        <View
          style={{
            width: 200,
            height: 200,
            backgroundColor: "#fda",
            margin: 10,
            borderWidth: 10,
            borderColor: "yellow",
            borderRadius: 10,
          }}
        ></View>
      </View>
      <StatusBar backgroundColor='#2b3137'/>
    </ScrollView>
  );
};

export default InternalStyle;
