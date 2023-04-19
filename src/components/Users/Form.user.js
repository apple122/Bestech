import React, { useContext } from 'react'
import Function_User from '../../pages/Users/Function.User'
import PhoneInput from 'react-phone-input-2'
import 'react-phone-input-2/lib/style.css'
import { Link } from 'react-router-dom'

export default function Form_user() {

    let {
        onSubmit
    } = Function_User()

    return (
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
                                            <label className='Nato_sanlaos'>ຊື່:</label>
                                            <div className='input-group Nato_sanlaos'>
                                                <input className='form-control' placeholder=':.......' required/>
                                            </div>
                                        </div>

                                        <div className='form-group Nato_sanlaos'>
                                            <label className='Nato_sanlaos'>ນາມສະກຸນ:</label>
                                            <input className='form-control' placeholder=':.....' required/>
                                        </div>
                                    </div>
                                    <div className='col-md-6'>
                                        <div className='form-group Nato_sanlaos'>
                                            <label className='Nato_sanlaos'>ເພດ:</label>
                                            <select className='form-control form-select' required>
                                                <option>ກະລຸນາເລືອກເພດ</option>
                                                <option value='Male'>Male</option>
                                                <option value='Female'>Female</option>
                                            </select>
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
                                    <div className='col-md-6'>
                                        <div className='form-group Nato_sanlaos'>
                                            <label className='Nato_sanlaos'>UserName:</label>
                                            <input type='text' className='form-control' placeholder=':.....' required/>
                                        </div>
                                        <div className='form-group Nato_sanlaos'>
                                            <label className='Nato_sanlaos'>Password</label>
                                            <input type='password' className='form-control' placeholder=':.....' required/>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className='card-footer Nato_sanlaos'>
                                <button type='submit' className='btn btn-sm btn-success mr-2' ><i class="bi bi-gear-wide-connected"></i> | ບັນທືກຂໍ້ມູນ</button>
                                <Link to={'/user'} className='btn btn-sm btn-danger mr-2' >ຍົກເລີກ</Link>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </div>
    )
}
