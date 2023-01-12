const cinemas_reducer = (prevState = {
    list: []
}, action) => {
    // console.log(action)
    let newState = {...prevState}
    switch (action.type) {
        case"changeCinemaList":
            newState.list = action.value
            return newState
        default:
            return prevState
    }
}
export default cinemas_reducer