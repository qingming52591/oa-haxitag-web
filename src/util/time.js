import * as g from '../g'
import {message} from "antd";
import {actions, store} from "../store";
import * as util from '../util'

/**
 * @name timeFromMs
 * @param {number} millisecond
 * @returns {string}
 */
export const timeFromMs = (millisecond) => {
    let d = new Date(parseInt(millisecond))
    let year = d.getFullYear()
    let month = d.getMonth() < 10 ? "0" + d.getMonth() : d.getMinutes()
    let day = d.getDay() < 10 ? "0" + d.getDay() : d.getDay()
    let hour = d.getHours() < 10 ? "0" + d.getHours() : d.getHours()
    let minu = d.getMinutes() < 10 ? "0" + d.getMinutes() : d.getMinutes()
    let second = d.getSeconds() < 10 ? "0" + d.getSeconds() : d.getSeconds()
    return year + "-" + month + "-" + day + " " + hour + ":" + minu + ":" + second
}