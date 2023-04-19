import React, { useContext, useState } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { Context_PDV } from '../../../pages/City/Index'
import usePVD from '../../candidate/usePVD'
import axios from 'axios'
import url from '../../../pages/City/data'
import Swal from 'sweetalert2'

export default function Form_update_dis(props) {
    let item = props.Items

    const { ResetDis } = useContext(Context_PDV)

    function SubDistrict(e) {
        e.preventDefault()
        axios.patch(url.Mainurl + url.patchdistrict + item.id, {
            "district": e.target[0].value,
            "is_active": true,
            "province": e.target[1].value
        }).then(() => {
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
            setshow(false)
            ResetDis()
            Toast.fire({
                icon: 'success',
                title: 'ແກ້ໄຂຂໍ້ມູນສຳເລັດ'
            })
        })
        console.log(e)
    }

    let {
        // province
        province,
        Dropdow_province,
        showlist,
        listpro,
        show_listpro,
        nextpro,
        backpro,
        nextpage_pro,
        Pagepro,
        Cancel_Dropdown,
        list,

    } = usePVD()

    const [show, setshow] = useState(false)
    const handleClose = () => setshow(false)
    const handleShow = () => setshow(true)

    return (
        <>
            <button className='btn btn-sm btn-primary' onClick={handleShow}>
                <i class="bi bi-pencil-square"></i> | ແກ້ໄຂ
            </button>
            <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>ແກ້ໄຂຂໍ້ມູນເມືອງ </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form method='POST' onSubmit={SubDistrict}>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='form-group'>
                                    <label>ຊື່ເມືອງ:</label>
                                    <input type='text' defaultValue={item.district} className='form-control' placeholder=':.............' required />
                                    <input type='hidden' value={listpro.id === undefined ? item.province?.id : listpro.id} />
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='form-group'>
                                    <label>ແຂວງ</label>
                                    <div className='input-group'>
                                        <div className={`form-control float-right drop-event-dis`}>
                                            <div className='w-100' onClick={showlist}><a href='#' class="page-link" style={{ paddingTop: '3px' }}>{listpro === '' ? (item.province?.province) : ('ແຂວງ: ' + listpro.province)}</a></div>
                                            <ul class={`list-group list-group-item-province`} hidden={show_listpro == false ? true : false}>
                                                {province.map((item) => (
                                                    <a class="page-link" href="#"><li class="list-group-item list-hover" onClick={() => Dropdow_province(item)}>ແຂວງ: {item.province}</li></a>
                                                ))}
                                                <nav aria-label="..." className='px-2 pt-2 float-right list-group-item'>
                                                    <ul class="pagination">
                                                        <li class="page-item">
                                                            <a class="page-link" href="#" onClick={backpro}>Back</a>
                                                        </li>
                                                        <li class="page-item">
                                                            <a class="page-link" href="#">{nextpage_pro} In {Pagepro}</a>
                                                        </li>
                                                        <li class="page-item">
                                                            <a class="page-link" href="#" onClick={nextpro}>Next</a>
                                                        </li>
                                                    </ul>
                                                </nav>
                                            </ul>
                                        </div>
                                    </div>
                                    <span className='border-fixed' onClick={Cancel_Dropdown} hidden={list == false ? true : false}></span>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='footer float-end'>
                            <button type='submit' className='btn btn-sm btn-success mr-2'> <i class="bi bi-cloud-download"></i> ແກ້ໄຂຂໍ້ມູນ </button>
                            <button type='button' className='btn btn-sm btn-danger' onClick={handleClose}> <i class="bi bi-x-diamond-fill"></i> ຍົກເລີກ </button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}
