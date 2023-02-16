import React, { useState } from 'react';
import {View,Text,TextInput,TouchableHighlight,StyleSheet, Alert} from 'react-native';
import database from '@react-native-firebase/database';

let addItem = item =>{
   database().ref('/Items').push({
    name:item
   })
}

function Additem(){
    const [name, setName] = useState('');
    const handlesubmit = () => {
        addItem(name);
        setName('');
        Alert.alert('Item Added Successfully');
    }
    return(
        <View style={styles.main}>
            <Text style={styles.title}>Add Item</Text>
            <TextInput value={name} style={styles.itemInput} onChangeText={text => setName(text)} />

            <TouchableHighlight style={styles.Button} onPress={handlesubmit}>
                <Text style={styles.ButtonText}>Submit</Text>
            </TouchableHighlight>
        </View>
    );
}
const styles = StyleSheet.create({
    main: {
        flex: 1,
        padding: 30,
        flexDirection:'column',
        justifyContent: 'center',
        backgroundColor: '#0BF0A4 '
    },
    title:{
        marginBottom: 20,
        fontSize: 25,
        textAlign:'center',
        color:'#000'
    },
    itemInput:{
        height: 50,
        padding:4,
        marginRight: 5,
        fontSize:23,
        borderWidth:1,
        borderColor:'#fff',
        borderRadius:5,
        color:'#000'
    },
    ButtonText:{
        fontSize: 18,
        color:'#fff',
        alignSelf:'center',
        marginLeft:2
    },
    Button:{
        height:45,
        flexDirection:'row',
        backgroundColor:'#49FF00',
        borderRadius:5,
        width:65,
        marginTop:30,
        marginLeft:130
    }
})

export default Additem;