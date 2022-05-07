import 'antd/dist/antd.css'
import {
    PieChartOutlined,
    UserOutlined,
} from '@ant-design/icons';
import React from "react"
import {store} from "../store";
import {Col, Layout, Menu, Row} from 'antd';
import * as event from '../event'
import {Route, Switch, Link, RouteWithSubRoutes} from "react-router-dom";
import * as comps from '../comp/content'
import * as g from '../g'
import config from "../conf";
import * as util from '../util'

const {SubMenu} = Menu
const {Header, Content, Sider, Footer} = Layout
const Home = (props) => {
    const state = store.useContext();
    React.useEffect(() => {
        const getMune = async () => {
            await event.menu.getMenu({user: true})
        }
        getMune()
    }, [])
    return (
        <Layout style={{minHeight: '100vh'}}>
            <Sider theme="light" collapsible collapsed={state.page.home.collapsed} onCollapse={event.home.onCollapse}>
                <Row justify={"center"}>
                    <h3>{config.TITLE}</h3>
                </Row>
                <Menu mode="inline">
                    {state.user.menu.user_menu.map((item) => {
                        let t = item
                        if (item.type === g.menu.MENU) {
                            t = (<SubMenu key={item._id} icon={<UserOutlined/>} title={item.name}>
                                {
                                    item.children.map(child => {
                                        if (child.jump === g.menu_jump.outer) {
                                            return (<Menu.Item key={child._id} icon={<PieChartOutlined/>}>
                                                <a href={child.path} target={"_blank"}
                                                   rel="noopener noreferrer">{child.name}</a>
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
                            </SubMenu>)
                        } else if (item.type === g.menu.MENU_ITEM) {
                            if (item.jump === g.menu_jump.outer) {
                                t = (<Menu.Item key={item._id} icon={<PieChartOutlined/>}>
                                    <a href={item.path} target={"_blank"} rel="noopener noreferrer">{item.name}</a>
                                </Menu.Item>)
                            } else if (item.jump === g.menu_jump.app) {
                                t = (<Menu.Item key={item._id}>
                                    <Link to={item.path + `/${item.app_id}`}>{item.name}</Link>
                                </Menu.Item>)
                            } else {
                                t = (<Menu.Item key={item._id}>
                                    <Link to={item.path}>{item.name}</Link>
                                </Menu.Item>)
                            }
                        }
                        return t
                    })}
                </Menu>
            </Sider>
            <Layout style={{minHeight: '100vh'}}>
                <Header style={{backgroundColor: "white"}}/>
                <Content style={{margin: '0 0px'}}>
                    <div className="site-layout-background" style={{padding: 1, minHeight: 360}}>
                        <Switch>
                            {(() => {
                                let routes = []
                                state.user.menu.user_menu.map(item => {
                                    if (item.children.length > 0) {
                                        item.children.map(child => {
                                            if (child.jump === g.menu_jump.app) {
                                                routes.push(<Route exact key={child._id} path={`${child.path}/:app_id`}
                                                                   component={comps.default[child.comp]}/>)
                                            } else if (child.jump === g.menu_jump.comp) {
                                                routes.push(<Route exact key={child._id} path={child.path}
                                                                   component={comps.default[child.comp]}/>)
                                            }
                                            return undefined
                                        })
                                    } else {
                                        if (item.jump === g.menu_jump.app) {
                                            routes.push(<Route exact key={item._id} path={`${item.path}/:app_id`}
                                                               component={comps.default[item.comp]}/>)
                                        } else if (item.jump === g.menu_jump.comp) {
                                            routes.push(<Route exact key={item._id} path={item.path}
                                                               component={comps.default[item.comp]}/>)
                                        }
                                    }
                                    return undefined
                                })
                                routes.push(<Route exact key={"write_note"} path={'/note/write'}
                                                   component={comps.default['EditTakeNotes']}/>)
                                return routes
                            })()}
                        </Switch>
                    </div>
                </Content>
                <Footer style={{textAlign: 'center'}}></Footer>
            </Layout>
        </Layout>
    )
};

export default Home;