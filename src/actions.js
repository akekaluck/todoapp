export const ADD_TODO = 'ADD_TODO';
export const ADD_TODO_VALIDATE_ERROR = 'ADD_TODO_VALIDATE_ERROR';

export const SHOW_ADD_DIALOG = 'SHOW_ADD_DIALOG';
export const CLOSE_ADD_DIALOG = 'CLOSE_ADD_DIALOG';

export const SHOW_REMOVE_DIALOG = 'SHOW_REMOVE_DIALOG';
export const CLOSE_REMOVE_DIALOG = 'CLOSE_REMOVE_DIALOG';

export const REMOVE_TODO = 'REMOVE_TODO';

export function showAddDlg(e, item){
  if(item){
    let newItem = {...item};
    return {type: SHOW_ADD_DIALOG, payload: { item: newItem, isEdit: true }};
  } else {
    return {
      type: SHOW_ADD_DIALOG,
      payload: {
        item: {
          title: '',
          description: '',
          date: new Date(),
          checked: false
        },
        isEdit: false
      }
    };
  }
}

export function addDlgHandleClose(){
  return { type: CLOSE_ADD_DIALOG}
}

export function showRemoveDlg(e, item){
  return {type: SHOW_REMOVE_DIALOG, payload: { item }};
}

export function removeDlgHandleClose(){
  return { type: CLOSE_REMOVE_DIALOG}
}

export function removeDlgHandleOk(currentTodo){
  return (dispatch) =>{
    dispatch({ type: REMOVE_TODO, payload: { currentTodo }});
    dispatch({ type: CLOSE_REMOVE_DIALOG });
  }
}

export function addDlgHandleOk(){
  return (dispatch, getState)=>{
    let currentTodo = getState().currentTodo;
    let isEdit = getState().isEdit;

    let errorMsg = {};
    let isError = false;
    if(!isEdit){
      //If new create, generate new id
      currentTodo.id = Date.now();
    }

    if(currentTodo.title === ''){
      errorMsg.title = 'This field is required';
      isError = true;
    }
    if(currentTodo.description  === ''){
      errorMsg.description = 'This field is required';
      isError = true;
    }
    if(isError){
      dispatch({type: ADD_TODO_VALIDATE_ERROR, payload: {
          errorMsg: errorMsg
      }});
    } else {
      dispatch({type: ADD_TODO, payload: {
        currentTodo,
        isEdit
      }});
      dispatch({type: CLOSE_ADD_DIALOG});
    }
  }
}
