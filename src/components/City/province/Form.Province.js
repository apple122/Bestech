import React, { useContext } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { Context_PDV } from '../../../pages/City/Index'

export default function Form_Province() {

    const { SubProvince, MoldalProvince, handleCloseProvince, handleShowProvince } = useContext(Context_PDV)

    return (
        <>
            <button type='button' onClick={handleShowProvince} class="accordion-button collapsed">ເພີມແຂວງ</button>
            <Modal show={MoldalProvince} onHide={handleCloseProvince} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>ເພີມຂໍ້ມູນແຂວງ </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form method='POST' onSubmit={SubProvince}>
                        <div className='form-group'>
                            <label>ຊື່ແຂວງ:</label>
                            <input type='text' className='form-control' placeholder=':.............' required/>
                        </div>
                        <hr />
                        <div className='footer'>
                            <button type='submit' className='btn btn-sm btn-success mr-2'> <i class="bi bi-cloud-download"></i> ບັນທືກຂໍ້ມູນ </button>
                            <button type='button' className='btn btn-sm btn-danger' onClick={handleCloseProvince}> <i class="bi bi-x-diamond-fill"></i> ຍົກເລີກ </button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}
