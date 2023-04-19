import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import url from '../service/server'
import Moment from "moment";
import InterNetServer from '../Component/InterNetServer';
import { Button, Modal, Form } from 'react-bootstrap'
import '../assets/CSS/style-Event.css'

export default function Event_banner() {

    const Navigate = useNavigate()

    const [ ActiveERROR, setERROR ] = useState(false)
    const [ GETEVENT, setWINER ] = useState([])
    const [ Display, setDisplay ] = useState(false)
    useEffect(() => {
        axios.get(url.Mainurl + url.GETEVENT).then((res) => {
            setWINER(res.data.rows.reverse())
            setERROR(true)
            setDisplay(true)
        }).catch((err) => {setDisplay(true)})
    }, [])

    const PageSHOW = (e) => {
        Navigate(`/Event/${e}`)
    } 

    const [ IMGSHOWH, setIMGSHOW ] = useState('')
    function SHowIMG(e) {
        setIMGSHOW(e)
        setShow(true)
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)

  return (
    <>
        <Modal show={show} onHide={handleClose} size="lg" className='user-select-none' aria-labelledby="contained-modal-title-vcenter" centered>
            <Modal.Body>
                <img src={IMGSHOWH} style={{width: 100+'%'}}/>
            </Modal.Body>
        </Modal>
        <div className='p-4'>
            <div className='card-header text-center'><h4><strong>ລາຍການກິດຈະກຳ</strong></h4></div>
            {GETEVENT.length !== 0 ? <div className='card card-body'>
                
                {GETEVENT.filter((e) => e.end_date > Moment().format('YYYY-MM-DD')) == '' ? '' :
                    GETEVENT.filter((e) => e.end_date > Moment().format('YYYY-MM-DD')).map((item, index) => (
                        (index) < 1 ?
                        <div className='container-padding-event'>
                            <div className='card-body'>
                                <div className='row'>
                                    <div className='colums-SHOW-A col-md-6 hover-event-IMG'>
                                        {/* <span className='border-IMG-SHOW'></span> */}
                                        <span className='btn border-IMG-FullIMG' onClick={() => SHowIMG(url.file + item.image)}><i class="bi bi-fullscreen"></i></span>
                                        <img src={url.file + item.image} id='FullImgEvent'/>
                                    </div>
                                    <div className='card-body colums-SHOW-B col-md-6'>
                                        <h3 className='text-center'>{item.title}</h3><hr/>
                                        <p>{item.sub_title}</p>
                                        <strong>ລາຍລະອຽດ</strong>
                                        <p>{item.description}</p>
                                        <p><strong className='paddding-bottom-B'>ສະຖານທີ່ຈັດກິດຈະກຳ</strong>: ບ້ານ {item.address}</p>
                                        <p><strong className='paddding-bottom-B'>ເບີໂທຕິດຕໍ່</strong>: {item.phone}</p>
                                        <p><strong className='paddding-bottom-B'>ວັນທີ່ເລີມກິດຈະກຳ</strong>: {item.start_date}</p>
                                        <p><strong className='paddding-bottom-B'>ວັນທີ່ສີ້ນສຸດກິດຈະກຳ</strong>: {item.end_date}</p>
                                    </div>
                                </div>
                            </div>
                        </div>:''
                    ))
                }

                <div class="accordion" id="accordionExample">
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingOne">
                        <button class="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <label><strong>ກິດຈະກຳລ່າສຸດ</strong></label>
                        </button>
                        </h2>
                        <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                        {GETEVENT.filter((e) => e.end_date > Moment().format('YYYY-MM-DD')) == '' ? '' :
                            <div className='row'>
                                {GETEVENT.filter((e) => e.end_date > Moment().format('YYYY-MM-DD')).map((item) => (
                                    <div className='card card-active-listA renative group-envet' onClick={() => PageSHOW(item.id)}>
                                        <span className='top-green-onliine'>ເລີມກິດຈະກຳ</span>
                                        <div className='img-div-show'>
                                            <img src={url.file + item.image} className='showIMG-IMG'/>
                                        </div>
                                        <div className='w-100 absolute-event'>
                                            <div className='w-100'>
                                                <p className='font-size-p'>{item.title}</p>
                                                <p className='font-size-p'>{item.sub_title}</p>
                                                <p className='font-size-p'>ເລີມກິດຈະກຳ: {item.start_date}</p>
                                                <p className='font-size-p'>ສີ້ນສຸດກິດຈະກຳ: {item.end_date}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        }
                        </div>
                        </div>
                    </div>
                    <div class="accordion-item">
                        <h2 class="accordion-header" id="headingTwo">
                        <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                            <label><strong>ກິດຈະກຳທັ້ງໝົດ</strong></label>
                        </button>
                        </h2>
                        <div id="collapseTwo" class="accordion-collapse collapse show" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                        <div class="accordion-body">
                            <div className='row'>
                                {GETEVENT.map((item) => (
                                    <div className='card card-active-listA renative group-envet' onClick={() => PageSHOW(item.id)}>
                                        {item.end_date > Moment().format('YYYY-MM-DD') == '' ? 
                                            <span className='top-red-offline'>ປິດກິດຈະກຳ</span>
                                            :
                                            <span className='top-green-onliine'>ເລີມກິດຈະກຳ</span>
                                        }
                                        <div className='img-div-show'>
                                            <img src={url.file + item.image} className='showIMG-IMG'/>
                                        </div>
                                        <div className='w-100 absolute-event'>
                                            <div className='w-100'>
                                                <p className='font-size-p'>{item.title}</p>
                                                <p className='font-size-p'>{item.sub_title}</p>
                                                <p className='font-size-p'>ເລີມກິດຈະກຳ: {item.start_date}</p>
                                                <p className='font-size-p'>ສີ້ນສຸດກິດຈະກຳ: {item.end_date}</p>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                
            </div> : 
            <div className='card card-body text-center'>
                <label>ບໍ່ມີຂໍ້ມູນ ກິດຈະກຳ</label>
            </div>
            }
            {Display == false ? <InterNetServer /> : ''}
        </div>
    </>
  )
}
