import React, { useEffect, useState } from 'react';
import {View, StyleSheet, Text, TouchableOpacity} from 'react-native';
import styles from "./Todo.style";

const Todo = (props) => {
    const[backgroColor, setBackgroColor] = useState('#85A35D');
    const [isActive, setIsActive] = useState(true);
    const [textdecoration, setTextdecoration] = useState('none');
    const [textColor ,setTextColor] = useState("white");



    const handleTodo= () => {
        if(isActive){
            setBackgroColor("#3A464E");
            setTextdecoration('line-through');
            setTextColor('#808080');
            props.isActive=false;
            props.setnumbOfActiveTodo(props.numbOfActiveTodo - 1);
        }else {
            setBackgroColor('#85A35D');
            setTextdecoration('none');
            setTextColor("white");
            props.isActive=true;
            props.setnumbOfActiveTodo(props.numbOfActiveTodo + 1);
        }
        setIsActive(!isActive);
    };

    return (
        <TouchableOpacity onPress={handleTodo}>
            <View style={[styles.container,{backgroundColor:backgroColor}]}>
                <Text style={[styles.title,{textDecorationLine:textdecoration,color:textColor}]}>{props.title}</Text> 
            </View>
        </TouchableOpacity>
        
    );
}


export default Todo;
