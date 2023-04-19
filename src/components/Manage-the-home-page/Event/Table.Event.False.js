import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Context_Event } from './Index'
import View_Event from './View.Event'
import Skeletion_event from './Skeletion.event'

export default function Table_Event_False() {
    let naviaget = useNavigate()

    const { APIFalse, delEvent, active, Load, InPagefalse, Pagefalse, backfalse, nextfalse } = useContext(Context_Event)

    function edit(e) {
        naviaget('/edit-event', { state: e })
    }

    return (
        Load !== false ?
        <>
            <nav aria-label="..." className='px-2 pt-2 float-right list-group-item'>
                <ul class="pagination">
                    <li class="page-item">
                        <a class="page-link" href="#" onClick={backfalse}>Back</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#">{InPagefalse} In {Pagefalse}</a>
                    </li>
                    <li class="page-item">
                        <a class="page-link" href="#" onClick={nextfalse}>Next</a>
                    </li>
                </ul>
            </nav>
            {APIFalse.map((item) => (
                <div className='col-md-6'>
                    <div className='card card-body'>
                        <div className='row'>
                            <div className='col-md-6 mb-4'>
                                <p>ງວດທີ່: {item.period?.period}</p>
                                <img src={item.image} id='IMG-Event' />
                            </div>
                            <div className='col-md-6'>
                                <p><strong>ຫົວຂໍ້:</strong> {(item.title).substring(0, 25)}.....</p>
                                <p><strong>ຫົວຂໍ້ຍ່ອຍ:</strong> {(item.sub_title).substring(0, 25)}.....</p>
                                <p><strong>ເບີໂທ:</strong> +856 {item.phone}</p>
                                <p><strong>ທີ່ຢູ່:</strong> {(item.address).substring(0, 25)}.....</p>
                                <p><strong>ລາຍລະອຽດ :</strong> {(item.description).substring(0, 25)}.....</p>
                                <p><View_Event Items={item} /></p>
                            </div>
                            <div className='col-md-12'>
                                <div className='btn-group footer float-end'>
                                    <button type='button' className='btn btn-sm btn-primary' onClick={() => edit(item)}><i class="bi bi-pencil-square"></i> | ແກ້ໄຂ</button>
                                    <button type='button' className='btn btn-sm btn-danger' onClick={() => delEvent(item.id)}><i class="bi bi-trash3-fill"></i> | ລົບຂໍ້ມູນ</button>
                                    <button type='button' className='btn btn-sm btn-warning' onClick={() => active(item)}><i class="bi bi-toggle-off"></i> | ປິດການນຳໃຊ້</button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            ))}
        </>
        : <Skeletion_event />
    )
}
