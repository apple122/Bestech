import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import useFunctions from './useFunctions';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export default function About() {

    let {
        onSubmit,
        Items
    } = useFunctions()

    const [preview, setPreview] = useState(undefined)

    return (
        <>
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className='card'>
                            <div className='card-header bg-success user-select-none'><h4>ເພີມ ຂໍ້ມູນ: About</h4></div>
                            <form method='POST' onSubmit={onSubmit}>
                                <div className='card-body'>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <div className='form-group Nato_sanlaos'>
                                                <label for='logo-img' className='Nato_sanlaos'>Logo</label>
                                                <label id='for-img' className='box-img-input text-center'>
                                                    <input type='file' id='logo-img' className='form-control d-none' onChange={(e) => setPreview(e.target.files[0])} />
                                                    <img className='float-left' style={{ width: 100 + '%' }} src={preview === undefined ? Items?.image : URL.createObjectURL(preview)} alt='ກະລຸນາເລືອກຮູບພາບ' />
                                                </label>
                                            </div>

                                        </div>
                                        <div className='col-md-6'>
                                            <div className='form-group Nato_sanlaos'>
                                                <label className='Nato_sanlaos'>ຫົວຂໍ້</label>
                                                <div className='input-group Nato_sanlaos'>
                                                    <input className='form-control' defaultValue={Items?.title} placeholder='.......' />
                                                </div>
                                            </div>

                                            <div className='form-group Nato_sanlaos'>
                                                <label className='Nato_sanlaos'>ຄຳອະທິບາຍ</label>
                                                <textarea className='form-control' defaultValue={Items?.description} placeholder='ຄຳອະທິບາຍ:.....' rows='5'></textarea>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='card-footer Nato_sanlaos'>
                                    <button type='submit' className='btn btn-sm btn-outline-success mr-2' ><i class="bi bi-gear-wide-connected"></i> | ບັນທືກຂໍ້ມູນ</button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
