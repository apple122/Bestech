import Moment from 'moment'
import React from 'react'
import { Link } from 'react-router-dom'
import useFunctions from './useFunctions'
import '../style-period.css'
import Skeleton_table from '../../City/Skeleton-table'

export default function Period_multi() {

  let {
    API,
    next,
    black,
    next_page,
    Page,
    x,

    deltype,
    loadding,
} = useFunctions()

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
                                {loadding === true ?
                                    <table class="table table-striped text-nowrap">
                                        <thead>
                                            <tr>
                                                <th>#</th>
                                                <th>ງວດທີ່:</th>
                                                <th>ປະເພດງວດ</th>
                                                <th>ລາງວັນທີ່</th>
                                                <th>ວັນທີ່ເປິດງວດ</th>
                                                <th>ວັນທີ່ປິດງວດ</th>
                                                <th className='col-1'>ຈັດການ</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {API.map((item, index) => (
                                                <tr>
                                                    <td>#{x++}</td>
                                                    <td>{item.multi_period}</td>
                                                    <td>{item.period_type?.map((item_type) => (<>( {item_type.period_type} ), </>))}</td>
                                                    <td>{item.prize_type?.map((item_type) => (<>( {item_type.prize_type} ), </>))}</td>
                                                    <td>{Moment(item.open_date).format("DD/MM/YYYY - H:ss")}</td>
                                                    <td>{Moment(item.close_date).format("DD/MM/YYYY - H:ss")}</td>
                                                    <td>
                                                        <div className='btn-group'>
                                                            <button type='button' onClick={() => deltype(item)} className='btn btn-sm btn-danger'><i class="bi bi-trash3"></i> | ລົບຂໍ້ມູນ</button>
                                                        </div>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                    : <Skeleton_table />
                                }
                                <nav aria-label="..." className='px-2 pt-2 float-right list-group-item'>
                                    <ul class="pagination">
                                        <li class="page-item">
                                            <a class="page-link" href="#" onClick={black}>Back</a>
                                        </li>
                                        <li class="page-item">
                                            <a class="page-link" href="#">{next_page} In {Page}</a>
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
