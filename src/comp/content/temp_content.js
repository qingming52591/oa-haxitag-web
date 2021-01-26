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
    Upload,
    Collapse,
    Divider,
    Tabs, message
} from "antd";
import * as event from "../../event";
import React from 'react'
import {Link} from "react-router-dom";
import {InboxOutlined, PlusOutlined} from '@ant-design/icons'
import * as util from '../../util'
import * as g from '../../g'
import test_img from '../../imgs/7777.png'
import {store} from "../../store";
import {re} from '../../util/re'

function getBase64(file, callback) {
    const reader = new FileReader();
    reader.addEventListener('load', () => callback(reader.result));
    reader.readAsDataURL(file);
}

const AddContent = ({type}) => {
    const refUrl = React.useRef(null)
    const [docs, setDocs] = React.useState([])
    const [imgs, setImgs] = React.useState([])
    const [audios, setAudios] = React.useState([])
    if (type === g.content_type.url) {
        return <div>
            <Input ref={refUrl} type={'url'}/>
            <Button style={{marginTop: 10}} onClick={async (e) => {
                if (!re.url(refUrl.current.state.value)) {
                    message.error('请输入正确的url')
                }
                if (await event.content.saveContent(type, refUrl.current.state.value)) {
                    refUrl.current.setState({...refUrl.current.state, ...{value: ''}})
                }
            }}>完成</Button>
        </div>
    } else if (type === g.content_type.docs) {
        return <div>
            <Upload
                // multiple
                accept=".doc,.pdf"
                listType="picture-card"
                fileList={docs}
                onPreview={(file) => {
                }}
                onChange={({fileList}) => {
                    if (fileList.length <= 5) {
                        setDocs([...fileList])
                    } else {
                        message.error('文件数量不可大于5个')
                    }
                }}
                onRemove={(file) => {
                }}
            >
                {docs.length >= 5 ? null : <PlusOutlined/>}
            </Upload>
            <Button style={{marginTop: 10}} onClick={async (e) => {
                if (docs.length <= 0) {
                    message.error('文件不可为空')
                    return false
                }
                let waits = docs.map((item) => {
                    return event.content.saveContent(item.originFileObj.type.split('/').pop(), item.originFileObj)
                })
                await Promise.all(waits)
                message.success('上传成功')
                setDocs([])
            }}>完成</Button>
        </div>
    } else if (type === g.content_type.img) {
        return <div>
            <Upload
                // multiple
                accept=".png"
                listType="picture-card"
                fileList={imgs}
                onPreview={(file) => {
                }}
                onChange={({fileList}) => {
                    if (fileList.length <= 5) {
                        setImgs([...fileList])
                    } else {
                        message.error('文件数量不可大于5个')
                    }
                }}
                onRemove={(file) => {
                }}
            >
                {docs.length >= 5 ? null : <PlusOutlined/>}
            </Upload>
            <Button style={{marginTop: 10}} onClick={async (e) => {
                if (imgs.length <= 0) {
                    message.error('文件不可为空')
                    return false
                }
                let waits = imgs.map((item) => {
                    return event.content.saveContent(type, item.originFileObj)
                })
                await Promise.all(waits)
                message.success('上传成功')
                setImgs([])
            }}>完成</Button>
        </div>
    } else if (type === g.content_type.audio) {
        return <div>
            <Upload
                // multiple
                accept=".mp3"
                listType="picture-card"
                fileList={audios}
                onPreview={(file) => {
                }}
                onChange={({fileList}) => {
                    if (fileList.length <= 5) {
                        setAudios([...fileList])
                    } else {
                        message.error('文件数量不可大于5个')
                    }
                }}
                onRemove={(file) => {
                }}
            >
                {audios.length >= 5 ? null : <PlusOutlined/>}
            </Upload>
            <Button style={{marginTop: 10}} onClick={async (e) => {
                if (audios.length <= 0) {
                    message.error('文件不可为空')
                    return false
                }
                let waits = audios.map((item) => {
                    return event.content.saveContent(type, item.originFileObj)
                })
                await Promise.all(waits)
                message.success('上传成功')
                setAudios([])
            }}>完成</Button>
        </div>
    } else if (type === g.content_type.video) {
        util.goPage('/menu/video')
    } else {
        return <div>Hello World</div>
    }
}

export const Content = (props) => {
    const state = store.useContext();
    const [imgs, setImags] = React.useState({
        previewVisible: false,
        previewImage: '',
        previewTitle: '',
        fileList: [],
        panelKey: [],
        viewResult: false
    })

    React.useEffect(() => {
        (async () => {
            await event.content.getContent()
        })()
    }, [])
    const uploadButton = (
        <div>
            <PlusOutlined/>
            <div style={{marginTop: 8}}>上传</div>
        </div>
    );

    const columns = [
        {
            title: '唯一标识',
            dataIndex: '_id',
            key: '_id',
            render: (text, record) => {
                return <a target={'blank'} href={record.path}>{record._id}</a>
            }
        }, {
            title: '处理状态',
            dataIndex: 'result',
            key: 'result',
            render: (text, record) => {
                return g.contents_result_desc[record.result]
            }
        }, {
            title: '标题',
            dataIndex: 'title',
            key: 'title',
            render: (text, record) => {
                return record.title
            }
        }, {
            title: '摘要',
            dataIndex: 'yl_summary',
            key: 'yl_summary',
            render: (text, record) => {
                return record.yl_summary.slice(0, 40)
            }
        }, {
            title: '文件类型',
            dataIndex: 'type',
            key: 'type',
            render: (text, record) => {
                return g.content_type_desc[record.type]
            }
        }, {
            title: '操作',
            key: 'action',
            render: (text, record) => {
                return (
                    <>
                        <Button type="link" disabled={record.result ? true : false}
                                onClick={(e) => setImags({...imgs, ...{viewResult: true}})}>结果展示</Button>
                        <Button type="link">删除</Button>
                    </>
                )
            }
        }
    ]
    return (
        <>
            <Collapse onChange={(d) => {
                setImags({...imgs, ...{panelKey: d}})
            }} activeKey={imgs.panelKey} style={{margin: "10px 0px"}}>
                <Collapse.Panel collapsible={'disabled'} showArrow={false} header="添加内容" key={'1'}>
                    <Tabs defaultActiveKey="1" onChange={() => {
                    }}>
                        <Tabs.TabPane tab="网页" key={g.content_type.url}>
                            <AddContent type={g.content_type.url}/>
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="文档(.pdf .doc)" key={g.content_type.docs}>
                            <AddContent type={g.content_type.docs}/>
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="图片" key={g.content_type.img}>
                            <AddContent type={g.content_type.img}/>
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="音频" key={g.content_type.audio}>
                            <AddContent type={g.content_type.audio}/>
                        </Tabs.TabPane>
                        <Tabs.TabPane tab="视频" key={g.content_type.video}>
                            <AddContent type={g.content_type.video}/>
                        </Tabs.TabPane>
                    </Tabs>
                    <Modal
                        visible={imgs.previewVisible}
                        title={"图片预览"}
                        footer={null}
                        onCancel={() => setImags({...imgs, ...{previewVisible: false}})}
                    >
                        <img alt="example" style={{width: '100%'}} src={imgs.previewImage}/>
                    </Modal>
                </Collapse.Panel>
            </Collapse>
            <Table
                columns={columns}
                dataSource={state.user.content.contents}
                pagination={{pageSize: 50}}
                size={'small'}
                bordered
            />
        </>
    )
}
