import React, { useContext, useState } from 'react'
import Select from 'react-select'
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import Moment from 'moment'
import { Button, Modal, Form } from 'react-bootstrap'
import { Context_Multi } from '../../../pages/Period/Period_Multi/Index';
import useFunctions from './useFunctions'
import "react-datetime/css/react-datetime.css";

export default function Form_Edit_Multi(props) {

    const { SubEdit, plus_period_type, plus_items, plus_period } = useContext(Context_Multi)

    let item = props.Items

    // console.log('item', item)

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

        Priod,
        PagePeriod,
        InPagePeriod,
        N_Period,
        B_Period,
    } = useFunctions()

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    let array_period_type = []
    for (let x = 0; x < item.period_type.length; x++) {
        array_period_type.push(item.period_type[x].id)
    }
    array_period_type.push(0)

    let array_prize = []
    for (let x = 0; x < item.prize_type.length; x++) {
        array_prize.push(item.prize_type[x].id)
    }
    array_prize.push(0)

    let array_period = []
    for (let x = 0; x < item.period_id.length; x++) {
        array_period.push(item.period_id[x].id)
    }
    array_period.push(0)

    console.log('array', array_period_type, array_prize, array_period)


    return (
        <>
            <button type='button' onClick={handleShow} className='btn btn-sm btn-primary'><i class="bi bi-pencil-square"></i> | ແກ້ໄຂຂໍ້ມູນ</button>
            <Modal show={show} onHide={handleClose} size="lg" aria-labelledby="contained-modal-title-vcenter" centered>
                <Modal.Header closeButton>
                    <Modal.Title>ແກ້ໄຂຂໍ້ມູນ </Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <form method='POST' onSubmit={SubEdit}>
                        <div className='row'>
                            <input type='hidden' value={item.id} />
                            <div className='col-md-6'>
                                <div className='form-group'>
                                    <label>ງວດທີ່</label>
                                    <input type='number' className='form-control' defaultValue={item.multi_period} placeholder=':.......' required />
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
                        </div>
                        <div className='row'>
                            <div className='col-md-6'>
                                <div className='form-group'>
                                    <label className='text-success'>ວັນທີ່ ເປິດງວດ</label>
                                    <Datetime dateFormat="YYYY-MM-DD" value={Moment(item.open_date).format("YYYY-MM-DD H:ss")} timeFormat="H:ss" required />
                                </div>

                                <div className='form-group'>
                                    <label>ປະເພດງວດ</label>
                                    <Select
                                        onChange={plus_period_type}
                                        isMulti
                                        defaultValue={
                                            APIPERIOD_TYPE.filter((e) => e.id in array_period_type).map((item) => (
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

                            <div className='col-md-6'>
                                <div className='form-group'>
                                    <label className='text-danger'>ວັນທີ່ ປິດງວດ</label>
                                    <Datetime dateFormat="YYYY-MM-DD" value={Moment(item.close_date).format("YYYY-MM-DD H:ss")} timeFormat="H:ss" required />
                                </div>

                                <div className='form-group'>
                                    <label>ງວດ ປະຈຳອາທິດ</label>
                                    <Select
                                        onChange={plus_period}
                                        isMulti
                                        defaultValue={
                                            Priod.filter((e) => e.id in [5,0,0]).map((item) => (
                                                { value: item.id, label: (item.period) }
                                            ))
                                        }
                                        name="colors"
                                        options={
                                            Priod.map((item) => (
                                                { value: item.id, label: (item.period) }
                                            ))
                                        }
                                        className="basic-multi-select"
                                        classNamePrefix="select"
                                        required
                                    />
                                    <nav aria-label="..." className='pt-2'>
                                        <ul class="pagination">
                                            <li class="page-item">
                                                <a class="page-link" onClick={B_Period} href="#">Back</a>
                                            </li>
                                            <li class="page-item">
                                                <a class="page-link" href="#">{PagePeriod} In {InPagePeriod}</a>
                                            </li>
                                            <li class="page-item">
                                                <a class="page-link" onClick={N_Period} href="#">Next</a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>

                        </div>
                        <div className='col-md-12 pt-4'>
                            <div className='group-footer'>
                                <button type='submit' className='btn btn-sm btn-success mr-2'> <i class="bi bi-cloud-download"></i> ແກ້ໄຂຂໍ້ມູນ </button>
                                <button type='button' className='btn btn-sm btn-danger' onClick={handleClose}> <i class="bi bi-x-diamond-fill"></i> ຍົກເລີກ </button>
                            </div>
                        </div>
                    </form>
                </Modal.Body>
            </Modal>
        </>
    )
}
