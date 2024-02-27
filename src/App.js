import React, {useContext, useEffect} from 'react';
import Main from "./components/main";
import myData from './data.json';
import {MainStore} from './context/main_context'

export default function App() {    
    useEffect(() => {
    }, []);

    return (
        <React.StrictMode>
            <MainStore>
                <Main state={null} />
            </MainStore>
        </React.StrictMode>
    );
}
