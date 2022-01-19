import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ScreenC from '../views/ScreenC'
import ScreenA from '../views/ScreenA'
import ScreenB from '../views/ScreenB'

const Stack = createNativeStackNavigator()

export default props => {
    return (
        <Stack.Navigator initialRouteName ="ScreenA">
            <Stack.Screen name="ScreenA" component={ScreenA} options={{title:'initial infos'}}></Stack.Screen>
            <Stack.Screen name="ScreenB" component={ScreenB}></Stack.Screen>
            <Stack.Screen name="ScreenC" component={ScreenC}></Stack.Screen>
        </Stack.Navigator>   
        )
}