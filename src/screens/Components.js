import React from 'react';
import { View,Text, StyleSheet} from 'react-native';


const components = () =>{
    const greet = 'Happy Reteirement ...!!';
    return <View>
        <Text style = {styleS.textStyle} >Hello Umavathi Sistre..</Text>
        <Text style = {{fontSize: 30}}> {greet} </Text>
    </View>
};

const styleS = StyleSheet.create({
    textStyle:{
        fontSize: 40
    }
});

export default components;