import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import '../../assets/CSS/style-pageEVENT.css'
import url from '../../service/server'
import InterNetServer from '../../Component/InterNetServer'
import { Button, Modal, Form } from 'react-bootstrap'

export default function Event_Show() {
    let {page} = useParams()
    
    const [ ERROR, setERROR ] = useState(false)
    const [ GETAPI, setByID ] = useState([])
    useEffect(() => {
        axios.get(url.Mainurl + url.GETEVENTBYUID + page).then((res) => {
            setByID(res.data)
            setERROR(true)
        }).catch((err) => {setERROR(false)})
    }, [])

    function SHowIMG(e) {
        setShow(true)
    }

    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true)

  return (
    <>
    <Modal show={show} onHide={handleClose} size="lg" className='user-select-none' aria-labelledby="contained-modal-title-vcenter" centered>
        <Modal.Body>
            <img src={url.file + GETAPI.image} style={{width: 100+'%'}}/>
        </Modal.Body>
    </Modal>
    
    {ERROR == true ? 
        <div className='container'>
            <div className='card-body'>
                <div className='row'>
                    <div className='colums-SHOW-A col-md-6 hover-event-IMG renative'>
                        {/* <span className='border-IMG-SHOW'></span> */}
                        <span className='btn border-IMG-FullIMG' onClick={() => SHowIMG(url.file + GETAPI.image)}><i class="bi bi-fullscreen"></i></span>
                        <img src={url.file + GETAPI.image} id='FullImgEvent'/>
                    </div>
                    <div className='card-body colums-SHOW-B col-md-6'>
                        <h3 className='text-center'>{GETAPI.title}</h3><hr/>
                        <p>{GETAPI.sub_title}</p>
                        <strong>ລາຍລະອຽດ</strong>
                        <p>{GETAPI.description}</p>
                        <p><strong className='paddding-bottom-B'>ສະຖານທີ່ຈັດກິດຈະກຳ</strong>: ບ້ານ {GETAPI.address}</p>
                        <p><strong className='paddding-bottom-B'>ເບີໂທຕິດຕໍ່</strong>: {GETAPI.phone}</p>
                        <p><strong className='paddding-bottom-B'>ວັນທີ່ເລີມກິດຈະກຳ</strong>: {GETAPI.start_date}</p>
                        <p><strong className='paddding-bottom-B'>ວັນທີ່ສີ້ນສຸດກິດຈະກຳ</strong>: {GETAPI.end_date}</p>
                    </div>
                </div>
            </div>
        </div>
        : <InterNetServer /> }
    </>
  )
}
