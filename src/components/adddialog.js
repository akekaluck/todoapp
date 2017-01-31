import React from 'react';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import TextField from 'material-ui/TextField';
import DatePicker from 'material-ui/DatePicker';

class AddDialog extends React.Component {
  constructor(){
    super();
    this.state = {
      title: '',
      content: '',
      date: new Date()
    }
  }

  titleChange(e, newValue){
    this.setState({
      ...this.state,
      title: newValue
    })
  }

  descriptionChange(e, newValue){
    this.setState({
      ...this.state,
      description: newValue
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
        <TextField hintText="Title" fullWidth={true}
          defaultValue={this.props.currentTodo.title}
          floatingLabelText="Title"
          errorText={this.props.errorMsg.title}
          onChange={this.titleChange.bind(this)}
          />
        <br />
        <TextField hintText="Content" fullWidth={true}
          defaultValue={this.props.currentTodo.description}
          floatingLabelText="Content"
          errorText={this.props.errorMsg.description}
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
