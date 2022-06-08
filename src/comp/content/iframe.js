import React from 'react'
import Iframe from "react-iframe";
import * as event from '../../event'
import {store} from "../../store"

export const IFrame = (props) => {
    const state = store.getState()
    const [app, setApp] = React.useState({_id: '', enter: '', name: ''})
    React.useEffect(() => {
        const getAppById = async () => {
            let data = await event.app.getAppById(props.match.params.app_id)
            if (data && data.app) {
                setApp(data.app)
            }
        }
        getAppById()
    }, [props.match.params.app_id])

    return (
        <div id='IframeInhorBox'>
            <Iframe url={(() => {
                let url = app.enter
                if (app.enter.indexOf("?") === -1) {
                    url = url + '?jwt=' + state.user.info.token
                } else {
                    url = url + '&jwt=' + state.user.info.token
                }
                return url
            })()}
                    id='iframe'
                    frameBorder={0}
                    position="absolute"
                    width={'86%'}
                    height={'100%'}
                    display="initial"
                    // onLoad={() => {
                    //     let doc = document.getElementById("iframe").contentWindow.document.getElementsByTagName("body")[0];
                    //     let dom = document.getElementById('IframeInhorBox');
                    //     let x = dom.scrollWidth / doc.scrollWidth;
                    //     this.setState({
                    //         iwidth: dom.scrollWidth / x + 'px',
                    //         iheight: doc.scrollHeight + 'px',
                    //         itransform: x,
                    //         itransformOrigin: '0 0',
                    //     })
                    //     document.getElementById('IframeInhorBox').style.height = doc.scrollHeight * x + 'px';
                    // }}
            />
        </div>
    )
}
