import React from 'react';
import { Text, StyleSheet,Button,TouchableOpacity,View,ImageBackground,Image } from 'react-native';
import ImageDetails from './Components/ImageDetails';

const ImageScreen = () =>{
    return <View style={style.container}>
        <ImageDetails 
        title="beach" 
        imageShow={require('../../assets/beach.jpg')}
        score="10"/>
        <ImageDetails 
        title="forest"
        score="21"
        imageShow={require('../../assets/forest.jpg')}/>
        
        <ImageDetails 
        title="mountain" 
        score="32"
        imageShow={require('../../assets/mountain.jpg')}/>
            {/* <ImageBackground source={require("../../assets/image1.png")} resizeMode="cover" style={style.image}></ImageBackground> */}
           {/*  <ImageBackground source={require("../../assets/image1.png")} resizeMode="cover" style={style.image}>
      <Text style={style.text}>Inside</Text>
    </ImageBackground> */}
       
        </View>

}

const style = StyleSheet.create({
    // image:{
    //     width:200,
    //     height:200,
    // },
    image: {
        flex: 1,
        justifyContent: "center"
      },
      container: {
        flex: 1,
      },
})

export default ImageScreen;