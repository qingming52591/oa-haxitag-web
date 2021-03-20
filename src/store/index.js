import {createStore, combineReducers} from '../util/redux'
import * as page from "./page"
import * as user from './user'
import * as setting from './setting'
import * as spider from './spider'

export const actions = {
    page: page.action,
    user: user.action,
    setting: setting.action,
    spider: spider.action
}

export const {store, Provider} = createStore(
    combineReducers({
        page: page.reducer,
        user: user.reducer,
        setting: setting.reducer,
        spider: spider.reducer
    }),
    {
        page: page.state,
        user: user.state,
        setting: setting.state,
        spider: spider.state
    }
)
