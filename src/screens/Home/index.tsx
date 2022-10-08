import { View,SafeAreaView, Pressable, ScrollView } from 'react-native'
import React,{useState} from 'react'
import Header from '../../components/Header'
import { styles } from './styles'
import Texts from '../../components/Texts'
import SimpleToast from 'react-native-simple-toast'
import {useDispatch, useSelector,RootStateOrAny} from 'react-redux';
import * as Actions from '../../store/actions';
import HeaderSelector from '../../components/Tabs'
import SelectContent from '../../components/Tabs/SelectContent'
import { numberRange } from '../../constants/string'
import Divider from '../../components/Divider'
import RowContent from '../../components/Tabs/RowContent'
export default function Home() {
    const [indexValue,setIndexValue]=useState(1)
    const dispatch = useDispatch();
    let selectedNumbers = useSelector((state: RootStateOrAny) => {
        return state.stateContent.selectedNumbers;
    });
    const indexHeader = [
        {
            id:1,
            name:'1-40'
        },
        {
            id:2,
            name:'41-80'
        }
    ]
    const handleClickNumber=(no:number)=>{
        if(checkNumberExist(no)){
            removeNumber(no)
            return
        }
        let currentNumbers :any= [...selectedNumbers]
        if(currentNumbers.length>=5){
            SimpleToast.show('You have already selected 5 numbers!')
            return;
        }
        currentNumbers.push(no)
        dispatch({type:Actions.UPDATE_NUMBER,payload:currentNumbers})
    }
    const checkNumberExist = (no:number) =>{
        let exist = selectedNumbers.filter((item:any)=>item==no)
        if(exist[0]){
            return true
        }
    }
    const removeNumber = (no:number)=>{
        let currentNumbers = selectedNumbers.filter((item:any)=>item!=no)
        dispatch({type:Actions.UPDATE_NUMBER,payload:currentNumbers})
    }
    const handleLuckyPick = () =>{
        var arr = [];
        while(arr.length < 5){
            var r = Math.floor(Math.random() * 80) + 1;
            if(arr.indexOf(r) === -1) arr.push(r);
        }
        dispatch({type:Actions.UPDATE_NUMBER,payload:arr})
    }

  return (
    <SafeAreaView style={styles.container}>
        <Header title = "KENO"/>
        <ScrollView showsVerticalScrollIndicator={false}>
            <View style={styles.contentMargin}>
                <View style={styles.contentWrapper}>
                    <Texts style={styles.subText}>Select 5 numbers from 1 to 80</Texts>
                    <HeaderSelector
                    indexHeader={indexHeader}
                    indexValue={indexValue}
                    setIndexValue={setIndexValue}
                    />
                    <SelectContent 
                    indexValue={indexValue}
                    indexHeader = {indexHeader}
                    numberRange={numberRange}
                    selectedNumbers={selectedNumbers}
                    handleClickNumber={handleClickNumber}
                    checkNumberExist={checkNumberExist}
                    />
                </View>
                <View style={styles.breakLine}/>
                <View style={styles.rowSelection}>
                    <Texts style={{...styles.subHeaderText,...styles.marginAlign}}>Raffle Details</Texts>
                    <Pressable style={styles.buttonWrapper} onPress={handleLuckyPick}>
                        <Texts style={styles.buttonText}>Lucky Pick</Texts>
                    </Pressable>
                </View>
                <Divider />
                <View style={styles.pickedWrapper}>
                    {selectedNumbers.map((item:number,index:number)=>(
                        <RowContent
                        checkNumberExist={true}
                        item={item}
                        key={index}
                        handleClickNumber={()=>{}}
                        />
                    ))}
                </View>
            </View>
            <View style={{marginBottom:200}}/>
        </ScrollView>
    </SafeAreaView>
  )
}