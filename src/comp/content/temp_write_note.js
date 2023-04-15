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
    InputNumber, message
} from "antd";
import * as event from "../../event";
import React from 'react'
import {Link} from "react-router-dom";
import 'braft-editor/dist/index.css'
import BraftEditor from 'braft-editor'
import * as util from '../../util'
import * as g from '../../g'
import {goPage, replace} from "../../util";

export const EditTakeNotes = (props) => {
    const [editor, setEditor] = React.useState(BraftEditor.createEditorState(''))
    const [title, setTitle] = React.useState('')
    const [id, setId] = React.useState(null)
    React.useEffect(() => {
        if (props.location.state) {
            setEditor(BraftEditor.createEditorState(props.location.state.content_html))
            setTitle(props.location.state.title)
            setId(props.location.state._id)
        }
    }, [])
    return (
        <>
            <Row style={{"background-color": "#fff", margin: 10}}>
                <Row type="flex" justify='center' style={{width: '70%', margin: 10}}>
                    <Input placeholder={"请输入笔记标题"} value={title} onChange={e => setTitle(e.target.value)}/>
                </Row>
                <Row>
                    <BraftEditor value={editor}
                                 onChange={(editorState => {
                                     setEditor(editorState)
                                 })}
                                 excludeControls={['media']}
                    />
                </Row>
                <Row></Row>
                <Row justify="end">
                    <Button type={"primary"} onClick={async (e) => {
                        // this.props.history.push({
                        //         pathname:'/search',
                        //         state: {
                        //             oneFlag: 'one' }
                        // }
                        // )
                        // util.goPage('/search',{kw:'Claude 能够做到实时搜索吗？-from claude'})
                        // return
                        if (!title) {
                            message.error('标题不能为空！')
                            return
                        }
                        if (!editor.toText()) {
                            message.error('内容不能为空！')
                            return
                        }
                        if (id) {
                            await event.content.updateContent(id, 'title', title)
                            await event.content.updateContent(id, 'content', editor.toText())
                            await event.content.updateContent(id, 'content_html', editor.toHTML())
                        } else {
                            await event.content.saveContent(g.content_type.note, JSON.stringify({
                                title: title,
                                note_text: editor.toText(),
                                note_html: editor.toHTML()
                            }))
                        }
                        // util.goPage('/menu/take_notes')
                        util.replace('/home')
                    }}>保存</Button>
                </Row>
            </Row>
        </>
    )
}
