import React,{useState} from 'react';
import { Text,StyleSheet,View,TextInput, Button, Alert } from 'react-native';
import auth from '@react-native-firebase/auth';

export default function Login({navigation}){

const [email,setEmail] = useState('');
const [password,setPassword] = useState('');

// For signup
const signup = () =>{
if(email != ' ' && password != ' '){
    auth().createUserWithEmailAndPassword(email,password).then((res) => {
        console.log("response",res)
        Alert.alert("Account created successfully");
    })
    .catch((error)=> {
        console.log("error",error)
        Alert.alert(error.message);
    })
}else{
    Alert.alert("Both fields are Mandatory");
}
}
// For Login
const login = () =>{
    auth().signInWithEmailAndPassword(email,password).then((res) =>{
        console.log("response",res)
        navigation.navigate("Home")
    })
    .catch((error)=> {
        console.log("error",error)
        Alert.alert(error.message);
    })
}


    return(
        <View style={styles.container}> 
            <Text style={styles.title}>Login</Text>
            {/* For input  */}
                <TextInput
                    onChangeText={setEmail} 
                    value={email} 
                    style={styles.TxtInput}
                    keyboardType='email-address' 
                    placeholder='Email' /> 
                <TextInput 
                    onChangeText={setPassword}
                    value={password} 
                    style={styles.TxtInput} 
                    placeholder='Password' 
                    secureTextEntry={true}/> 
                {/* Buttons */}
            <View style={styles.Button}>
                <Button title='Login' onPress={login} />
                <Button title='Signup' onPress={signup} />
            </View>
        </View>

    )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    title:{
        fontSize:21,
        marginBottom:20,
        color:'#000'
    },
    TxtInput:{
        width:300,
        borderRadius:5,
        borderWidth:2,
        borderColor:'#000000',
        marginVertical:10,
        padding:5,
    },
    Button:{
        width:150,
        borderRadius:5,
        marginTop:20,
        flexDirection:'row',
        justifyContent:'space-around',
        
    }
})