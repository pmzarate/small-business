import { connect } from 'react-redux'
import AddBusiness from '../components/AddBusiness'
import { addBusiness  } from '../redux/actions'

const mapStateToProps = (state) => {
    return {
        businesses: state.businesses
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        addBusiness: (businesses) => dispatch(addBusiness(businesses))
       //this might need to be (businesses) =>
    } 
}

export default connect(mapStateToProps, mapDispatchToProps)(AddBusiness)