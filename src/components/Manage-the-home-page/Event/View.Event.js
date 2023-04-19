import React, { useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'

export default function View_Event(props) {
    let item = props.Items
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <strong className='btn btn-sm btn-outline-dark' onClick={handleShow}>ກົດເບິງຂໍ້ມູນເພີມເຕີມ</strong>
            <Modal show={show} onHide={handleClose} size="xl" aria-labelledby="contained-modal-title-vcenter" centered>

                <Modal.Header closeButton>
                    <Modal.Title>View Event</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='row'>
                        <div className='col-md-6'>
                            <img src={item.image} width={'100%'} style={{ borderRadius: '6px' }} />
                        </div>
                        <div className='col-md-6 grid-gap'>
                            <h3>{(item.title)}</h3><hr />
                            <h5 className='pt-2'><strong>{(item.sub_title)}</strong> </h5>
                            <h5 className='pt-2'><strong>ລາຍລະອຽດ :</strong> {(item.description)}</h5>
                            <h5 className='pt-2'><strong>ເບີໂທ:</strong> {item.phone}</h5>
                            <h5 className='pt-2'><strong>ທີ່ຢູ່:</strong> {(item.address)}</h5>
                            <h5 className='pt-2'><strong>ກິດຈະກຳປະຈຳງວດທີ່:</strong> {(item.period?.period)}</h5>
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
