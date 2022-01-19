import React from 'react'
import {View,StyleSheet} from 'react-native'
import TextoCentral from '../components/TextoCentral'

export default props => {
    return (
            <TextoCentral corFundo='#3b82c4'>
                Tela B
            </TextoCentral>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
     }})