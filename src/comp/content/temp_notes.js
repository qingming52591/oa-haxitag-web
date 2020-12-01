import {
    Col,
    Row,
    Button,
    Form,
    Input,
    DatePicker,
    Modal,
    Table,
    Space,
    Avatar,
    Select,
    Checkbox,
    InputNumber
} from "antd";
import * as event from "../../event";
import React from 'react'
import * as util from '../../util'


export const TakeNotes = (props) => {
    const [showModal, setShowModal] = React.useState(false)
    const columns = [
        {
            title: '标题',
            dataIndex: 'title',
            key: 'title',
        }, {
            title: '分类',
            dataIndex: 'type',
            key: 'type',
        }, {
            title: '关键词',
            dataIndex: 'keyword',
            key: 'keyword',
        }, {
            title: '操作',
            key: 'action',
            render: (text, record) => {
                return (<>
                    <Space>
                        <Button type="link" onClick={e => {
                            setShowModal(true)
                            util.goPage('/note/write')
                        }}>编辑</Button>
                    </Space>
                </>)
            }
        }
    ]
    return (
        <>
            <Row justify="end">
                <Button type={'primary'} onClick={e => {
                    util.goPage('/note/write')
                }}>写笔记</Button>
            </Row>
            <Table
                columns={columns}
                dataSource={[
                    {
                        keyword: "房产税，传言，假",
                        type: "财经",
                        title: "一个假的不能再假的房产税传言，还有人信！"
                    }, {
                        keyword: "黄山，冬日，云海，村庄，江南，徽州",
                        type: "旅游",
                        title: "黄山宏村，一生痴绝处，无梦到徽州"
                    }, {
                        keyword: "机器学习，正则化，归一化，标准化",
                        type: "科技",
                        title: "彻底搞懂机器学习中的正则化"
                    }, {
                        keyword: "吉他，农民，中国吉他制造之乡，致富带头人，代工工厂，自主品牌",
                        type: "商业",
                        title: "连西洋乐器都几乎没见过的中国农民，凭什么承包了全球最知名的吉他？"
                    }, {
                        keyword: "养生，每日人物，即食燕窝",
                        type: "商业",
                        title: "燕窝围猎年轻人"
                    }, {
                        keyword: "陆奇，YC中国，投资机构，人工智能，商业战场",
                        type: "创投",
                        title: "他不在江湖，但江湖处处都是他"
                    }, {
                        keyword: "房地产，楼市，打新，降价，哈尔滨，人口流失",
                        type: "财经",
                        title: "哈尔滨打响降价第一枪？"
                    }, {
                        keyword: "中国驻加拿大使馆，孟晚舟，慰问，赵立坚，正义",
                        type: "国际",
                        title: "中国驻加拿大大使同孟晚舟通电话"
                    }
                ]}
                size={'small'}
                bordered
                onRow={(record) => {
                    return {
                        onClick: (event) => {
                        }
                    }
                }}
            />
        </>
    )
}
