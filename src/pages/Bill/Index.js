import React, { createContext } from 'react'
import Table_Bill from '../../components/Bill/Table.Bill'
import Functions_Bill from './Functions.Bill'

export const Context_Bill = createContext(null)

export default function Bill() {

    let {
        API,
        Load,
        delBill,
        back, 
        next, 
        InPage, 
        Page,
        Count,
        ResetData
    } = Functions_Bill()


    return (
        <Context_Bill.Provider value={{ API, Load, delBill, back, next, InPage, Page, Count, ResetData }}>
            <Table_Bill />
        </Context_Bill.Provider>
    )
}
