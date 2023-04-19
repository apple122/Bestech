import React, { createContext, useState } from 'react'
import Table_Users from '../../components/Users/Table.Users'
import Function_User from './Function.User'

export const Context_User = createContext(null)

export default function Index_User() {

    let {
        API,
        Load,
        Count,
        onSubmit,
        changUsers,
        show, 
        handleClose,
        Items, 
        OnChangUsers,
        delusers,
        ConfirmPassword
    } = Function_User()

    return (
        <Context_User.Provider value={{ API, Load, Count, onSubmit, changUsers, show, handleClose, Items, delusers, OnChangUsers, ConfirmPassword }}>
            <Table_Users />
        </Context_User.Provider>
    )
}
