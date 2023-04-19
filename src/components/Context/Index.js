import React, { createContext, useState } from 'react'
import Value from './Value'
import Text from './Text'

export const Date_Message = createContext(null)

export default function Context_Index() {

    const [text, setText] = useState('null')

    return (
        <Date_Message.Provider value={{text, setText}}>
            <Value />
            <Text />
        </Date_Message.Provider>
    )
}
