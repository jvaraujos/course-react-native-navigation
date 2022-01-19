import React from 'react'
import {View,StyleSheet} from 'react-native'
import TextoCentral from '../components/TextoCentral'

export default props => {
    return (
            <TextoCentral corFundo='#9932cd'>
                Tela C
            </TextoCentral>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
     }})