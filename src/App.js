import React, { useState, useEffect } from 'react';
import {Button, FormControl, InputLabel, Input} from '@material-ui/core';
import Todo from './Todo'
import './App.css';
import db from './firebase';
import firebase from 'firebase'; 

function App() {
  const [todos , setTodos] = useState([]);
  const [input , setInput] = useState(['']);

  //when the app loads we need to listen to database and fetch the data Added/removed.
  useEffect(() =>{
      //this code fires up when the app.js loads.
    db.collection('todos').orderBy('timestamp', 'desc').onSnapshot(snapshot =>{
      setTodos(snapshot.docs.map(doc => ({id: doc.id, todo: doc.data().todo})))
    })
  },[])

  const addTodos =(event) => {
    event.preventDefault();//will stop refresh
    db.collection('todos').add({
      todo: input,
      timestamp: firebase.firestore.FieldValue.serverTimestamp()
    })
    setTodos([...todos, input]);
    setInput('');//clear input after hitting todo button
  }

  return (
    <div className="App">
      <h1>Welcome to my TodoApp🙂 </h1>
      <form>
      {/* <input value={input} type="text" onChange={event=> setInput(event.target.value)}/> */}
      <FormControl>
        <InputLabel htmlFor="my-input">✅ Write Here</InputLabel>
        <Input  value={input} type="text" onChange={event=> setInput(event.target.value)} />
  
      </FormControl>
      {/* <button onClick={addTodos}>Add Todo</button> */}
      <Button disabled={!input} type='submit' onClick={addTodos} variant="contained" color="primary">
      Add Todo
      </Button>
      </form>

      <ul>
        {todos.map(todo=>(
          <Todo todo={todo}/>
        ))}       
      </ul>
    </div>
  );
}

export default App;
