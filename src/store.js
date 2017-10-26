import createStore from 'redux-zero';

const TODOS = [];
const POST =[];
const initialState = {
   todos: TODOS,
    post:POST,
   selectedTodo: -1
};

const store = createStore(initialState);
export default store;
