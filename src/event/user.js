import axios from "axios";
import {store, actions} from "../store";
import config from "../conf";
import * as http from "../util/http";
import * as g from '../g'
// 登录
export const onLogin = async (formData) => {
    const state = store.getState()
    const md5 = require('md5')
    if (!state.user.info.token) {
        let token = window.sessionStorage.getItem(g.user.TOKEN)
        if (!token) {
            if (formData) {
                let r = await axios.post(`${config.API_OA_BASE}/v1/user/login`, {
                    ...formData,
                    ...{"password": md5(formData.password)}
                })
                http.getHttpHeardData(r)
            }
        } else {
            store.dispatch({type: actions.user.info.UPDATE_TOKEN, token: token})
        }
    }
}