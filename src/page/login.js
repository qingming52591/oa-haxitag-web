import React from "react"
import {store} from "../store";
import {Row, Col, Form, Input, Button, Checkbox} from "antd";
import * as event from '../event'

const Login = (props) => {
    const state = store.useContext();
    const [form] = Form.useForm()
    return (
        <Row type="flex" justify="center" align="middle" style={{minHeight: '100vh'}}>
            <Col>
                <Form name="basic" onFinish={event.user.onLogin}>
                    <Form.Item label="用户名" name="username"
                               rules={[{required: true, message: 'Please input your username!'}]}>
                        <Input/>
                    </Form.Item>

                    <Form.Item label="密码" name="password"
                               rules={[{required: true, message: 'Please input your password!'}]}>
                        <Input.Password/>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">登录</Button>
                    </Form.Item>

                </Form>
            </Col>
        </Row>
    )
};

export default Login


