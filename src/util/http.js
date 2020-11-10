import * as g from '../g'
import {message} from "antd";
import {actions, store} from "../store";


export const getHttpHeardData = (resp) => {
    let result = {headers: null, data: null}
    if (resp.status === 200) {
        if (resp.data.code === g.code.success) {
            store.dispatch({type: actions.user.info.UPDATE_TOKEN, token: resp.headers.token})
            result = {...result, ...{headers: resp.headers, data: resp.data}}
        } else if (resp.data.code == g.code.auth_error) {
            store.dispatch({type: actions.user.info.UPDATE_TOKEN, token: ''})
        } else {
            message.error(resp.data.msg)
        }
    } else {
        message.error('请求接口失败')
    }
    return result
}