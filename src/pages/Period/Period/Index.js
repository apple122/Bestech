import React, { createContext, useState } from 'react'
import Table_period from '../../../components/period_type/period/Table.period'
import Function_Table_Period from './functions.period'

export const Context_period = createContext(null)

export default function Period() {

    let {
        APITrue,
        APIFalse,
        deltype,
        SubEdit,

        Page,
        InPage,
        back,
        next,
        Load,

        plus_period_type,
        plus_items
    } = Function_Table_Period()

    const [MS, setMS] = useState('data')

    return (
        <Context_period.Provider value={
            {
                MS,
                setMS,
                APITrue,
                APIFalse,
                deltype,
                SubEdit,

                Page,
                InPage,
                back,
                next,
                Load,
                plus_period_type,
                plus_items
            }
        }>
            <Table_period />
        </Context_period.Provider>
    )
}
