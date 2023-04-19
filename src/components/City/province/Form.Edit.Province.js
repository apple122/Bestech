import React, { useState, useContext } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import url from '../../../pages/City/data'
import axios from 'axios'
import Swal from 'sweetalert2'
import { Context_PDV } from '../../../pages/City/Index'

export default function Form_Edit_Province(props) {

    const item = props.Items

    const { ResetData } = useContext(Context_PDV)

    function SubUpProvince(e) {
        e.preventDefault()
        axios.patch(url.Mainurl + url.patchprovince + e.target[1].value + '/', {
            "province": e.target[0].value
        }).then((res) => {
            const Toast = Swal.mixin({
                toast: true,
                position: 'top-end',
                showConfirmButton: false,
                timer: 3000,
                timerProgressBar: true,
                didOpen: (toast) => {
                    toast.addEventListener('mouseenter', Swal.stopTimer)
                    toast.addEventListener('mouseleave', Swal.resumeTimer)
                }
            })
            ResetData()
            setShow(false)
            Toast.fire({
                icon: 'success',
                title: 'ບັນທືກຂໍ້ມູນສຳເລັດ'
            })
        })
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <button className='btn btn-sm btn-primary' onClick={handleShow}>
                <i class="bi bi-pencil-square"></i> | ແກ້ໄຂ
            </button>
            <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>

                <Modal.Header closeButton>
                    <Modal.Title>ແກ້ໄຂຂໍ້ມູນແຂວງ </Modal.Title>
                </Modal.Header>
                <form method='POST' onSubmit={SubUpProvince}>
                    <Modal.Body>
                        <div className='row'>
                            <div className='col-md-12'>
                                <label htmlFor="exampleInputEmail1">ຊື່ແຂວງ</label>
                                <div className="input-group">
                                    <input type="text" className="form-control" defaultValue={item.province} name='name' placeholder="ປ້ອນຊື່ເມືອງ" required />
                                    <input type="hidden" value={item.id} />
                                </div>
                            </div>
                        </div>
                    </Modal.Body>
                    <Modal.Footer>
                        <button type='submit' className='btn btn-sm btn-success'> <i class="bi bi-cloud-download"></i> ແກ້ໄຂຂໍ້ມູນ </button>
                        <button type='button' className='btn btn-sm btn-danger' onClick={handleClose} > <i class="bi bi-x-diamond-fill"></i> ຍົກເລີກ </button>
                    </Modal.Footer>
                </form>
            </Modal>
        </>
    )
}
