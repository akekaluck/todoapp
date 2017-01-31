import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';

class AddDialog extends React.Component {
  constructor(){
    super();
    this.state = {
      header: '',
      content: '',
      date: new Date()
    }
  }

  titleChange(e, newValue){
    this.setState({
      ...this.state,
      header: newValue
    })
  }

  descriptionChange(e, newValue){
    this.setState({
      ...this.state,
      content: newValue
    })
  }

  dateChange(e, newValue){
    this.setState({
      ...this.state,
      date: newValue
    })
  }

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
        onTouchTap={()=>{
          this.props.Actions.addDlgHandleOk(this.state);
        }}
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
          errorText={this.props.errorMsg.header}
          onChange={this.titleChange.bind(this)}
          />
        <br />
        <TextField hintText="Content" fullWidth={true}
          defaultValue={this.props.currentTodo.content}
          floatingLabelText="Content"
          errorText={this.props.errorMsg.content}
          onChange={this.descriptionChange.bind(this)}
          />
        <br />
        <DatePicker hintText="Date"
          defaultDate={this.props.currentTodo.date}
          onChange={this.dateChange.bind(this)}
          />
        <br />
      </Dialog>
    )
  }
}

export default AddDialog;
