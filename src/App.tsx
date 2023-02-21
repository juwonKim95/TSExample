import { useReducer } from 'react';
import './App.css';
import InputTodo from './components/InputTodo';
import ReducerSample from './components/ReducerSample';
import ReducerSampleEdit from './components/ReducerSampleEdit';
import TodoLists from './components/TodoLists';
import SampleContext from './context/SampleContext';

const initialState = [
  {
    id:1,
    text:"자바스크립트 공부",
    isDone: false
  },
  {
    id:2,
    text:"타입스크립트 공부",
    isDone: false
  },
  {
    id:3,
    text:"이력서,자소서 쓰기",
    isDone: false
  }
];
type Action ="ADDTODO" |  "DELTODO" |  "TOGGLETODO"
interface actionType {
  type: Action;
  todo?:dataType;
  id?: number;
}
export interface dataType {
  id: number;
  text: string;
  isDone: boolean;
}
function reducer(state:dataType[],action:actionType):dataType[]{
  switch(action.type){
    case "ADDTODO":
      return [
        ...state,
        action.todo!
      ];
    case "DELTODO":
      return (state as Array<dataType>).filter(li=>li.id !== action.id);
    case "TOGGLETODO":
      return (state as Array<dataType>).map(li=>li.id === action.id ? {...li, isDone: !li.isDone}: li);
    default:
      return state;
  }
}
function App() {
  // const onClick = (name: string) => {
  //   console.log(`${name} hi`);
  // }
  // const onFormSubmit = (form:{name: string, desc: string}) => {
  //   console.log(form);
  // }
  const [todos, dispatch] = useReducer(reducer,initialState);
  const onAddtodo = (todo:dataType) => {
    dispatch({type:"ADDTODO",todo: todo})
  }
  const onToggletodo = (id:number) => {
    dispatch({type:"TOGGLETODO", id:id })
  }
  const onDeltodo = (id:number) => {
    dispatch({type:"DELTODO", id:id})
  }
  return (
    <div className="App">
      {/* <Hello name="green" message="안녕하세요?" onClick={onClick}/>
      <Counter />
      <MyForm onFormSubmit={onFormSubmit}/>
      <CounterReducer /> */}
      {/* <InputTodo onAddtodo={onAddtodo} />
      <TodoLists todos={todos} onToggletodo={onToggletodo}
      onDeltodo={onDeltodo}/> */}
      {/* <ReducerSample/> */}
      <SampleContext>
        <ReducerSampleEdit />
      </SampleContext>
    </div>
  );
}

export default App;
