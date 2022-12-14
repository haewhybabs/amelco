import { StyleSheet } from "react-native";
import { black, green, lightGrey, lightGrey2, lightGrey3, mixRed, purple, textColor, white } from "../../constants/colors";
import { width } from "../../constants/dimension";
const numberWidth = (width/5)-30
export const styles = StyleSheet.create({
    container:{
        flex:1,
        backgroundColor:white,
        // padding:20,
    },
    contentWrapper:{
        backgroundColor:lightGrey,
        width:'100%',
        padding:20,
    },
    subText:{
        color:textColor,
        fontSize:13,
        alignSelf:'center'
    },
    numberWrapper:{
        marginTop:20,
        flexDirection:'row',
        flexWrap:'wrap',
        justifyContent:'space-between'
        
    },
    numberText:{
        color:white
    },
    contentMargin:{
        padding:20
        // paddingTop:20
    },
    breakLine:{
        width:40,
        height:5,
        backgroundColor:lightGrey2,
        alignSelf:'center',
        marginTop:5
    },
    rowSelection:{
        flexDirection:'row',
        justifyContent:'space-between',
        padding:20,
        paddingBottom:0
    },
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
    subHeaderText:{
        fontSize:16,
        color:black
    },
    marginAlign:{
        marginTop:12
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
    pickedWrapper:{
        flexDirection:'row',
        justifyContent:'space-between'
    },
    rowDirection:{
        flexDirection:'row',
        justifyContent:'space-between',
        marginTop:20
    },
    stakeButton:{
        backgroundColor:mixRed,
        width:'40%',
        height:55,
        borderRadius:7
    },
    inputStyle:{
        width:'55%',
        backgroundColor:white,
        borderWidth:0.5,
        height:55,
        borderColor:lightGrey2,
        borderRadius:7,
        color:black
    },
    boxWrapper:{
        height:40,
        width:(width/6),
        borderRadius:7,
        backgroundColor:lightGrey3,
        marginRight:10,
        justifyContent:'center',
        alignItems:'center'
    },
    boxWrapper2:{
        height:40,
        width:(width/6),
        borderRadius:7,
        backgroundColor:black,
        marginRight:10,
        justifyContent:'center',
        alignItems:'center'
    },
    bottomSpace:{
        marginBottom:100
    }
})