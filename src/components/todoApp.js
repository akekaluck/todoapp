import React from 'react'
import FloatingActionButton from 'material-ui/FloatingActionButton';
import ContentAdd from 'material-ui/svg-icons/content/add';
import AppBar from 'material-ui/AppBar';
import TodoList from './todolist';

import Filter from './filter';
import AddDialog from './adddialog';
import RemoveDialog from './removedialog';

class TodoApp extends React.Component {
  componentDidMount(){
    this.props.Actions.calculateSummary();
  }
  render(){
    const addButtonStyle = {
      position:'absolute',
      bottom: '40px',
      right: '40px'
    }
    const {filterBy, totalDone, totalInProgress} = this.props;

    return (
      <div>
        <AppBar title="Welcome to Todo app."
          showMenuIconButton={false}
          iconElementRight={
            <Filter
              onItemTouchTap={this.props.Actions.filterChanged}
              filterBy={filterBy}
              totalDone={totalDone}
              totalInProgress={totalInProgress}
            />
          }
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
