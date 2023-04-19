import React, { createContext } from 'react'
import Table_Slide from './Table.Slide'
import useFunctions from './useFunctions'

export const Context_Slide = createContext(null)

export default function Slide() {

    let {
        API,
        delslide,

        next,
        black,
        pageN,
        Page,
        Count,
        active,
        loadding,
        ResetData
    } = useFunctions()


    return (
        <Context_Slide.Provider value={{
            API,
            delslide,

            next,
            black,
            pageN,
            Page,
            Count,
            active,
            loadding,
            ResetData
        }}>
            <Table_Slide />
        </Context_Slide.Provider>
    )
}
