import React from "react";
import {Text,StyleSheet} from "react-native";
import {textColor } from "../../constants/colors";
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
}:TextsProps) {
  
    return (
        <Text
          style={{...styles.text,...style}}>
          {children}
        </Text>
      );
}
const styles= StyleSheet.create({
    text: {
      color:textColor
    },
})