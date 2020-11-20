import {Col, Row, Button, Form, Input, message, Modal, Table, Space, Avatar} from "antd";
import * as event from "../../event";
import React from 'react'
import {Link} from "react-router-dom";


export const VideoKeyword = (props) => {
    const columns = [
        {
            title: '关键词',
            dataIndex: 'keyword',
            key: 'keyword',
        }, {
            title: '分类',
            dataIndex: 'type',
            key: 'type',
        }, {
            title: '抓取条件',
            dataIndex: 'crawl_condition',
            key: 'crawl_condition',
        }, {
            title: '要求时长',
            dataIndex: 'time',
            key: 'time',
        }, {
            title: '清晰度',
            dataIndex: 'sharpness',
            key: 'sharpness',
        }, {
            title: '操作',
            key: 'action',
            render: (text, record) => {
                return (<>
                    <Space>
                        <Link>编辑</Link>
                    </Space>
                </>)
            }
        }
    ]
    return (
        <>
            <Row justify="end">
                <Button type={'primary'}>添加</Button>
            </Row>
            <Table
                columns={columns}
                dataSource={[
                    {
                        keyword: "Telecommunications",
                        type: "Travel",
                        crawl_condition: "观看次数",
                        time: "≤5min",
                        sharpness: "1080P 720P"
                    },
                    {
                        keyword: "Technology",
                        type: "Travel",
                        crawl_condition: "观看次数",
                        time: "≤5min",
                        sharpness: "1080P 720P"
                    },
                    {
                        keyword: "Cheap Travel places",
                        type: "Travel",
                        crawl_condition: "观看次数",
                        time: "≤5min",
                        sharpness: "1080P 720P"
                    },
                    {
                        keyword: "Travel guide",
                        type: "Travel",
                        crawl_condition: "观看次数",
                        time: "≤5min",
                        sharpness: "1080P 720P"
                    },
                    {
                        keyword: "Travel After Coronavirus",
                        type: "Travel",
                        crawl_condition: "观看次数",
                        time: "≤5min",
                        sharpness: "1080P 720P"
                    },
                    {
                        keyword: "Best Travel places",
                        type: "Travel",
                        crawl_condition: "观看次数",
                        time: "≤5min",
                        sharpness: "1080P 720P"
                    },
                    {
                        keyword: "holiday",
                        type: "Travel",
                        crawl_condition: "观看次数",
                        time: "≤5min",
                        sharpness: "1080P 720P"
                    },
                    {
                        keyword: "tourist",
                        type: "Travel",
                        crawl_condition: "观看次数",
                        time: "≤5min",
                        sharpness: "1080P 720P"
                    },
                    {
                        keyword: "travel light",
                        type: "Travel",
                        crawl_condition: "观看次数",
                        time: "≤5min",
                        sharpness: "1080P 720P"
                    },
                    {
                        keyword: "resort",
                        type: "Travel",
                        crawl_condition: "观看次数",
                        time: "≤5min",
                        sharpness: "1080P 720P"
                    },
                ]}
                size={'small'}
                scroll={{y: 750}}
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