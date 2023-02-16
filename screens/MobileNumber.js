import React, { useState } from 'react';
import { StyleSheet,View,TextInput,Button, Text } from 'react-native';


export default function MobileNumber(props){
    const [phoneNumber,setPhoneNumber] = useState(null)


    return(
        <View style={styles.container}>
            <Text style={styles.text}>Enter Phone Number</Text>
            <TextInput
             style={styles.input} 
             autoFocus
             value={phoneNumber}
             onChangeText={setPhoneNumber}/>
            <Button title='Sign in With OTP' onPress={()=> props.onSubmit(phoneNumber)}/>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex :1,
        justifyContent:'center',
        alignItems:'center'
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