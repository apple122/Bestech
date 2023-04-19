import React, { useState } from 'react'
import Function_Form_Bill from '../../pages/Bill/Function.Form.Bill'
import { Link, useLocation } from 'react-router-dom'
import { NumberFormatBase } from 'react-number-format'
import './Style.Bill.css'
import useFunctions from './useFunctions'

export default function Form_period() {

    const location = useLocation()
    const [Items, setItems] = useState(location.state)

    let {
        Submit,
        Reset,
        preview,
        setpreview,
        CheckNumber,
        Nuumber,
    } = Function_Form_Bill()

    return (
        <div className="content-wrapper">
            <div className="content-header">
                <div className="container-fluid">
                    <div className='card'>
                        <div className='card-header bg-success'><label className="btn-outline-white pt-2">ເພີມເລກບີນ</label></div>
                        <div className='card-body'>
                            <form method='POST' onSubmit={Submit}>
                                <div className='row'>
                                    <div className='col-md-4'>

                                        <div className='form-group'>
                                            <label for='for-img'>ຮູບບີນ</label>
                                            <div className=''>
                                                <label id='for-img' className='box-img-input text-center'>
                                                    <input type='file' id='for-img' className='form-control d-none' onChange={(e) => setpreview(e.target.files[0])} required />
                                                        <img src={preview === undefined ? '' : URL.createObjectURL(preview)} id='img-input' alt='ກະລຸນາເລືອກຮູບບີນ' />
                                                </label>
                                            </div>
                                        </div>

                                    </div>
                                    <div className='col-md-8'>
                                        <input type='hidden' value={Items.id} />
                                        <div className='form-group'>
                                            <label>ເລກບີນ: {Nuumber}</label>
                                            <NumberFormatBase maxLength={19} value={Reset} className='form-control' onChange={CheckNumber} placeholder=':.......' required />
                                        </div>
                                        <div className='form-group'>
                                            <label>ມູນຄ່າບີນ</label>
                                            <NumberFormatBase value={Reset} className='form-control' placeholder='₭' required />
                                        </div>
                                        <div className='form-group'>
                                            <label>ລະຫັດຜູ້ຂາຍ</label>
                                            <div className='input-group'>
                                                <NumberFormatBase value={Reset} placeholder=':.......' className='form-control' required />
                                                <input className='form-control text-center' value={Items.full_name} disabled />
                                            </div>
                                        </div>

                                        <div className='group-footer'>
                                            <button type='submit' className={`btn btn-sm btn-outline-success mr-2`}><i class="bi bi-cloud-download"></i> | Submit</button>
                                            <Link to='/Bill' className='btn btn-sm btn-outline-danger'><i class="bi bi-arrow-bar-left"></i> | Cancel</Link>
                                        </div>
                                    </div>

                                </div>

                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
