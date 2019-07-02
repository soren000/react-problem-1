import React, { useContext } from 'react';
import AppContext from '../context/app-context';

const TextInput = () => {
    const {text, setText} = useContext(AppContext);

    return (
        <input 
            value={text} 
            onChange={(e) => setText(e.target.value)}
            className="textInput"    
        />
    )
}

export { TextInput as default };