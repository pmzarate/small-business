import { connect } from 'react-redux'
import Navigation from '../components/Navigation'


const mapStateToProps = state => ({
    user: state.user
  });

export default (connect(mapStateToProps)(Navigation));