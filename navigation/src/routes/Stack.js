import React from 'react'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ScreenC from '../views/ScreenC'
import ScreenA from '../views/ScreenA'
import ScreenB from '../views/ScreenB'
import StepStack from '../components/StepStack'

const Stack = createNativeStackNavigator()

export default props => {
    return (
        <Stack.Navigator initialRouteName ="ScreenA">
            <Stack.Screen name="ScreenA" options={{title:'Initial infos'}}>{props=>(
                <StepStack {...props} advance="ScreenB" >
                    <ScreenA/>
                </StepStack>
            )}
            </Stack.Screen>
            <Stack.Screen name="ScreenB" >
                {props=>(
                <StepStack {...props} advance="ScreenC" back advanceParams={{numero:Math.random()*100}}>
                    <ScreenB/>
                </StepStack>
            )}
            </Stack.Screen>
            <Stack.Screen name="ScreenC" >
                {props=>(
                <StepStack {...props} advance="ScreenC" back  advanceParams={{numero:Math.random()*100}}>
                    <ScreenC  {...props} />
                </StepStack>
            )}
            </Stack.Screen>
        </Stack.Navigator>   
        )
}