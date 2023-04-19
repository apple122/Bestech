import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import url from '../../service/server'
import Moment from "moment";

export default function Activities() {

    const Navigate = useNavigate()

    const [ ActiveERROR, setERROR ] = useState(false)
    const [ GETEVENT, setWINER ] = useState([])
    useEffect(() => {
        axios.get(url.Mainurl + url.GETEVENT).then((res) => {
            setWINER(res.data.rows.reverse())
            setERROR(true)
        }).catch((err) => {setERROR(false)})
    }, [])


    const PageSHOW = (e) => {
        Navigate(`/Event/${e}`)
    } 

    return (
        <>
            {GETEVENT.filter((e) => e.end_date > Moment().format('YYYY-MM-DD')).length == 0 ? '' :ActiveERROR == true ?
                <div className='page-active-bg p-5'>
                    <div className='form-group'>
                        <label className='text-center text-dark p-2 w-100'><strong className='bg-list-users'>ກິດຈະກຳ</strong></label>
                        <hr/>
                        <div className='group-list-users'>
                            {GETEVENT.filter((e) => e.end_date > Moment().format('YYYY-MM-DD')).map((item) => (
                                <div className='card card-active-listA retina group-envet' onClick={() => PageSHOW(item.id)}>
                                    {item.end_date > Moment().format('YYYY-MM-DD') ?
                                    <span className='top-green-onliine'>ເລີມກິດຈະກຳ</span>:
                                    <span className='top-red-offline'>ປິດກີດຈະກຳ</span>}
                                    
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
                        <hr/>
                        <label className='text-center text-dark p-2 w-100'><Link to='/Event' className='bg-list-users'>ຂໍ້ມູນເພີມເຕີມ</Link></label>
                    </div>
                </div> : ''
            }
        </>
    )
}
