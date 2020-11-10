import 'antd/dist/antd.css'
import {
    DesktopOutlined,
    PieChartOutlined,
    FileOutlined,
    TeamOutlined,
    UserOutlined,
} from '@ant-design/icons';
import * as icons from '@ant-design/icons'
import React from "react"
import {store} from "../store";
import {Button, Col, Divider, Row, Layout, Menu, Breadcrumb} from 'antd';
import * as event from '../event'
import {Route, BrowserRouter, Switch, Link, Redirect} from "react-router-dom";
import * as comps from '../comp/content'
import * as g from '../g'

const {SubMenu} = Menu
const {Header, Content, Sider, Footer} = Layout
const Home = (props) => {
    const state = store.useContext();
    React.useEffect(async () => {
        await event.menu.getMenu({user: true})
    }, [])
    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider theme="light" collapsible collapsed={state.page.home.collapsed} onCollapse={event.home.onCollapse}>
                <div className="logo">LOGO</div>
                <Menu mode="inline">
                    {state.user.menu.user_menu.map(item => {
                        if (item.type === g.menu.MENU) {
                            return <SubMenu key={item._id} icon={<UserOutlined/>} title={item.name}>
                                {
                                    item.children.map(child => {
                                        if (child.jump === g.menu_jump.outer) {
                                            return (<Menu.Item key={child._id} icon={<PieChartOutlined/>}>
                                                <a href={child.path} target={"_blank"}>{child.name}</a>
                                            </Menu.Item>)
                                        } else if (child.jump === g.menu_jump.app) {
                                            return (<Menu.Item key={child._id}>
                                                <Link to={child.path + `/${child.app_id}`}>{child.name}</Link>
                                            </Menu.Item>)
                                        } else {
                                            return (<Menu.Item key={child._id}>
                                                <Link to={child.path}>{child.name}</Link>
                                            </Menu.Item>)
                                        }
                                    })}
                            </SubMenu>
                        } else if (item.type === g.menu.MENU_ITEM) {
                            let Icon = icons['ScheduleOutlined']
                            if (item.jump === g.menu_jump.outer) {
                                return (<Menu.Item key={item._id} icon={<PieChartOutlined/>}>
                                    <a href={item.path} target={"_blank"}>{item.name}</a>
                                </Menu.Item>)
                            } else if (item.jump === g.menu_jump.app) {
                                return (<Menu.Item key={item._id}>
                                    <Link to={item.path + `/${item.app_id}`}>{item.name}</Link>
                                </Menu.Item>)
                            } else {
                                return (<Menu.Item key={item._id}>
                                    <Link to={item.path}>{item.name}</Link>
                                </Menu.Item>)
                            }
                        }

                    })}
                </Menu>
            </Sider>
            <Layout style={{minHeight: '100vh'}}>
                <Header style={{backgroundColor: "white"}}/>
                <Content style={{margin: '0 0px'}}>
                    <div className="site-layout-background" style={{padding: 1, minHeight: 360}}>
                        <Switch>
                            {state.user.menu.user_menu.map(item => {
                                if (item.children.length > 0) {
                                    return item.children.map(child => {
                                        if (child.jump === g.menu_jump.app) {
                                            return <Route exact key={child._id} path={`${child.path}/:app_id`}
                                                          component={comps.default[child.comp]}/>
                                        } else if (child.jump === g.menu_jump.comp) {
                                            return <Route exact key={child._id} path={child.path}
                                                          component={comps.default[child.comp]}/>
                                        }
                                    })
                                } else {
                                    if (item.jump === g.menu_jump.app) {
                                        return <Route exact key={item._id} path={`${item.path}/:app_id`}
                                                      component={comps.default[item.comp]}/>
                                    } else if (item.jump === g.menu_jump.comp) {
                                        return <Route exact key={item._id} path={item.path}
                                                      component={comps.default[item.comp]}/>
                                    }

                                }
                            })}
                        </Switch>
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}>Ant Design ©2018 Created by Ant UED</Footer>
            </Layout>
        </Layout>
    )
};

export default Home;