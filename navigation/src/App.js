import React,{Component} from 'react'
import { SafeAreaView,StyleSheet } from 'react-native'
import TelaA from './views/TelaA'
import TelaB from './views/TelaB'
import TelaC from './views/TelaC'

export default class App extends Component{
    render (){
        return (
        <SafeAreaView style={styles.container}>
        <TelaA></TelaA>
        <TelaB></TelaB>
        <TelaC></TelaC>

        </SafeAreaView>
     )
}
}
const styles = StyleSheet.create({
    container:{
      flex: 1
     }})