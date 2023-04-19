import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import Skeleton_table from '../City/Skeleton-table'
import View_Bill from './View.Bill'
import { Context_Bill } from '../../pages/Bill/Index'
import Form_Edit_Bill from './Form.Edit.Bill'

export default function Table_Bill() {

    const { API, Load, delBill, back, next, InPage, Page, Count } = useContext(Context_Bill)

    return (
        <div className="content-wrapper">
            <div className="content-header">
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-header">
                            <label className="btn-outline-white pt-2 h5">ຂໍ້ມູນບີນທັ້ງໝົດ: ( <strong className='text-danger'>{Count}</strong> )</label>
                            <Link to="/add-bill" className="card-title btn btn-primary float-right">ເພີມບີນ</Link>
                        </div>
                        {Load == true ?
                            <div className='card-body table-responsive p-0 overflow-auto'>
                                <table class="table table-striped text-nowrap">
                                    <thead>
                                        <tr>
                                            <th>ໃບບີນ:</th>
                                            <th>ເລກບີນ</th>
                                            <th>ລະຫັດຜູ້ຂ່າຍ</th>
                                            <th>ມູນຄ່າບີນ</th>
                                            <th>ຊື່ ນາມສະກຸນ</th>
                                            <th>ເບີໂທ</th>
                                            <th>ປະເພດງວດ</th>
                                            <th>ງວດທີ່</th>
                                            <th className='col-1'>ຈັດການ</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {API.map((item, index) => (
                                            <tr>
                                                <td><img src={item.image} className='Img-Bill' /></td>
                                                <td>{item.bill_number}</td>
                                                <td>{item.device_number}</td>
                                                <td>{item.total_cost}</td>
                                                <td>{item.candidate?.full_name}</td>
                                                <td>{item.candidate?.phone_number}</td>
                                                <td>{item.period?.period}</td>
                                                <td>{item.multi_period?.multi_period}</td>
                                                <td>
                                                    <div className='btn-group'>
                                                        <View_Bill Items={item} />
                                                        <Form_Edit_Bill Items={item} />
                                                        <button type='button' onClick={() => delBill(item)} className='btn btn-sm btn-danger'><i class="bi bi-trash3"></i> | ລົບຂໍ້ມູນ</button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <nav aria-label="..." className='px-2 pt-2 float-right list-group-item'>
                                    <ul class="pagination">
                                        <li class="page-item">
                                            <a class="page-link" href="#" onClick={back}>Back</a>
                                        </li>
                                        <li class="page-item">
                                            <a class="page-link" href="#">{InPage} In {Page}</a>
                                        </li>
                                        <li class="page-item">
                                            <a class="page-link" href="#" onClick={next}>Next</a>
                                        </li>
                                    </ul>
                                </nav>
                            </div>
                            : <Skeleton_table />}
                    </div>
                </div>
            </div>
        </div>
    )
}
