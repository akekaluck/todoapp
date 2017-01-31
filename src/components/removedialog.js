import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';

class RemoveDialog extends React.Component {

  render(){
    const actions = [
      <FlatButton
        label="No"
        primary={true}
        onTouchTap={this.props.Actions.removeDlgHandleClose}
      />,
      <FlatButton
        label="Yes"
        primary={true}
        onTouchTap={()=>{
          this.props.Actions.removeDlgHandleOk(this.props.currentTodo);
        }}
      />,
    ];
    return (
      <Dialog
        title="Are you sure to remote this Todo?"
        actions={actions}
        modal={true}
        open={this.props.removeDlgOpen}
      >
        {this.props.currentTodo.title}
      </Dialog>
    )
  }
}

export default RemoveDialog;
