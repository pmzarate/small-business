export const addBusiness = (business) => {
    return {
        type: 'ADD_BUSINESS',
        value: addBusiness
    }
}

export const removeBusiness = (index) => {
    return {
        type: 'REMOVE_BUSINESS',
        value: index
    }
}

export const fetchMap = () => {
    return (dispatch) => {
     fetch( "place url here")
     .then (res => res.json())
     .then (response => {
         const action = {
             type: 'FETCH_MAP',
             value: response.Results
         }
         dispatch(action)
     })
    }
}