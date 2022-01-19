import React from 'react'
import {View,Button, Text} from 'react-native'

export default props => {
    return (
        <View style={{flex:1}}>
            <View style={{flexDirection:'row',justifyContent:'space-around'}}>
            {props.back
                ?
                <Button 
                title='Back' 
                onPress={()=>{props.navigation.goBack()
                }}>                   
                </Button>
                :false
                }
                {props.advance
                ?
                <Button 
                title='Advance' 
                onPress={()=>{props.navigation.push(props.advance)
                }}>                   
                </Button>
                :false
                }
            </View>
            <View style={{flex:1}}>
                    {props.children}
            </View>
        </View>
     )
}