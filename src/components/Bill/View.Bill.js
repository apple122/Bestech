import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'

export default function View_Bill(props) {
    let item = props.Items
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button type='button' onClick={handleShow} className='btn btn-sm btn-info'><i class="bi bi-eye-fill"></i> | View</button>
            <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>

                <Modal.Header closeButton>
                    <Modal.Title>View Bill</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='form-group d-flex'>
                                <span>ເລກບີນ: {item.bill_number}</span>
                            </div>
                            <div className='form-group d-flex'>
                                <span>ລະຫັດຜູ້ຂາຍ: {item.device_number}</span>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='form-group d-flex'>
                                <span>ມູນຄ່າບີນ: {item.total_cost}</span>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-6'>
                            <div className='form-group d-flex'>
                                <span>ຊື່ ນາມສະກຸນ: {item.candidate?.full_name}</span>
                            </div>
                            <div className='form-group d-flex'>
                                <span>ງວກທີ່: {item.period?.period}</span>
                            </div>
                        </div>
                        <div className='col-md-6'>
                            <div className='form-group d-flex'>
                                <span>ເບີໂທ: {item.candidate?.phone_number}</span>
                            </div>
                            <div className='form-group d-flex'>
                                <span>ປະເພດງວດ: {item.multi_period?.multi_period}</span>
                            </div>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='col-md-4'>
                            <div className='form-group d-flex'>
                                <span>ເບີໂທ: {item.candidate?.village?.village}</span>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='form-group d-flex'>
                                <span>ເບີໂທ: {item.candidate?.district?.district}</span>
                            </div>
                        </div>
                        <div className='col-md-4'>
                            <div className='form-group d-flex'>
                                <span>ແຂວງ: {item.candidate?.province?.province}</span>
                            </div>
                        </div>
                    </div>
                    <img src={item.image} width={'100%'} />
                </Modal.Body>
            </Modal>
        </>
    )
}
