import { View, Text,Pressable } from 'react-native'
import React from 'react'
import Texts from '../Texts'
import {styles} from './styles'
import RowContent from './RowContent'
interface HeaderProps {
    indexValue?:number,
    numberRange?:any
    selectedNumbers?:any
    handleClickNumber?:any
    checkNumberExist?:any,
    indexHeader?:any

}
export default function SelectContent({
    indexValue,
    numberRange,
    indexHeader,
    checkNumberExist,
    handleClickNumber
}:HeaderProps) {
    return (
        <View style={styles.numberWrapper}>
            {
                indexValue==indexHeader[0].id&&((
                    <>
                        {
                            numberRange.range1.map((item:any,index:number)=>(
                                <RowContent 
                                checkNumberExist={checkNumberExist(item)}
                                item={item}
                                handleClickNumber={handleClickNumber}
                                key={index}
                                />
                            ))
                        }
                    </>
                ))
            }
            {
                indexValue==indexHeader[1].id&&((
                    <>
                        {
                            numberRange.range2.map((item:any,index:number)=>(
                                <RowContent 
                                checkNumberExist={checkNumberExist(item)}
                                item={item}
                                handleClickNumber={handleClickNumber}
                                key={index}
                                />
                            ))
                        }
                    </>
                ))
            }
            
            
        </View>
    )
}