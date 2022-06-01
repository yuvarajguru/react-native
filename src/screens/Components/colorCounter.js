import React ,{useState} from 'react';
import { Text, StyleSheet,Button,Label,TouchableOpacity,View,ImageBackground,Image,FlatList } from 'react-native';



const ColorCounter = ({color,onIncrease,onDecrease}) =>{
  
    return(
        <View>
            <Button title={`Increase ${color}`} onPress={() => onIncrease()} />
           
            <Button title={`Decrease ${color}`} onPress={() => onDecrease()} />
            <Text> {color}</Text>
        </View>
        )
}

const taskStyle = StyleSheet.create({
    button1:{
        //textAlign:'center',
        width:200,
        height:50,
        marginLeft:85,
        paddingTop:10,
        paddingLeft:25,
        backgroundColor:'#a2c5e8',
        color:'#fafbfc',
        elevation: 15,
        borderRadius: 10,
      }
});
export default ColorCounter;