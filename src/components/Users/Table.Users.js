import React, { useContext } from 'react'
import Skeleton_table from '../City/Skeleton-table'
import { Context_User } from '../../pages/Users/Index'
import { Link, useNavigate } from 'react-router-dom'
import Form_chang_users from './Form.chang_users'


export default function Table_Users() {
    let navigate = useNavigate()

    const { API, Load, Count, delusers, changUsers } = useContext(Context_User)

    function edit(e) {
        navigate('/edit-user', {state : e})
    }

    return (
        <>
        <Form_chang_users />
            <div className="content-wrapper">
                <div className="content-header">
                    <div className="container-fluid">
                        <div className="card">
                            <div className="card-header">
                                <label className="btn-outline-white pt-2">ຂໍ້ມູນ User</label>
                                <Link to='/add-user' className="card-title btn btn-success float-right">add user</Link>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-md-12">
                                <div className='card'>
                                    <div className="card-header display-flex">
                                        <div className="w-100">
                                            <h3 className="card-title">ຂໍ້ມູນ User ທັງຫມົດ ( <strong className='text-danger'>{Count}</strong> )</h3>
                                        </div>
                                    </div>
                                    {Load === true ?

                                        <div className='card-body table-responsive p-0 overflow-auto'>
                                            <table class="table table-striped text-nowrap">
                                                <thead>
                                                    <tr>
                                                        <th>ຊື່</th>
                                                        <th>ນາມສະກຸນ</th>
                                                        <th>ເພດ</th>
                                                        <th>ເບີໂທ</th>
                                                        <th>UserName</th>
                                                        <th className="text-center">ຈັດການ</th>
                                                    </tr>
                                                </thead>

                                                <tbody>
                                                    {API.map((item, index) => (
                                                        <tr>
                                                            <td>{item.first_name}</td>
                                                            <td>{item.last_name}</td>
                                                            <td>{item.gender}</td>
                                                            <td>{item.phone_number}</td>
                                                            <td>{item.owner?.username}</td>
                                                            <td className="text-center">
                                                                <div className='btn-group'>
                                                                    <button className='btn btn-sm btn-primary' onClick={() => edit(item)}><i class="bi bi-pencil-square"></i> | ແກ້ໄຂ</button>
                                                                    <button className='btn btn-sm btn-danger' onClick={() => delusers(item)}><i class="bi bi-trash3-fill"></i> | ລົບຂໍ້ມູນ</button>
                                                                    <button className='btn btn-sm btn-warning' onClick={() => changUsers(item)}><i class="bi bi-person-fill-gear"></i> | ຈັດການ UserName</button>
                                                                </div>
                                                            </td>
                                                        </tr>
                                                    ))}
                                                </tbody>
                                            </table>

                                            {/* <nav aria-label="..." className='px-2 pt-2 float-right'>
                            <ul class="pagination">
                                <li class="page-item">
                                    <a class="page-link" href="#black" onClick={BackVill}>Back</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#">{VillPageN} In {VilPage}</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#next" onClick={NextVill}>Next</a>
                                </li>
                            </ul>
                        </nav> */}
                                        </div>
                                        :
                                        <Skeleton_table />
                                    }
                                </div>
                                {/* /.card Proveince */}
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </>

    )
}
