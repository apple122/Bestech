import React, { useContext } from 'react'
import { Date_Message } from './Index'

export default function Value() {

    const {text, setText} = useContext(Date_Message)
    function MS(e) {
        setText(e.target.value)
    }
    return (
        <div style={{ paddingLeft: '20%' }}>
            <input onChange={MS} />
        </div>
    )
}
