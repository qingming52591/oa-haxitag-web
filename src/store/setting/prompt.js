import produce from "immer";

// initState
export const state = {
    prompt: [],
    app:[],
    app_prompt:[],
}

// action
export const action = {
    UPDATE_PROMPT: 'UPDATE_PROMPT',
    UPDATE_APP: 'UPDATE_APP',
    UPDATE_APP_PROMPT: 'UPDATE_APP_PROMPT',
}

// reduce
export const reducer = (state, nowAction) => {
    switch (nowAction.type) {
        case action.UPDATE_PROMPT:
            let newState = produce(state, (draft) => {
                draft.prompt = nowAction.UPDATE_APIS
            })
            return newState

        case action.UPDATE_APP:
            let app = produce(state, (draft) => {
                draft.app = nowAction.UPDATE_APP
            })
            return app

        case action.UPDATE_APP_PROMPT:
            let app_prompts = produce(state, (draft) => {
                draft.app_prompt = nowAction.UPDATE_APP_PROMPT
            })
            return app_prompts

        default:
            return state
    }
}
