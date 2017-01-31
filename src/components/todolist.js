import React from 'react'
import { List } from 'material-ui/List';
import Todo from './todo'

class TodoList extends React.Component {
  render(){
    let i = 0;
    let currentTodos = this.props.todos.map((item)=>{
      return <Todo key={i++} item={item}
        showAddDlg={this.props.Actions.showAddDlg}
        showRemoveDlg={this.props.Actions.showRemoveDlg}
      />
    })
    return (
      <List>
        { currentTodos }
      </List>
    )
  }
}

export default TodoList;
