import produce from "immer";

// initState
export const state = {
    video: []
}

// action
export const action = {
    // 伸缩侧导航
    UPDATE: "UPDATE"
}

// reduce
export const reducer = (state, nowAction) => {
    switch (nowAction.type) {
        case action.UPDATE:
            return produce(state, (draft) => {
                draft.video = nowAction.video
            })
        default:
            return state

    }
}