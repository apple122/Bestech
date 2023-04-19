import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Modal, Form } from 'react-bootstrap'
import useFunctions from './useFunctions';
import Skeleton_table from '../../City/Skeleton-table';

export default function Prize_type() {

    let {
        Submit,
        API,
        delType,

        index_page,
        Page,
        next,
        back,

        Loadding,
        x,

        Subedite,
    } = useFunctions()

    const [Items, setItems] = useState('')
    function edite(e) {
        setItems(e)
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Link className="nav-link ps-2" onClick={handleShow}>
                <p>ເພີມປະເພດລາງວັນ</p>
            </Link>
            <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>

                <Modal.Header closeButton>
                    <Modal.Title>ປະເພດລາງວັນ&nbsp;
                        <label className="btn bg-light btn-outline-white pt-2" data-bs-toggle="collapse" href="#collapseExampleplus" role="button" aria-expanded="false" aria-controls="collapseExampleplus"><i class="bi bi-plus-lg"></i> | ເພີມປະເພດລາງວັນ:</label>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div class="collapse" id="collapseExampleplus">
                        <div class="card card-body">
                            <form method='POST' onSubmit={Submit}>
                                <div className='form-group'>
                                    <label>ເພີມ ປະເພດລາງວັນ</label>
                                    <div className='input-group'>
                                        <input type='text' className='form-control' placeholder=':........' />
                                        <button type='submit' className='input-group-text btn btn-success'><i class="bi bi-cloud-download"></i> | ບັນທືກ</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>

                    <div class="collapse" id="collapseExamplepatch">
                        <div class="card card-body">
                            <div className='form-group'>
                                <label>ແກ້ໄຂ ປະເພດງວດ</label>
                                <form method='POST' onSubmit={Subedite}>
                                    <div className='input-group'>
                                        <input type='hidden' value={Items.id} />
                                        <input type='text' className='form-control' defaultValue={Items.prize_type} placeholder=':........' />
                                        <button type='submit' className='input-group-text btn btn-info'><i class="bi bi-cloud-download"></i> | ບັນທືກການແກ້ໄຂ</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>

                    {Loadding == true ?
                        <div className='card-body overflow-auto'>
                            <table class="table table-striped">
                                <thead>
                                    <tr>
                                        <th>#</th>
                                        <th>ປະເພດ</th>
                                        <th className='col-3'>ຈັດການ</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {API.filter((e) => e.is_active === true).map((item, index) => (
                                        <tr>
                                            <td>#{x++}</td>
                                            <td>{item.prize_type}</td>
                                            <td>
                                                <div className='btn-group'>
                                                    <button type='button' className='btn btn-sm btn-primary' onClick={() => edite(item)} data-bs-toggle="collapse" href="#collapseExamplepatch" role="button" aria-expanded="false" aria-controls="collapseExamplepatch"><i class="bi bi-pencil-square"></i> | ແກ້ໄຂ</button>
                                                    <button type='button' className='btn btn-sm btn-danger' onClick={() => delType(item)}><i class="bi bi-trash3"></i> | ລົບຂໍ້ມູນ</button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                            <nav aria-label="..." className='pt-2 px-4 float-right'>
                                <ul class="pagination">
                                    <li class="page-item">
                                        <a class="page-link" onClick={back} href="#">Back</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" href="#">{index_page} In {Page}</a>
                                    </li>
                                    <li class="page-item">
                                        <a class="page-link" onClick={next} href="#">Next</a>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        :
                        <Skeleton_table /> }
                </Modal.Body>
            </Modal>
        </>
    )
}
