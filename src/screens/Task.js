import React ,{useState} from 'react';
import { Text, StyleSheet,Button,Label,TouchableOpacity,View,ImageBackground,Image,FlatList } from 'react-native';
import ColorCounter from './Components/colorCounter';

const Task = () =>{
    const value = 10;
    const [red,setRed] = useState(0);
    const [green,setGreen] = useState(0);
    const [blue,setBlue] = useState(0);
    console.log(red);

    const colorValue = (color,valueChange) =>{
        if(color === 'red'){
            if(red + valueChange > 255 || red + valueChange < 0){
                return;
            }
            else{
                setRed(red + valueChange);
            }
        }
        switch(color){
            case 'red':
                red + valueChange > 255 || red + valueChange < 0 ? "" : setRed(red + valueChange)
                return;
            case 'green':
                green + valueChange > 255 || green + valueChange < 0 ? "" : setGreen(green + valueChange)
                return;
            case 'blue' :    
                blue + valueChange > 255 || blue + valueChange < 0 ? "" : setBlue(blue + valueChange)
                return;
        }
    }
    return(
        <View>
            
         <ColorCounter 
         color={"red"} 
         onIncrease={() => colorValue('red', value)} 
         onDecrease={() => colorValue('red', -1 *  value)}
         />
         <ColorCounter color={"green"}
         onIncrease={() => colorValue('green', value)} 
         onDecrease={() => colorValue('green', -1 * value)}
         />
         <ColorCounter color={"blue"}
         onIncrease={() => colorValue('blue' ,value)} q333333333333333e38
         onDecrease={() => colorValue('blue' , -1 * value)}
         />
          <View style={{width:100,height:100, backgroundColor: `rgb(${red},${green},${blue})`}}></View>
          
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
export default Task;