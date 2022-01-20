import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import ScreenC from '../views/ScreenC'
import ScreenA from '../views/ScreenA'
import ScreenB from '../views/ScreenB'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';

const Tab = createBottomTabNavigator()

export default props => {
    return (
        <Tab.Navigator initialRouteName="ScreenA"
        screenOptions={{
            tabBarActiveTintColor:'tomato'
         }}>
            <Tab.Screen name="ScreenA" component={ScreenA}
            options={{
                tabBarLabel: 'Home',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="home" color={color} size={size} />
                ),
              }}/>
            <Tab.Screen name="ScreenB" component={ScreenB}
              options={{
                tabBarLabel: 'Updates',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="bell" color={color} size={size} />
                ),
              }}/>
            <Tab.Screen name="ScreenC" component={ScreenC}
             options={{
                tabBarLabel: 'Profile',
                tabBarIcon: ({ color, size }) => (
                  <MaterialCommunityIcons name="account" color={color} size={size} />
                ),
              }}/>
        </Tab.Navigator>   
        )
}