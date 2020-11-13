import React from 'react'
import {store} from "../../store"
import * as event from '../../event'
import * as comp from '../content'
import * as g from '../../g'
import {Button, Col, Row, Table, Modal, Form, Input, message, Radio, Select, InputNumber} from "antd";

export const Menu = (props) => {
    const state = store.useContext()
    const [showModal, setShowModal] = React.useState(false)
    const [modalInit, setModalInit] = React.useState({})
    React.useEffect(() => {
        const getMenu = async () => {
            await event.menu.getMenu()
        }
        getMenu()
    }, [])

    const columns = [
        {
            title: 'name',
            dataIndex: 'name',
            key: '_id',
            fixed: 'left'
        }, {
            title: 'english_name',
            dataIndex: 'english_name',
            key: '_id',
        }, {
            title: 'menu_type',
            dataIndex: 'menu_type',
            key: '_id'
        }, {
            title: 'parent_name',
            dataIndex: 'parent_name',
            key: '_id'
        }, {
            title: 'path',
            dataIndex: 'path',
            key: '_id'
        },
        {
            title: '操作',
            key: 'action',
            render: (text, record) => (
                <Button onClick={(e) => {
                    e.stopPropagation()
                    alert('hello')
                    return false
                }}>删除</Button>
            ),
        }
    ]
    return (
        <>
            <Row justify="end">
                <Col span={2}>
                    <EditMenu show={showModal} setShow={setShowModal} initData={modalInit} setInitData={setModalInit}/>
                    <Button type={'primary'} onClick={async () => {
                        setModalInit({
                            _id: '',
                            type: g.menu.MENU,
                            jump: g.menu_jump.app,
                            name: '',
                            english_name: '',
                            app_id: '',
                            comp: '',
                            parent_id: '',
                            icon: '',
                            path: '',
                            sort: 0,
                        })
                        setShowModal(true)
                        console.log(modalInit)
                    }}>创建菜单</Button>
                </Col>
            </Row>
            <Table
                columns={columns}
                dataSource={state.setting.menu.menu}
                size={'small'}
                scroll={{y: 750}}
                onRow={(record) => {
                    return {
                        onClick: (event) => {
                            if (record.state === g.menu_state.fixed) {
                                message.info('系统默认菜单不可修改')
                                return
                            }
                            setModalInit({
                                _id: record._id,
                                type: record.type,
                                jump: record.jump,
                                name: record.name,
                                english_name: record.english_name,
                                path: record.path,
                                app_id: record.app_id,
                                comp: record.comp,
                                sort: record.type,
                                icon: record.icon,
                                parent_id: record.parent_id,
                            })
                            setShowModal(true)
                        }
                    }
                }}
            />
        </>
    )
}

export const MenuGroup = (props) => {
    return <div> this is menu group</div>
}

const EditMenu = (props) => {
    const state = store.useContext()
    const [form] = Form.useForm()
    React.useEffect(() => {
        const temp = async () => {
            await event.app.getApp()
            await event.menu.getMenu()
        }
        temp()
    }, [])

    form.setFieldsValue(props.initData)
    return (
        <>
            <Modal
                title={'编辑菜单'}
                visible={props.show}
                okText={'保存'} cancelText={'取消'}
                onCancel={(e) => {
                    props.setShow(false)
                    form.resetFields()
                }}
                onOk={() => {
                    form.validateFields()
                        .then(async (values) => {
                            if (!await event.menu.createMenu(values)) {
                                message.error('保存失败')
                                return
                            } else {
                                message.success('保存成功')
                                props.setShow(false)
                                form.resetFields()
                            }
                        })
                }}
            >
                <Form form={form}>
                    <Form.Item label={'_id'} name={'_id'} hidden={true}>
                        <Input/>
                    </Form.Item>
                    <Form.Item label={"类型"} name={'type'}>
                        <Radio.Group>
                            <Radio.Button value={g.menu.MENU}>菜单</Radio.Button>
                            <Radio.Button value={g.menu.MENU_ITEM}>菜单项</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label={"跳转"} name={'jump'} initialValue={props.initData.jump}>
                        <Radio.Group>
                            <Radio.Button value={g.menu_jump.comp}>组件</Radio.Button>
                            <Radio.Button value={g.menu_jump.app}>APP</Radio.Button>
                            <Radio.Button value={g.menu_jump.outer}>外链</Radio.Button>
                        </Radio.Group>
                    </Form.Item>
                    <Form.Item label={'名称'} name={'name'} rules={[
                        {
                            required: true,
                            message: 'is required!',
                        }
                    ]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item label={'英文名'} name={'english_name'} rules={[
                        {
                            required: true,
                            message: 'is required!',
                        }
                    ]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item label={'路径'} name={'path'} rules={[
                        {
                            required: true,
                            message: 'is required!',
                        }
                    ]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item label={'排序'} name={'sort'}>
                        <InputNumber min={0}/>
                    </Form.Item>

                    <Form.Item label={'父菜单'} name={'parent_id'}>
                        <Select allowClear>
                            {
                                state.setting.menu.menu.filter(item => item.type === g.menu.MENU).map((item) =>
                                    <Select.Option value={item._id}> {item.name}</Select.Option>)
                            }
                        </Select>
                    </Form.Item>

                    {/*组件*/}
                    <Form.Item noStyle shouldUpdate>
                        {(ins) => {
                            if (ins.getFieldValue('jump') === g.menu_jump.comp) {
                                return (
                                    <Form.Item label={'组件'} name={'comp'}>
                                        <Select allowClear>
                                            {Object.keys(comp.default).map((item) => {
                                                return <Select.Option
                                                    value={item}>{item}</Select.Option>
                                            })}
                                        </Select>
                                    </Form.Item>
                                )
                            }
                            return null
                        }}
                    </Form.Item>
                    {/*App*/}
                    <Form.Item noStyle shouldUpdate>
                        {(ins) => {
                            if (ins.getFieldValue('jump') === g.menu_jump.app) {
                                return (
                                    <Form.Item label={'App'} name={'app_id'}>
                                        <Select allowClear>
                                            {state.setting.app.app.map((item) => {
                                                return <Select.Option
                                                    value={item._id}>{item.name}</Select.Option>
                                            })}
                                        </Select>
                                    </Form.Item>
                                )
                            }
                            return null
                        }}
                    </Form.Item>

                </Form>
            </Modal>
        </>
    )
}
