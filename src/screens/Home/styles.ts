import { StyleSheet } from "react-native";
import { black, green, lightGrey, textColor, white } from "../../constants/colors";
import { width } from "../../constants/dimension";
const numberWidth = (width/5)-30
export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:white,
        padding:20,
        paddingTop:0,
    },
    contentWrapper:{
        backgroundColor:lightGrey,
        width:'100%',
        padding:20,
        // margin:20
    },
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
    numberWrapper:{
        marginTop:20,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between'
        
    },
    numberItem:{
        backgroundColor:black,
        width:numberWidth,
        height:numberWidth,
        borderRadius:numberWidth/2,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:10,
        marginRight:10
    },
    numberItem2:{
        backgroundColor:green,
        width:numberWidth,
        height:numberWidth,
        borderRadius:numberWidth/2,
        alignItems:'center',
        justifyContent:'center',
        marginBottom:10,
        marginRight:10
    },
    numberText:{
        color:white
    },
    contentMargin:{
        padding:20
    }
})