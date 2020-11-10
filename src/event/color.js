import axios from "axios";
import {store} from "../store";
import {UPDATE_COLOR} from "../store/color";


export const test = async () => {
    const r = await axios.get("http://localhost:8000/a")
    store.dispatch({type: UPDATE_COLOR, color: r.data.color})
}