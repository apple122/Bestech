import React, { useContext, useState } from 'react'
import useFunctions from './useFunctions'
import Select from 'react-select'
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import Moment from 'moment'
import { Button, Modal, Form } from 'react-bootstrap'
import { Context_period } from '../../../pages/Period/Period/Index';

export default function Form_edit_period(props) {

    const { SubEdit, plus_period_type, plus_items } = useContext(Context_period)

    let item = props.Items

    let {
        APIPRIZE,

        APIPERIOD_TYPE,

        next_period,
        black_period,
        Page_period,
        next_period_type,

        next_prize,
        black_prize,
        Page_prize,
        next_prize_type,

    } = useFunctions()

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let array_period = []
    for (let x = 0; x < item.period_type.length; x++) {
        array_period.push(item.period_type[x].id)
    }
    array_period.push(0)

    let array_prize = []
    for (let x = 0; x < item.prize_type.length; x++) {
        array_prize.push(item.prize_type[x].id)
    }
    array_prize.push(0)

    return (
        <>
            <button type='button' onClick={handleShow} className='btn btn-sm btn-primary'><i class="bi bi-pencil-square"></i> | ແກ້ໄຂຂໍ້ມູນ</button>
            <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>ແກ້ໄຂຂໍ້ມູນ </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form method='POST' onSubmit={SubEdit}>
                        <input type='hidden' value={item.id} />
                        <input type='hidden' value={array_prize} />
                        <input type='hidden' value={array_period} />
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='form-group'>
                                    <label>ງວດທີ່</label>
                                    <input type='number' className='form-control' defaultValue={item.period} placeholder=':.......' required />
                                </div>
                            </div>
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='form-group'>
                                    <label className='text-success'>ວັນທີ່ ເປິດງວດ</label>
                                    <Datetime dateFormat="YYYY-MM-DD" value={Moment(item.open_date).format("YYYY-MM-DD H:s")} timeFormat="H:ss" required />
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <div className='form-group'>
                                    <label className='text-danger'>ວັນທີ່ ປິດງວດ</label>
                                    <Datetime dateFormat="YYYY-MM-DD" value={Moment(item.close_date).format("YYYY-MM-DD H:s")} timeFormat="H:ss" required />
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <div className='form-group'>
                                    <label className='d-flex w-100'>ເລືອກລາງວັນ

                                    </label>
                                    <Select
                                        onChange={plus_items}
                                        isMulti
                                        defaultValue={
                                            APIPRIZE.filter((e) => e.id in array_prize).map((item) => (
                                                { value: item.id, label: ('ລາງວັນທີ່: ' + item.prize_type) }
                                            ))
                                        }
                                        name="colors"
                                        options={
                                            APIPRIZE.map((item) => (
                                                { value: item.id, label: ('ລາງວັນທີ່: ' + item.prize_type) }
                                            ))
                                        }
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                        required
                                    />
                                    <nav aria-label="..." className='pt-2'>
                                        <ul class="pagination">
                                            <li class="page-item">
                                                <a class="page-link" onClick={black_prize} href="#">Back</a>
                                            </li>
                                            <li class="page-item">
                                                <a class="page-link" href="#">{next_prize_type} In {Page_prize}</a>
                                            </li>
                                            <li class="page-item">
                                                <a class="page-link" onClick={next_prize} href="#">Next</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>

                            <div className='col-md-6'>
                                <div className='form-group'>
                                    <label>ປະເພດງວດ</label>
                                    <Select
                                        onChange={plus_period_type}
                                        isMulti
                                        defaultValue={
                                            APIPERIOD_TYPE.filter((e) => e.id in array_period).map((item) => (
                                                { value: item.id, label: (item.period_type) }
                                            ))
                                        }
                                        name="colors"
                                        options={
                                            APIPERIOD_TYPE.map((item) => (
                                                { value: item.id, label: (item.period_type) }
                                            ))
                                        }
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                        required
                                    />
                                    <nav aria-label="..." className='pt-2'>
                                        <ul class="pagination">
                                            <li class="page-item">
                                                <a class="page-link" onClick={black_period} href="#">Back</a>
                                            </li>
                                            <li class="page-item">
                                                <a class="page-link" href="#">{next_period_type} In {Page_period}</a>
                                            </li>
                                            <li class="page-item">
                                                <a class="page-link" onClick={next_period} href="#">Next</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                        <hr />
                        <div className='footer'>
                            <button type='submit' className='btn btn-sm btn-success mr-2'> <i class="bi bi-cloud-download"></i> ແກ້ໄຂຂໍ້ມູນ </button>
                            <button type='button' className='btn btn-sm btn-danger' onClick={handleClose}> <i class="bi bi-x-diamond-fill"></i> ຍົກເລີກ </button>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}
