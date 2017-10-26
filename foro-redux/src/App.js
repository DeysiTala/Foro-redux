import React, { Component } from 'react';
import './App.css';

import { addTodo } from './actions';
import { connect } from 'redux-zero/react';
import './App.css';

const App = ({ todos, posts }) => {
 
   
   return (
      <div clasName ="container ">
        <div className ="row" >
          <div className ="col-xs-12 formulario">
         <form>
         <div className="form-group">
           <label > </label>
           <input type="text" className="form-control" placeholder="Escribe tu nombre" />
         </div>
         <div className="form-group">
           <label>Comentario:</label>
           <textarea className="form-control textarea" value="Escribe tu comentario"> </textarea>
         </div>
         <button type="submit" className="btn btn-primary">Postear</button>
       </form>
       </div>
       </div>
       </div>
      
   );
};

const mapToProps = ({ todos }) => ({ todos });

export default connect(mapToProps)(App);

