export const ADD_TODO = 'ADD_TODO';
export const ADD_TODO_VALIDATE_ERROR = 'ADD_TODO_VALIDATE_ERROR';

export const SHOW_ADD_DIALOG = 'SHOW_ADD_DIALOG';
export const CLOSE_ADD_DIALOG = 'CLOSE_ADD_DIALOG';

export const SHOW_REMOVE_DIALOG = 'SHOW_REMOVE_DIALOG';
export const CLOSE_REMOVE_DIALOG = 'CLOSE_REMOVE_DIALOG';

export const TODO_CHECKED = 'TODO_CHECKED';
export const TODO_UNCHECKED = 'TODO_UNCHECKED';

export function showAddDlg(e, item){
  if(item){
    return {type: SHOW_ADD_DIALOG, payload: { item, isEdit: true }};
  } else {
    return {type: SHOW_ADD_DIALOG, payload: { item: {
        header: '', content: '', date: new Date()
      }, isEdit: false
    }};
  }
}

export function showRemoveDlg(item){
  return {type: SHOW_REMOVE_DIALOG, payload: { item }};
}

export function addDlgHandleClose(){
  return { type: CLOSE_ADD_DIALOG}
}

export function addDlgHandleOk(currentTodo){
  return (dispatch, getState)=>{
    // let currentTodo = getState().currentTodo;
    let isEdit = getState().isEdit;
    let errorMsg = {};
    let isError = false;

    if(!isEdit){
      currentTodo.id = Date.now();
    }

    if(currentTodo.header === ''){
      errorMsg.header = 'This field is required';
      isError = true;
    }
    if(currentTodo.content  === ''){
      errorMsg.content = 'This field is required';
      isError = true;
    }
    if(isError){
      dispatch({type: ADD_TODO_VALIDATE_ERROR, payload: {
          errorMsg: errorMsg
      }});
    } else {
      dispatch({type: ADD_TODO, payload: {
        newTodo: currentTodo,
        isEdit
      }});
      dispatch({type: CLOSE_ADD_DIALOG});
    }
  }
}
