import {store} from "../../store";
import {Col, Row, Button, Form, Input, message, Modal, Table} from "antd";
import * as event from "../../event";
import React from 'react'


export const App = (props) => {
    const state = store.useContext()
    const [showModal, setShowModal] = React.useState(false)
    const [modalInit, setModalInit] = React.useState({})
    React.useEffect(async () => {
        await event.app.getApp()
    }, [])
    const columns = [
        {
            title: 'name',
            dataIndex: 'name',
            key: 'name',
        }, {
            title: 'enter',
            dataIndex: 'english_name',
            key: 'enter',
        }
    ]
    return (
        <>
            <Row justify="end">
                <Col span={2}>
                    <EditApp show={showModal} setShow={setShowModal} initData={modalInit} setInitData={setModalInit}/>
                    <Button type={'primary'} onClick={async () => {
                        setModalInit({
                            _id: '',
                            name: '',
                            enter: ''
                        })
                        setShowModal(true)
                    }}>创建APP</Button>
                </Col>
            </Row>
            <Table
                columns={columns}
                dataSource={state.setting.app.app}
                size={'small'}
                scroll={{y: 750}}
                onRow={(record) => {
                    return {
                        onClick: (event) => {
                            setModalInit({
                                _id: record._id,
                                name: record.name,
                                enter: record.enter
                            })
                            setShowModal(true)
                        }
                    }
                }}
            />
        </>
    )
}

const EditApp = (props) => {
    const [form] = Form.useForm()
    form.setFieldsValue(props.initData)
    return (
        <>
            <Modal key={Math.random()}
                   title={'编辑App'}
                   visible={props.show}
                   okText={'保存'} cancelText={'取消'}
                   onCancel={(e) => {
                       props.setShow(false)
                       form.resetFields()
                   }}
                   onOk={() => {
                       form.validateFields()
                           .then(async (values) => {
                               if (!await event.app.saveApp(values)) {
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
                <Form key={Math.random()} form={form}>
                    <Form.Item label={'_id'} name={'_id'} hidden={true}>
                        <Input/>
                    </Form.Item>
                    <Form.Item label={'名称'} name={'name'} rules={[
                        {
                            required: true,
                            message: 'is required!',
                        }
                    ]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item label={'入口'} name={'enter'} rules={[
                        {
                            required: true,
                            message: 'is required!',
                        }
                    ]}>
                        <Input/>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}
