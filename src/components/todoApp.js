import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import AppBar from 'material-ui/AppBar';
import TodoList from './todolist';
// import DropDownMenu from 'material-ui/DropDownMenu';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';

import AddDialog from './adddialog';
import RemoveDialog from './removedialog';


const Filter = (props) => (
  <IconMenu
    {...props}
    iconButtonElement={
      <IconButton ><MoreVertIcon color={'white'}/></IconButton>
    }
  >
    <MenuItem primaryText="All" />
    <MenuItem primaryText="In progress" />
    <MenuItem primaryText="Done" />
  </IconMenu>
);

class TodoApp extends React.Component {
  render(){
    const addButtonStyle = {
      position:'absolute',
      bottom: '40px',
      right: '40px'
    }

    return (
      <div>
        <AppBar title="Welcome to Todo app."
          showMenuIconButton={false}
          iconElementRight={<Filter onItemTouchTap={this.props.Actions.filterChanged}/>}
        />
        <FloatingActionButton secondary={true} style={addButtonStyle}
          onClick={this.props.Actions.showAddDlg}>
          <ContentAdd />
        </FloatingActionButton>
        <TodoList { ...this.props }/>
        <AddDialog { ...this.props} />
        <RemoveDialog {...this.props} />
      </div>
    )
  }
}

export default TodoApp;
