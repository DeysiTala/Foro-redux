import React, { Component } from 'react';
import './App.css';

import { addTodo } from './actions';
import { connect } from 'redux-zero/react';
import './App.css';

const App = ({ todos }) => {
  const todoList = todos.map(todo => <li key={todo.id}> {todo.text} </li>);
  const onSubmit = e => {
     e.preventDefault();
     addTodo(this.refInput.value);
  };
   
   return (
      <div clasName ="container ">
        <div className ="row" >
          <div className ="col-xs-12 formulario">
         <form onSubmit={onSubmit}>
         <div className="form-group">
           <label > </label>
           <input 
           type="text"
           name="name" 
           className="form-control" 
           placeholder="Escribe tu nombre"
                       
          ref={e => (this.refInput = e)} />
         </div>
         <div className="form-group">
           <label>Comentario :</label>
           <textarea className="form-control textarea" placeholder="Escribe tu comentario"> </textarea>
         </div>
         <button type="submit" className="btn btn-primary">Postear</button>
       </form>
       </div>
       </div>
       <div className="main">
            
            <ul id="invitedList">{todoList}</ul>
         </div>
       </div>
      
   );
};

const mapToProps = ({ todos }) => ({ todos });

export default connect(mapToProps)(App);

