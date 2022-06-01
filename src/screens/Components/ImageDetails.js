import React from 'react';
import { Text, StyleSheet,Button,TouchableOpacity,View,ImageBackground,Image,FlatList } from 'react-native';

/* const ImageDetails = (props) =>{
    console.log(props)
    return (
        <View>
                <Image source={props.imageShow}></Image>
                <Text>{props.title}</Text>
                <Text>score - {props.score}</Text>
        </View>
        
    )
} */

const ImageDetails = ({imageShow,title,score}) =>{
    return(
        <View>
            <Image source={imageShow} style={imageStyle.image}></Image>
            <Text>{title}</Text>
            <Text>score - {score}</Text>
           
        </View>
    )
}


const imageStyle = StyleSheet.create({
 image:{
     height:200,
     width:400
 }
})
export default ImageDetails