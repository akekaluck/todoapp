import React from 'react'
import Badge from 'material-ui/Badge';
import IconButton from 'material-ui/IconButton';
import IconMenu from 'material-ui/IconMenu';
import MoreVertIcon from 'material-ui/svg-icons/navigation/more-vert';
import MenuItem from 'material-ui/MenuItem';

class Filter extends React.Component {
  render(){
    return (
      <div>
        <Badge
          badgeContent={this.props.totalDone}
          badgeStyle={{backgroundColor:'#4CAF50', color:'white'}}
          style={{top:'12px', right: '20px'}}
        />
        <Badge
            badgeContent={this.props.totalInProgress}
            secondary={true}
            style={{top:'12px', right: '20px'}}
          />
        <IconMenu
          {...this.props}
          iconButtonElement={
            <IconButton ><MoreVertIcon color={'white'}/></IconButton>
          }
        >
          <MenuItem primaryText="All" />
          <MenuItem primaryText="In progress" />
          <MenuItem primaryText="Done" />
        </IconMenu>
      </div>
    )
  }
}

export default Filter;
