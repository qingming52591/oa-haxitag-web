import axios from "axios";
import {store, actions} from "../store";
import config from "../conf";
import * as http from "../util/http";
import qs from 'qs'
import * as event from '../event'
import * as util from '../util'
import * as g from '../g'


// 获取content
export const getContent = async () => {
    const state = store.getState()
    let r = await axios.get(`${config.API_OA_BASE}/v1/contents/list`, {headers: {token: state.user.info.token}})
    let {headers, data} = http.getHttpHeardData(r)
    if (headers && data) {
        store.dispatch({type: actions.user.content.UPDATE_CONTENTS, contents: data.data.contents})
    }
}

// 保存content
export const saveContent = async (type, _data) => {
    const state = store.getState()
    let formData = new FormData()
    formData.append('type', type)
    formData.append('data', _data)

    let r = await axios.post(`${config.API_OA_BASE}/v1/contents/save`, formData, {
        headers: {
            token: state.user.info.token,
            'Content-Type': 'multipart/form-data'
        }
    })
    let {headers, data} = http.getHttpHeardData(r)
    if (headers && data) {
        await getContent()
        return true
    }

}

// 按id获取对应content
export const getContentById = async (app_id) => {
    const state = store.getState()
    let r = await axios.get(`${config.API_OA_BASE}/v1/app/${app_id}`, {headers: {token: state.user.info.token}})
    let {headers, data} = http.getHttpHeardData(r)
    if (headers && data) {
        return data.data
    }
}

