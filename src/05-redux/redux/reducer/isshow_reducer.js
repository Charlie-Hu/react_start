const isshow_reducer = (prevState = {
    show: true,
}, action) => {
    // console.log(action)
    let newState = {...prevState}
    switch (action.type) {
        case "tabbar_hide":
            newState.show = false
            return newState
        case "tabbar_show":
            newState.show = true
            return newState
        default:
            return prevState
    }
}
export default isshow_reducer