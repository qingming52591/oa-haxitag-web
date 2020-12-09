import produce from "immer";

// initState
export const state = {
    menu_group: []
}

// action
export const action = {
    UPDATE_MENU_GROUP: 'UPDATE_MENU_GROUP'
}

// reduce
export const reducer = (state, nowAction) => {
    switch (nowAction.type) {
        case action.UPDATE_MENU_GROUP:
            let newState = produce(state, (draft) => {
                draft.menu_group = nowAction.menu_group
            })
            return newState
        default:
            return state
    }
}
