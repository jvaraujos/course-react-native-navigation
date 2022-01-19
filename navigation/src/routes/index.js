import React from 'react'
import { Text ,SafeAreaView,StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Stack from './Stack' 
import Tab  from './Tab'

export default props => {
    return (
        <NavigationContainer>
     <SafeAreaView style={{flex: 1}}>
             {/* <Stack/> */}
             <Tab></Tab>
        </SafeAreaView>
        </NavigationContainer>
   
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
})