import React from 'react'
import { List } from 'material-ui/List';
import Todo from './todo'

class TodoList extends React.Component {

  render(){
    let i = 0;
    let currentTodos = this.props.todos.filter((item)=>{
      if(this.props.filterBy === 'In progress'){
        return (item.checked)?false:true;
      } else if(this.props.filterBy === 'Done'){
        return (!item.checked)?false:true;
      } else {
        return true;
      }
    })
    currentTodos = currentTodos.map((item)=>{
      return <Todo key={i++} item={item}
        showAddDlg={this.props.Actions.showAddDlg}
        showRemoveDlg={this.props.Actions.showRemoveDlg}
        calculateSummary={this.props.Actions.calculateSummary}
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
