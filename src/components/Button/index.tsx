import {View,StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import Texts from '../Texts'
import { purple, white } from '../../constants/colors'
interface ButtonProps{
    style?:any,
    onPress?:any
    title?:string
    disabled?:boolean

}
export default function Button({
    style,
    onPress,
    title,
    disabled
}:ButtonProps) {
  return (
    <>
        {
            disabled?
            <View style={{...styles.buttonWrapper,...style,opacity:0.6}}>
                <Texts style={styles.buttonText}>{title}</Texts>
            </View>
            :
            <TouchableOpacity style={{...styles.buttonWrapper,...style}} onPress={onPress}>
                <Texts style={styles.buttonText}>{title}</Texts>
            </TouchableOpacity>
        }
    </>
  )
}

export const styles = StyleSheet.create({
    buttonWrapper:{
        width:100,
        height:45,
        backgroundColor:purple,
        borderRadius:8,
        justifyContent:'center',
        alignItems:'center'
    },
    buttonText:{
        color:white,
        fontSize:15,
        fontWeight:'bold'
    },
})