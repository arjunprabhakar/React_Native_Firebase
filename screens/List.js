import React, { useEffect, useState } from 'react';
import {View,Text,StyleSheet, Button,TextInput} from 'react-native';

import databse from '@react-native-firebase/database'

let itemRef= databse().ref('/Items')
function List(){
    const [itemArray, setItemArray] = useState([]);
    const [keys, setKeys] = useState([]);
    const [ifUpdate, setUpdate] = useState(false);
    const [updateText, setupdateText] = useState('');
    useEffect(() =>{
      itemRef.on('value',snapshot =>{
        let data = snapshot.val();
        const items = Object.values(data);
        setKeys(Object.keys(data))
        setItemArray(items);

      })  
    },[])


const handleDelete=(index)=>{
    let childkey = keys[index];
    itemRef.child(childkey).remove();
}

    return(
        <View style={styles.container}>
            {(itemArray.length > 0) 
            ?
            
                {ifUpdate ? 
                <TextInput value={updateText}/>
              
                }

            <View style={styles.list}>
                {itemArray.map((items,index) => {
                    return(
                    <View style={styles.Item}>
                    <Text style={styles.Text}>{items.name}</Text>
                    <Button title='Update'/>
                    <Button title='Delete' onPress={() => handleDelete(index)}/>
                    </View>
                    )
            })}
            </View> 
            : <Text>NoData</Text>
            }
        </View>
    );
}

const styles= StyleSheet.create({
    container: {
        flex:1,
        justifyContent:'center',
        backgroundColor:'#ebebeb'
    },
    Text:{
        fontSize:16,
        color:'#000',
        padding:10,
    },
    list:{
        flex:1,
        flexDirection:'column',
        justifyContent:'center',
        alignItems:'center',
    },
    Item:{
        flexDirection:'row',
        justifyContent:'space-around',
        marginBottom:10,
    }
})
export default List;