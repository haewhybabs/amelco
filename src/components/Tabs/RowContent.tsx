import { View, Text,Pressable } from 'react-native'
import React from 'react'
import Texts from '../Texts'
import {styles} from './styles'
interface RowContentProps {
    checkNumberExist?:any
    handleClickNumber?:any
    item?:number
}
export default function RowContent({
    checkNumberExist,
    item,
    handleClickNumber
}:RowContentProps) {
  return (
    <Pressable style={checkNumberExist?styles.numberItem2:styles.numberItem} onPress={()=>handleClickNumber(item)}>
        <Texts style={styles.numberText}>{item}</Texts>
    </Pressable>
  )
}