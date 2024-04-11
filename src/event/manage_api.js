import axios from "axios";
import {store, actions} from "../store";
import config from "../conf";
import * as http from "../util/http";

// 创建& 编辑
export const createApi = async (formData) => {
    const state = store.getState()
    let push_data = {...formData}
    let r = await axios.post(`${config.API_MANAGE_HOST}/v1/api/chatgpt_instances`, push_data, {headers: {token: state.user.info.token}})
    let {headers, data} = http.getHttpHeardData(r,false)
    if (headers && data) {
        await getApiList({pageIndex: 1, pageSize: 50, total: 0})
        return true
    }
}

// 删除
export const deleteApi = async (_ids) => {
    const state = store.getState()
    let data = {data:{_id:_ids}}
    let r = await axios.delete(`${config.API_MANAGE_HOST}/v1/api/chatgpt_instances`, data, {headers: {token: state.user.info.token}})
    let res = http.getHttpHeardData(r,false)
    if (res.headers && res.data) {
        await getApiList({pageIndex: 1, pageSize: 50, total: 0})
        return true
    }
}
// 获取API列表
/*参数user 标识获取用户菜单*/
export const getApiList = async (pagination) => {
    const state = store.getState()
        let r = await axios.get(`${config.API_MANAGE_HOST}/v1/api/chatgpt_instances?pageIndex=${pagination.pageIndex}&pageSize=${pagination.pageSize}`, {headers: {"token": state.user.info.token}})
        let {headers, data} = http.getHttpHeardData(r,false)
        if (headers && data) {
            let items = data.data.items || []
            store.dispatch({type: actions.setting.apis.UPDATE_APIS, UPDATE_APIS: items})
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

// 测试
export const testChat = async (formData) => {
    const state = store.getState()
    let push_data = {...formData}
    let r = await axios.post(`${config.API_MANAGE_HOST}/v1/api/chatgpt_instances/chat`, push_data,{headers: {"token": state.user.info.token}})
    let {headers, data} = http.getHttpHeardData(r,false)
    console.log('data---',data)
    return data
}



/*获取system list*/
export const getSystemList = async (pagination) => {
    const state = store.getState()
    let r = await axios.get('http://43.154.145.166:8050/prompt_user_sys', {headers: {"token": state.user.info.token}})
    let {headers, data} = http.getHttpHeardData(r,false)
    if (headers && data) {
        let items = data.data || []
        store.dispatch({type: actions.setting.apis.UPDATE_SYSTEM, UPDATE_SYSTEM: items})
    }
}
