import axios from 'axios'
import moment from 'moment'
import React, { useEffect, useReducer, useState } from 'react'
import { Link } from 'react-router-dom'
import url from '../service/server'
import { Button, Modal, Form } from 'react-bootstrap'

export default function Lucky_winners() {

    const [ GETAPIW, setAPIW ] = useState([])
    const [ Display, setDisplay ] = useState(false)
    const [ reducer, setRedurcer ] = useReducer(x => x +1 ,0)
    useEffect(() => {
        axios.get(url.Mainurl + url.GETWINNER).then((res) => {
            setAPIW(res.data.data)
            setDisplay(true)
        })
    }, [reducer])

    const [ LimitPage, setlimitPage ] = useState(0)
    const [ ShowPage, setShowPage ] = useState(1)
    const [ LPage, setPage ] = useState(1)
    function Next() {
        if(ShowPage === (GETAPIW.slice((0), (GETAPIW.length) / 25).length +1)){
        }else{
            setlimitPage(LimitPage +25)
            setPage(25)
            setShowPage(ShowPage +1)
        }
    }
    function Back() {
        if(LimitPage !== 0) {
            setlimitPage(LimitPage -25)
            setPage(25)
            setShowPage(ShowPage -1)
        }
    }

    const [value, setValue] = useState('')
    const [valueA, setValueA] = useState('')
    const [valueB, setValueB] = useState('')
    const [valueC, setValueC] = useState('')
    const [ Resetvalue, setREValue ] = useState('')
    const [tableFiller, setTablefiller] = useState([])
    const fillterData = (e) => {
        if(e.target.value != ''){
            setValue(e.target.value);
            setREValue(e.target.value);
            setShowPage(1)
            setlimitPage(0)
            setValueA('')
            setValueB('')
            setValueC('')
            const fillterTable = GETAPIW.filter(o => Object.keys(o).some(k => 
                String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
            ));
            setTablefiller([...fillterTable])
        }else{
            setREValue(e.target.value);
            setShowPage(1)
            setlimitPage(0)
            setValueA('')
            setValueB('')
            setValueC('')
            setValue(e.target.value);
            setAPIW([...GETAPIW])
        }
    }
    const fillterWEEK = (e) => {
        if(e.target.value != ''){
            setValue(e.target.value);
            setREValue('')
            setValueA(e.target.value)
            setValueB('')
            setValueC('')
            setShowPage(1)
            setlimitPage(0)
            const fillterTable = GETAPIW.filter(o => o.week_id == e.target.value);
            setTablefiller([...fillterTable])
        }else{
            setREValue('')
            setValueB('')
            setValueC('')
            setShowPage(1)
            setlimitPage(0)
            setValue(e.target.value);
            setAPIW([...GETAPIW])
        }
    }
    const fillterPrice = (e) => {
        if(e.target.value != ''){
            setValue(e.target.value);
            setREValue('')
            setValueA('')
            setValueB(e.target.value)
            setValueC('')
            setShowPage(1)
            setlimitPage(0)
            const fillterTable = GETAPIW.filter(o => o.prize.title == e.target.value);
            setTablefiller([...fillterTable])
        }else{
            setREValue('')
            setValueA('')
            setValueC('')
            setShowPage(1)
            setlimitPage(0)
            setValue(e.target.value);
            setAPIW([...GETAPIW])
        }
    }
    const fillterprovine = (e) => {
        if(e.target.value != ''){
            setREValue('')
            setValueA('')
            setValueB('')
            setValueC(e.target.value)
            setShowPage(1)
            setlimitPage(0)
            setValue(e.target.value);
            const fillterTable = GETAPIW.filter((o) => o.province == e.target.value);
            setTablefiller([...fillterTable])
        }else{
            setREValue('')
            setValueA('')
            setValueB('')
            setShowPage(1)
            setlimitPage(0)
            setValue(e.target.value);
            setAPIW([...GETAPIW])
        }
    }

    const LoopQnumberDrw = [...new Set(GETAPIW.map(item => item.week_id))]
    const LoopQprice = [...new Set(GETAPIW.map(item => item.prize.title))]
    const LoopQProvine = [...new Set(GETAPIW.map(item => item.province))]

    function ResetData() {
        setREValue('')
        setDisplay(false)
        setRedurcer()
        setValue('')
    }
    
    return (
        <>
        <div className='container container-padding'>
            <div className='card'>
                <div className='card-header text-center'><h4>ລາຍຊື່ຜູ້ໂຊກດີ ຈຳນວນລວມ <strong className='text-danger'>{GETAPIW.length}</strong> ຄົນ</h4></div>
                <div className='card-body'>
                    <div className='card-table overflow-auto'>
                        <div className='display-respone'>
                            <input type="search" value={Resetvalue} onChange={(e) => fillterData(e)} className='form-control respone' placeholder="Search" aria-label="Search"/>&nbsp;
                            <select className='form-control form-select text-center respone' value={valueA} onChange={(e) => fillterWEEK(e)}>
                                <option value=''>~~ເລືອກງວດ~~</option>
                                {LoopQnumberDrw.map((item) => (
                                    <option value={item}>ງວດທີ່: {item}</option>
                                ))}
                            </select>&nbsp;
                            <select className='form-control form-select text-center respone' value={valueB} onChange={(e) => fillterPrice(e)}>
                                <option value=''>~~ລາງວັນ~~</option>
                                {LoopQprice.map((item) => (
                                    <option value={item}>ລາງວັນທີ: {item}</option>
                                ))}
                            </select>&nbsp;
                            <div className='input-group respone'>
                                <select className='user-select-none form-select form-control input-group-text bg-white ' value={valueC} onChange={fillterprovine}>
                                    <option value=''>~~ຄົ້ນຫາດ້ວຍແຂວງ~~</option>
                                    {LoopQProvine.map((item) => (
                                        <option value={item}>{item}</option>
                                    ))}
                                </select>&nbsp;
                                <span className='btn input-group-text' onClick={ResetData}><i class="bi bi-arrow-repeat"></i>&nbsp; Reset</span>
                            </div>
                        </div>&nbsp;
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th className='col-2'>ຊື່ ນາມສະກຸນ</th>
                                    <th>ເລກບີນ</th>
                                    <th>ງວດ</th>
                                    <th>ລາງວັນ</th>
                                    <th>ແຂວງ</th>
                                    <th className='col-2'>ວ/ດ/ປ ທີ່ຖືກລາງວັນ</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Display == false ? '' : value.length > 0 ? tableFiller.slice((0), (25+ LimitPage)).map((item, index) => (
                                    (LimitPage-1) < (index) ? 
                                    <tr className='hover'>
                                        <td>#{index+1}</td>
                                        <td>{item.fullName}</td>
                                        <td>{item.bil_number}</td>
                                        <td>{item.week_id}</td>
                                        <td>ລາງວັນທີ່ {item.prize.title} {item.prize.description}</td>
                                        <td>{item.province}</td>
                                        <td>{moment(item.createdAt).format("DD/MM/YYYY")}</td>
                                    </tr> : ''
                                )) : GETAPIW.slice((0), (25+ LimitPage)).map((item, index) => (
                                    (LimitPage-1) < (index) ? 
                                    <tr className='hover'>
                                        <td>#{index+1}</td>
                                        <td>{item.fullName}</td>
                                        <td>{(item.bil_number).substring(0, 6)}xxxxxxxxxxxx</td>
                                        <td>{item.week_id}</td>
                                        <td>ລາງວັນທີ່ {item.prize.title} {item.prize.description}</td>
                                        <td>{item.province}</td>
                                        <td>{moment(item.createdAt).format("DD/MM/YYYY")}</td>
                                    </tr> : ''
                                ))}&nbsp;
                                {Display == false ? 
                                    <>
                                        <tr>
                                            <td colSpan={7} className='td_load_extreme_title'></td>
                                        </tr>&nbsp;
                                        <tr>
                                            <td colSpan={7} className='td_load_extreme_title'></td>
                                        </tr>&nbsp;
                                        <tr>
                                            <td colSpan={7} className='td_load_extreme_title'></td>
                                        </tr>
                                    </> : '' }
                            </tbody>
                        </table>
                        
                    </div>
                    <div className='text-center input-group d-flex justify-content-center'>
                        <span className='btn btn-primary input-group-text' onClick={Back}>back</span>&nbsp;
                        <span className='bg-white input-group-text'>{ShowPage} in {(GETAPIW.slice((0), (GETAPIW.length) / 25).length +1)}</span>&nbsp;
                        <span className='btn btn-primary input-group-text' onClick={Next}>Next</span>
                    </div>
                </div>
            </div>
        </div>
        </>
      )
}
