import React from 'react';
import {View,Text,StyleSheet,FlatList} from 'react-native';
import { backgroundColor } from 'react-native/Libraries/Components/View/ReactNativeStyleAttributes';


function ListPage() {
    const StudentList = [
        {name:'aaa',age:20},{name:'bbb',age:45},{name:'eee',age:32},{name:'xxx',age:27},{name:'ddd',age:53}, {name:'vvv',age:30},{name:'www',age:65},{name:'qqq',age:21},
    ]
    return (
        <View>
            <Text style={style.heading}>Student List</Text>
            <FlatList
                keyExtractor={(i) =>i.name }
                data={StudentList}
                renderItem={({item}) =>{
                    return (
                        <Text style={style.list}>Name{item.name}-- Age{item.age}</Text>
                        
                    )
                }}

            />
        </View>
       
    );
}

const style = StyleSheet.create({
    list:{
        textAlign:'center',
        fontSize:30,
        marginVertical:50,
        
    },
    heading:{
        fontSize:25,
        textAlign:'center',
        backgroundColor:'#655bd9',
        width:300,
        marginLeft:50,
    }
})

export default ListPage;