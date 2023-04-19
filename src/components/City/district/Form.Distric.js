import React, { useContext } from 'react'
import { Button, Modal, Form } from 'react-bootstrap'
import { Context_PDV } from '../../../pages/City/Index'
import usePVD from '../../candidate/usePVD'

export default function Form_Distric() {

    const { SubDistrict, MoldalDis, handleCloseDis, handleShowDis } = useContext(Context_PDV)

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

    return (
        <>
            <button type='button' onClick={handleShowDis} class="accordion-button collapsed">ເພີມເມືອງ</button>
            <Modal show={MoldalDis} onHide={handleCloseDis} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>ເພີມຂໍ້ມູນເມືອງ </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form method='POST' onSubmit={SubDistrict}>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='form-group'>
                                    <label>ຊື່ເມືອງ:</label>
                                    <input type='text' className='form-control' placeholder=':.............' required />
                                    <input type='hidden' value={listpro.id}/>
                                </div>
                            </div>
                            <div className='col-md-6'>
                                <div className='form-group'>
                                    <label>ແຂວງ</label>
                                    <div className='input-group'>
                                        <div className={`form-control float-right drop-event-dis`}>
                                            <div className='w-100' onClick={showlist}><a href='#' class="page-link" style={{ paddingTop: '3px' }}>{listpro === '' ? '~~ເລືອກແຂວງ~~' : ('ແຂວງ: ' + listpro.province)}</a></div>
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
                        <div className='footer'>
                            <button type='submit' className='btn btn-sm btn-success mr-2'> <i class="bi bi-cloud-download"></i> ບັນທືກຂໍ້ມູນ </button>
                            <button type='button' className='btn btn-sm btn-danger' onClick={handleCloseDis}> <i class="bi bi-x-diamond-fill"></i> ຍົກເລີກ </button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}
