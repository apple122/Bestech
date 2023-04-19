import React, { createContext, useState } from 'react'
import Function_Event from './Function.Event'
import Table_Event from './Table.Event'
import Table_Event_False from './Table.Event.False'
import { Link } from 'react-router-dom'

export const Context_Event = createContext(null)

export default function Index_Event() {

    const [paget, setpagetrue] = useState('Table_Event')
    function pagetrue(e) {
        setpagetrue(e)
    }


    let {
        APITrue,
        APIFalse,
        CountFalse,
        CountTrue,
        delEvent,
        active,
        Load,
        backtrue, 
        InPagetrue, 
        Pagetrue, 
        nexttrue,
        
        InPagefalse, 
        Pagefalse,
        backfalse, 
        nextfalse
    } = Function_Event()


    return (
        <Context_Event.Provider value={{ APITrue, APIFalse, delEvent, active, Load, backtrue, InPagetrue, Pagetrue, nexttrue, InPagefalse, Pagefalse, backfalse, nextfalse }}>
            <div className="content-wrapper" id="edit">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <label className="btn-outline-white pt-2 h5">ຂໍ້ມູນກິກຈະກຳ</label>
                                        <Link to="/add-event" className="card-title btn btn-primary float-right">ເພີມບີນ</Link>
                                    </div>
                                    <ul class="nav nav-tabs pt-2 px-2">
                                        <li class="nav-item">
                                            <button class={`nav-link ${paget == 'Table_Event' ? 'active' : ''}`} onClick={() => pagetrue('Table_Event')}>ນຳໃຊ້ງານຢູ່ ( <strong className='text-danger'>{CountTrue}</strong> )</button>
                                        </li>
                                        <li class="nav-item">
                                            <button class={`nav-link ${paget == 'Table_Event_False' ? 'active' : ''}`} onClick={() => pagetrue('Table_Event_False')}>ປິດການໃຊ້ງານ ( <strong className='text-danger'>{CountFalse}</strong> )</button>
                                        </li>

                                    </ul>
                                </div>
                            </div>

                            {paget === 'Table_Event' ? <Table_Event /> : ''}
                            {paget === 'Table_Event_False' ? <Table_Event_False /> : ''}

                        </div>
                    </div>
                </div>
            </div>
        </Context_Event.Provider>
    )
}
