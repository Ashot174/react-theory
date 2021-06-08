import React from 'react'
import {ClickedContext} from '../App'

const Counter2 = () => {
    return (
        <div style={{
            border: '1px solid #ccc',
            width: 200,
            margin: '0 auto'
        }}>
            <h3>Counter2</h3>
            <ClickedContext.Consumer>
                { clicked => clicked ? <p>Clicked</p> : null}
            </ClickedContext.Consumer>
        </div>
    )
}
export default Counter2
