import axios from 'axios'
import React, { useEffect, useReducer, useState } from 'react'
import url from '../service/server'
import '../assets/CSS/style-candidate.css'
import { NumbericFormat, NumberFormatBase } from 'react-number-format';
import { Link } from 'react-router-dom';

export default function Candidate() {

    const [ GETAPICAN, setAPI ] = useState([])
    const [ GETAPIBIN, setAPIBIN ] = useState([])
    const [ Page, setpage ] = useState(0)
    const [ reducer, setReducer ] = useReducer(x => x + 1, 0)
    const [ Display, setDisplay ] = useState(false)

    useEffect(() => {
        axios.get(url.Mainurl + url.getCandidate).then((res) => {
            setAPI(res.data.rows.reverse())
            setpage(res.data)
            setDisplay(true)
        }).catch((err) => {setDisplay(undefined)})

        axios.get(url.Mainurl + url.GETBIL).then((res) => [
            setAPIBIN(res.data.rows)
        ])
    }, [reducer])

    const LoopQProvine = [...new Set(GETAPICAN.map(item => item.province.name))]

    const [ LimitPage, setlimitPage ] = useState(0)
    const [ ShowPage, setShowPage ] = useState(1)
    const [ LPage, setPage ] = useState(1)
    function Next() {
        if(ShowPage === (GETAPICAN.slice((0), (GETAPICAN.length) / 25).length +1)){
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
    const [ Resetvalue, setREValue ] = useState('')
    const [tableFiller, setTablefiller] = useState([])
    const fillterData = (e) => {
        if(e.target.value != ''){
            setValue(e.target.value);
            setREValue(e.target.value);
            setlimitPage(0)
            setShowPage(1)
            const fillterTable = GETAPICAN.filter((o) => Object.keys(o).some(k => 
                String(o[k]).toLowerCase().includes(e.target.value.toLowerCase())
            ));
            setTablefiller([...fillterTable])
        }else{
            setlimitPage(0)
            setShowPage(1)
            setREValue(e.target.value);
            setValue(e.target.value);
            setAPI([...GETAPICAN])
        }
    }
    const fillterprovine = (e) => {
        if(e.target.value != ''){
            setValue(e.target.value);
            setREValue('')
            setlimitPage(0)
            setShowPage(1)
            const fillterTable = GETAPICAN.filter((o) => o.province.name == e.target.value);
            setTablefiller([...fillterTable])
        }else{
            setREValue('')
            setlimitPage(0)
            setShowPage(1)
            setValue(e.target.value);
            setAPI([...GETAPICAN])
        }
    }

    function Reset(){
        setREValue('')
        setReducer()
        setDisplay(false)
        setValue('')
    }

  return (
    <>
        <div className='container container-padding'>
            <div className='card'>
                <div className='card-header text-center'><h4>ລາຍຊື່ຜູ້ມີສິດສຸ່ມລວມ <strong className='text-danger'>{GETAPICAN.length}</strong> ຄົນ</h4></div>
                <div className='card-body'>
                    <div className='card-table overflow-auto'>
                        <div className='display-respone'>
                            <input type='search' className='form-control form-search Nato_sanlaos respone' value={Resetvalue} onChange={(e) => fillterData(e)} placeholder='ຄົ້ນຫາ: ເລກບີນ - ລະຫັດຜູ້ຂາຍ'/>&nbsp;
                            <div className='input-group respone'>
                                <select className='user-select-none form-select form-control input-group-text bg-white' value={value} onChange={fillterprovine}>
                                    <option value=''>~~ຄົ້ນຫາດ້ວຍແຂວງ~~</option>
                                    {LoopQProvine.map((item) => (
                                        <option value={item}>{item}</option>
                                    ))}
                                </select>&nbsp;
                                <span className='btn input-group-text' onClick={Reset}>Reset</span>
                            </div>
                        </div>&nbsp;
                        <table class="table table-striped">
                            <thead>
                                <tr>
                                    <th>#</th>
                                    <th>ຊື່ ນາມສະກຸນ</th>
                                    <th>ຈຳນວນບີນ</th>
                                    <th>ເບີໂທຕິດຕໍ່</th>
                                    <th>ແຂວງ</th>
                                </tr>
                            </thead>
                            <tbody>
                                {Display == false ? '' : value.length > 0 ? tableFiller.slice((0), (25+ LimitPage)).map((item, index) => (
                                    (LimitPage-1) < (index) ? 
                                    (GETAPIBIN.filter((e) => e.candidate.phone == item.phone && e.is_win == false).length) !== 0 ? 
                                    <tr>
                                        <td>#{index+1}</td>
                                        <td>{item.fullName}</td>
                                        <td>( <strong className='text-danger'>{GETAPIBIN.filter((e) => e.candidate.phone == item.phone && e.is_win == false).length}</strong> )</td>
                                        <td>+856 20xxxxx{(item.phone).substring(8)}</td>
                                        <td>{item.province.name}</td>
                                    </tr> : ''  : ''
                                ))  :
                                GETAPICAN.slice((0), (25+ LimitPage)).map((item, index) => (
                                    (LimitPage-1) < (index) ? 
                                    (GETAPIBIN.filter((e) => e.candidate.phone == item.phone && e.is_win == false).length) !== 0 ? 
                                    <tr>
                                        <td>#{index+1}</td>
                                        <td>{item.fullName}</td>
                                        <td>( <strong className='text-danger'>{GETAPIBIN.filter((e) => e.candidate.phone == item.phone && e.is_win == false).length}</strong> )</td>
                                        <td>+856 20xxxxx{(item.phone).substring(8)}</td>
                                        <td>{item.province.name}</td>
                                    </tr> : ''  : ''
                                )) }&nbsp;

                               {Display == false ? 
                                    <>
                                        <tr>
                                            <td colSpan={9} className='td_load_extreme_title'></td>
                                        </tr>&nbsp;
                                        <tr>
                                            <td colSpan={9} className='td_load_extreme_title'></td>
                                        </tr>&nbsp;
                                        <tr>
                                            <td colSpan={9} className='td_load_extreme_title'></td>
                                        </tr>
                                    </>
                                : GETAPICAN.length == 0 ? 
                                <tr>
                                    <td colSpan={9}>
                                    <div className="lodding-number-bill w-100">
                                        <div className="text-center">
                                            <p className="Nato_sanlaos">ບໍ່ມີຂໍ້ມູນລາຍຊື່ຜູ້ມີສິດສຸ່ມ</p>
                                        </div>
                                    </div>
                                    </td>
                                </tr> : '' }
                            </tbody>
                        </table>
                        <div className='text-center input-group d-flex justify-content-center'>
                            <span className='btn btn-primary input-group-text' onClick={Back}>back</span>&nbsp;
                            <span className='bg-white input-group-text'>{ShowPage} in {(GETAPICAN.slice((0), (GETAPICAN.length) / 25).length +1)}</span>&nbsp;
                            <span className='btn btn-primary input-group-text' onClick={Next}>Next</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  )
}
