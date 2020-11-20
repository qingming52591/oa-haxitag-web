import {Select, Space, Button, Form, Input, Row, Radio, message} from "antd";
import {MinusCircleOutlined, PlusOutlined} from '@ant-design/icons';
import React from 'react'

const add_search_condition = (form, field, index, add, remove) => {
    return (
        <>
            <Space key={field.key}>
                <Form.Item
                    noStyle
                    shouldUpdate
                >
                    {() => {
                        if (index > 0) {
                            return (<Form.Item
                                {...field}
                                name={[field.name, 'and_or']}
                                fieldKey={[field.fieldKey, 'and_or']}
                                rules={[{required: true, message: '请选择'}]}
                            >
                                <Radio.Group
                                    options={[{label: 'And', value: 'and'}, {label: 'Or', value: 'or'}]}
                                    value={'and'}
                                    optionType="button"
                                    buttonStyle="solid"
                                />
                            </Form.Item>)
                        }
                    }}
                </Form.Item>
                {/*search text*/}
                <Form.Item
                    noStyle
                    shouldUpdate
                >
                    {() => {
                        return (
                            <>
                                <Form.Item
                                    {...field}
                                    name={[field.name, 'title']}
                                    fieldKey={[field.fieldKey, 'title']}
                                    rules={[{required: true, message: '请选择'}]}
                                >
                                    <Select style={{width: 130}}>
                                        {(['text', 'title(only)', 'source name']).map(item => (
                                            <Select.Option key={item} value={item}>
                                                {item}
                                            </Select.Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                            </>
                        )
                    }}
                </Form.Item>
                <Form.Item
                    {...field}
                    name={[field.name, 'title_value']}
                    fieldKey={[field.fieldKey, 'title_value']}
                >
                    <Input/>
                </Form.Item>
                {/*category*/}
                <Form.Item
                    noStyle
                    shouldUpdate
                >
                    {() => {
                        return (
                            <>
                                <Form.Item
                                    {...field}
                                    name={[field.name, 'category']}
                                    fieldKey={[field.fieldKey, 'category']}
                                    rules={[{required: true, message: '请选择'}]}
                                >
                                    <Select style={{width: 130}}>
                                        {(['Category', 'Entity', 'Label', 'tag']).map(item => (
                                            <Select.Option key={item} value={item}>
                                                {item}
                                            </Select.Option>
                                        ))}
                                    </Select>
                                </Form.Item>
                            </>
                        )
                    }}
                </Form.Item>
                <Form.Item
                    {...field}
                    name={[field.name, 'category_value']}
                    fieldKey={[field.fieldKey, 'category_value']}
                >
                    <Input/>
                </Form.Item>


                <MinusCircleOutlined onClick={() => remove(field.name)}/>
            </Space><br/>
        </>
    )
}

export const Search = (props) => {
    const [form] = Form.useForm();

    const onFinish = values => {
        console.log('Received values of form:', values);
    };

    return (<>
            <Row justify="center" style={{minHeight: '100vh'}}>
                <Form form={form} name="dynamic_form_nest_item" onFinish={onFinish} autoComplete="off" initialValues={{
                    search: [{
                        fieldKey: 0,
                        isListField: true,
                        key: 0,
                        name: 0,
                    }]
                }}>
                    <Form.List name="search">
                        {(fields, {add, remove}) => {
                            return (
                                <>
                                    {fields.map((field, index) => {
                                        return add_search_condition(form, field, index, add, remove)
                                    })}

                                    <Form.Item>
                                        <Button type="dashed" block icon={<PlusOutlined/>} onClick={() => {
                                            if (fields.length < 3) {
                                                add()
                                            } else {
                                                message.error('同时只可添加3个条件')
                                            }

                                        }}>
                                            添加查询条件
                                        </Button>
                                    </Form.Item>
                                </>
                            )
                        }}
                    </Form.List>
                    <Form.Item>
                        <Input.Group compact>
                            <Form.Item
                                name={['key', 'time']}
                            >
                                <Select style={{width: 130}} placeholder={"时间"}>
                                    {(['Last 72 hours', '7 days', '14 days', '30 days']).map(item => (
                                        <Select.Option key={item} value={item}>
                                            {item}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>
                            <Form.Item
                                name={['key', 'method']}
                            >
                                <Select style={{width: 130}} placeholder={"方法"}>
                                    {(['Contains', 'Vector similarity']).map(item => (
                                        <Select.Option key={item} value={item}>
                                            {item}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>
                            <Form.Item
                                name={['key', 'sort_by']}
                            >
                                <Select style={{width: 130}} placeholder={"sort by"}>
                                    {(['relevancy score', 'timeliness']).map(item => (
                                        <Select.Option key={item} value={item}>
                                            {item}
                                        </Select.Option>
                                    ))}
                                </Select>
                            </Form.Item>

                        </Input.Group>
                    </Form.Item>

                    <Form.Item>
                        <Button type="primary" htmlType="submit">
                            Search
                        </Button>
                    </Form.Item>
                </Form>
            </Row>
        </>
    )
}
