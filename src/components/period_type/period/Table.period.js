import React, { useContext } from 'react'
import { Context_period } from '../../../pages/Period/Period/Index'
import { Link } from 'react-router-dom'
import Moment from 'moment'
import Form_edit_period from './Form-edit-period'
import Skeleton_table from '../../City/Skeleton-table'

export default function Table_period() {

    const {
        APITrue,
        APIFalse,
        deltype,

        Page,
        InPage,
        back,
        next,
        Load,
    } = useContext(Context_period)

    return (
        <div className="content-wrapper">
            <div className="content-header">
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-header bg-success">
                            <label className="btn-outline-white pt-2">ຂໍ້ມູນງວດປະຈຳອາທິດ:</label>
                            <Link to="/add-period" className="card-title btn btn-primary float-right">ເພີມງວດ</Link>
                        </div>
                        {Load == true ?
                            <div className='card-body table-responsive p-0 overflow-auto'>
                                <table class="table table-striped text-nowrap">
                                    <thead>
                                        <tr>
                                            <th>ງວດທີ່:</th>
                                            <th>ປະເພດງວດ</th>
                                            <th>ລາງວັນທີ່</th>
                                            <th>ວັນທີ່ເປິດງວດ</th>
                                            <th>ວັນທີ່ປິດງວດ</th>
                                            <th>ສະຖານະ</th>
                                            <th className='col-1'>ຈັດການ</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {APITrue.map((item, index) => (
                                                <tr>
                                                    <td>{item.period}</td>
                                                    <td>{item.period_type?.map((item_type) => (<>{item_type.period_type}, </>))}</td>
                                                    <td>{item.prize_type?.map((item_type) => (<>{item_type.prize_type}, </>))}</td>
                                                    <td>{Moment(item.open_date).format("DD/MM/YYYY - H:ss")}</td>
                                                    <td>{Moment(item.close_date).format("DD/MM/YYYY - H:ss")}</td>
                                                    <td><span className='s-border-success'>ເປິດໃຊ້ງານ</span></td>
                                                    <td>
                                                        <div className='btn-group'>
                                                            <Form_edit_period Items={item} />
                                                            <button type='button' onClick={() => deltype(item)} className='btn btn-sm btn-warning'><i class="bi bi-slash-square-fill"></i> | ປິດງວດ</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                        ))}
                                        <tr>
                                            <td colSpan={7}><hr/></td>
                                        </tr>
                                        {APIFalse.map((item, index) => (
                                            <tr>
                                                <td>{item.period}</td>
                                                <td>{item.period_type?.map((item_type) => (<>{item_type.period_type}, </>))}</td>
                                                <td>{item.prize_type?.map((item_type) => (<>{item_type.prize_type}, </>))}</td>
                                                <td>{Moment(item.open_date).format("DD/MM/YYYY - H:ss")}</td>
                                                <td>{Moment(item.close_date).format("DD/MM/YYYY - H:ss")}</td>
                                                <td><span className='s-border-closs'>ປິດ</span></td>
                                                <td></td>
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
