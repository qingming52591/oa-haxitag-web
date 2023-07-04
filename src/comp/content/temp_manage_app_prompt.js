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

export const ManageAppPrompt = (props) => {
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
            let pagination = await event.manageApp.getAppPrompts(table.pagination)
            if (pagination) {
                setTable({...table, ...{pagination: pagination}})
            }

            await event.user.getUser()
            await event.manageApp.getAppList({pageIndex: 1, pageSize: 500})
            await event.managePrompt.getPromptList({pageIndex: 1, pageSize: 500})
        }
        getList()
    }, [])

    const columns = [
        {
            title: 'App名称',
            dataIndex: 'app_name',
            key: 'app_name',
            fixed: 'left',
            // ...util.getColSearchLocal('名称', 'name')
        },{
            title: 'Prompt名称',
            dataIndex: 'prompt_name',
            key: 'prompt_name',
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
                                        await event.manageApp.deleteAppPrompts([record._id])
                                    }}>
                            <Button danger onClick={(e) => e.stopPropagation()}>删除</Button>
                        </Popconfirm>
                        <Button style={{marginLeft: 10}}  onClick={async () => {
                            setShowModal(true)
                            setModalInit({
                                _id: record._id,
                                app_id:record.app_id,
                                prompt_id:record.prompt_id,
                                prompt_name:record.prompt_name,
                                type:record.type,
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
                    <EditAppPrompt show={showModal} setShow={setShowModal} initData={modalInit} setInitData={setModalInit}/>
                    <Button type={'primary'} onClick={async () => {
                        setShowModal(true)
                        setModalInit({
                            _id: undefined,
                            app_id:'',
                            prompt_id:'',
                            prompt_name:'',
                            type:undefined
                        })
                    }}>关联</Button>
                </Col>
            </Row>
            <Table
                columns={columns}
                dataSource={state.setting.prompt.app_prompt}
                size={'small'}
                scroll={{y: 750}}
                bordered
                pagination={table.pagination}
                onChange={async (param) => {
                    let pagination = await event.manageApp.getAppPrompts(param)
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

const EditAppPrompt = (props) => {
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
        if (props.show)
        {
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
                            if (await event.manageApp.createAppPrompts(params)) {
                                message.success('保存成功')
                                props.setShow(false)
                                form.resetFields()
                            }
                        })
                }}
            >
                <Form form={form} key={'app_prompt'} labelCol={{ span: 4 }} wrapperCol={{ span: 20 }}>
                    <Form.Item key={'_id'} label={'_id'} name={'_id'} hidden={true}>
                        <Input/>
                    </Form.Item>
                    <Form.Item key={'app_id'} label={'关联App'} name={'app_id'} rules={[
                        {
                            required: true,
                            message: 'is required!',
                        }
                    ]}>
                        <Select allowClear placeholder={'请选择App'}>
                            {
                                state.setting.prompt.app.map((item) =>
                                    <Select.Option key={item._id} value={item._id}> {item.name}</Select.Option>)
                            }
                        </Select>
                    </Form.Item>

                    <Form.Item key={'prompt_id'} label={'Prompt'} name={'prompt_id'} rules={[
                        {
                            required: true,
                            message: 'is required!',
                        }
                    ]}>
                        <Select allowClear placeholder={'请选择Prompt'} onChange={(e)=>{
                            state.setting.prompt.prompt.map((item) => {
                                    if (item._id === e) {
                                        form.setFieldsValue({ prompt_name: item.prompt_name });
                                    }
                                }
                            )
                        }}>
                            {
                                state.setting.prompt.prompt.map((item) =>
                                    <Select.Option key={item._id} value={item._id}> {item.prompt_name}</Select.Option>)
                            }
                        </Select>
                    </Form.Item>

                    <Form.Item label={'prompt_name'} name={'prompt_name'} hidden={true}>
                        <Input/>
                    </Form.Item>

                    <Form.Item key={'type'} label={'补全方式'} name={'type'} rules={[
                        {
                            required: true,
                            message: 'is required!',
                        }
                    ]}>
                        <Select allowClear placeholder={'请选择补全方式'}>
                            {
                                [{value:0,lable:'不需补全'},{value:1,lable:'百度搜索补全'},{value:2,lable:'搜藏搜索补全'},{value:3,lable:'直接补全'},{value:4,lable:'谷歌补全'}].map((item) =>
                                    <Select.Option key={item.value} value={item.value}> {item.lable}</Select.Option>)
                            }
                        </Select>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

