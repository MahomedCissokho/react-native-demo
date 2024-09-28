import { View } from "react-native";
import Greet from "../components/Greet";
import Age from "../components/Age";
import Handle from "../components/Handle";
import Subject from "../components/Subject";
import ButtonComponent from "../components/ButtonComponent";
import ImageComponent from "../components/ImageComponent";

const Index = () => {
  return (
    <View>
      <Greet />
      <Age />
      <Handle />
      <Subject />
      <ButtonComponent/>
      <ImageComponent/>
    </View>
  );
};

export default Index;
