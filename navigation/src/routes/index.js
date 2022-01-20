import React from 'react'
import { Text ,SafeAreaView,StyleSheet} from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import Tab  from './Tab'
//import Drawer from './Drawer'
export default props => {
    return (
        
     <SafeAreaView style={{flex: 1}}>
         <NavigationContainer>
             <Tab/>
             {/* <Drawer>
                o drawer esta bugando o projeto no momento do import!
             </Drawer> */}
         </NavigationContainer>
        </SafeAreaView>
   
    )
}
const styles = StyleSheet.create({
    container:{
        flex: 1,
    },
})