import * as menu from './menu'
import * as app from './app'
import combineReducers from '../../util/redux/combineReducers'

// initState
export const state = {
    menu: menu.state,
    app: app.state
}
// action
export const action = {
    menu: menu.action,
    app: app.action
}
// reduce
export const reducer = combineReducers({
    menu: menu.reducer,
    app: app.reducer
})