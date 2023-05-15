import produce from "immer";

// initState
export const state = {
    prompt: [],
}

// action
export const action = {
    UPDATE_PROMPT: 'UPDATE_PROMPT',
}

// reduce
export const reducer = (state, nowAction) => {
    switch (nowAction.type) {
        case action.UPDATE_PROMPT:
            let newState = produce(state, (draft) => {
                draft.prompt = nowAction.UPDATE_APIS
            })
            return newState
        default:
            return state
    }
}
