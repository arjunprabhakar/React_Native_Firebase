import React, { useState } from 'react';
import { StyleSheet,View,TextInput,Button, Text } from 'react-native';

export default function VerifyCode(props){
const [code,setCode]=useState('');
    return(
        <View style={styles.constainer}>
            <Text style={styles.text}>Enter OTP</Text>
            <TextInput 
            autoFocus
            keyboardType='numeric'
            style={styles.input}
            value={code}
            onChangeText={setCode}
            />
            <Button title='Verify' onPress={()=> props.onSubmit(code)}/>
        </View>
    )
        
    
}


const styles = StyleSheet.create({
    constainer:{
        flex:1,
        justifyContent:'center',
        alignItems:'center',
    },
    input:{
        borderWidth:2,
        width:300,
        marginVertical:30,
        fontSize:25,
        padding:10,
        borderRadius:8
    },
    text:{
        fontSize:25
    },
})