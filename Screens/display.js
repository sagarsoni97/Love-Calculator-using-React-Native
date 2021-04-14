import React, { useState,useEffect } from 'react';
import { View, Text, StyleSheet, Dimensions, Image } from 'react-native';


const Display = (prop) =>{

    if(prop.data=='loading'){
        return(
        <Text style={{fontSize:20, marginTop:'19%',  marginLeft:'8%',
        color:'#fff',
        fontWeight:'bold',
        fontFamily: 'Zilla Slab Highlight'}}>Welcome to Love Calculator</Text>
        )
    }
    if(prop.data.message){
        return(
            <Text style={styles.content}>Please Calculate Again</Text>
        )
    }
    else{
         return(
<View styles={styles.container}>
    <View style={{flexDirection:'row', justifyContent:'space-around'}}>
        <Image style={{height:80, width:80, marginTop:'15%', borderRadius:50}} source={require('../Images/loveyou.jpg')} />
        <Text style={styles.content}>{prop.data.percentage}%</Text>
        <Image style={{height:80, width:80, marginTop:'15%', borderRadius:50}} source={require('../Images/loveyou.jpg')} />
    </View>
    <Text style={styles.content2}>Result :- {prop.data.result}</Text>
</View>
    )
    }
    
   
}

const styles = StyleSheet.create({
    container:{
        
    },

    content:{
        fontSize:30,
        marginTop:'19%',
        marginLeft:'5%',
        color:'#fff',
        fontWeight:'bold',
        fontFamily: 'Zilla Slab Highlight'
    },

    content2:{
        fontSize:20,
        marginTop:'15%',
        marginLeft:'8%',
        color:'#fff',
        fontWeight:'bold',
        fontFamily: 'Zilla Slab Highlight'
    }
})

export default Display;