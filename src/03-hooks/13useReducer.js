import React, {useReducer} from 'react';

const reducer = (prevState, action) => {
  console.log(action, prevState)
  const newState = { ...prevState }

  switch (action.type) {
    case "minus":
      newState.count -= 1
      break 
    case "plus":
      newState.count += 1
      break
    default:
      return prevState
  }
  return newState
}

const intialState={
    count:0
}
export default function App(props){
    const[state, dispatch]= useReducer(reducer,intialState)
    return (
        <div>
            <button onClick={()=>{dispatch({
                type:"minus"
            })}}>-</button>
            {state.count}
            <button onClick={()=>dispatch({
                type:"plus"
            })}>+</button>
        </div>
    );
}

