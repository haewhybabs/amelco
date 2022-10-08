import { View, Text,StyleSheet,Pressable } from 'react-native'
import React from 'react'
import Texts from '../Texts'
import { black, textColor, white } from '../../constants/colors'
interface HeaderProps {
    indexHeader?:any,
    indexValue?:number
    setIndexValue?:any

}
export default function Tabs({
    indexHeader,
    indexValue,
    setIndexValue

}:HeaderProps) {
  return (
    <View style={styles.indexWrapper}>
        {
            indexHeader.map((item:any,index:number)=>(
                <Pressable 
                style={item.id==indexValue?styles.indexItemWrapper:styles.indexItemWrapper2}
                onPress={()=>{
                    setIndexValue(item.id)
                }}
                key={index}
                >
                    <Texts style={item.id==indexValue?styles.indexText:styles.indexText2}>{item.name}</Texts>
                </Pressable>
            ))
        }
    </View>
  )
}

export const styles = StyleSheet.create({
    subText:{
        color:textColor,
        fontSize:13,
        alignSelf:'center'
    },
    indexWrapper:{
        backgroundColor:white,
        alignSelf:'center',
        height:40,
        marginTop:20,
        borderRadius:8,
        flexDirection:'row',
        alignItems:'center'
        
    },
    indexItemWrapper:{
        width:'50%',
        height:35,
        borderRadius:4,
        backgroundColor:black,
        alignItems:'center',
        justifyContent:'center'

    },
    indexItemWrapper2:{
        width:'50%',
        height:35,
        backgroundColor:white,
        alignItems:'center',
        justifyContent:'center'

    },
    indexText:{
        color:white,
        fontSize:14
    },
    indexText2:{
        color:black,
        fontSize:14
    },
})