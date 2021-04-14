import React, { useState,useEffect } from 'react';
import { View, Text } from 'react-native';
import Splash from './Screens/splash'
import Home from './Screens/home'
import {NavigationContainer} from '@react-navigation/native';
import MyStack from './Navigation/stack'
import {createStore} from 'redux';
import {Provider} from 'react-redux'

const App = () => {

   const [load,setLoad]=useState(true)

 async function performload()
 {
   return new Promise(response=>
   {
     setTimeout(()=>{response("")},1000)
   })
 }

 
  useEffect(() => 
  {
   async function apicall()
    {
        const d= await performload()
  if(d!==null)
  {
    setLoad(false)
  }
    }
    apicall()
  });

  const initialState={
    data:[]
  }

  const Reducer = (state=initialState, action) =>{
    return state
  }

  const store = createStore(Reducer)


if(load)
{
  return (<Splash/>)
}
else
{
  return (
    <Provider store={store}>
      <NavigationContainer>
         < MyStack/>
      </NavigationContainer>
      </Provider>
  )
}}
export default App;