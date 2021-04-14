import React, { useState,useEffect } from 'react';
import { View, Text, Dimensions, StyleSheet, TextInput, TouchableOpacity, Keyboard, ActivityIndicator } from 'react-native';
import Display from './display'

const { height, width } = Dimensions.get('window');

const Home = () =>{

    const [ data , setData] = useState('loading')
    const [firstName, setFirstName] = useState('')
    const [secondName, setSecondName] = useState('')
    const [isCalculating, setCalculating] = useState(false);
   

//    function calculate(){
//        fetch("https://jsonplaceholder.typicode.com/users")
//             .then((data)=>data.json())
//             .then((data2) => {
//                 console.log(data2)
//             })
//     }


    const getUser= async() =>{
    
            setCalculating(true);
            fetch(`https://love-calculator.p.rapidapi.com/getPercentage?fname=${firstName}&sname=${secondName}` , {
                "method": "GET",
                "headers": {
                    "x-rapidapi-key": "b52fa900b3msh930b51a9c1b6c85p18db88jsn86663d77e9e5",
                    "x-rapidapi-host": "love-calculator.p.rapidapi.com"
                }
            }
                )
        .then(data=>data.json())
        .then(response => {
            setData(response)
            console.log(response);
            Keyboard.dismiss();
            setCalculating(false);
        })

        
       
  
}


    return(
<View style={styles.container}>
    <Text style={styles.content}>Love Percentage Calculator</Text>

    <TextInput style={styles.input}
    placeholder='Enter First Name'
    onChangeText={fname => setFirstName(fname)}
    value={firstName}
    autoCompleteType='off'
    >

    </TextInput>

    <TextInput style={styles.input}
    placeholder='Enter Second Name'
    onChangeText={sname => setSecondName(sname)}
    autoCompleteType='off'
    value={secondName}
    >

    </TextInput>

    <TouchableOpacity onPress={()=>getUser()} style={styles.btn}>
    {
                    isCalculating ? (
                        <ActivityIndicator 
                            size={28}
                            color={"black"}
                        />
                    ):(
                        <Text style={styles.btnText}>Calculate</Text>
                    )
                }
    </TouchableOpacity>

        <Display data={data}/>
    
</View>

    )
}

const styles = StyleSheet.create({
    container: {
      backgroundColor: 'red',
      height,
      width,
     
    },

    content:{
        fontSize:30,
        marginTop:'20%',
        alignSelf:'center',
        fontFamily:'cursive',
        fontWeight:'bold'
    },

    input:{
        borderWidth:1,
        width:'80%',
        marginTop:'5%',
        backgroundColor:'#fff',
        borderRadius:20,
        paddingLeft:20,
        alignSelf:'center'
    },

    btn:{
        width:'70%',
        height:'6%',
        backgroundColor:'#fff',
        borderRadius:20,
        marginTop:'5%',
        alignSelf:'center'
    },

    btnText:{
        fontSize:15,
        textAlign:'center',
        padding:10
    }
  });

export default Home;