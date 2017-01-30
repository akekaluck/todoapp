import * as Actions from './actions'

const InitialState = {
  filter: {},
  addDlgOpen: false,
  todos: [
    {header: 'test', content: 'content', checked: false},
    {header: 'test', content: 'content', checked: true}
  ],
  currentTodo: {}
}

const AddTodo = (state, action) => {
  let result = {...state};
  result.todos.push(action.payload.newTodo);
  return result;
}

const todoApp = (state = InitialState, action)=>{
  switch(action.type){
    case Actions.SHOW_ADD_DIALOG:
      return {...state, addDlgOpen: true, currentTodo:{
        header: '', content: '', date: new Date()
      }}
    case Actions.CLOSE_ADD_DIALOG:
      return {...state, addDlgOpen: false}

    case Actions.ADD_TODO:
      return AddTodo(state, action)

    default:
      return state
  }
}

export default todoApp;
