import React, { useState } from 'react'
import Function_Event from './Function.Event'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Link } from 'react-router-dom'

export default function Form_Event() {

    let {
        onSubmit,
        Period,
        setPreview,
        preview
    } = Function_Event()

    return (
        <div className="content-wrapper">
            <div className="content-header">
                <div className="container-fluid">
                    <div className='card'>
                        <div className='card-header bg-success user-select-none'><h4>ເພີມ ຂໍ້ມູນ: About</h4></div>
                        <form method='POST' onSubmit={onSubmit}>
                            <div className='card-body'>
                                <div className='row'>
                                    <div className='col-md-4'>
                                        <div className='form-group Nato_sanlaos'>
                                            <label for='logo-img' className='Nato_sanlaos'>Logo</label>
                                            <label id='for-img' className='box-img-input text-center'>
                                                <input type='file' id='logo-img' className='form-control d-none' onChange={(e) => setPreview(e.target.files[0])} />
                                                <img className='float-left' style={{ width: 100 + '%' }} src={preview === undefined ? '' : URL.createObjectURL(preview)} alt='ກະລຸນາເລືອກຮູບພາບ' />
                                            </label>
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='form-group Nato_sanlaos'>
                                            <label className='Nato_sanlaos'>ງວດທີ່</label>
                                            <input className='form-control' value={Period[0]?.period} disabled />
                                        </div>
                                        <div className='form-group Nato_sanlaos'>
                                            <label className='Nato_sanlaos'>ຫົວຂໍ້</label>
                                            <input className='form-control' placeholder='.......' required />
                                        </div>

                                        <div className='form-group Nato_sanlaos'>
                                            <label className='Nato_sanlaos'>ຫົວຂໍ້ຍ່ອຍ</label>
                                            <input className='form-control' placeholder=':.....' required />
                                        </div>

                                        <div className='form-group Nato_sanlaos'>
                                            <label className='Nato_sanlaos'>ເບີໂທ</label>
                                            <PhoneInput
                                                required
                                                country={'la'}
                                                inputStyle={{
                                                    width: "100%",
                                                    height: "37px",
                                                }}
                                            />
                                        </div>
                                    </div>
                                    <div className='col-md-4'>
                                        <div className='form-group Nato_sanlaos'>
                                            <label className='Nato_sanlaos'>ສະຖານທີ່ຕັ້ງ</label>
                                            <input className='form-control' placeholder='.......' required/>
                                        </div>

                                        <div className='form-group Nato_sanlaos'>
                                            <label className='Nato_sanlaos'>ຄຳອະທິບາຍ</label>
                                            <textarea className='form-control' placeholder='ຄຳອະທິບາຍ:.....' rows='5' required></textarea>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='card-footer Nato_sanlaos'>
                                <button type='submit' className='btn btn-sm btn-outline-success mr-2'><i class="bi bi-gear-wide-connected"></i> | ບັນທືກຂໍ້ມູນ</button>
                                <Link to={'/event'} className='btn btn-sm btn-outline-danger'>ຍົກເລີກ</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
