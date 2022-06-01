import React ,{useState}from 'react';
import {Text,Button,StyleSheet,View,SafeAreaView,TextInput,TouchableOpacity} from 'react-native'



const MainPage = () =>{
    var username = 'Rani'
    const [textFiled1,setTextFiled1] = useState('');
    const [textFiled2,setTextFiled2] = useState('')
    const handleClick = () =>{
      alert(textFiled1)
      alert(textFiled2)

         
    }
    
    return (
        <SafeAreaView>
                <Text style={style1.textstyle}>Getting started with react native!</Text>
                    <Text style={style1.username}>Login</Text>
                    <TextInput
                        style={style1.textbox}
                        onChangeText={(text) => setTextFiled1(text)}
                        placeholder="username"
                        value={textFiled1}
                    >

                    </TextInput>
                    <TextInput
                        style={style1.textbox}
                        onChangeText={(textFiled2) => {setTextFiled2(textFiled2)} }
                        placeholder="password"
                        value={textFiled2}
                        secureTextEntry={true}
                    >

                    </TextInput>
                    <TouchableOpacity>
                        <Text style={style1.forgot_button}>Forgot Password?</Text>
                    </TouchableOpacity>
                   <View>
                    <TouchableOpacity 
                            title="Login"
                            color="red"
                            style={style1.button}
                            onPress={handleClick}
                        >
                            <Text style={style1.textname}>Login</Text>
                        </TouchableOpacity>
                        </View>
                        {/* <Text>{textFiled1}</Text>
                        <Text>{textFiled2}</Text> */}
                    

        </SafeAreaView>
            
      
        
    )
    
}
const style1 = StyleSheet.create({
    textstyle:{
        color:'#366c9e',
        fontSize:45,
        textAlign:'center',
    justifyContent: 'center',
    },
    username:{
        fontSize:20,
        color:"#6159c2",
        
        textAlign:'center'
    },
    button:{
        marginRight: 40,
  marginLeft: 40,
  marginTop: 10,
  paddingTop: 20,
  paddingBottom: 20,
  backgroundColor: '#68a0cf',
  borderRadius: 30,
  borderWidth: 1,
  borderColor: '#fff',

    },
    textname:{
        textAlign:'center',
        fontSize:20
    },
    textbox:{
        height: 40,
    margin: 12,
    borderWidth: 3,
    padding: 10,
    borderRadius:30
    },
    forgot_button:{
        height:30,
        textAlign:'center'
    }
})




export default MainPage;