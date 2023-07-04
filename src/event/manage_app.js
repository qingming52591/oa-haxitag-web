import axios from "axios";
import {store, actions} from "../store";
import config from "../conf";
import * as http from "../util/http";

// 创建& 编辑
export const createApp = async (formData) => {
    const state = store.getState()
    let push_data = {...formData}
    let r = await axios.post(`${config.API_MANAGE_HOST}/app/v1/api/apps`, push_data, {headers: {token: state.user.info.token}})
    let {headers, data} = http.getHttpHeardData(r,false)
    if (headers && data) {
        await getAppList({pageIndex: 1, pageSize: 50, total: 0})
        return true
    }
}

// 删除
export const deleteApp = async (_ids) => {
    const state = store.getState()
    let data = {data:{_id:_ids}}
    let r = await axios.delete(`${config.API_MANAGE_HOST}/app/v1/api/apps`, data, {headers: {token: state.user.info.token}})
    let res = http.getHttpHeardData(r,false)
    if (res.headers && res.data) {
        await getAppList({pageIndex: 1, pageSize: 50, total: 0})
        return true
    }
}
// 获取API列表
/*参数user 标识获取用户菜单*/
export const getAppList = async (pagination) => {
    const state = store.getState()
    let r = await axios.get(`${config.API_MANAGE_HOST}/app/v1/api/apps?pageIndex=${pagination.pageIndex || pagination.current}&pageSize=${pagination.pageSize}`, {headers: {"token": state.user.info.token}})
    let {headers, data} = http.getHttpHeardData(r,false)
    if (headers && data) {
        let items = data.data.items || []
        store.dispatch({type: actions.setting.prompt.UPDATE_APP, UPDATE_APP: items})
        return {current: data.data.pageIndex, pageSize: data.data.pageSize, total:data.data.total}
    }
}

// 获取类型类别
export const getTypeList = async () => {
    const state = store.getState()
    let r = await axios.get(`${config.API_MANAGE_HOST}/v1/api/chatgpt_instances/type`, {headers: {"token": state.user.info.token}})
    let {headers, data} = http.getHttpHeardData(r,false)
    if (headers && data) {
        let items = data.data || []
        store.dispatch({type: actions.setting.apis.UPDATE_TYPES, UPDATE_TYPES: items})
    }
}


// 创建& 编辑
export const createAppPrompts = async (formData) => {
    const state = store.getState()
    let push_data = {...formData}
    let r = await axios.post(`${config.API_MANAGE_HOST}/app/v1/api/app_prompts`, push_data, {headers: {token: state.user.info.token}})
    let {headers, data} = http.getHttpHeardData(r,false)
    if (headers && data) {
        await getAppPrompts({pageIndex: 1, pageSize: 50, total: 0})
        return true
    }
}

// 删除
export const deleteAppPrompts = async (_ids) => {
    const state = store.getState()
    let data = {data:{_id:_ids}}
    let r = await axios.delete(`${config.API_MANAGE_HOST}/app/v1/api/app_prompts`, data, {headers: {token: state.user.info.token}})
    let res = http.getHttpHeardData(r,false)
    if (res.headers && res.data) {
        await getAppPrompts({pageIndex: 1, pageSize: 50, total: 0})
        return true
    }
}
// 获取API列表
/*参数user 标识获取用户菜单*/
export const getAppPrompts = async (pagination) => {
    const state = store.getState()
    let r = await axios.get(`${config.API_MANAGE_HOST}/app/v1/api/app_prompts?pageIndex=${pagination.pageIndex || pagination.current}&pageSize=${pagination.pageSize}`, {headers: {"token": state.user.info.token}})
    let {headers, data} = http.getHttpHeardData(r,false)
    if (headers && data) {
        let items = data.data.items || []
        store.dispatch({type: actions.setting.prompt.UPDATE_APP_PROMPT, UPDATE_APP_PROMPT: items})
        return {current: data.data.pageIndex, pageSize: data.data.pageSize, total:data.data.total}
    }
}

