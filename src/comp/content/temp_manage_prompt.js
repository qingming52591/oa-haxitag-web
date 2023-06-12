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

export const ManagePrompt = (props) => {
    const state = store.useContext()
    const [showModal, setShowModal] = React.useState(false)
    const [modalInit, setModalInit] = React.useState({})

    React.useEffect(() => {
        const temp = async () => {
            await event.manageApi.getApiList({pageIndex: 1, pageSize: 50, total: 0})
        }
        temp()
    }, [])

    const [table, setTable] = React.useState({
        pagination: {pageIndex: 1, pageSize: 50, total: 0},
        loading: false
    })
    React.useEffect(() => {
        const getList = async () => {
            await event.managePrompt.getPromptList(table.pagination)
        }
        getList()
    }, [])

    const columns = [
        {
            title: 'Prompt名称',
            dataIndex: 'prompt_name',
            key: 'prompt_name',
            fixed: 'left',
        },
        {
            title: 'Prompt类型',
            dataIndex: 'type',
            key: 'type',
            fixed: 'left',
            render: (text, record) => {
                return {0:'搜藏默认',1:'百度头条搜索',2:'搜藏搜索'}[text]
            }
        },
        {
            title: '模型名称',
            dataIndex: 'model_name',
            key: 'model_name',
            fixed: 'left',
        },{
            title: '算法',
            dataIndex: 'algorithm_type',
            key: 'algorithm_type',
        }, {
            title: 'Prompt内容',
            dataIndex: 'content',
            key: 'content',
        }, {
            title: '放置位置',
            dataIndex: 'position',
            key: 'position',
        },
        {
            title: '语言',
            dataIndex: 'language',
            key: 'language',
            render: (text, record) => {
                return text.join('、')
            }
        },{
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
                                        await event.managePrompt.deletePrompt([record._id])
                                    }}>
                            <Button danger onClick={(e) => e.stopPropagation()}>删除</Button>
                        </Popconfirm>
                        <Button style={{marginLeft: 10}}  onClick={async () => {
                            setModalInit({
                                _id: record._id,
                                prompt_name:record.prompt_name,
                                model_name:record.model_name,
                                model_id:record.model_id || '',
                                type:record.type || 1,
                                algorithm_type:record.algorithm_type,
                                content: record.content,
                                position:record.position,
                                language:record.language.join('\n'),
                                creator:record.creator,
                                creator_name:record.creator_name,
                                label:record.label.join('\n'),
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
                    <EditPrompt show={showModal} setShow={setShowModal} initData={modalInit} setInitData={setModalInit}/>
                    <Button type={'primary'} onClick={async () => {
                        setModalInit({
                            _id: undefined,
                            prompt_name:'',
                            model_name:'',
                            model_id:'',
                            type:1,
                            algorithm_type:'',
                            content: '',
                            position:undefined,
                            language:'',
                            label:'',
                        })
                        setShowModal(true)
                    }}>创建Prompt</Button>
                </Col>
            </Row>
            <Table
                columns={columns}
                dataSource={state.setting.prompt.prompt}
                size={'small'}
                scroll={{y: 750}}
                bordered
                pagination={table.pagination}
                onChange={async (param) => {
                    let pagination = await event.managePrompt.getPromptList(param)
                    if (pagination) {
                        setTable({...table, ...{pagination: pagination}})
                    }
                }}
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

const EditPrompt = (props) => {
    const state = store.useContext()
    const [form] = Form.useForm()
    React.useEffect(() => {
        const temp = async () => {
            await event.manageApi.getTypeList()
        }
        temp()
    }, [])

    form.setFieldsValue(props.initData)
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
                            if (window.sessionStorage.getItem(g.user.UName)) {
                                params['creator_name'] = window.sessionStorage.getItem(g.user.UName) || ''
                            }

                            Object.entries(values).map(([key,value])=>{
                                if (key === 'label' || key==='language') {
                                    let arr = value.split('\n')
                                    params[key] = arr
                                } else if (value || value == 0) {
                                    params[key] = value
                                }
                            })
                            if (!await event.managePrompt.createPrompt(params)) {
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
                    <Form.Item label={'Prompt名称'} name={'prompt_name'} rules={[
                        {
                            required: true,
                            message: 'is required!',
                        }
                    ]}>
                        <Input placeholder={'请输入Prompt名称'} />
                    </Form.Item>
                    <Form.Item label={'prompt类型'} name={'type'} rules={[
                        {
                            required: true,
                            message: 'is required!',
                        }
                    ]}>
                        <Select allowClear placeholder={'请选择prompt类型'}>
                            {
                                [{value:0,lable:'不需补全'},{value:1,lable:'百度搜索补全'},{value:2,lable:'搜藏搜索补全'},{value:3,lable:'直接补全'}].map((item) =>
                                    <Select.Option value={item.value}> {item.lable}</Select.Option>)
                            }
                        </Select>
                    </Form.Item>
                    <Form.Item label={'模型id'} name={'model_id'} hidden={true}>
                        <Input/>
                    </Form.Item>
                    <Form.Item label={'模型名称'} name={'model_name'} rules={[
                        {
                            required: true,
                            message: 'is required!',
                        }
                    ]}>
                        {/*<Input placeholder={'请输入模型名称'} />*/}
                        <Select allowClear placeholder={'请选择模型名称'} onChange={(e)=>{
                            state.setting.apis.apis.map((item) => {
                                    if (item.model_name === e) {
                                        form.setFieldsValue({ algorithm_type: item.apis });
                                        form.setFieldsValue({ model_id: item._id });
                                    }
                            }
                            )

                            // this.setState({
                            //     form.setFieldsValue({ report_type: 0 });
                            //     form.algorithm_type = 'htttsdfjksafjlsafjlsad'
                            // })
                        }}>
                            {
                                state.setting.apis.apis.map((item) =>
                                    <Select.Option value={item.model_name}> {item.model_name}</Select.Option>)
                            }
                        </Select>
                    </Form.Item>
                    <Form.Item label={'算法'} name={'algorithm_type'} rules={[
                        {
                            required: true,
                            message: 'is required!',
                        }
                    ]}>
                        <Input placeholder={'请输入算法'} disabled={true}/>

                    </Form.Item>
                    <Form.Item label={'Prompt内容'} name={'content'} rules={[
                        {
                            required: true,
                            message: 'is required!',
                        }
                    ]}>
                        <Input.TextArea placeholder={'请输入Prompt内容'}/>
                    </Form.Item>
                    <Form.Item label={'放置位置'} name={'position'} rules={[
                        {
                            required: true,
                            message: 'is required!',
                        }
                    ]}>
                        <Select allowClear placeholder={'请选择放置位置'}>
                            {
                                ['前面','后面','中间'].map((item) =>
                                    <Select.Option value={item}> {item}</Select.Option>)
                            }
                        </Select>
                    </Form.Item>
                    <Form.Item label={'语言'} name={'language'} rules={[
                        {
                            required: true,
                            message: 'is required!',
                        }
                    ]}>
                        <Input.TextArea placeholder={'多个语言使用换行分割,请输入标准的语言格式'} />
                    </Form.Item>
                    <Form.Item label={'标签'} name={'label'}>
                        <Input.TextArea placeholder={'多个标签使用换行分割'} />
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

