import React ,{useState}from 'react';
import { Text, StyleSheet,Button,TouchableOpacity,View,ImageBackground,Image,FlatList } from 'react-native';



const CounterScreen = ({navigation}) =>{
    const [color,setColor] = useState([]);
    const Randomrgb = () =>{
        const red = Math.floor(Math.random()* 256);
        const blue = Math.floor(Math.random()* 256);
        const green = Math.floor(Math.random()* 256);
        return `rgb(${red},${blue},${green})`
    }
    return(
        <View> 
            <Text style={imageStyle.heading}>welcome to counter page</Text>
            <TouchableOpacity style={imageStyle.button1}>
            <Text style={imageStyle.text} onPress={() => {
                setColor([...color,Randomrgb()])
            }}>Add a color</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => navigation.navigate("TaskOne")}
                style={imageStyle.button1}
                >
                <Text>Click to move </Text>
                </TouchableOpacity>
            <FlatList
            keyExtractor={item => item}
            data={color}
            renderItem={({item}) =>{
                return(
                    <View style={{height:100,width:100,backgroundColor:item}}>
            </View>
                )
            }}
            />
        </View>
    )
}


const imageStyle = StyleSheet.create({
    heading:{
        textAlign:'center',
        fontSize:30,
        fontFamily: "sans-serif-medium"
    },
    text: {
        marginRight:15,
        marginTop:3,
        textAlign:'center',
        fontFamily:'sans-serif-light'
        
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
})
export default CounterScreen;