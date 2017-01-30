import * as Actions from './actions'

const InitialState = {
  filter: {},
  todos: [
    {header: 'test', text: 'content', checked: false},
    {header: 'test', text: 'content', checked: true}
  ]
}

const todoApp = (state = InitialState, action)=>{
  switch(action.type){
    case Actions.ADD_TODO:
      return {...state}
    default:
      return state
  }
}

export default todoApp;
