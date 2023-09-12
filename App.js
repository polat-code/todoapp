import React, { useEffect, useState } from 'react';
import {View, StyleSheet, SafeAreaView, Text, FlatList} from 'react-native';
import Header from './src/components/Header';
import Todo from './src/components/Todo/Todo';
import TodoInput from './src/components/TodoInput/TodoInput';

const App = () => {
  const [todos, setTodos] = useState([]);
  const [todo, setTodo] = useState("");
  const [numbOfActiveTodo, setnumbOfActiveTodo] = useState(0);
  
  const toDoSeparator = () => {
    return(<View style={styles.separator}></View>)
  }

  useEffect(() => {
    handleNumOfItems();
  }, [todos])
  

  const handleAddTodo = () => {
    if(todo) {
      setTodos([...todos, { title: todo, isActive:true }]);
      setTodo("");
    }
    
  }

  const handleNumOfItems = () => {
    const isActiveTodos = todos.filter((todo) => todo.isActive)
    setnumbOfActiveTodo(isActiveTodos.length);
  }

  return (
    <SafeAreaView style={styles.container}>
      <Header numOfItem={numbOfActiveTodo}/>
      <FlatList
        style={styles.flatList}
        data={todos}
        renderItem={({item}) => <Todo title={item.title} isActive={item.isActive} numbOfActiveTodo={numbOfActiveTodo} setnumbOfActiveTodo={setnumbOfActiveTodo}/>}
        ItemSeparatorComponent={toDoSeparator}
      />
      
      <TodoInput addToDo={handleAddTodo} setTodo={setTodo} todo={todo} />
      
     
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    backgroundColor:'#142026'
  },
  flatList: {
    margin:15,
  },
  separator: {
    marginVertical:10
  },
  
})

export default App;
