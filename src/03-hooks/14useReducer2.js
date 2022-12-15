import React, {useContext, useReducer} from 'react';

const Globalcontext = React.createContext()

const reducer=(prevState,action)=>{
    const newState = { ...prevState }
    switch (action.type){
        case "change1":
            newState.a=action.value
            break
        case "change2":
            newState.b=action.value
            break
        default:
            return prevState
    }
    return newState
}
const intialState={
    a:"111111",
    b:"222222"
}

export default function App() {
    const [state, dispatch] = useReducer(reducer, intialState)
    return (
        <Globalcontext.Provider value={
            {
                dispatch,
                state
            }
        }>
            <div>
                <Child1></Child1>
                <Child2></Child2>
                <Child3></Child3>
            </div>
        </Globalcontext.Provider>
    )
}

function Child1() {
    const {dispatch} = useContext(Globalcontext)
    return (
        <div>
            <button onClick={()=>{dispatch({
                type:"change1",
                value:"12345"
            })}}>change 1</button>
            <button onClick={()=>{dispatch({
                type:"change2",
                value:"54321"
            })}}>change 2</button>
        </div>
    )
}

function Child2() {
    const {state} = useContext(Globalcontext)
    return (
        <div>
            child2-{state.a}
        </div>
    )
}

function Child3() {
    const {state} = useContext(Globalcontext)
    return (
        <div>
            child3-{state.b}
        </div>
    )
}


