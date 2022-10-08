import React from "react";
import { View } from "react-native";
import { textColor,} from "../../constants/colors";
import { width } from "../../constants/dimension";
interface DivdierProps{
    style?:any
}
const Divider = ({style}:DivdierProps) => (
  <View style={{
    height: 0.5,
    opacity: 1,
    backgroundColor: textColor,
    marginVertical:25,...style
  }}/>
);

export default Divider;