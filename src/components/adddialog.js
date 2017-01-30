import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';

class AddDialog extends React.Component {
  render(){
    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onTouchTap={this.props.Actions.addDlgHandleClose}
      />,
      <FlatButton
        label="Ok"
        primary={true}
        onTouchTap={this.props.Actions.addDlgHandleOk}
      />,
    ];
    return (
      <Dialog
        title="Add Todo"
        actions={actions}
        modal={true}
        open={this.props.addDlgOpen}
      >
        <TextField hintText="Header" fullWidth={true}
          defaultValue={this.props.currentTodo.header}
          floatingLabelText="Header"
          onChange={(e, newValue)=>{
            this.props.currentTodo.header = newValue;
          }}
          />
        <br />
        <TextField hintText="Content" fullWidth={true}
          defaultValue={this.props.currentTodo.content}
          floatingLabelText="Content"
          onChange={(e, newValue)=>{
            this.props.currentTodo.content = newValue;
          }}
          />
        <br />
        <DatePicker hintText="Date"
          defaultDate={this.props.currentTodo.date}
          onChange={(n, date)=>{
            this.props.currentTodo.date = date;
          }}
          />
        <br />
      </Dialog>
    )
  }
}

export default AddDialog;
