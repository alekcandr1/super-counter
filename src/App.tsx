import React, { useState } from 'react';
import './App.css';
import { Logo } from './components/Logo';
import { Finish } from './components/finish/Finish';
import { Counter } from './components/counter/Counter';
import { Settings } from './components/settings/Settings';

function App() {

    const [isActiveSettingMode, setIsActiveSettingMode] = useState(false)

    return <div className="App">
        <Logo />
        <Settings isActiveSettingMode={ isActiveSettingMode }
                  setIsActiveSettingMode={ setIsActiveSettingMode } />

        <Counter isActiveSettingMode={ isActiveSettingMode } />
        <Finish />
    </div>
}

export default App;
