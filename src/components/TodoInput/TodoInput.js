import React from 'react';
import {View, StyleSheet, TextInput, TouchableOpacity, Text} from 'react-native';
import styles from "./TodoInput.style";

const TodoInput = (props) => {
    return (
        <View style={styles.container}>
            <TextInput 
                placeholder='Yapılacaklar..'
                style={styles.textInput}
                onChangeText={(text) => props.setTodo(text)}
                value={props.todo}
                />
            <TouchableOpacity style={styles.button} onPress={props.addToDo}>
                <Text style={styles.buttonText}>Kaydet</Text>
            </TouchableOpacity>
        </View>
    );
}


export default TodoInput;
