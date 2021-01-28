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
    Tabs, message, Tag, Popconfirm, Popover
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

const SaveTag = ({key, keyWord, item, setData, onClose, opt, is_new = false}) => {
    const [show, setShow] = React.useState(false)
    console.log(keyWord)
    return <Popover
        placement="top"
        trigger={'click'}
        visible={show}
        content={() => {
            let data = {
                is_new: is_new,
                tag: '',
                score: 0.0,
                key: keyWord,
                opt: opt
            }
            if (!is_new) {
                data = {
                    is_new: is_new,
                    tag: item.tag,
                    score: item.score,
                    key: keyWord,
                    opt: opt
                }
            }
            return <Space direction={'vertical'} size={'small'} align={'start'}>
                tag: <Input defaultValue={data.tag}
                            onChange={e => data.tag = e.target.value} size={'small'}/>
                score: <InputNumber defaultValue={data.score}
                                    onChange={n => data.score = parseFloat(n)} min={0}
                                    size={'small'} step={0.01} precision={2}
                                    style={{width: '100%'}}/>
                <Button onClick={() => {
                    setData(data)
                    setShow(false)
                }}>保存</Button>
            </Space>
        }}
        destroyTooltipOnHide={true}
        onVisibleChange={e => setShow(e)}
        onClick={e => setShow(true)}
    >
        {is_new ? <Tag>New</Tag> : <Tag key={key} closable onClose={e => {
            if (onClose) onClose(item)
            setShow(false)
        }}>{item.tag}</Tag>}
    </Popover>
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
    const [showResult, setShowResult] = React.useState(false)
    const [edit, setEdit] = React.useState(
        {
            title_edit: false,
            summary_edit: false,
            type_new: false,
            type_edit: null,
            entity_new: false,
            entity_edit: null,
            label_new: false,
            label_edit: null,
            data: {}
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

    const saveData = (data) => {
        let new_data = []
        let key = ''
        if (data.opt === 'type') {
            new_data = [...edit.data.bilstm_category]
            key = 'bilstm_category'
        } else if (data.opt === 'entity') {
            new_data = [...edit.data.bilstm_entity]
            key = 'bilstm_entity'
        } else if (data.opt === 'label') {
            new_data = [...edit.data.bilstm_label]
            key = 'bilstm_label'
        } else {
            return
        }
        if (data.is_new) {
            new_data.push({
                tag: data.tag,
                score: data.score,
                state: 0
            })
        } else {
            console.log(data)
            new_data = new_data.map(item => item.tag === data.key ? {
                tag: data.tag,
                score: data.score,
                state: 0
            } : item)
        }
        setEdit({
            ...edit, ...{
                data: {...edit.data, ...{[key]: new_data}}
            }
        })
    }
    const onClose = (data) => {
        let new_data = []
        let key = ''
        if (data.opt === 'type') {
            new_data = edit.data.bilstm_category.filter(item => item.tag !== data.tag)
            key = 'bilstm_category'
        } else if (data.opt === 'entity') {
            new_data = edit.data.bilstm_entity.filter(item => item.tag !== data.tag)
            key = 'bilstm_entity'
        } else if (data.opt === 'label') {
            new_data = edit.data.bilstm_label.filter(item => item.tag !== data.tag)
            key = 'bilstm_label'
        } else {
            return
        }
        let new_category =
            setEdit({
                ...edit, ...{
                    data: {...edit.data, ...{[key]: new_data}}
                }
            })
    }

    const columns = [
        {
            title: '唯一标识',
            dataIndex: '_id',
            key: '_id',
            render: (text, record) => {
                return <a target={'blank'} href={record.path}>{record._id}</a>
            }
        }, {
            title: '文件类型',
            dataIndex: 'type',
            key: 'type',
            render: (text, record) => {
                return g.content_type_desc[record.type]
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
            title: '操作',
            key: 'action',
            render: (text, record) => {
                return (
                    <>
                        <Button type="link" disabled={record.result ? true : false}
                                onClick={(e) => {
                                    setEdit({
                                        ...edit, ...{
                                            data: {...record}
                                        }
                                    })
                                    setShowResult(true)
                                }}>结果展示</Button>
                        <Button type="link">删除</Button>
                    </>
                )
            }
        }
    ]
    return (
        <>
            <Modal title={'查看结果'} visible={showResult}
                   onOk={() => setShowResult(false)}
                   onCancel={() => setShowResult(false)}
                   footer={null}
                   width={'75%'}
            >
                <Row>
                    <Col span={16}>
                        {edit.data.content}
                    </Col>
                    <Col span={8} style={{paddingLeft: 10}}>
                        <Divider orientation={'left'}>标题</Divider>
                        <span onDoubleClick={(e) => {
                            setEdit({...edit, ...{title_edit: true}})
                        }}>
                            {(() => {
                                if (edit.title_edit) {
                                    return <Input
                                        ref={input => input ? input.focus() : null}
                                        value={edit.data.title}
                                        onChange={(e) => {
                                            setEdit({
                                                ...edit, ...{
                                                    data: {...edit.data, ...{title: e.target.value}}
                                                }
                                            })
                                        }}
                                        onPressEnter={e => setEdit({...edit, ...{title_edit: false}})}
                                        onBlur={e => setEdit({...edit, ...{title_edit: false}})}
                                    ></Input>
                                } else {
                                    return edit.data.title
                                }
                            })()}
                        </span>
                        <Divider orientation={'left'}>摘要</Divider>
                        <span onDoubleClick={(e) => {
                            setEdit({...edit, ...{summary_edit: true}})
                        }}>
                            {(() => {
                                if (edit.summary_edit) {
                                    return <Input.TextArea
                                        rows={10}
                                        ref={input => input ? input.focus() : null}
                                        value={edit.data.yl_summary}
                                        onChange={(e) => {
                                            setEdit({
                                                ...edit, ...{
                                                    data: {...edit.data, ...{yl_summary: e.target.value}}
                                                }
                                            })
                                        }}
                                        onPressEnter={e => setEdit({...edit, ...{summary_edit: false}})}
                                        onBlur={e => setEdit({...edit, ...{summary_edit: false}})}
                                    ></Input.TextArea>
                                } else {
                                    return edit.data.yl_summary
                                }
                            })()}
                        </span>
                        <Divider orientation={'left'}>分类</Divider>
                        {(() => {
                            if (edit.data.bilstm_category) {
                                return edit.data.bilstm_category.map((item, index) => {
                                    return <SaveTag key={item.tag} keyWord={item.tag} item={item} setData={saveData}
                                                    onClose={onClose} opt={'type'}/>
                                })
                            }
                        })()}
                        <SaveTag is_new={true} setData={saveData} opt={'type'}/>
                        <Divider orientation={'left'}>实体</Divider>
                        {(() => {
                            if (edit.data.bilstm_entity) {
                                return edit.data.bilstm_entity.map((item, index) => {
                                    return <SaveTag key={item.tag} keyWord={item.tag} item={item} setData={saveData}
                                                    onClose={onClose} opt={'entity'}/>
                                })
                            }
                        })()}
                        <SaveTag is_new={true} setData={saveData} opt={'entity'}/>
                        <Divider orientation={'left'}>标签</Divider>
                        {(() => {
                            if (edit.data.bilstm_label) {
                                return edit.data.bilstm_label.map((item, index) => {
                                    return <SaveTag key={item.tag} keyWord={item.tag} item={item} setData={saveData}
                                                    onClose={onClose} opt={'label'}/>
                                })
                            }
                        })()}
                        <SaveTag is_new={true} setData={saveData} opt={'label'}/>
                    </Col>
                </Row>
            </Modal>
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
