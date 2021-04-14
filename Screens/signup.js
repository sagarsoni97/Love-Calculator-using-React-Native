import React, { useState, useEffect } from 'react';
import {
    View, Text, Dimensions, StyleSheet, TextInput, TouchableOpacity,
    Keyboard, ActivityIndicator
} from 'react-native';
import Display from '../Screens/display'

const Signup = () => {


    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const Register = () => {
        fetch("http://10.0.2.2:3000/signup",
        {
            method:"POST",
            headers: {
             'Content-Type': 'application/json'
           },
           body:JSON.stringify({
             "email":email,
             "password":password
           })
            })
             .then(res=>res.json())
            .then(data=>{
                console.log(data)
        }
        )
    }

    return (
        <View>
            <Text>Signup</Text>

            <TextInput style={styles.input}
                placeholder='Enter Email'
                onChangeText={email => setEmail(email)}
                value={email}
                autoCompleteType='off'
            >
            </TextInput>

            <TextInput style={styles.input}
            secureTextEntry={true}
                placeholder='Enter Password'
                onChangeText={password => setPassword(password)}
                autoCompleteType='off'
                value={password}
            >
            </TextInput>


            <TouchableOpacity onPress={() => Register()} style={styles.btn}>
                <Text style={styles.btnText}>SignUp</Text>
            </TouchableOpacity>

        </View>
    )
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        width: '80%',
        marginTop: '5%',
        backgroundColor: '#fff',
        borderRadius: 20,
        paddingLeft: 20,
        alignSelf: 'center'
    },

    btn: {
        width: '70%',
        height: '15%',
        backgroundColor: 'yellow',
        borderRadius: 20,
        marginTop: '5%',
        alignSelf: 'center'
    },

    btnText: {
        fontSize: 15,
        textAlign: 'center',
        padding: 10
    }
})

export default Signup;