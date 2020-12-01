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
import {Link} from "react-router-dom";
import 'braft-editor/dist/index.css'
import BraftEditor from 'braft-editor'
import * as util from '../../util'

export const EditTakeNotes = (props) => {
    const [form] = Form.useForm()
    const [editor, setEditor] = React.useState(BraftEditor.createEditorState(''))
    return (
        <>
            <BraftEditor style={{"background-color": "#fff", margin: 10}} value={editor}
                         onChange={(editorState => {
                             setEditor(editorState)
                         })}
            />
            <Form form={form}>
                <Form.Item>
                    <Row justify="end">
                        <Button type={"primary"} onClick={(e) => {
                            util.goPage('/menu/take_notes')
                        }}>保存</Button>
                    </Row>
                </Form.Item>
            </Form>
        </>
    )
}