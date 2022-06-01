import React ,{useReducer} from 'react';
import { Text, StyleSheet,Button,Label,TouchableOpacity,View,ImageBackground,Image,FlatList } from 'react-native';
import ColorCounter from './Components/colorCounter';

const reducer = (state,action) =>{
        //state = {red = 0,green = 0,blue = 0}
        //action = {colorToChange: red || green || blue, amount: +15 || -15}
    switch(action.colorToChange){
        case 'red':
            return {...state, red: state.red + action.amount };
        case 'green':
            return {...state, green: state.green + action.amount };
        case 'blue':
            return {...state, blue: state.blue + action.amount };
    }

};
const ReducerOne     = () =>{
   const count = 10;
    const [state,dispatch] = useReducer(reducer,{red:0,green:0,blue:0});

    console.log(state);
   
    return(
        <View>
            
         <ColorCounter 
         color={"red"} 
         onIncrease={() => dispatch({colorToChange:'red', amount: count})}
         onDecrease={() => dispatch({colorToChange:'red', amount: -1 * count})}
         />
         <ColorCounter 
         color={"green"}
         onIncrease={() => dispatch({colorToChange:'green', amount: count})}
         onDecrease={() => dispatch({colorToChange:'green', amount: -1 * count})}
         />
         <ColorCounter 
       onIncrease={() => dispatch({colorToChange:'red', amount: count})}
       onDecrease={() => dispatch({colorToChange:'red', amount: -1 * count})}
         />
          
          
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
export default ReducerOne;