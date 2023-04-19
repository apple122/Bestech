import React, { useState, useContext } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import useFunctions from './useFunctions';
import { Context_Slide } from './Slide';
import Swal from 'sweetalert2';
import axios from 'axios';
import url from '../data'

export default function Update_slide(props) {
    let item = props.items

    const { ResetData } = useContext(Context_Slide)

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => {
        setShow(true)
        setPreview('')
    };

    const [preview, setPreview] = useState('')

    function editSubmit(e) {
        e.preventDefault()
        const formData = new FormData()
        formData.append('image', e.target[1].files[0])
        formData.append('title', e.target[2].value)

        axios.patch(url.Mainurl + url.patchslide + e.target[0].value + '/', (
            e.target[1].value === '' ? {
                "title": e.target[2].value
            } : formData
        )).then((res) => {
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
                title: 'ແກ້ໄຂຂໍ້ມູນຂໍ້ມູນສຳເລັດ'
            })
        })
    }

    return (
        <>
            <button className='btn btn-sm btn-primary respon-font-slide' onClick={handleShow}>
                <i class="bi bi-pencil-square"></i> | ແກ້ໄຂ
            </button>
            <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header>
                    <Modal.Title>
                        <h5>ຈັດການຂໍ້ມູນ About</h5>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form method='POST' onSubmit={editSubmit}>
                        <input type='hidden' value={item.id} />
                        <div className='card-body'>
                            <div className='row'>
                                <div className='col-md-6'>
                                    <div className='form-group Nato_sanlaos'>
                                        <label className='Nato_sanlaos'>ຮູບພາບສະໄລສ໌</label>
                                        <div className='input-group Nato_sanlaos'>
                                            <input type='file' className='form-control' onChange={(e) => setPreview(e.target.files[0])} />
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-6'>
                                    <div className='form-group Nato_sanlaos'>
                                        <label className='Nato_sanlaos'>ຫົວຂໍ້</label>
                                        <div className='input-group Nato_sanlaos'>
                                            <input className='form-control' defaultValue={item.title} placeholder='.......' />
                                        </div>
                                    </div>

                                </div>
                                <div className='col-md-12'>
                                    <img className='float-left' style={{ width: 100 + '%' }} src={preview === '' ? (item.image) : URL.createObjectURL(preview)} alt='ກະລຸນາເລືອກຮູບພາບ' />
                                </div>
                            </div>
                        </div>
                        <Modal.Footer className='Nato_sanlaos'>
                            <button type='submit' className='btn btn-sm btn-outline-success mr-2'><i class="bi bi-gear-wide-connected"></i> | ບັນທືກຂໍ້ມູນ</button>
                            <button type='button' className='btn btn-sm btn-outline-danger' onClick={handleClose}><i class="bi bi-chevron-bar-left"></i> | ຍົກເລີກ</button>
                        </Modal.Footer>
                    </form>
                </Modal.Body>
            </Modal>

        </>
    )
}
