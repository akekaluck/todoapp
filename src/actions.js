export const ADD_TODO = 'ADD_TODO';

export const SHOW_ADD_DIALOG = 'SHOW_ADD_DIALOG';
export const CLOSE_ADD_DIALOG = 'CLOSE_ADD_DIALOG';

export const TODO_CHECKED = 'TODO_CHECKED';
export const TODO_UNCHECKED = 'TODO_UNCHECKED';

export function showAddDlg(){
  return {type: SHOW_ADD_DIALOG};
}

export function addDlgHandleClose(){
  return { type: CLOSE_ADD_DIALOG}
}

export function addDlgHandleOk(){
  return (dispatch, getState)=>{
    dispatch({type: ADD_TODO, payload: {
      newTodo: getState().currentTodo
    }});
    dispatch({type: CLOSE_ADD_DIALOG});
  }
}
