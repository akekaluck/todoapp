export const ADD_TODO = 'ADD_TODO';
export const TODO_CHECKED = 'TODO_CHECKED';
export const TODO_UNCHECKED = 'TODO_UNCHECKED';

export function addTodo(){
  console.log('addTodo called');
  return (dispatch, getState)=>{
    dispatch({type: ADD_TODO});
  }
}
