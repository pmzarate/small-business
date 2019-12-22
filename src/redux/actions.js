export const addBusiness = (addBusiness) => {
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

