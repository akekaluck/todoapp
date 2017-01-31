import * as Actions from './actions'

const InitialState = {
  filter: {},
  addDlgOpen: false,
  isEdit: false,
  todos: [
    {id: 1, header: 'test', content: 'content', checked: false},
    {id: 2, header: 'test', content: 'content', checked: true}
  ],
  currentTodo: {},
  errorMsg: {}
}

const AddTodo = (state, action) => {
  let result = {...state};
  if(action.payload.isEdit){
    //Edit todo
    console.log('Edit: ', action.payload.newTodo);
    let newTodo = action.payload.newTodo;
    result.todos = result.todos.map((item)=>{
      if(item.id === newTodo.id){
        item.header = newTodo.header;
        item.content = newTodo.content;
        item.date = newTodo.date;
      }
      return item;
    })
  } else {
    //Add todo
    result.todos.push(action.payload.newTodo);
  }
  return result;
}

const todoApp = (state = InitialState, action)=>{
  switch(action.type){
    case Actions.SHOW_ADD_DIALOG:
      return {...state, addDlgOpen: true,
        currentTodo: action.payload.item,
        isEdit: action.payload.isEdit,
        errorMsg: {}
      }
    case Actions.CLOSE_ADD_DIALOG:
      return {...state, addDlgOpen: false}

    case Actions.ADD_TODO:
      return AddTodo(state, action)

    case Actions.ADD_TODO_VALIDATE_ERROR:
      return {...state, errorMsg: action.payload.errorMsg};

    default:
      return state
  }
}

export default todoApp;
