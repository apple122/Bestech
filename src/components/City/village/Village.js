import React, { useContext } from 'react'
import Skeleton_table from '../Skeleton-table'
import { Context_PDV } from '../../../pages/City/Index'
import '../provice.css'
import Form_Village from './Form.Village'
import Form_Update_Village from './Form_update_village'

export default function Village() {

    const { API_Vill, LoadVill, Count_Vill, delVill, VilPage, VillPageN, NextVill, BackVill } = useContext(Context_PDV)

    return (
        <div className="col-md-12">
            <div className='card'>
                <div className="card-header display-flex">
                    <div className="w-100">
                        <h3 className="card-title">ແຂວງທັງຫມົດ ( <strong className='text-danger'>{Count_Vill}</strong> )</h3>
                    </div>
                    <div className="w-100">
                        <div className="input-group-text bg-green float-right">
                            <Form_Village />
                        </div>
                    </div>
                </div>
                {LoadVill === true ?

                    <div className='card-body table-responsive p-0 overflow-auto'>
                        <table class="table table-striped text-nowrap">
                            <thead>
                                <tr>
                                    <th>ຊື່ບ້ານ</th>
                                    <th>ຊື່ເມືອງ</th>
                                    <th>ຊື່ແຂວງ</th>
                                    <th className="text-center">ຈັດການ</th>
                                </tr>
                            </thead>

                            <tbody>
                                {API_Vill.map((item, index) => (
                                    <tr>
                                        <td>{item.village}</td>
                                        <td>{item.district?.district}</td>
                                        <td>{item.district?.province?.province}</td>
                                        <td className="text-center">
                                            <div className='btn-group'>
                                                <Form_Update_Village Items={item}/>
                                                <button for='inputedite' className='btn btn-sm btn-danger' onClick={() => delVill(item.id)}><i class="bi bi-trash3-fill"></i> ລົບຂໍ້ມູນ</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <nav aria-label="..." className='px-2 pt-2 float-right'>
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
                        </nav>
                    </div>
                    :
                    <Skeleton_table />
                }
            </div>
            {/* /.card Proveince */}
        </div>
    )
}
