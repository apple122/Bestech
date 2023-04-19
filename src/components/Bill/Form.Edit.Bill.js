import React, { useState, useContext } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import Function_Form_Bill from '../../pages/Bill/Function.Form.Bill';
import { NumberFormatBase } from 'react-number-format';
import axios from 'axios';
import data from '../../pages/Bill/data';
import Swal from 'sweetalert2';
import { Context_Bill } from '../../pages/Bill/Index';

export default function Form_Edit_Bill(props) {
    let Items = props.Items

    const { ResetData } = useContext(Context_Bill)
    const [preview, setpreview] = useState(undefined)

    function SubUpdate(e) {
        e.preventDefault()
        const formData = new FormData()
        if (preview !== undefined) {
            formData.append('image', preview)
            formData.append('bill_number', e.target[2].value)
            formData.append('total_cost', e.target[3].value)
            formData.append('device_number', e.target[4].value)
            formData.append('candidate', e.target[1].value)
            formData.append('multi_period', (Period_multi[0]?.id === undefined ? '' : Period_multi[0]?.id))
            formData.append('period', (Period[0]?.id === undefined ? '' : Period[0]?.id))
        } else {
            formData.append('bill_number', e.target[2].value)
            formData.append('total_cost', e.target[3].value)
            formData.append('device_number', e.target[4].value)
            formData.append('candidate', e.target[1].value)
            formData.append('multi_period', (Period_multi[0]?.id === undefined ? '' : Period_multi[0]?.id))
            formData.append('period', (Period[0]?.id === undefined ? '' : Period[0]?.id))
        }

        if (e.target[2].value.length > 15) {
            axios.patch(data.Mainurl + data.patchBill + e.target[0].value, formData).then((res) => {
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
                setShow(false)
                ResetData()
                Toast.fire({
                    icon: 'success',
                    title: 'ບັນທືກຂໍ້ມູນສຳເລັດ'
                })
            })
        } else {
            alert('ກະລຸນາປ້ອນເລກບີນໃຫ້ເກີນ 15 ໂຕ')
        }
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let {
        CheckNumber,
        Nuumber,

        Period,
        Period_multi,
    } = Function_Form_Bill()

    return (
        <>
            <button type='button' onClick={handleShow} className='btn btn-sm btn-primary'><i class="bi bi-pencil-square"></i> | ແກ້ໄຂ</button>
            <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>

                <Modal.Header closeButton>
                    <Modal.Title>View Bill</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div className='row'>
                        <div className='col-md-4'>

                            <div className='form-group'>
                                <label for='for-img'>ຮູບບີນ</label>
                                <div className=''>
                                    <label id='for-img' className='box-img-input text-center'>
                                        <input type='file' id='for-img' className='form-control d-none' onChange={(e) => setpreview(e.target.files[0])} required />
                                        <img src={preview === undefined ? Items.image : URL.createObjectURL(preview)} id='img-input' alt='ກະລຸນາເລືອກຮູບບີນ' />
                                    </label>
                                </div>
                            </div>

                        </div>
                        <div className='col-md-8'>
                            <form method='POST' onSubmit={SubUpdate}>

                                <div className='col-md-12'>
                                    <input type='hidden' value={Items.id} />
                                    <input type='hidden' value={Items.candidate?.id} />
                                    <div className='form-group'>
                                        <label>ເລກບີນ: {Nuumber === 0 ? Items.bill_number.length : Nuumber} </label>
                                        <NumberFormatBase maxLength={19} value={Items.bill_number} onChange={CheckNumber} className='form-control' placeholder=':.......' required />
                                    </div>
                                    <div className='form-group'>
                                        <label>ມູນຄ່າບີນ</label>
                                        <NumberFormatBase value={Items.total_cost} className='form-control' placeholder='₭' required />
                                    </div>
                                    <div className='form-group'>
                                        <label>ລະຫັດຜູ້ຂາຍ</label>
                                        <div className='input-group'>
                                            <NumberFormatBase value={Items.device_number} placeholder=':.......' className='form-control' required />
                                            <input className='form-control text-center' value={Items.candidate?.full_name} disabled />
                                        </div>
                                    </div>

                                    <div className='group-footer'>
                                        <button type='submit' className={`btn btn-sm btn-outline-success mr-2`}><i class="bi bi-cloud-download"></i> | ບັນທືກແກ້ໄຂ</button>
                                        <button type='button' className='btn btn-sm btn-outline-danger' onClick={handleClose}><i class="bi bi-arrow-bar-left"></i> | Cancel</button>
                                    </div>
                                </div>
                            </form>
                        </div>


                    </div>

                </Modal.Body>
            </Modal>
        </>
    )
}
