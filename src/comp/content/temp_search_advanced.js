import {Select, Space, Button, Form, Input, Row, Radio, message, Empty, Col, Image, Tag, Card, Pagination} from "antd";
import {MinusCircleOutlined, PlusOutlined} from '@ant-design/icons';
import React from 'react'
import * as event from '../../event'
import * as util from '../../util'

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
    const [advance, setAdvance] = React.useState(false)
    const [data, setData] = React.useState([])
    const onFinish = values => {
        console.log('Received values of form:', values);
    };
    // const data = [
    //     {
    //         title: '光伏产业链最全分析',
    //         summary: "2025年至2035年，中国光伏将进入规模化加速部署时期，到2050年，光伏将成为中国第一大电源，约占当年全国用电量的40%左右，未来光伏发展的空间和潜力仍然较大 -- 预计全球范围内2025年光伏度电成本将全面低于火电成本2.预计未来两年，全球光伏新增装机规模增速均能够保持在15%以上3.因此长期看，全球光伏2020年起进入发电侧平价上网过渡期，未来几年平价上网数量占比将逐渐提升4.测算下来，国内未来五年光伏平均装机量会落在80-90GW之间四、产业链拐点1.2018年产业链突破：度电成本低于煤炭发电，行业出现拐点：2018年12月29日，在国家“光伏领跑者计划”推动下，截至目前国内单体装机最大的光伏领跑者项目于我国青海格尔木正式并网发电，该项目上网电价平均为0.316元/千瓦时，低于当地煤电标杆电价0.3247元/千瓦时近1分钱。此外，风电成本为是4.1日元，核电是15.5日元11.全球范围来看，预计2025年光伏发电成本将全面低于煤炭发电成本五、光伏玻璃1.光伏玻璃覆盖在光伏组件上的光伏玻璃经过镀膜后，可以确保有更高的光线透过率，同时经过钢化处理的光伏玻璃具有更高的强度，可以使太阳能电池片承受更大的风压及较大的昼夜温差变化2.双面组件可吸收被环境反射的太阳光，从而对组件的光电流和效率产生贡献，双面技术已在第三批领跑者中获得应用六、单晶硅 VS 多晶硅1.单多晶技术差异主要源自硅片环节。6.有机构统计显示，多晶硅、硅片、电池片、组件4个环节的产品，在2018年5月31日至2019年5月31日一年时间里，价格平均跌幅超过30%7. 中国光伏2005年诞生，从2007年沉淀至2019年，光伏发电度电成本累计下降超过90%8.煤炭在中国能源结构比例在2018年已经低于60%",
    //         url: 'https://www.yueli.com',
    //         keywords: ["三超", "上海", "亚洲", "亚玛顿", "墨西哥", "奥特"]
    //     }, {
    //         title: '锂离子电池四大主材之正负极材料',
    //         summary: "中间相碳微球、无定形碳、硅或锡类仅占据小部分市场份额.锂离子电池对负极材料基本的特征为：1、 嵌入电位低、尽量与锂的氧化还原反应电位接近2、 单位重量内尽可能高的储能密度3、 良好的嵌入嵌出速度、较小的扩散阻力4、 较高的电子导电性5、 与箔材较好的粘结性能、烘烤过程不易脱落6、 亲水性强，具有较低的制备成本、浆料过程稳定性高嵌入型负极材料 最典型的嵌入型负极材料是碳材料。",
    //         url: 'https://www.yueli.com',
    //         keywords: ["锂离子", "中国", "加拿大", "巴西", "津巴布韦", "澳大利亚"]
    //     }, {
    //         title: '锂离子电池四大主材之正负极材料',
    //         summary: "中间相碳微球、无定形碳、硅或锡类仅占据小部分市场份额.锂离子电池对负极材料基本的特征为：1、 嵌入电位低、尽量与锂的氧化还原反应电位接近2、 单位重量内尽可能高的储能密度3、 良好的嵌入嵌出速度、较小的扩散阻力4、 较高的电子导电性5、 与箔材较好的粘结性能、烘烤过程不易脱落6、 亲水性强，具有较低的制备成本、浆料过程稳定性高嵌入型负极材料 最典型的嵌入型负极材料是碳材料。",
    //         url: 'https://www.yueli.com',
    //         keywords: ["锂离子", "中国", "加拿大", "巴西", "津巴布韦", "澳大利亚"]
    //     }, {
    //         title: '锂离子电池四大主材之正负极材料',
    //         summary: "中间相碳微球、无定形碳、硅或锡类仅占据小部分市场份额.锂离子电池对负极材料基本的特征为：1、 嵌入电位低、尽量与锂的氧化还原反应电位接近2、 单位重量内尽可能高的储能密度3、 良好的嵌入嵌出速度、较小的扩散阻力4、 较高的电子导电性5、 与箔材较好的粘结性能、烘烤过程不易脱落6、 亲水性强，具有较低的制备成本、浆料过程稳定性高嵌入型负极材料 最典型的嵌入型负极材料是碳材料。",
    //         url: 'https://www.yueli.com',
    //         keywords: ["锂离子", "中国", "加拿大", "巴西", "津巴布韦", "澳大利亚"]
    //     }, {
    //         title: '锂离子电池四大主材之正负极材料',
    //         summary: "中间相碳微球、无定形碳、硅或锡类仅占据小部分市场份额.锂离子电池对负极材料基本的特征为：1、 嵌入电位低、尽量与锂的氧化还原反应电位接近2、 单位重量内尽可能高的储能密度3、 良好的嵌入嵌出速度、较小的扩散阻力4、 较高的电子导电性5、 与箔材较好的粘结性能、烘烤过程不易脱落6、 亲水性强，具有较低的制备成本、浆料过程稳定性高嵌入型负极材料 最典型的嵌入型负极材料是碳材料。",
    //         url: 'https://www.yueli.com',
    //         keywords: ["锂离子", "中国", "加拿大", "巴西", "津巴布韦", "澳大利亚"]
    //     }
    //
    // ]

    return (
        <>
            <Row justify="center">
                <Form form={form} name="dynamic_form_nest_item" autoComplete="off">
                    <Space>
                        <Form.Item name={'search'}>
                            <Input.Search
                                placeholder="输入搜索内容"
                                enterButton="搜索"
                                size="large"
                                onSearch={async () => {
                                    let r = await event.search.search(`kw=${form.getFieldValue('search')}`)
                                    if (r) {
                                        let s_r = []
                                        r.data.result.map(item => {
                                            s_r.push({
                                                title: item.title,
                                                summary: item.content,
                                                url: item.article_url,
                                                keywords: item.label.split(' ')
                                            })
                                            return item
                                        })
                                        setData(s_r)
                                    }
                                }}
                                style={{width: '750px'}}
                            />

                        </Form.Item>
                        <Button onClick={(e) => {
                            setAdvance(advance ? false : true)
                        }} type={"link"}>高级搜索</Button>
                    </Space>
                    <Form.Item noStyle shouldUpdate>
                        {(ins) => {
                            if (advance) {
                                return (
                                    <Form.Item noStyle shouldUpdate>
                                        <Form.List name="advance">
                                            {(fields, {add, remove}) => {
                                                return (
                                                    <div>
                                                        {fields.map((field, index) => {
                                                            return add_search_condition(form, field, index, add, remove)
                                                        })}

                                                        <Form.Item>
                                                            <Button type="dashed" block icon={<PlusOutlined/>}
                                                                    onClick={() => {
                                                                        if (fields.length < 3) {
                                                                            add()
                                                                        } else {
                                                                            message.error('同时只可添加3个条件')
                                                                        }

                                                                    }}>
                                                                添加查询条件
                                                            </Button>
                                                        </Form.Item>
                                                    </div>
                                                )
                                            }}
                                        </Form.List>
                                        <Space>
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

                                        </Space>
                                    </Form.Item>
                                )
                            }

                        }}
                    </Form.Item>

                </Form>
            </Row>
            {data.map((item) => {
                return (
                    <Card style={{margin: "0 100px"}}>
                        <Row>
                            <Col span={18}>
                                <Space direction={"vertical"}>
                                    <a href={item.url}
                                       target={"_blank"}>{item.title.replaceAll('<b>', '').replaceAll('</b>', '')}</a>
                                    <div>{item.summary.substr(0, 200)}</div>
                                </Space>
                            </Col>
                            <Col span={4}>
                                {item.keywords.length > 6 ? item.keywords.splice(0, 6).map((tag) =>
                                    <Tag>{tag}</Tag>) : item.keywords.map((tag) => <Tag>{tag}</Tag>)}
                            </Col>
                        </Row>
                    </Card>
                )
            })}
            <Row justify={'center'} style={{marginTop: "10px"}}>
                <Pagination defaultCurrent={6} total={500}/>
            </Row>
        </>
    )
}
