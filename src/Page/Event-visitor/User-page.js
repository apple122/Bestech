import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import url from '../../service/server'
import { Button, Modal, Form } from 'react-bootstrap'

export default function User_page() {

    const [ UserERROR, setERROR ] = useState(false)
    const [ GETWINNER, setWINER ] = useState([])
    useEffect(() => {
        axios.get(url.Mainurl + url.GETWINNER).then((res) => {
            setWINER(res.data.data.reverse())
            setERROR(true)
        }).catch((err) => {setERROR(false)})
    }, [])

    const setLink = (e) => {
        sessionStorage.setItem('PageLink', e)
    }

    const [ TimeShow, setTime ] = useState(4)
    setTimeout(() => {
        setTime(TimeShow+4)
    }, (TimeShow !== 32 ? 15000 : 1500000000))

    if(TimeShow >= 32) {
        setTimeout(() => {
            setTime(4)
        }, (15000))
    }

    return (
        <>
            <div className='page-user-bg p-5'>
                <div className='form-group'>
                    <label className='text-center text-dark p-2 w-100'><strong className='bg-list-users'>ຜູ້ໂຊກດີ</strong></label>
                    <hr/>
                    <div className='group-list-users'>
                    {UserERROR == true ? 
                        GETWINNER.reverse().slice((TimeShow-4), (TimeShow)).map((item, index) => (
                            <div className='card m-3 p-4 card-user-list'>
                                <h4>{item.fullName}</h4><hr/>
                                <p className='font-size-p'><strong>ເລກບີນ</strong></p>
                                <h6>{(item.bil_number).substring(0, 7)}xxxxxxxxxx</h6>
                                <h4>ງວດທີ່: {item.week_id}</h4>
                                <hr/>
                                <Link to='/Lucky_winners' className='btn btn-sm btn-info'>ກວດສອບຂໍ້ມູນ</Link>
                            </div>
                        ))
                        :
                        <>
                            <div class="card m-3 p-4 card-user-list card-ss">
                                <div class="card_load"></div><hr/>
                                <div class="card_load_extreme_title"></div>
                                <div class="card_load_extreme_descripion"></div>
                            </div>
                            <div class="card m-3 p-4 card-user-list card-ss">
                                <div class="card_load"></div><hr/>
                                <div class="card_load_extreme_title"></div>
                                <div class="card_load_extreme_descripion"></div>
                            </div>
                            <div class="card m-3 p-4 card-user-list card-ss">
                                <div class="card_load"></div><hr/>
                                <div class="card_load_extreme_title"></div>
                                <div class="card_load_extreme_descripion"></div>
                            </div>
                            <div class="card m-3 p-4 card-user-list card-ss">
                                <div class="card_load"></div><hr/>
                                <div class="card_load_extreme_title"></div>
                                <div class="card_load_extreme_descripion"></div>
                            </div>
                        </>
                    }
                    </div>
                    <hr/>
                    <label className='text-center text-dark p-2 w-100'><Link to='/Lucky_winners' className='bg-list-users' onClick={(e) => setLink('ຜູ້ໂຊກດີ')}>ຂໍ້ມູນເພີມເຕີມ</Link></label>
                </div>
            </div> 
        </>
    )
}
