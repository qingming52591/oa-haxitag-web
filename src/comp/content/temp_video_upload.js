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
    InputNumber,
    Upload
} from "antd";
import * as event from "../../event";
import React from 'react'
import {Link} from "react-router-dom";
import {InboxOutlined} from '@ant-design/icons'
import * as util from '../../util'

export const VideoUpload = (props) => {
    const [showModal, setShowModal] = React.useState(false)
    const columns = [
        {
            title: '唯一标识',
            dataIndex: 'id',
            key: 'id'
        }, {
            title: '视频名称',
            dataIndex: 'video_name',
            key: 'video_name',
        }, {
            title: '时长',
            dataIndex: 'time',
            key: 'time',
        }, {
            title: '清晰度',
            dataIndex: 'sharpness',
            key: 'sharpness',
        }, {
            title: '处理状态',
            dataIndex: 'status',
            key: 'status',
            render: (text, record) => {
                if (record.status === 1)
                    return "处理完成"
                else {
                    return "处理中"
                }
            }
        }, {
            title: '操作',
            key: 'action',
            render: (text, record) => {
                return (<>
                    <Space>
                        <Button type="link" onClick={() => {
                            Modal.info({
                                title: record.video_name,
                                content: (
                                    <div>
                                        <div>原视频:</div>
                                        <video style={{width: "100%", height: "100%", "object-fit": "fill"}}
                                               id={record.id} controls
                                               src={record.origin}/>
                                        <div>精彩片段:</div>
                                        {record.result.map(item =>
                                            <video style={{width: "100%", height: "100%", "object-fit": "fill"}}
                                                   id={record.id} controls
                                                   src={item}/>)}

                                    </div>
                                ),
                                onOk() {
                                },
                            });
                        }}>结果展示</Button>
                    </Space>
                </>)
            }
        }
    ]
    return (
        <>
            <Row justify="end">
                <EditVideoUpload show={showModal} setShow={setShowModal}></EditVideoUpload>
                <Button type={'primary'} onClick={e => {
                    setShowModal(true)
                }}>上传视频</Button>
            </Row>
            <Table
                columns={columns}
                dataSource={[
                    {
                        id: "1605760010680",
                        video_name: "《钢铁侠1》精彩片段",
                        time: "≤80min",
                        sharpness: "720P",
                        origin: "http://sckm.vip/video/movies/1605582783897.mp4",
                        result: ["http://sckm.vip/video/results/1605582783897/1605582783897_1799.mp4",
                            "http://sckm.vip/video/results/1605582783897/1605582783897_2699.mp4",
                            "http://sckm.vip/video/results/1605582783897/1605582783897_3599.mp4",
                            "http://sckm.vip/video/results/1605582783897/1605582783897_5399.mp4",
                            "http://sckm.vip/video/results/1605582783897/1605582783897_7499.mp4"],
                        status: 0
                    },
                    {
                        id: "1605760012650",
                        video_name: "《古墓丽影》精彩片段",
                        time: "≤40min",
                        sharpness: "720P",
                        origin: "http://sckm.vip/video/movies/1605582783897.mp4",
                        result: ["http://sckm.vip/video/results/1605582783897/1605582783897_1799.mp4",
                            "http://sckm.vip/video/results/1605582783897/1605582783897_2699.mp4",
                            "http://sckm.vip/video/results/1605582783897/1605582783897_3599.mp4",
                            "http://sckm.vip/video/results/1605582783897/1605582783897_5399.mp4",
                            "http://sckm.vip/video/results/1605582783897/1605582783897_7499.mp4"],
                        status: 1
                    },
                    {
                        id: "1605760020120",
                        video_name: "《超能骇客》精彩片段",
                        time: "≤70min",
                        sharpness: "1080P",
                        origin: "http://sckm.vip/video/movies/1605582783897.mp4",
                        result: ["http://sckm.vip/video/results/1605582783897/1605582783897_1799.mp4",
                            "http://sckm.vip/video/results/1605582783897/1605582783897_2699.mp4",
                            "http://sckm.vip/video/results/1605582783897/1605582783897_3599.mp4",
                            "http://sckm.vip/video/results/1605582783897/1605582783897_5399.mp4",
                            "http://sckm.vip/video/results/1605582783897/1605582783897_7499.mp4"],
                        status: 0
                    },
                    {
                        id: "1605760020360",
                        video_name: "《机械公敌》精彩片段",
                        time: "≤30min",
                        sharpness: "720P",
                        origin: "http://sckm.vip/video/movies/1605582783897.mp4",
                        result: ["http://sckm.vip/video/results/1605582783897/1605582783897_1799.mp4",
                            "http://sckm.vip/video/results/1605582783897/1605582783897_2699.mp4",
                            "http://sckm.vip/video/results/1605582783897/1605582783897_3599.mp4",
                            "http://sckm.vip/video/results/1605582783897/1605582783897_5399.mp4",
                            "http://sckm.vip/video/results/1605582783897/1605582783897_7499.mp4"],
                        status: 1
                    },
                    {
                        id: "1605760030650",
                        video_name: "《黑客帝国1》精彩片段",
                        time: "≤90min",
                        sharpness: "480P",
                        origin: "http://sckm.vip/video/movies/1605582783897.mp4",
                        result: ["http://sckm.vip/video/results/1605582783897/1605582783897_1799.mp4",
                            "http://sckm.vip/video/results/1605582783897/1605582783897_2699.mp4",
                            "http://sckm.vip/video/results/1605582783897/1605582783897_3599.mp4",
                            "http://sckm.vip/video/results/1605582783897/1605582783897_5399.mp4",
                            "http://sckm.vip/video/results/1605582783897/1605582783897_7499.mp4"],
                        status: 1
                    }
                ]}
                size={'small'}
                bordered
            />
        </>
    )
}

const EditVideoUpload = (props) => {
    const [video, setVideo] = React.useState('')
    const [showVideo, setShowVideo] = React.useState(0)

    function getBase64(file, callback) {
        const reader = new FileReader();
        reader.addEventListener('load', () => callback(reader.result));
        reader.readAsDataURL(file);
    }

    return (
        <>
            <Modal
                title={'编辑'}
                visible={props.show}
                okText={'保存'} cancelText={'取消'}
                onCancel={(e) => {
                    props.setShow(false)
                    setShowVideo(0)
                    setVideo('')
                }}
                onOk={() => {
                    props.setShow(false)
                    setShowVideo(0)
                    setVideo('')
                }}
            >
                <Upload.Dragger
                    multiple={false}
                    beforeUpload={file => {
                        // util.log(file.slice())
                        getBase64(file, fileObj => {
                            setVideo(fileObj)
                            setShowVideo(24)
                        })
                    }}
                    onRemove={file => {
                        setShowVideo(0)
                        setVideo('')
                    }}
                >
                    <p className="ant-upload-drag-icon">
                        <InboxOutlined/>
                    </p>
                    <p className="ant-upload-text">点击上传或拖拽视频文件上传</p>
                </Upload.Dragger>
                <Row>
                    <Col span={showVideo}>
                        <video style={{width: "100%", height: "100%", "object-fit": "fill"}}
                               src={video}
                               controls></video>
                    </Col>
                </Row>
            </Modal>
        </>
    )
}