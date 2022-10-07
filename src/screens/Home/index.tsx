import { View,SafeAreaView, Pressable, ScrollView } from 'react-native'
import React,{useState} from 'react'
import Header from '../../components/Header'
import { styles } from './styles'
import Texts from '../../components/Texts'
import { range } from '../../constants/functions'
import SimpleToast from 'react-native-simple-toast'
import {useDispatch, useSelector,RootStateOrAny} from 'react-redux';
import * as Actions from '../../store/actions';
import HeaderSelector from '../../components/HeaderSelector'
import SelectContent from '../../components/HeaderSelector/SelectContent'
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
    const numberRange={
        range1:range(1,40,1),
        range2:range(41,80,1)
    }
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

  return (
    <SafeAreaView style={styles.container}>
        <Header title = "KENO"/>
        <ScrollView>
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
            </View>
        </ScrollView>
    </SafeAreaView>
  )
}