import {store} from "../../store";
import {Col, Row, Button, Form, Input, message, Modal, Table, Popconfirm, Tag, Space} from "antd";
import {PlusOutlined} from '@ant-design/icons';
import * as event from "../../event";
import React from 'react'
import * as g from "../../g";
import * as util from '../../util'


export const EntityLabel = (props) => {
    const state = store.useContext()
    const [showModal, setShowModal] = React.useState(false)
    const [modalInit, setModalInit] = React.useState({})
    const columns = [
        {
            title: '问题',
            dataIndex: 'a',
            key: 'a',
            ...util.getColSearchLocal('App名称', 'name')
        }, {
            title: '回答',
            dataIndex: 'q',
            key: 'q',
            render: ((text, record) => {
                return text.substr(0, 50) + '...'
            })
        }, {
            title: '操作',
            key: 'action',
            render: (text, record) => {
                return <Button danger onClick={(e) => e.stopPropagation()}>删除</Button>
            }
        }
    ]
    return (
        <>
            <Table
                columns={columns}
                dataSource={[
                    {
                        a: 'AI刷其第五短崩塌',
                        q: '常言道，唯美食与爱不可辜负，相信每一位吃货小伙伴都抵挡不了美食的诱惑。只有你想不到，没有AI做不到的事情……超越味蕾界限：动物衍生品不再是“餐桌C位”这份世界上首个AI生成的调味，是Firmenich与微软合作开发的。Arla Foods的AI工具可以预测150万头奶牛的产奶量，并可以将产奶量减少到几个小时。',
                        entity: ['日内瓦', 'SmartProteins', '瑞典酿酒厂', '伊曼纽尔·布斯特拉恩'],
                        label: ['食物调味', '新冠疫情']
                    }, {
                        a: '烤牛肉的素料乳胶妙招',
                        q: '近日，瑞士调味品巨头Firmenich宣布，利用AI研制出一种用于植物性肉类替代品的轻烤牛肉口味。目前，该公司推出了利用AI优化成分组合以制作自定义口味的牛肉口味，特别是对于越来越受欢迎的无肉健康饮食。由此产生的烤牛肉风味集合了Firmenich独特的配料和“SmartProteins”在植物蛋白替代品方面的专业知识。该产品组合可帮助用户在咸味食品、甜食和饮料中创建素食和纯素食，替代传统的肉类和奶类产品。无论是通过提供舒适和愉悦的时刻，还是解决向更健康的食品和饮料的更大转变”，他说。例如，乳制品行业在预测牛奶摄入量方面做得越好，公司就可以更好地规划和优化其整个价值链。',
                        entity: ['日内瓦', 'SmartProteins', '瑞典酿酒厂', '伊曼纽尔·布斯特拉恩'],
                        label: ['口感解决方案', '利用人工智能']
                    }, {
                        a: '模拟器怎样解码？',
                        q: '本文将从模型算法和落地运用等角度做简要介绍，希望能给读者一些启发。04落地分享最后针对一些具体的场景展开介绍下，给读者一个更为完整的阅读体验。（Q2T的运用）2. 推荐召回接着我们再说一说向量体系在推荐召回中发挥的作用。今天的分享就到这里，谢谢大家。在文末分享、点赞、在看，给个三连击呗~~会员推荐：DataFun会员计划重磅发布！扫码了解更多：文章推荐：基于Flink的严选实时数仓实践关于我们：DataFunTalk 专注于大数据、人工智能技术应用的分享与交流。',
                        entity: ['张俊', 'FAISS', 'Airbnb', 'DataFunTalk'],
                        label: ['商品向量', '向量体系']
                    }, {
                        a: '如何在数据展示跨界场景',
                        q: '严选于18年下半年开始探索向量化在搜索推荐场景中的运用，从最开始基于商品召回用户的任务到后续的搜索召回、搜索个性化排序、搜索底纹、搜索发现词、搜索建议词、跨类目推荐、推荐召回、多兴趣召回、通用排序、端智能重排等等，我们不断拓宽向量体系在严选的运用，在这过程中一点点迭代与沉淀。基于这个服务，我们进一步开发了通用排序服务，例如基于用户的实时向量对搜索结果做Top个性化重排、基于检索词对专题进行排序、对众多的活动页商品做实时个性化排序等等。1. 搜索场景先谈一谈搜索场景，搜索场景不仅仅限于商品的召回和排序，搜索的底纹、发现词、建议词等都能为搜索导流，而这些也都能利用统一向量体系得到较好的解决。（Q2I的运用）基于向量体系对搜索排序的优化也是水到渠成的，所有的优化可以看作是基于预训练向量的排序运用，而且扩展了数据的边界，不仅仅局限于搜索场景，将全局的行为都融入到了搜索中。（Q2C的运用）此外在搜索场景，为了充分利用搜索流量，我们还会做专题的召回以及和商品的混排，商品和专题属于异构数据，通常我们需要构建额外的模型来对专题作出排序。',
                        entity: ['日内瓦', 'SmartProteins', '瑞典酿酒厂', '伊曼纽尔·布斯特拉恩'],
                        label: ['兴趣向量', '用户向量', '向量体系']
                    }
                ]}
                size={'small'}
                scroll={{y: 750}}
                bordered
                onRow={(record) => {
                    return {
                        onClick: (event) => {
                            setModalInit({
                                _id: record._id,
                                ask: record.a,
                                enter: record.q,
                                entity: record.entity,
                                label: record.label
                            })
                            setShowModal(true)
                        }
                    }
                }}
            />
        </>
    )
}

const EditEntityLabel = (props) => {
    const [form] = Form.useForm()
    form.setFieldsValue(props.initData)
    return (
        <>
            <Modal key={Math.random()}
                   width={750}
                   title={'编辑知识点'}
                   visible={props.show}
                   okText={'保存'} cancelText={'取消'}
                   onCancel={(e) => {
                       props.setShow(false)
                       form.resetFields()
                   }}
                   onOk={() => {
                   }}
            >
                <Form key={Math.random()} form={form}>
                    <Form.Item label={'问题'} name={'ask'} rules={[
                        {
                            required: true,
                            message: 'is required!',
                        }
                    ]}>
                        <Input/>
                    </Form.Item>
                    <Form.Item label={'答案'} name={'enter'} rules={[
                        {
                            required: true,
                            message: 'is required!',
                        }
                    ]}>
                        <Input.TextArea rows={4}/>
                    </Form.Item>

                    <Form.Item label={'实体'} name={'entity'}>
                        <EditableTagGroup name={'实体'} tags={form.getFieldValue('entity')}/>
                    </Form.Item>
                    <Form.Item label={'标签'} name={'label'}>
                        <EditableTagGroup name={'标签'} tags={form.getFieldValue('label')}/>
                    </Form.Item>
                </Form>
            </Modal>
        </>
    )
}

const EditableTagGroup = (props) => {
    const [showInput, setShowInput] = React.useState(false)
    return (
        <Space>
            {props.tags.map((item) => {
                return <Tag closable>{item}</Tag>
            })}
            <span>
                {
                    showInput ? <Input onBlur={(e) => {
                        setShowInput(false)
                    }}/> : <Tag onClick={(e) => {
                        setShowInput(true)
                    }} className="site-tag-plus">
                        <PlusOutlined/> {`添加${props.name}`}
                    </Tag>
                }
                </span>
        </Space>
    )
}