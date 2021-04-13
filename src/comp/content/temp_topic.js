import {store} from "../../store";
import {
    Col,
    Row,
    Button,
    Form,
    Input,
    message,
    Modal,
    Table,
    Popconfirm,
    Popover,
    Space,
    Radio,
    InputNumber, Divider, Tag, Tabs, Upload
} from "antd";
import * as event from "../../event";
import React from 'react'
import * as g from "../../g";
import * as util from '../../util'
import {keywords} from "d3/dist/package";
import {PlusOutlined} from "@ant-design/icons";


export const Topic = (props) => {
    const state = store.useContext()
    const [pagination, setPagination] = React.useState({current: 1, pageSize: 15, total: 0})
    const [edit, setEdit] = React.useState({})
    const [showResult, setShowResult] = React.useState(false)
    const [sourceShow, setSourceShow] = React.useState(false)
    React.useEffect(() => {
        (async () => {
            let p = await event.topic.getTopic(pagination)
            if (p) {
                setPagination(p)
            }
        })()
    }, [])
    const columns = [
        {
            title: '主题名',
            dataIndex: 'name',
            key: 'name',
            ...util.getColSearchLocal('App名称', 'name')
        }, {
            title: '关键词',
            dataIndex: 'keywords',
            key: 'keywords',
            render: (text, record) => {
                return record.keywords.map(item => <Tag>{item}</Tag>)
            }
        }, {
            title: '自定义特征',
            dataIndex: 'tags',
            key: 'tags',
            render: (text, record) => {
                return record.tags.map(item => <Tag>{item}</Tag>)
            }
        }, {
            title: '操作',
            key: 'action',
            render: (text, record) => {
                return (
                    <>
                        <Button type="link" onClick={(e) => {
                            e.stopPropagation()
                            setEdit({
                                ...edit, ...record
                            })
                            setSourceShow(true)
                        }}>数据源</Button>
                        <Button type="link" onClick={async (e) => {
                            e.stopPropagation()
                            if (await event.topic.deleteTopic(record._id, pagination)) {
                                message.success('成功')
                            } else {
                                message.error('失败')
                            }
                        }}>删除</Button>
                    </>
                )
            }
        }
    ]
    return (
        <>
            <Modal title={'编辑'} visible={showResult}
                   onOk={() => setShowResult(false)}
                   onCancel={() => setShowResult(false)}
                   footer={null}
                   width={'75%'}
                   destroyOnClose
            >
                <EditTopic edit={edit} open={setShowResult} pagination={pagination}/>
            </Modal>
            <AddDataSource edit={edit} show={sourceShow} open={setSourceShow}
                           onOk={() => setSourceShow(false)}
                           onCancel={() => setSourceShow(false)}/>
            <Row justify="end">
                <Col span={2}>
                    <Button type={'primary'} onClick={async () => {
                        setEdit({keywords: [], tags: [], name: ''})
                        setShowResult(true)
                    }}>创建主题</Button>
                </Col>
            </Row>
            <Table
                columns={columns}
                dataSource={state.topic.topic.topic}
                size={'small'}
                scroll={{y: 750}}
                bordered
                onRow={(record) => {
                    return {
                        onClick: (event) => {
                            setEdit({
                                ...edit, ...record
                            })
                            setShowResult(true)
                        }
                    }
                }}
            />
        </>
    )
}

const AddDataSource = (props) => {
    const [sourceType, setSourceType] = React.useState('file')
    const [docs, setDocs] = React.useState([])
    return <Modal title={'编辑'} visible={props.show}
                  onOk={props.onOk}
                  onCancel={props.onCancel}
                  footer={null}
                  width={'75%'}
                  destroyOnClose
    >
        <Tabs onChange={key => setSourceType(key)} type="card">
            <Tabs.TabPane tab="文件" key="file">
                <div>
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
                            return event.content.saveContent(item.originFileObj.type.split('/').pop(), item.originFileObj, props.edit._id)
                        })
                        await Promise.all(waits)
                        message.success('上传成功')
                        setDocs([])
                        props.open(false)
                    }}>完成</Button>
                </div>
            </Tabs.TabPane>
            <Tabs.TabPane tab="网站" key="site">
                开发中...
            </Tabs.TabPane>
        </Tabs>
    </Modal>
}

const EditTopic = (props) => {
    const [edit, setEdit] = React.useState(props.edit)
    const [keywordNew, setKeywordNew] = React.useState(false)
    const [keywordEdit, setKeywordEdit] = React.useState({edit: false, index: 0})
    const [tagNew, setTagNew] = React.useState(false)
    const [tagEdit, setTagEdit] = React.useState({edit: false, index: 0})
    return (
        <>
            名称: <Input value={edit.name} onChange={e => setEdit({...edit, ...{name: e.target.value}})}
                       style={{width: "90%"}}/><br/>
            关键词: {
            edit.keywords.map((item, index) => {
                if (keywordEdit.edit && keywordEdit.index === index) {
                    return <Input value={item} style={{width: "10%"}}
                                  onPressEnter={e => {
                                      let keywords = [...edit.keywords]
                                      keywords[index] = e.target.value
                                      setEdit({...edit, ...{keywords: keywords}})
                                      setKeywordNew(false)
                                      setKeywordEdit({edit: false, index: index})
                                  }}
                                  onChange={e => {
                                      let keywords = [...edit.keywords]
                                      keywords[index] = e.target.value
                                      setEdit({...edit, ...{keywords: keywords}})
                                  }}
                    />
                } else {
                    return <Tag closable
                                onDoubleClick={e => {
                                    setKeywordEdit({edit: true, index: index})
                                }}
                                onClose={e => {
                                    let keywords = edit.keywords.filter((item, num) => {
                                        if (num !== index) return true
                                    })
                                    setEdit({...edit, ...{keywords: keywords}})
                                }}
                    >{item}</Tag>
                }
            })
        } {keywordNew ?
            <Input style={{width: "10%"}} onPressEnter={e => {
                let keywords = [...edit.keywords]
                keywords.push(e.target.value)
                setEdit({...edit, ...{keywords: keywords}})
                setKeywordNew(false)
            }}/> :
            <Tag onClick={e => setKeywordNew(true)}>+</Tag>}<br/>
            自定义特征: {
            edit.tags.map((item, index) => {
                if (tagEdit.edit && tagEdit.index === index) {
                    return <Input value={item} style={{width: "10%"}}
                                  onPressEnter={e => {
                                      let tags = [...edit.tags]
                                      tags[index] = e.target.value
                                      setEdit({...edit, ...{tags: tags}})
                                      setTagNew(false)
                                      setTagEdit({edit: false, index: index})
                                  }}
                                  onChange={e => {
                                      let tags = [...edit.tags]
                                      tags[index] = e.target.value
                                      setEdit({...edit, ...{tags: tags}})
                                  }}
                    />
                } else {
                    return <Tag closable
                                onDoubleClick={e => {
                                    setTagEdit({edit: true, index: index})
                                }}
                                onClose={e => {
                                    let tags = edit.tags.filter((item, num) => {
                                        if (num !== index) return true
                                    })
                                    setEdit({...edit, ...{tags: tags}})
                                }}
                    >{item}</Tag>
                }
            })
        } {tagNew ?
            <Input style={{width: "10%"}} onPressEnter={e => {
                let tags = [...edit.tags]
                tags.push(e.target.value)
                setEdit({...edit, ...{tags: tags}})
                setTagNew(false)
            }}/> :
            <Tag onClick={e => setTagNew(true)}>+</Tag>}<br/><br/>
            <Button onClick={async e => {
                if (await event.topic.saveTopic(edit, props.pagination)) {
                    props.open(false)
                } else {
                    message.error("保存失败")
                }
            }}>保存</Button>
        </>
    )
}
