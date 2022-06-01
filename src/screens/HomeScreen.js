import React from 'react';
import { Text, StyleSheet,Button,TouchableOpacity,View } from 'react-native';
const HomeScreen = (props) => {
  const handleClick = () =>{
    console.log("button clickec")
   props.navigation.navigate('Main')
  }
  return (
    <View>
       <Text style={styles.text}>HomeScreen</Text>
       <Button
        style={{width:20}}
        title="Press me"
        onPress={handleClick}
      />
    <TouchableOpacity onPress={() => props.navigation.navigate('List')}
      style={styles.button1}
    >
      <Text>Click to Stundent List</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => props.navigation.navigate('Image')}
      style={styles.button1}
    >
      <Text>Click to Image List</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => props.navigation.navigate('Counter')}
      style={styles.button1}
    >
      <Text>Click to Counter Components</Text>
    </TouchableOpacity>
    <TouchableOpacity onPress={() => navigation.navigate("ReducerOne")}
                style={imageStyle.button1}
                >
                <Text>Click to Reducer</Text>
                </TouchableOpacity>
    </View>
   
    
  ) 
};

const styles = StyleSheet.create({
  text: {
    fontSize: 30,
    paddingBottom:20,
    textAlign:'center'
  },
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

export default HomeScreen;
