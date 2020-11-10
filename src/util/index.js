import config from "../conf";
import {createBrowserHistory} from 'history';

export const history = createBrowserHistory()

export const goPage = (path) => {
    history.push(path)
    history.go()
}
export const log = (msg) => {
    if (config.DEBUG) {
        console.log(msg)
    }
}