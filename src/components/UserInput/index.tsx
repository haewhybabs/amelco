import { View,TextInput,StyleSheet } from 'react-native'
import React from 'react'
import { black } from '../../constants/colors'
interface InputProps{
    style?:any
    onChangeText?:any,
    value?:any,
    placeholder?:string,
    keyboardType?:any
}
export default function UserInput({
    style,
    onChangeText,
    value,
    placeholder,
    keyboardType
}:InputProps) {
  return (
    
    <TextInput style = {{...styles.input,...style}}
          placeholder = {placeholder}
          autoCapitalize = "none"
          value={value}
          onChangeText={onChangeText}
          keyboardType={keyboardType?keyboardType:'default'}
      />
    
  )
}
const styles = StyleSheet.create({
    input:{
        borderRadius:13,
        borderWidth:0,
        height:64,
        backgroundColor:'#F7F7FC',
        paddingLeft:10,
        fontSize:16,
        color:black
    },
})