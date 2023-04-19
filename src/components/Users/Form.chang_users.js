import React, { useContext, useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { Context_User } from '../../pages/Users/Index'

export default function Form_chang_users() {

    const { show, handleClose, Items, OnChangUsers, ConfirmPassword } = useContext(Context_User)

    const [agreement, setAgreement] = useState(false);
    const handleChange = (event) => {
      setAgreement(event.target.checked);
    }

    return (
        <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Header closeButton>
                <Modal.Title>ເພີມຂໍ້ມູນບ້ານ </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <form method='POST' onSubmit={OnChangUsers}>
                    <div className='row'>
                        <div className='col-md-12 mb-4'>
                            <label for='username'>UserName</label>
                            <input type='text' id='username' className='form-control col-6' defaultValue={Items.owner?.username} placeholder=':.........' />
                        </div>

                        <div className='col-md-6'>
                            <label for='New_Password'>New Password</label>
                            <input type={agreement == true ? 'text' : 'password'} id='New_Password' defaultValue={ConfirmPassword} className='form-control' placeholder=':.........' />
                        </div>
                        <div className='col-md-6'>
                            <label for='Confirm_Password'>Confirm Password</label>
                            <input type={agreement == true ? 'text' : 'password'} id='Confirm_Password' defaultValue={ConfirmPassword} className='form-control' placeholder=':.........' />
                        </div>
                        <div className='col-md-6 mt-2 user-select-none'>
                            <input type="checkbox" id='checkbox' onChange={handleChange}/>&nbsp;
                            <label for='checkbox'>show Password</label>
                        </div>
                    </div>
                    <hr />
                    <div className='footer'>
                        <button type='submit' className='btn btn-sm btn-success mr-2'> <i class="bi bi-cloud-download"></i> ບັນທືກການປ່ຽນແປງ </button>
                        <button type='button' className='btn btn-sm btn-danger' onClick={handleClose}> <i class="bi bi-x-diamond-fill"></i> ຍົກເລີກ </button>
                    </div>
                </form>
            </Modal.Body>
        </Modal>
    )
}
