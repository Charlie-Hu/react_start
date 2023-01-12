const city_reducer = (prevState = {
    city: "Perth"
}, action) => {
    // console.log(action)
    let newState = {...prevState}
    switch (action.type) {
        case"changeCity":
            newState.city = action.value
            return newState
        default:
            return prevState
    }
}
export default city_reducer