import {List, Col, Row, Button, Form, Input, message, Modal, Table, Space, Avatar, Card, Image, Tag} from "antd";
import * as event from "../../event";
import React from 'react'
import {Link} from "react-router-dom";
import {MessageOutlined, LikeOutlined, StarOutlined, TagOutlined} from '@ant-design/icons'
import zongjingban from '../../imgs/zongjingban.png'
import hr from '../../imgs/hr.jpeg'


export const Feeds = (props) => {
    const listData = [
        {
            href: 'https://www.yueli.com',
            title: '【置顶】新员工培训手册',
            avatar: {hr},
            come_from: 'HR',
            description:
                '欢迎加入我司！聚光灯已开，请起舞吧！',
            content:
                '小鲜肉们，攻略都在这里了，宝藏就呆你们自己发掘了！',
        },
        {
            href: 'https://www.yueli.com',
            title: '【军】销售团队军令状',
            avatar: {zongjingban},
            come_from: '总经办',
            description:
                '',
            content:
                '立贴为证！我部门季度目标，现实一个"小目标"！',
        },
        {
            href: 'https://www.yueli.com',
            title: '年终奖发放制度',
            avatar: {hr},
            come_from: 'HR',
            description:
                '',
            content:
                '2020年年终奖发放制度',
        }
    ]
    const IconText = ({icon, text}) => (
        <Space>
            {React.createElement(icon)}
            {text}
        </Space>
    )
    const getImg = (come_from) => {
        if (come_from === 'HR') {
            return <img
                width={200}
                alt="logo"
                src={hr}
            />
        } else if (come_from === '总经办') {
            return <img
                width={200}
                alt="logo"
                src={zongjingban}
            />
        }
    }
    return (<>
        <List
            itemLayout="vertical"
            size="small"
            style={{"background-color": '#fff'}}
            split={true}
            pagination={{
                onChange: page => {
                    console.log(page);
                },
                pageSize: 5,
            }}
            dataSource={listData}
            renderItem={item => (
                <List.Item
                    key={item.title}
                    actions={[
                        <IconText icon={TagOutlined} text={item.come_from} key="1"/>,
                        <IconText icon={StarOutlined} text="156" key="2"/>,
                        <IconText icon={LikeOutlined} text="156" key="3"/>,
                        <IconText icon={MessageOutlined} text="2" key="4"/>,
                    ]}
                    extra={getImg(item.come_from)}
                >
                    <List.Item.Meta
                        // avatar={<Avatar src={item.avatar}/>}
                        title={<a target={"_blank"} href={item.href}>{item.title}</a>}
                        description={item.description}
                    />
                    {item.content}
                </List.Item>
            )}
        />
    </>)
}