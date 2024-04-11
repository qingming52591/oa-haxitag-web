import produce from "immer";

// initState
export const state = {
    apis: [],
    types: [],
    system:[]
}

// action
export const action = {
    UPDATE_APIS: 'UPDATE_APIS',
    UPDATE_TYPES: 'UPDATE_TYPES',
    UPDATE_SYSTEM: 'UPDATE_SYSTEM',
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

        case action.UPDATE_SYSTEM:
            let systemState = produce(state, (draft) => {
                draft.system = nowAction.UPDATE_SYSTEM
            })
            return systemState

        default:
            return state
    }
}
