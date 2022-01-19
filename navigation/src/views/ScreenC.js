import React from 'react'
import {View,StyleSheet} from 'react-native'
import TextoCentral from '../components/TextoCentral'

export default props => {
    const route = props.route || {params:{numero:0}}
    return (
            <TextoCentral corFundo='#9932cd'>
                Screen C - {route.params.numero}
            </TextoCentral>
    )
}
const styles = StyleSheet.create({
    container:{
        backgroundColor:'#fff',
     }})