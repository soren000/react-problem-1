import React, { useState } from 'react';
import AppContext from './context/app-context';
import TextInput from './components/TextInput';
import './styles/main.scss';

const App = () => {
    const [text, setText] = useState('');

    document.title = "React Problem #1";

    return (
        <div className="App">
            <AppContext.Provider value={{
                text,
                setText
            }}>
                <h1>React Problem #1</h1>
                <div className="textInputContainer">
                    <TextInput />
                    <TextInput />
                </div>
                <footer>
                    <a href="https://github.com/soren000/react-problem-1" target="_blank">Github</a>
                </footer>
            </AppContext.Provider>
        </div>
    );
}

export default App;
