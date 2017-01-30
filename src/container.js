import todoApp from './components/todoApp'
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import * as Actions from './actions';

// Connect component
const mapStateToProps = (state)=> {
    return {...state };
}

const mapDispatchToProps = (dispatch, ownProps) => {
    return {
      Actions: bindActionCreators({
        ...Actions
      }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(todoApp);
