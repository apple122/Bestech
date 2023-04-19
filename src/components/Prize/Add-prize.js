import axios from 'axios'
import React, { useState, useEffect, useReducer } from 'react'
import { useNavigate } from 'react-router-dom'
import Swal from 'sweetalert2'
import url from './data'
import { NumberFormatBase } from 'react-number-format';
import useFunctions from './useFunctions'

export default function Add_prize() {
    let naviagate = useNavigate()

    const [active, setactive] = useState(false)

    function move_page() {
        naviagate('/prize')
    }

    let {
        onSubmit,

        Item_dropdown,
        Dropdown,
        list_prize,
        list,
        API_TYPE,
        Cancel_Dropdown,

        next_type,
        back_type,
        Page_type,
        nextpage_type,
    } = useFunctions()

    return (
        <>
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className='card'>
                            <div className='card-header bg-success'><label className="btn-outline-white pt-2">ເພີມຂໍ້ມູນຜູ້ມີສິດສຸ່ມ</label></div>
                            <div className='card-body'>
                                <div className='row'>
                                    <div className='form-group col-md-6'>
                                        <div className='input-group'>
                                            <span className='input-group-text'><i class="bi bi-list-ol"></i></span>
                                            <div className={`form-control float-right drop-event-dis`}>
                                                <div className='w-100' onClick={Dropdown}><a href='#' class="page-link" style={{ paddingTop: '3px' }}>{list_prize === '' ? '~~ເລືອກປະເພດລາງວັນ~~' : ('ປະເພດລສງວັນ: ' + list_prize.prize_type)}</a></div>
                                                <ul class={`list-group list-group-item-province`} hidden={list == false ? true : false}>
                                                    {API_TYPE.map((item) => (
                                                        <a class="page-link" href="#"><li class="list-group-item list-hover" onClick={() => Item_dropdown(item)}>ປະເພດລສງວັນ: {item.prize_type}</li></a>
                                                    ))}
                                                    <nav aria-label="..." className='px-2 pt-2 float-right list-group-item'>
                                                        <ul class="pagination">
                                                            <li class="page-item">
                                                                <a class="page-link" href="#" onClick={back_type}>Back</a>
                                                            </li>
                                                            <li class="page-item">
                                                                <a class="page-link" href="#">{nextpage_type} In {Page_type}</a>
                                                            </li>
                                                            <li class="page-item">
                                                                <a class="page-link" href="#" onClick={next_type}>Next</a>
                                                            </li>
                                                        </ul>
                                                    </nav>
                                                </ul>
                                                <span className='border-fixed' onClick={Cancel_Dropdown} hidden={list == false ? true : false}></span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <form method='POST' encType='multipart/form-data' onSubmit={onSubmit}>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <div className='form-group'>
                                                <label>ຊື່ລາງວັນ</label>
                                                <div className='input-group'>
                                                    <span className='input-group-text'><i class="bi bi-award-fill"></i></span>
                                                    <input type='text' className='form-control' name='Name1' placeholder='.....' required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='col-md-6'>
                                            <div className='form-group'>
                                                <label>ຈຳນວນລາງວັນ</label>
                                                <div className='input-group'>
                                                    <span className='input-group-text'><i class="bi bi-check2-circle"></i></span>
                                                    <NumberFormatBase className='form-control' placeholder='.....' required />
                                                </div>
                                            </div>
                                        </div>
                                        <div className='form-group'>
                                            <label>ລາຍລະອຽດລາງວັນ</label>
                                            <div className='input-group'>
                                                <span className='input-group-text'><i class="bi bi-award"></i></span>
                                                <textarea type='number' className='form-control' placeholder='.....' required />
                                            </div>
                                        </div>
                                    </div><hr />
                                    <button type='submit' className='btn btn-sm btn-success mr-2'>
                                        <i class="bi bi-cloud-download"></i> ເພິມລາງວັນ
                                    </button>
                                    <button type='reset' className='btn btn-sm btn-danger' onClick={move_page}>
                                        ຍົກເລີກ
                                    </button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
