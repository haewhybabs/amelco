import React from "react";
import {Text,StyleSheet,Platform} from "react-native";
import { black, textColor } from "../../constants/colors";
interface TextsProps{
  children?:any,
  style?:any,
  medium?:any,
  bold?:any,
  regular?:any
}
export default function Texts({
  children,
  style,
  medium,
  bold,
  regular,
}:TextsProps) {
  
    return (
        <Text
          style={{...styles.text,...style,
            fontFamily: medium
            ? "Roboto-Medium"
            : bold
            ? "Roboto-Bold"
            : regular
            ? "Roboto-Regular"
            : "Roboto-Regular"}}>
          {children}
        </Text>
      );
}
const stylesByPlatform = Platform.select({
    ios: { fontFamily: 'Roboto' },
    android: { },
})
const styles= StyleSheet.create({
    text: {
        ...stylesByPlatform,
        color:textColor
    },
})