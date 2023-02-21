import React from 'react';

interface HelloProp {
    name: string;
    message?: string;
    //void 아무것도 리턴하지 않는다.
    onClick: (name: string) => void;
}
const Hello = ({name,message,onClick}:HelloProp) => {
    return (
        <div>
            <h2>{name}</h2>
            <p>{message}</p>
            <div>
                <button onClick={()=>onClick(name)}>클릭하세요!</button>
            </div>
        </div>
    );
};

export default Hello;