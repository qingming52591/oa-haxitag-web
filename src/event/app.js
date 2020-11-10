import axios from "axios";
import {store, actions} from "../store";
import config from "../conf";
import * as http from "../util/http";
import {message} from "antd";
import * as g from '../g'

export const saveApp = async (formData) => {
    const state = store.getState()
    let push_data = {...formData}
    let r = await axios.post(`${config.API_OA_BASE}/v1/app/save`, push_data, {headers: {token: state.user.info.token}})
    let {headers, data} = http.getHttpHeardData(r)
    if (headers && data) {
        await getApp()
        return true
    }
}

export const getApp = async () => {
    const state = store.getState()
    let r = await axios.get(`${config.API_OA_BASE}/v1/app/list`, {headers: {token: state.user.info.token}})
    let {headers, data} = http.getHttpHeardData(r)
    if (headers && data) {
        store.dispatch({type: actions.setting.app.UPDATE_APP, app: data.data.app})
    }
}

export const getAppById = async (app_id) => {
    const state = store.getState()
    let r = await axios.get(`${config.API_OA_BASE}/v1/app/${app_id}`, {headers: {token: state.user.info.token}})
    let {headers, data} = http.getHttpHeardData(r)
    if (headers && data) {
        return data.data
    }
}

