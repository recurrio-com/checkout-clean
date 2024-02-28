import React, { useContext, useEffect } from "react";
import Main from "./components/main";
import {settingsStore} from "./context/settings_store"

import myData from "./data.json";

const urlParams = new URLSearchParams(window.location.search);

export default function App() {
    let token = urlParams.get('token')
    settingsStore.setState({token: token})
    const loadSettings = settingsStore((state) => state.loadSettingsAsync)
    useEffect(() => {
        const config = loadSettings()
        
    }, [])

  return (
    <React.StrictMode>
      <Main state={null} />
    </React.StrictMode>
  );
}
