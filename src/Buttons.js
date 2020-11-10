import React from "react"
import {test} from "./event/color"

const Buttons = (props) => {
    return (
        <>
            <button onClick={test}>红色</button>
            <button onClick={test}>蓝色</button>
        </>
    )
};

export default Buttons;