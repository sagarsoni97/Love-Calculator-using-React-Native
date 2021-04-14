import React, { useState,useEffect } from 'react';
import { View, Text, ActivityIndicator } from 'react-native';
import LottieView from 'lottie-react-native';

const Splash = () =>{
    return(
        <View style={{alignItems:'center', marginTop:'50%', marginBottom:'10%'}}>
         <LottieView style={{height:300, width:200}} source={require('../Lottie Json/splash.json')} autoPlay loop />
          <Text>Created by Sagar Soni</Text>
         </View>
         )
}

export default Splash;