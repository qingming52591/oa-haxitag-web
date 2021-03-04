import React from "react"
import {Row, Col, Form, Input, Button} from "antd";
import * as event from '../event'

const Login = (props) => {
    const layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };
    const tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16,
        },
    };
    return (
        <Row type="flex" justify="center" align="middle" style={{minHeight: '100vh'}}>
            <Form {...layout} name="basic" onFinish={event.user.onLogin}>
                <Form.Item label="团队账户" name="team">
                    <Input defaultValue={'haxitag.com'}/>
                </Form.Item>
                <Form.Item label="用户名" name="username"
                           rules={[{required: true, message: 'Please input your username!'}]}>
                    <Input/>
                </Form.Item>

                <Form.Item label="密码" name="password"
                           rules={[{required: true, message: 'Please input your password!'}]}>
                    <Input.Password/>
                </Form.Item>

                <Form.Item {...tailLayout}>
                    <Button type="primary" htmlType="submit">登录</Button>
                </Form.Item>

            </Form>
        </Row>
    )
};

export default Login


