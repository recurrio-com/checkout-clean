import React, { useContext, useEffect, useState } from "react";
import Main from "./components/main";
import {settingsStore} from "./context/settings_store"

const urlParams = new URLSearchParams(window.location.search);

export default function App() {
  const [localToken, setLocalToken] = useState(null)
  const loadSettings = settingsStore((state) => state.loadSettingsAsync)

  useEffect(() => {
        let token = urlParams.get('token')
        if(!token){
          token = window.location.href.split("/").pop()
        }
        setLocalToken(token)
        settingsStore.setState({token: token})
        const config = loadSettings(token)
        console.log(token)
            
    }, [])

  return (
    <React.StrictMode>
     { localToken && <Main state={null} /> }
    </React.StrictMode>
  );
}
