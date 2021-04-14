import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';
import Home from '../Screens/home';
import SignUp from '../Screens/signup'
import Display from '../Screens/display'


const Stack = createStackNavigator();

function MyStack() {
    return (
      <Stack.Navigator>
        <Stack.Screen name="Home" component={Home} options={{headerShown:false}}/>
        <Stack.Screen name="SignUp" component={SignUp}/>
        <Stack.Screen name="Display" component={Display}/>
      </Stack.Navigator>
    );
  }

  export default MyStack;