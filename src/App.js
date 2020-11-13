import React from 'react'
import Home from "./page/home";
import Login from "./page/login";
import {store} from "./store";
import * as event from './event/user'


const App = (props) => {
    const state = store.useContext();

    React.useEffect(() => {
        const onLogin = async () => {
            await event.onLogin()
        }
        onLogin()
    }, [])

    if (!state.user.info.token) {
        return <Login/>
    } else {
        return <Home/>
    }
}
export default App