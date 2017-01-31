import * as Actions from './actions'

const InitialState = {
  filter: {},
  addDlgOpen: false,
  isEdit: false,
  removeDlgOpen: false,
  todos: [
    {id: 1, title: 'test', description: 'description', date:new Date(), checked: false},
    {id: 2, title: 'test', description: 'description', date:new Date(), checked: true}
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
        item.title = newTodo.title;
        item.description = newTodo.description;
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

const RemoveTodo = (state, action)=>{
  let result = {...state};
  let removeTodo = action.payload.currentTodo;
  result.todos = result.todos.filter((item)=>{
    if(item.id === removeTodo.id){
      return false;
    }
    return true;
  })
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

    case Actions.SHOW_REMOVE_DIALOG:
      return {...state,
        currentTodo: action.payload.item,
        removeDlgOpen: true
      }

    case Actions.CLOSE_REMOVE_DIALOG:
      return {...state,
        removeDlgOpen: false
      }

    case Actions.ADD_TODO:
      return AddTodo(state, action)

    case Actions.REMOVE_TODO:
      return RemoveTodo(state, action)

    case Actions.ADD_TODO_VALIDATE_ERROR:
      return {...state, errorMsg: action.payload.errorMsg};

    default:
      return state
  }
}

export default todoApp;
