import Moment from 'moment'
import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import '../style-period.css'
import Skeleton_table from '../../City/Skeleton-table'
import { Context_Multi } from '../../../pages/Period/Period_Multi/Index'
import Form_Edit_Multi from './Form.Edit.Multi'

export default function Table_Multi() {

    const { API, Load, deltype, APITrue, next, back, InPage, Page } = useContext(Context_Multi)

    return (
        <div className="content-wrapper">
            <div className="content-header">
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-header">
                            <label className="btn-outline-white pt-2">ຂໍ້ມູນ ( ງວດ ) ສຸ່ມຄັ້ງໃຫຍ້</label>
                            <Link to="/add-period-multi" className="card-title btn btn-primary float-right">ເພີມງວດ</Link>
                        </div>
                        <div className='card-body table-responsive p-0 overflow-auto'>
                            {Load === true ?
                                <table class="table table-striped text-nowrap">
                                    <thead>
                                        <tr>
                                            <th>ງວດທີ່:</th>
                                            <th>ປະເພດງວດ</th>
                                            <th>ງວດປະຈຳອາທິດ</th>
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
                                                <td>{item.multi_period}</td>
                                                <td>{item.period_type?.map((item_type) => (<>{item_type.period_type}, </>))}</td>
                                                <td>{item.period_id?.map((item_period) => (<>{item_period.period}, </>))}</td>
                                                <td>{item.prize_type?.map((item_type) => (<>{item_type.prize_type}, </>))}</td>
                                                <td>{Moment(item.open_date).format("DD/MM/YYYY - H:ss")}</td>
                                                <td>{Moment(item.close_date).format("DD/MM/YYYY - H:ss")}</td>
                                                <td><span className='s-border-success'>ເປິດໃຊ້ງານ</span></td>
                                                <td>
                                                    <div className='btn-group'>
                                                        <Form_Edit_Multi Items={item} />
                                                        <button type='button' onClick={() => deltype(item)} className='btn btn-sm btn-warning'><i class="bi bi-slash-square-fill"></i> | ປິດງວດ</button>
                                                    </div>
                                                </td>
                                            </tr>
                                        ))}
                                        <tr>
                                            <td colSpan={8}><hr /></td>
                                        </tr>
                                        {API.map((item, index) => (
                                            <tr>
                                                <td>{item.multi_period}</td>
                                                <td>{item.period_type?.map((item_type) => (<>{item_type.period_type}, </>))}</td>
                                                <td>{item.period_id?.map((item_period) => (<>{item_period.period}, </>))}</td>
                                                <td>{item.prize_type?.map((item_type) => (<>{item_type.prize_type}, </>))}</td>
                                                <td>{Moment(item.open_date).format("DD/MM/YYYY - H:ss")}</td>
                                                <td>{Moment(item.close_date).format("DD/MM/YYYY - H:ss")}</td>
                                                <td><span className='s-border-closs'>ປິດ</span></td>
                                                <td></td>
                                            </tr>
                                        ))}

                                    </tbody>
                                </table>
                                : <Skeleton_table />
                            }
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
                    </div>
                </div>
            </div>
        </div>
    )
}
