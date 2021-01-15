// 用户
export const user = {
    TOKEN: 'TOKEN', // 用户token
}
export const user_role = {
    root: -1,
    admin: 0,
    normal: 1
}
export const user_role_desc = {
    [user_role.root]: "超管",
    [user_role.admin]: "管理员",
    [user_role.normal]: "普通用户",
}
// 菜单
export const menu = {
    MENU: 0, // 菜单类型
    MENU_ITEM: 1, // 菜单项类型
}
export const menu_desc = {
    [menu.MENU]: '菜单',
    [menu.MENU_ITEM]: '菜单项'
}
export const menu_state = {
    fixed: -1, // 默认
    normal: 0 // 正常
}

export const menu_jump = {
    app: 0,
    comp: 1,
    outer: 2
}

// 菜单组
export const menu_group_type = {
    menu: 0,
    menu_group: 1
}
export const menu_group_type_desc = {
    [menu_group_type.menu]: "菜单组",
    [menu_group_type.menu_group]: "复合组"
}

// 视频
export const video_status = {
    fail: -1,
    waiting: 0,
    success: 1
}
export const video_status_desc = {
    [video_status.fail]: "失败",
    [video_status.waiting]: "处理中",
    [video_status.success]: "成功"
}

// 错误码
export const code = {
    success: 0,
    auth_error: 1
}