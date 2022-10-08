import React from 'react'
import { View,TouchableOpacity,ActivityIndicator, StyleSheet } from 'react-native'
import Texts from '../Texts';
import { lightGrey, white } from '../../constants/colors';
interface ActionButtonProps {
    title?:string,
    style?:any,
    onPress?:any,
    disabled?:boolean,
    loading?:boolean,
    textStyle?:any,

}
export default function ActionButton({title,style,onPress,disabled,loading,textStyle}:ActionButtonProps) {
    const renderButtonContent = ()=>{
        return(
            <>
                <Texts style={{...styles.defaultButtonText,...textStyle}}>{title}</Texts>
                {
                    loading&&((
                        <View style={styles.activityIndicatorWrapper}>
                            <ActivityIndicator color={white} />
                        </View>
                    ))
                }
            </>
        )
    }
    return (
        <View style={styles.buttonWrapper}>
        {
            disabled?
            <View style={{...styles.defaultButton,...style,opacity: 0.6}}>
                {renderButtonContent()}
            </View>
            :
            <TouchableOpacity style={{...styles.defaultButton,...style}} onPress={onPress}>
                {renderButtonContent()}
            </TouchableOpacity>

        }
        </View>
    )
}
const styles = StyleSheet.create({
    defaultButton:{
        borderRadius: 7,
        backgroundColor:lightGrey,
        height: 30,
        width:'100%',
        alignSelf:'center',
        alignItems:'center',
        justifyContent:'center',
        flexDirection:'row'
    },
    defaultButtonText:{
        fontSize:14
    },
    activityIndicatorWrapper:{
        paddingLeft:10
    },
    buttonWrapper:{
        width:'100%',
        padding:20
    },
    borderButtonCover:{
        borderWidth:0.5,
        borderColor:lightGrey,
        borderRadius:5,
        justifyContent:'center',
        alignItems:'center',
        width:150,height:30,
        alignSelf:'center'
    }
})