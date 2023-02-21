import React, { useReducer } from 'react';

//color를 타입으로 지정
type Color = 'red' | 'pink' | 'yellow';
//상태타입지정
type State = {
    count : number;
    text : string;
    color : Color;
    isGood:boolean;
}

//액션타입지정
type Action = {type:'SET_COUNT'; count:number}
    | {type:'SET_TEXT'; text:string}
    | {type:'SET_COLOR'; color:Color}
    | {type:'SET_GOOD'; }

//매개변서는 타입지정!!
//리턴값이 있는 경우는 리턴값의 타입을 지정!!    
function reducer(state:State, action:Action):State{
    switch(action.type){
        case "SET_COUNT":
            return{
                ...state,
                count:action.count
            }
        case "SET_COLOR":
            return{
                 ...state,
                color:action.color
            }
        case "SET_TEXT":
            return{
                ...state,
                text:action.text
            }     
        case "SET_GOOD":
            return{
                ...state,
                isGood: !state.isGood
            }               
        default:
            return state;    
    }
}   
const ReducerSample = () => {
    const [state,dispatch] = useReducer(reducer,{
        count:0,
        text:"green",
        color:"pink",
        isGood:true
    })
    const setCount = () => dispatch({type:"SET_COUNT", count:5});
    const setText = () => dispatch({type:"SET_TEXT",text:"blue"});
    const setColor = () => dispatch({type:"SET_COLOR",color:"yellow"});
    const setToggle = () => dispatch({type:"SET_GOOD"});
    return (
        <div>
           <p>count: {state.count} </p>
           <p>text: {state.text} </p>
           <p>color: {state.color} </p>
           <p>isGood: {state.isGood ? "ture" : "false"} </p>
           <div>
            <button onClick={setCount}>SET_COUNT</button>
            <button onClick={setText}>SET_TEXT</button>
            <button onClick={setColor}>SET_COLOR</button>
            <button onClick={setToggle}>TOGGLE_GOOD</button>
           </div>
        </div>
    );
};

export default ReducerSample;