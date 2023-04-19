import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Button, Modal, Form } from 'react-bootstrap'
import useFunctions from './useFunctions';

export default function Period_type() {

    let {
        API,
        edite,
        Items,
        Subedite,
        Submit,
        delType,

        next,
        black,
        Page,
        next_period
    } = useFunctions()

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    return (
        <>
            <Link className="nav-link ps-2" onClick={handleShow}>
                <p>ປະເພດງວດ</p>
            </Link>
            <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>

                <Modal.Header closeButton>
                    <Modal.Title>ປະເພດງວດ&nbsp;
                        <label className="btn bg-light btn-outline-white pt-2" data-bs-toggle="collapse" href="#collapseExampleplus" role="button" aria-expanded="false" aria-controls="collapseExampleplus"><i class="bi bi-plus-lg"></i> | ເພີມປະເພດງວດ:</label>
                    </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <div class="collapse" id="collapseExampleplus">
                        <div class="card card-body">
                            <form method='POST' onSubmit={Submit}>
                                <div className='form-group'>
                                    <label>ເພີມ ປະເພດງວດ</label>
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
                                        <input type='text' className='form-control' defaultValue={Items.period_type} placeholder=':........' />
                                        <button type='submit' className='input-group-text btn btn-info'><i class="bi bi-cloud-download"></i> | ບັນທືກການແກ້ໄຂ</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
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
                                        <td>#{index + 1}</td>
                                        <td>{item.period_type}</td>
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
                                    <a class="page-link" onClick={black} href="#">Back</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#">{next_period} In {Page}</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" onClick={next} href="#">Next</a>
                                </li>
                            </ul>
                        </nav>
                    </div>
                </Modal.Body>
            </Modal>
        </>
    )
}
