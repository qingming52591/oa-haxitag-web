import produce from "immer";
import * as g from "../../g";

// initState
export const state = {
    contents: []
}

// action
export const action = {
    // 更新用户token
    UPDATE_CONTENTS: 'UPDATE_CONTENTS'
}

// reduce
export const reducer = (state, nowAction) => {
    switch (nowAction.type) {
        case action.UPDATE_CONTENTS:
            let newState = produce(state, (draft) => {
                draft.contents = nowAction.contents
            })
            return newState
        default:
            return state
    }
}