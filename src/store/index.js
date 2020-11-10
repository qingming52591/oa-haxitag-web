import {createStore, combineReducers} from '../util/redux'
import * as page from "./page"
import * as user from './user'
import * as setting from './setting'

export const actions = {
    page: page.action,
    user: user.action,
    setting: setting.action
}

export const {store, Provider} = createStore(
    combineReducers({
        page: page.reducer,
        user: user.reducer,
        setting: setting.reducer,

    }),
    {
        page: page.state,
        user: user.state,
        setting: setting.state
    }
)
