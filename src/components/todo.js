import React from 'react'
import { ListItem } from 'material-ui/List';

import Checkbox from 'material-ui/Checkbox';
import Paper from 'material-ui/Paper';

import Delete from 'material-ui/svg-icons/action/delete';
import Edit from 'material-ui/svg-icons/editor/mode-edit';

import IconButton from 'material-ui/IconButton';
import {red500, green500} from 'material-ui/styles/colors';

class RightButtons extends React.Component {
  render(){
    const style = {
      position: 'absolute',
      right: '10px',
      top: '9px'
    }
    const dateStyle = {
      position: 'absolute',
      right: '50px',
      top: '19px',
      fontSize: '12px',
      width: '120px'
    }

    return (
      <div style={style}>
        <div style={dateStyle}>
          {this.props.item.date?this.props.item.date.toISOString().slice(0,10):''}
        </div>
        <IconButton disabled={this.props.item.checked}
          onClick={(e)=>{this.props.showAddDlg(e, this.props.item)}}
        >
          <Edit color={green500} />
        </IconButton>
        <IconButton
          onClick={(e)=>{this.props.showRemoveDlg(e, this.props.item)}}
        >
          <Delete color={red500} />
        </IconButton>
      </div>
    )
  }
}

class Todo extends React.Component {
  constructor(){
    super();
    this.state = {
      todoStyle: {}
    }
  }

  componentDidMount(){
    this.checkTodoHasDone(this.props.item);
  }

  componentWillReceiveProps(nextProps){
    this.checkTodoHasDone(nextProps.item);
  }

  checkboxChecked(e){
    this.props.item.checked = e.target.checked
    this.checkTodoHasDone(this.props.item);
  }

  checkTodoHasDone(item){
    if(item.checked){
      this.setState({
        ...this.state,
        todoStyle: {
          backgroundColor: '#908f8f',
          textDecoration: 'line-through',
          opacity:'0.3'
        }
      })
    } else {
      this.setState({
        ...this.state,
        todoStyle: {}
      })
    }
  }

  render(){
    return (
      <Paper style={this.state.todoStyle}>
      <ListItem
        primaryText={this.props.item.title}
        secondaryText={this.props.item.description}
        leftCheckbox={
          <Checkbox defaultChecked={this.props.item.checked}
            onCheck={this.checkboxChecked.bind(this)}/>
        }
        rightIconButton={
          <RightButtons {...this.props}/>
        }
      />
      </Paper>
    )
  }
}

export default Todo;
