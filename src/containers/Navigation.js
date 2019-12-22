import { connect } from 'react-redux'
import Navigation from '../components/Navigation'
import { withRouter } from 'react-router-dom'


const mapStateToProps = state => ({
    user: state.user
  });

export default withRouter(connect(mapStateToProps, null)(Navigation));