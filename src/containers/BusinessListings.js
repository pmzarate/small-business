
import { connect } from 'react-redux'
import BusinessListings from '../components/BusinessListings'
import { removeBusiness } from '../redux/actions'

const mapStateToProps = (state) => {
  return {
    businesses: state.businesses,
    user: state.user
  };
}

const mapDispatchToProps = (dispatch) => {
  return {
    removeBusiness: index => dispatch(removeBusiness(index))
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(BusinessListings);