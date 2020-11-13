import axios from "axios";
import {store, actions} from "../store";
import config from "../conf";
import * as http from "../util/http";
// 创建菜单
export const createMenu = async (formData) => {
    const state = store.getState()
    let push_data = {...formData}
    let r = await axios.post(`${config.API_OA_BASE}/v1/menu/save`, push_data, {headers: {token: state.user.info.token}})
    let {headers, data} = http.getHttpHeardData(r)
    if (headers && data) {
        await getMenu()
        await getMenu({user: true})
        return true
    }
}

// 组织菜单
const buildMenu = (menu_data) => {
    let parents = {}
    let chidren = {}
    menu_data.map((item) => {
        if (!item.parent_id) {
            item['children'] = []
            parents[item._id] = item
        } else {
            chidren[item._id] = item
        }
        return item
    })
    Object.values(chidren).filter(item => item.parent_id in parents).map((item) =>
        parents[item.parent_id].children.push(item))
    return Object.values(parents)
}

// 获取菜单
/*参数user 标识获取用户菜单*/
export const getMenu = async (user = false) => {
    let state = store.getState()
    if (user) {
        let r = await axios.get(`${config.API_OA_BASE}/v1/user/menu`, {headers: {token: state.user.info.token}})
        let {headers, data} = http.getHttpHeardData(r)
        if (headers && data) {
            let user_menu = buildMenu(data.data.menu)
            store.dispatch({type: actions.user.menu.UPDATE_USER_MENU, user_menu: user_menu})
        }
    } else {
        let r = await axios.get(`${config.API_OA_BASE}/v1/menu/list`, {headers: {token: state.user.info.token}})
        let {headers, data} = http.getHttpHeardData(r)
        if (headers && data) {
            store.dispatch({type: actions.setting.menu.UPDATE_MENU, menu: data.data.menu})
        }
    }
}