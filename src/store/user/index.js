import * as info from './info'
import * as menu from './menu'
import * as content from "./content";
import combineReducers from '../../util/redux/combineReducers'

// initState
export const state = {
    info: info.state,
    menu: menu.state,
    content: content.state
}
// action
export const action = {
    info: info.action,
    menu: menu.action,
    content: content.action
}
// reduce
export const reducer = combineReducers({
    info: info.reducer,
    menu: menu.reducer,
    content: content.reducer
})