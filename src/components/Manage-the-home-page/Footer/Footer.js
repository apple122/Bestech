import React from 'react'
import { Link } from 'react-router-dom';
import useFunctions from './useFunctions';
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'

export default function Footer() {

    let {
        Items,
        onSUbmit,
    } = useFunctions()

    return (
        <>
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className='card'>
                            <div className='card-header bg-success user-select-none'><h4>ເພີມ ຂໍ້ມູນ: Footer</h4></div>
                            <form method='POST' onSubmit={onSUbmit}>
                                <div className='card-body'>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <div className='form-group Nato_sanlaos'>
                                                <label className='Nato_sanlaos'>Facebook</label>
                                                <div className='input-group Nato_sanlaos'>
                                                    <span className='input-group-text'><i class="bi bi-facebook"></i></span>
                                                    <input className='form-control' defaultValue={Items?.facebook_url} placeholder='URL:// Facebook:....' />
                                                </div>
                                            </div>

                                            <div className='form-group Nato_sanlaos'>
                                                <label className='Nato_sanlaos'>Instagram</label>
                                                <div className='input-group Nato_sanlaos'>
                                                    <span className='input-group-text'><i class="bi bi-instagram"></i></span>
                                                    <input className='form-control' defaultValue={Items?.instagram_url} placeholder='URL:// Instagram:....' />
                                                </div>
                                            </div>

                                            <div className='form-group Nato_sanlaos'>
                                                <label className='Nato_sanlaos'>Email</label>
                                                <div className='input-group Nato_sanlaos'>
                                                    <span className='input-group-text'><i class="bi bi-envelope-at-fill"></i></span>
                                                    <input type='email' className='form-control' defaultValue={Items?.email} placeholder='Email:....' />
                                                </div>
                                            </div>


                                        </div>
                                        <div className='col-md-6'>
                                            <div className='form-group Nato_sanlaos'>
                                                <label className='Nato_sanlaos'>WhatApp</label>
                                                <div className='input-group Nato_sanlaos'>

                                                    <PhoneInput
                                                        specialLabel={'020'}
                                                        country={'la'}
                                                        value={Items?.whatsapp}
                                                        inputStyle={{
                                                            width: "100%",
                                                            height: "37px",
                                                        }}
                                                    />
                                                </div>
                                            </div>

                                            <div className='form-group Nato_sanlaos'>
                                                <label className='Nato_sanlaos'>ຫົວຂໍ້ ສະຖານທີ່ຕັ້ງ</label>
                                                <textarea className='form-control'  defaultValue={Items?.address} placeholder='ເນື້ອໃນສະຖານທີ່ຕັ້ງ ບໍລິສັດ:.....' rows='5'></textarea>
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
