import React, { useState } from 'react'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Skeleton_table from '../City/Skeleton-table'
import useFunctions from './useFunctions'
import { NumberFormatBase } from 'react-number-format';

export default function Candidate() {
    const navigate = useNavigate()

    const location = useLocation();
    function update(e) {
        navigate('/update-candidate', { state: e })
    }

    let {
        API,
        patchIDcan,

        next,
        black,
        Page,
        nextpage,
        count,
        x,
        Loadding,
        fillterData,
    } = useFunctions()


    return (
        <>
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="card">
                            <div className="card-header">
                                <label className="btn-outline-white pt-2">ຂໍ້ມູນລາຍຊື່ຜູ້ມີສິດສຸ່ມ</label>
                                <Link to='/add-candidate' state={'data1'} className="card-title btn btn-success float-right">ເພິ່ມຜູ້ມີສິດສຸ່ມ</Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12">
                                <div className="card">
                                    <div className="card-header">
                                        <div className='row'>
                                            <div className='col-md-12 display-flex'>
                                                <h3 className="card-title w-100">ລາຍຊື່ຜູ້ມີສິດສຸ່ມ  ( <strong className='text-danger'>{count}</strong> )</h3>
                                                <h3 className="card-title text-end w-100 row">
                                                    <div className='col-8 input-group-sm input-group'>
                                                        <NumberFormatBase type='search' className='form-control form-search Nato_sanlaos' onChange={(e) => fillterData(e.target.value)} placeholder='ຄົ້ນຫາດ້ວຍເບີໂທ 020 .........' />&nbsp;
                                                        <span className='input-group-text btn btn-dark'><i class="bi bi-search"></i></span>
                                                    </div>
                                                </h3>
                                            </div>
                                        </div>
                                    </div>
                                    {/* /.card-header */}

                                    {API.length !== 0 ?
                                    <div className="card-body table-responsive p-0">
                                        {Loadding === true ?
                                            <table className="table table-striped text-nowrap">
                                                <thead>
                                                    <tr>
                                                        <th>#</th>
                                                        <th>ຊື່ ແລະ ນາມສະກຸນ</th>
                                                        <th>ເບີຕິດຕໍ່</th>
                                                        <th>ບ້ານ</th>
                                                        <th>ເມືອງ</th>
                                                        <th>ແຂວງ</th>
                                                        <th className='col-2'>ຈັດການ</th>
                                                    </tr>
                                                </thead>
                                                <tbody>
                                                    {API.filter((e) => e.is_active === true).map((item, index) => (
                                                        <tr>
                                                            <td>#{x++}</td>
                                                            <td>{item.full_name}</td>
                                                            <td>+856 {(item.phone_number)}</td>
                                                            <td>{item.village?.village}</td>
                                                            <td>{item.district?.district}</td>
                                                            <td>{item.province?.province}</td>
                                                            <td>
                                                                <div className='btn-group'>
                                                                    <button className='btn btn-sm btn-primary' onClick={() => update(item)}><i class="bi bi-pencil-square"></i> | ແກ້ໄຂ</button>
                                                                    <button className='btn btn-sm btn-danger' onClick={() => patchIDcan(item)}><i class="bi bi-trash3-fill"></i> | ລົບຂໍ້ມູນ</button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>
                                            : <Skeleton_table />
                                        }
                                        <nav aria-label="..." className='px-5 pt-3 float-right list-group-item'>
                                            <ul class="pagination">
                                                <li class="page-item">
                                                    <a class="page-link" href="#" onClick={black}>Back</a>
                                                </li>
                                                <li class="page-item">
                                                    <a class="page-link" href="#">{nextpage} In {Page}</a>
                                                </li>
                                                <li class="page-item">
                                                    <a class="page-link" href="#" onClick={next}>Next</a>
                                                </li>
                                            </ul>
                                        </nav>
                                    </div>
                                    : <span className='p-5'>ບໍ່ມີຂໍ້ມູນ!</span>
                                    }

                                    {/* /.card-body */}
                                </div>
                                {/* /.card */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}
