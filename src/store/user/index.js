import * as info from './info'
import * as menu from './menu'
import combineReducers from '../../util/redux/combineReducers'

// initState
export const state = {
    info: info.state,
    menu: menu.state
}
// action
export const action = {
    info: info.action,
    menu: menu.action
}
// reduce
export const reducer = combineReducers({
    info: info.reducer,
    menu: menu.reducer
})