import React, { useRef, useState } from 'react';
import { useTodoDispatch } from '../context/TodoContext2';

const TodoInput = () => {
    //인풋의 값을 관리할 상태생성
    const [text,setText] = useState("");
    const dispatch = useTodoDispatch(); //useContext ---> dispatch리턴
    //인풋의 값이 변경될때 호출되는 함수
    //text값을 인풋의 값으로 업데이트
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const t = e.target.value;
        setText(t)
    }
    const ref = useRef(4);
    const onAddTodo = () => {
        dispatch({type:"ADDTODO", todo:{
            id:ref.current,
            text:text,
            isDone:false
        }})
        //text초기화
        setText("");
        //ref.current값1씩 증가
        ref.current++;
    }
    return (
        <div>
            <input name='text' value={text} onChange={onChange}/>
            <button>등록</button>
        </div>
    );
};

export default TodoInput;