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
        <div>
            <Iframe url={(() => {
                let url = app.enter
                if (app.enter.indexOf("?") === -1) {
                    url = url + '?jwt=' + state.user.info.token
                } else {
                    url = url + '&jwt=' + state.user.info.token
                }
                return url
            })()}
                    frameBorder={0}
                    position="absolute"
                    width={'100%'}
                    height={'100%'}
                    display="initial"
            />
        </div>
    )
}
