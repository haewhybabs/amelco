import React from 'react'
import { View, Text,Image,StyleSheet} from 'react-native'
import Texts from '../../components/Texts';
import { white } from '../../constants/colors';
interface SplashProps{
    route?:any
    navigation?:any
}
export default function Splash({navigation,route}:SplashProps) {
    React.useEffect(()=>{
        setTimeout(() => {
            navigation.navigate('AppStack')
        }, 3000);
    })
    return (
        <View style={styles.container}>
            <Image source={require('../../assets/images/logo.png')} style={styles.logoWrapper}/>
        </View>
    )
}
const styles=StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:white,
        justifyContent:'center',
        alignItems:'center'
    },
    logoWrapper:{
        height:250,
        width:250,
        resizeMode:'contain'
    }
})