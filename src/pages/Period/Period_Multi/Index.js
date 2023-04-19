import React, { createContext, useState } from 'react'
import Table_Multi from '../../../components/period_type/period_multi/Table.Multi'
import Functions_Multi from './Functions.Multi'

export const Context_Multi = createContext(null)

export default function Period_Multi() {

    let {
        API,
        Load,
        deltype,
        APITrue,
        next, 
        back, 
        InPage, 
        Page,

        SubEdit,
        plus_period_type, 
        plus_items, 
        plus_period
    } = Functions_Multi()

    return (
        <Context_Multi.Provider value={{ API, Load, deltype, APITrue, next, back, InPage, Page, SubEdit, plus_period_type, plus_items, plus_period }}>
            <Table_Multi />
        </Context_Multi.Provider>
    )
}
