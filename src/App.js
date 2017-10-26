import React, { Component } from 'react';
import './App.css';

import { addTodo } from './actions';
import { connect } from 'redux-zero/react';
import './App.css';

const App = ({ todos, post }) => {
   const todoList = todos.map(todo => <li key={todo.id}> {todo.text} </li>);
   const postList = post.map(posts => <li key={posts.id}> {post.text}</li>);
   const onSubmit = e => {
      e.preventDefault();
      addTodo(this.refInput.value);
   };
   return (
      <div>
         <header>
            
            <p> foro</p>
            
            <form onSubmit={onSubmit}>
               <input
                  type="text"
                  name="name"
                  placeholder="Escribe tu nombre"
                  ref={e => (this.refInput = e)}
               />
               <br/>
            <input
            type= "text"
            name= "name"
            placeholder="escribe tu comentario"
            ref={e => (this.refInput = e)}
            />
               
           
           
                <button type="submit" name="submit" value="submit">
                  Submit
               </button>
                </form>
         </header>
         <div className="main">
            <h2>Invitees</h2>
            <ul id="invitedList">{todoList}</ul>
         </div>
      </div>
   );
};

const mapToProps = ({ todos }) => ({ todos });

export default connect(mapToProps)(App);

