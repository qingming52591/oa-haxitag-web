import axios from "axios";
import {store, actions} from "../store";
import config from "../conf";
import * as http from "../util/http";

// 创建& 编辑
export const createPrompt = async (formData,pagination) => {
    const state = store.getState()
    let push_data = {...formData}
    let r = await axios.post(`${config.API_MANAGE_HOST}/v1/api/prompt_template`, push_data, {headers: {token: state.user.info.token}})
    let {headers, data} = http.getHttpHeardData(r,false)
    if (headers && data) {
        await getPromptList(pagination)
        return true
    }
}

// 删除
export const deletePrompt = async (_ids,pagination) => {
    const state = store.getState()
    let data = {data:{_id:_ids}}
    let r = await axios.delete(`${config.API_MANAGE_HOST}/v1/api/prompt_template`, data, {headers: {token: state.user.info.token}})
    let res = http.getHttpHeardData(r,false)
    if (res.headers && res.data) {
        await getPromptList(pagination)
        return true
    }
}
// 获取API列表
/*参数user 标识获取用户菜单*/
export const getPromptList = async (pagination) => {
    const state = store.getState()
        // ?pageIndex=${pagination.pageIndex}&pageSize=${pagination.pageSize}
    let r = await axios.get(`${config.API_MANAGE_HOST}/v1/api/prompt_template?pageIndex=${pagination.current || pagination.pageIndex}&pageSize=${pagination.pageSize}`, {headers: {"token": state.user.info.token}})
    let {headers, data} = http.getHttpHeardData(r,false)
    if (headers && data) {
        let items = data.data.items || []
        store.dispatch({type: actions.setting.prompt.UPDATE_PROMPT, UPDATE_APIS: items})
        return {current:data.data.pageIndex,pageIndex: data.data.pageIndex, pageSize: data.data.pageSize, total: data.data.total}
    }
}

