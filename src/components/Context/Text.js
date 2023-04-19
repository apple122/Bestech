import React, { useContext } from 'react'
import { Date_Message } from './Index'

export default function Text() {

    const { text, setText } = useContext(Date_Message)

    return (
        <div style={{ paddingLeft: '20%' }}>
            Text: {text}
        </div>
    )
}
