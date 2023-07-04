import React from 'react'
import {store} from "../../store"
import * as event from '../../event'
import * as comp from '../content'
import * as g from '../../g'
import {
    Space,
    Button,
    Col,
    Row,
    Table,
    Modal,
    Form,
    Input,
    message,
    Radio,
    Select,
    InputNumber,
    Popconfirm
} from "antd";
import * as util from '../../util'
import {getAppList} from "../../event/manage_app";

export const ManageApp = (props) => {
    const state = store.useContext()
    const [showModal, setShowModal] = React.useState(false)
    const [modalInit, setModalInit] = React.useState({})
    // let menus = {}
    // state.setting.menu.menu.map(item => {
    //     menus[item._id] = item
    //     return item
    // })

    const [table, setTable] = React.useState({
        pagination: {pageIndex: 1, pageSize: 50, total: 0},
        loading: false
    })

    React.useEffect(() => {
        const getList = async () => {
            let pagination = await event.manageApp.getAppList(table.pagination)
            if (pagination) {
                setTable({...table, ...{pagination: pagination}})
            }
            await event.user.getUser()
        }
        getList()
    }, [])

    const columns = [
        {
            title: '名称',
            dataIndex: 'name',
            key: 'name',
            fixed: 'left',
            // ...util.getColSearchLocal('名称', 'name')
        },{
            title: '描述',
            dataIndex: 'description',
            key: 'description',
        },
        {
            title: '创建者',
            dataIndex: 'creator',
            key: 'creator',
            render: (text, record) => {
                return state.setting.user.userMap[text]
            }
        },
        {
            title: '创建时间',
            dataIndex: 'created_at',
            key: 'created_at',
        },
        {
            title: '更新时间',
            dataIndex: 'updated_at',
            key: 'updated_at',
        },
        {
            title: '操作',
            key: 'action',
            width:200,
            render: (text, record) => {
                if (record.state === g.menu_state.fixed) {
                    return <Button danger disabled>删除</Button>
                } else {
                    return (<>
                        <Popconfirm title="确认删除吗?"
                                    cancelText={"取消"} okText={'确定'}
                                    onCancel={(e) => e.stopPropagation()}
                                    onConfirm={async (e) => {
                                        e.stopPropagation()
                                        await event.manageApp.deleteApp([record._id])
                                    }}>
                            <Button danger onClick={(e) => e.stopPropagation()}>删除</Button>
                        </Popconfirm>
                        <Button style={{marginLeft: 10}}  onClick={async () => {
                            setShowModal(true)
                            setModalInit({
                                _id: record._id,
                                name:record.name,
                                description:record.description,
                            })
                        }}>编辑</Button>
                    </>)
                }

            }
        }
    ]
    return (
        <>
            <Row justify="end">
                <Col span={2}>
                    <EditApp show={showModal} setShow={setShowModal} initData={modalInit} setInitData={setModalInit}/>
                    <Button type={'primary'} onClick={async () => {
                        setShowModal(true)
                        setModalInit({
                            _id: undefined,
                            name:'',
                            description:'',
                        })
                    }}>创建APP</Button>
                </Col>
            </Row>
            <Table
                columns={columns}
                dataSource={state.setting.prompt.app}
                size={'small'}
                scroll={{y: 750}}
                bordered
                pagination={table.pagination}
                onChange={async (param) => {
                    let pagination = await event.manageApp.getAppList(param)
                    if (pagination) {
                        setTable({...table, ...{pagination: pagination}})
                    }
                }}
                rowKey={"_id"}
                size={'small'}
                onRow={(record) => {
                    return {
                        // onClick: (event) => {
                        //     setModalInit({
                        //         _id: record._id,
                        //         model_name:record.model_name,
                        //         apis:record.apis,
                        //         type: record.type,
                        //         language:record.language.join('\n'),
                        //         method:record.method,
                        //         label:record.label.join('\n'),
                        //         other_keys:record.other_keys,
                        //         creator:record.other_keys,
                        //         simple_prompt:record.simple_prompt,
                        //         token_key:record.token_key.join('\n'),
                        //     })
                        //     setShowModal(true)
                        // }
                    }
                }}
            />
        </>
    )
}

const EditApp = (props) => {
    const state = store.useContext()
    const [form] = Form.useForm()
    React.useEffect(() => {
        const temp = async () => {
            await event.manageApp.getTypeList()
        }
        temp()
    }, [])

    function isJSON(str) {
        if (typeof str == 'string') {
            try {
                JSON.parse(str);
                return true;
            } catch(e) {
                console.log(e);
                return false;
            }
        }
        console.log('It is not a string!')
    }
    React.useEffect(()=>{
        if (props.show) {
            form.setFieldsValue(props.initData)
        }
    },[props.show])
    return (
        <>
            <Modal
                title={'APP管理'}
                visible={props.show}
                okText={'保存'} cancelText={'取消'}
                onCancel={(e) => {
                    props.setShow(false)
                    form.resetFields()
                }}
                onOk={() => {
                    form.validateFields()
                        .then(async (values) => {
                            let params = {}
                            if (window.sessionStorage.getItem(g.user.UID)) {
                                params['creator'] = window.sessionStorage.getItem(g.user.UID) || ''
                            }
                            Object.entries(values).map(([key,value])=>{
                                params[key] = value
                            })
                            if (await event.manageApp.createApp(params)) {
                                message.success('保存成功')
                                props.setShow(false)
                                form.resetFields()
                            }
                        })
                }}
            >
                <Form form={form} labelCol={{ span: 4 }} wrapperCol={{ span: 20 }}>
                    <Form.Item label={'_id'} name={'_id'} hidden={true}>
                        <Input/>
                    </Form.Item>
                    <Form.Item label={'名称'} name={'name'} rules={[
                        {
                            required: true,
                            message: 'is required!',
                        }
                    ]}>
                        <Input placeholder={'请输入APP名称'} />
                    </Form.Item>
                    <Form.Item label={'描述'} name={'description'} rules={[
                        {
                            required: true,
                            message: 'is required!',
                        }
                    ]}>
                        <Input placeholder={'请输入描述'}/>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

