import React, { useReducer } from 'react';

type Action = { type: "INCREASE"} | {type: "DECREASE"}
function reducer(state: number,action: Action):number{
    switch(action.type){
        case "INCREASE":
            return state+1;
        case "DECREASE":
            return state-1;
        default:
            return state;
    }
}
const CounterReducer = () => {
    const [ count, dispatch ] = useReducer(reducer,0);
    const onIncrease = () => { dispatch({type: 'INCREASE'})};
    const onDecrease = () => { dispatch({type: 'DECREASE'})};
    return (
        <div>
            <h2>{count}</h2>
            <div>
                <button onClick={onIncrease}>+</button>
                <button onClick={onDecrease}>-</button>
            </div>
        </div>
    );
};

export default CounterReducer;