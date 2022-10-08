import { View,StyleSheet,StatusBar,Image } from 'react-native'
import React from 'react'
import { textColor, white } from '../../constants/colors'
import Texts from '../Texts'
interface HeaderProps {
    title?:any
    style?:any
}
export default function Header({
    title,
}:HeaderProps) {
  return (
    <View style={styles.wrapper}>
        <StatusBar backgroundColor={white} barStyle="dark-content" />
        <View style={styles.container}>
            <View>
                <Image source={require('../../assets/images/chevron-left.png')} style={styles.iconImage}/>
            </View>
            <Texts style={styles.titleText}>{title}</Texts>
            <View>
                <Image source={require('../../assets/images/settings.png')} style={styles.iconImage}/>
            </View>
        </View>
      
    </View>
  )
}
const styles = StyleSheet.create({
    wrapper:{
        backgroundColor:white,
        padding:20
    },
    container:{
        flexDirection:'row',
        justifyContent:'space-between',
    },
    iconImage:{
        height:30,
        width:30,
    },
    titleText:{
        paddingTop:5,
        fontSize:16,
        color:textColor,
        fontWeight:'bold'
    }
})