import createStore from 'redux-zero';

const TODOS = [];

const initialState = {
   todos: TODOS,
  
   selectedTodo: 0
};

const store = createStore(initialState);
export default store;
