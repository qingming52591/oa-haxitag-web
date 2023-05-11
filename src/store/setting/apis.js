import produce from "immer";

// initState
export const state = {
    apis: [],
    types: [],
}

// action
export const action = {
    UPDATE_APIS: 'UPDATE_APIS',
    UPDATE_TYPES: 'UPDATE_TYPES'
}

// reduce
export const reducer = (state, nowAction) => {
    switch (nowAction.type) {
        case action.UPDATE_APIS:
            let newState = produce(state, (draft) => {
                draft.apis = nowAction.UPDATE_APIS
            })
            return newState

        case action.UPDATE_TYPES:
            let typeState = produce(state, (draft) => {
                draft.types = nowAction.UPDATE_TYPES
            })
            return typeState

        default:
            return state
    }
}
