import { View,SafeAreaView, Pressable, ScrollView, TouchableOpacity } from 'react-native'
import React,{useState} from 'react'
import Header from '../../components/Header'
import { styles } from './styles'
import Texts from '../../components/Texts'
import SimpleToast from 'react-native-simple-toast'
import {useDispatch, useSelector,RootStateOrAny} from 'react-redux';
import * as Actions from '../../store/actions';
import HeaderSelector from '../../components/Tabs'
import SelectContent from '../../components/Tabs/SelectContent'
import { defaultLength, numberRange, suggestedAmount } from '../../constants/string'
import Divider from '../../components/Divider'
import RowContent from '../../components/Tabs/RowContent'
import UserInput from '../../components/UserInput'
import Button from '../../components/Button'
import numeral from 'numeral';
export default function Home() {
    const [indexValue,setIndexValue]=useState(1)
    const [moneyInput,setMoneyInput]=useState('');
    const [moneyShow,setMoneyShow]=useState('')
    const dispatch = useDispatch();
    let selectedNumbers = useSelector((state: RootStateOrAny) => {
        return state.stateContent.selectedNumbers;
    });
    const disabled =selectedNumbers.length>4?false:true
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
        if(currentNumbers.length>=defaultLength){
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
        while(arr.length < defaultLength){
            var random = Math.floor(Math.random() * 80) + 1;
            if(arr.indexOf(random) === -1) arr.push(random);
        }
        dispatch({type:Actions.UPDATE_NUMBER,payload:arr})
    }
    const handleStake = () =>{
        if(disabled){
            SimpleToast.show('Please select 5 numbers!')
            return;
        }
    }
    const handleMoneyInput = (value:any) => {
        setMoneyInput(value)
        let amount = numeral(value).format('0,0[.]00');
        setMoneyShow(amount)
       
    };

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
                    <Button 
                    onPress={handleLuckyPick}
                    title="Lucky Pick"
                    />
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
                <View style={styles.rowDirection}>
                    <UserInput 
                    onChangeText={(val?:any)=>handleMoneyInput(val)}
                    value={moneyShow}
                    placeholder={'Stake Amount'}
                    style={styles.inputStyle}
                    keyboardType="numeric"
                    />
                    <Button 
                    title="Stake"
                    style={styles.stakeButton}
                    disabled={disabled}
                    onPress={()=>handleStake()}
                    />
                </View>
            </View>
            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                {
                    suggestedAmount.map((item,index)=>(
                        <TouchableOpacity 
                        style={moneyInput===item.value?styles.boxWrapper2:styles.boxWrapper} 
                        key={index}
                        onPress={()=>
                            {
                                handleMoneyInput(item.value)
                                
                            }}
                        >
                            <Texts style={moneyInput===item.value?styles.numberText:null}>₦{item.value}</Texts>
                        </TouchableOpacity>
                    ))
                }
                
            </ScrollView>
            <View style={styles.bottomSpace}/>
        </ScrollView>
    </SafeAreaView>
  )
}