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

export const ManageApi = (props) => {
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
            await event.manageApi.getApiList(table.pagination)
            await event.user.getUser()
        }
        getList()
    }, [])

    const columns = [
        {
            title: '名称',
            dataIndex: 'model_name',
            key: 'model_name',
            fixed: 'left',
            // ...util.getColSearchLocal('名称', 'name')
        },{
            title: 'API',
            dataIndex: 'apis',
            key: 'apis',
        }, {
            title: '方法',
            dataIndex: 'method',
            key: 'method',
        }, {
            title: '类型',
            dataIndex: 'type',
            key: 'type',
            // render: (text, record) => {
            //     state.setting.apis.types.map
            //     return g.menu_desc[record.type]
            // }
        },
        // {
        //     // auth_info
        //     title: 'tokenKey',
        //     dataIndex: 'token_key',
        //     key: 'token_key',
        //     render: (text, record) => {
        //         return record.token_key.join(',')
        //     }
        // },
        {
            title: 'auth_info',
            dataIndex: 'auth_info',
            key: 'auth_info',
            render: (text, record) => {
                return JSON.stringify(text)
            }
        },{
            title: 'other_keys',
            dataIndex: 'other_keys',
            key: 'other_keys',
            render: (text, record) => {
                return JSON.stringify(text)
            }
        }, {
            title: '语言',
            dataIndex: 'language',
            key: 'language',
            render: (text, record) => {
                return text.join('、')
            }
        },
         {
            title: '标签',
            dataIndex: 'label',
            key: 'label',
             render: (text, record) => {
                 return record.label.join(',')
             }
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
                                        await event.manageApi.deleteApi([record._id])
                                    }}>
                            <Button danger onClick={(e) => e.stopPropagation()}>删除</Button>
                        </Popconfirm>
                        <Button style={{marginLeft: 10}}  onClick={async () => {
                            setModalInit({
                                _id: record._id,
                                model_name:record.model_name,
                                apis:record.apis,
                                type: record.type,
                                language:record.language.join('\n'),
                                method:record.method,
                                label:record.label.join('\n'),
                                other_keys:JSON.stringify(record.other_keys),
                                creator:record.creator,
                                simple_prompt:record.simple_prompt,
                                // token_key:record.token_key.join('\n'),
                                auth_mode:record.auth_info && record.auth_info.auth_mode,
                                auth_policy:record.auth_info && record.auth_info.auth_policy,
                                keys_info:record.auth_info && JSON.stringify(record.auth_info.keys_info),
                            })
                            setShowModal(true)
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
                    <EditApi show={showModal} setShow={setShowModal} initData={modalInit} setInitData={setModalInit}/>
                    <Button type={'primary'} onClick={async () => {
                        setModalInit({
                            _id: undefined,
                            model_name:'',
                            apis:'',
                            type: undefined,
                            language:'',
                            method:undefined,
                            label:'',
                            other_keys:'',
                            creator:'',
                            simple_prompt:'',
                            token_key:''
                        })
                        setShowModal(true)
                    }}>创建API</Button>
                </Col>
            </Row>
            <Table
                columns={columns}
                dataSource={state.setting.apis.apis}
                scroll={{y: 750}}
                bordered
                pagination={table.pagination}
                onChange={async (param) => {
                    console.log(param)
                    let pagination = await event.manageApi.getApiList(param)
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

const EditApi = (props) => {
    const state = store.useContext()
    const [form] = Form.useForm()
    React.useEffect(() => {
        const temp = async () => {
            await event.manageApi.getTypeList()
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
                title={'API管理'}
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

                            let auth_info = {}
                            Object.entries(values).map(([key,value])=>{
                                if (key ==='auth_mode' || key ==='auth_policy') {
                                    auth_info[key] = value
                                    params['auth_info'] = auth_info
                                }  else if (key === 'keys_info') {
                                    let obj = {}
                                    if (isJSON(value)) {
                                        obj = JSON.parse(value)
                                    }
                                    auth_info[key] = obj
                                    params['auth_info'] = auth_info
                                } else if (key === 'token_key' || key === 'label' || key === 'language') {
                                    let arr = value.split('\n')
                                    params[key] = arr
                                } else if (key === 'other_keys') {
                                    let obj = {}
                                    if (isJSON(value)) {
                                        obj = JSON.parse(value)
                                    }
                                    params[key] = obj
                                } else if (value) {
                                    params[key] = value
                                }
                            })
                            if (!await event.manageApi.createApi(params)) {
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
                    <Form.Item key={'_id'} label={'_id'} name={'_id'} hidden={true}>
                        <Input/>
                    </Form.Item>
                    <Form.Item label={'名称'} name={'model_name'} rules={[
                        {
                            required: true,
                            message: 'is required!',
                        }
                    ]}>
                        <Input placeholder={'请输入API名称'} />
                    </Form.Item>
                    <Form.Item key={'apis'} label={'API'} name={'apis'} rules={[
                        {
                            required: true,
                            message: 'is required!',
                        }
                    ]}>
                        <Input placeholder={'请输入API地址'}/>
                    </Form.Item>
                    <Form.Item key={'method'} label={'方法'} name={'method'} rules={[
                        {
                            required: true,
                            message: 'is required!',
                        }
                    ]}>
                        <Select allowClear placeholder={'请选择方法'}>
                            {
                                ['post','get','put'].map((item) =>
                                    <Select.Option key={item} value={item}> {item}</Select.Option>)
                            }
                        </Select>
                    </Form.Item>

                    {/*<Form.Item key={'token_key'} label={'tokenKey'} name={'token_key'} rules={[*/}
                    {/*    {*/}
                    {/*        required: true,*/}
                    {/*        message: 'is required!',*/}
                    {/*    }*/}
                    {/*]}>*/}
                    {/*    <Input.TextArea placeholder={'多个key使用换行分割'} />*/}
                    {/*</Form.Item>*/}


                    <Form.Item key={'type'} label={'类型'} name={'type'} rules={[
                        {
                            required: true,
                            message: 'is required!',
                        }
                    ]}>
                        <Select allowClear placeholder={'请选择类型'}>
                            {
                                state.setting.apis.types.map((item) =>
                                    <Select.Option key={item.en} value={item.en}> {item.zh}</Select.Option>)
                            }
                        </Select>
                    </Form.Item>

                    <Form.Item key={'label'} label={'标签'} name={'label'}>
                        <Input.TextArea placeholder={'多个标签使用换行分割'} />
                    </Form.Item>

                    <Form.Item key={'language'} label={'语言'} name={'language'} rules={[
                        {
                            required: true,
                            message: 'is required!',
                        }
                    ]}>
                        <Input.TextArea placeholder={'多个语言使用换行分割,请输入标准的语言格式'} />
                    </Form.Item>

                    <Form.Item key={'auth_mode'} label={'认证方式'} name={'auth_mode'} rules={[
                        {
                            required: true,
                            message: 'is required!',
                        }
                    ]}>
                        <Select allowClear placeholder={'请选择认证方式'}>
                            {
                                [{value:0,name:'无'},{value:1,name:'Token认证'},{value:2,name:'AK/SK认证'}].map((item) =>
                                    <Select.Option key={item.value} value={item.value}> {item.name}</Select.Option>)
                            }
                        </Select>
                    </Form.Item>
                    <Form.Item key={'auth_policy'} label={'认证策略'} name={'auth_policy'} rules={[
                        {
                            required: false,
                            message: 'is required!',
                        }
                    ]}>
                        <Select allowClear placeholder={'请选择认证策略'}>
                            {
                                [ {value:1,name:'百度文心'}].map((item) =>
                                    <Select.Option key={item.value} value={item.value}> {item.name}</Select.Option>)
                            }
                        </Select>
                    </Form.Item>

                    <Form.Item key={'keys_info'} label={'参数'} name={'keys_info'}>
                        <Input.TextArea placeholder={'JSON对象'} />
                    </Form.Item>

                    <Form.Item key={'other_keys'} label={'其他参数'} name={'other_keys'}>
                        <Input.TextArea placeholder={'JSON对象'} />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

