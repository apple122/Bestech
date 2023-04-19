import React, { useContext } from 'react'
import Skeleton_table from '../Skeleton-table'
import { Context_PDV } from '../../../pages/City/Index'
import Form_Province from './Form.Province'
import Form_Edit_Province from './Form.Edit.Province'
import '../provice.css'

export default function Province() {

    const { API_Province, Loaderror, Count_Province, delprovice, proPage, proPageN, Nextpro, Backpro } = useContext(Context_PDV)

    return (
        <div className="col-md-12">
            <div className='card'>
                <div className="card-header display-flex">
                    <div className="w-100">
                        <h3 className="card-title">ແຂວງທັງຫມົດ ( <strong className='text-danger'>{Count_Province}</strong> )</h3>
                    </div>
                    <div className="w-100">
                        <div className="input-group-text bg-green float-right">
                            <Form_Province />
                        </div>
                    </div>
                </div>
                {Loaderror === true ?

                    <div className='card-body table-responsive p-0 overflow-auto'>
                        <table class="table table-striped text-nowrap">
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>ຊື່ແຂວງ</th>
                                    <th className="text-center">ຈັດການ</th>
                                </tr>
                            </thead>

                            <tbody>
                                {API_Province.map((item, index) => (
                                    <tr>
                                        <td></td>
                                        <td>{item.province}</td>
                                        <td className="text-center">
                                            <div className='btn-group'>
                                                <Form_Edit_Province Items={item}/>
                                                <button for='inputedite' className='btn btn-sm btn-danger' onClick={() => delprovice(item.id)}><i class="bi bi-trash3-fill"></i> ລົບຂໍ້ມູນ</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <nav aria-label="..." className='px-2 pt-2 float-right'>
                            <ul class="pagination">
                                <li class="page-item">
                                    <a class="page-link" href="#black" onClick={Backpro}>Back</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#">{proPageN} In {proPage}</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#next" onClick={Nextpro}>Next</a>
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
