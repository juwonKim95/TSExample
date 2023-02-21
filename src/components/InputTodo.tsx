import React, { useRef, useState } from 'react';
import { dataType } from '../App';
interface InputProps {
    onAddtodo:(todo:dataType)=>void
}
const InputTodo = ({onAddtodo}:InputProps) => {
    const [text, setText] = useState("");
    const onChange = (e:React.ChangeEvent<HTMLInputElement>) => {
        const t = e.target.value;
        setText(t);
    }
    const todoid = useRef(4); //--->useRef를 사용하면 객체를 리턴한다. { current: 4 }
    const onClick = () => {
        onAddtodo({
            id: todoid.current,
            text: text,
            isDone: false
        })
        setText("");
        todoid.current++;
    }
    return (
        <div>
            <input name='todotext' value={text}
            onChange={onChange} />
            <button onClick={onClick}>등록</button>
        </div>
    );
};

export default InputTodo;