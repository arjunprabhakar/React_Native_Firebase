import React from 'react';
import {View,Text,Button,StyleSheet} from 'react-native';


function Home({navigation}){
    return(
        <View style={styles.container}>
            <Button title='Add Item' style={styles.Button}
            onPress={() => navigation.navigate('Additem')}
            />
            <Button title='View Item' style={styles.Button}
            onPress={() => navigation.navigate('List')}

            />
        </View>
    );
}
const styles = StyleSheet.create({

    container:{
        flex:1,
    },
    Button:{
        height:40,
        marginTop:30,
        width:50
    }

})
export default Home;