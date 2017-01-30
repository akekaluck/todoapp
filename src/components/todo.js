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
    return (
      <div style={style}>
        <IconButton>
          <Edit color={green500}/>
        </IconButton>
        <IconButton>
          <Delete color={red500}/>
        </IconButton>
      </div>
    )
  }
}

class Todo extends React.Component {
  render(){
    return (
      <Paper>
      <ListItem
        primaryText={this.props.item.header}
        secondaryText={this.props.item.content}
        leftCheckbox={
          <Checkbox defaultChecked={this.props.item.checked}
            onCheck={(e)=>{this.props.item.checked = e.target.checked}}/>
        }
        rightIconButton={
          <RightButtons />
        }
      />
      </Paper>
    )
  }
}

export default Todo;
