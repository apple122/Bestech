import React, { useContext, useState } from 'react'
import Skeleton_table from '../Skeleton-table'
import { Context_PDV } from '../../../pages/City/Index'
import Form_Distric from './Form.Distric'
import Form_update_dis from './Form_update_dis'
import usePVD from '../../candidate/usePVD'

export default function District() {

    const { API_Distric, Loaddis, CountDis, delDis, disPage, disPageN, Nextdis, Backdis } = useContext(Context_PDV)

    let {
        // province
        province,
        Dropdow_province,
        showlist,
        listpro,
        show_listpro,
        nextpro,
        backpro,
        nextpage_pro,
        Pagepro,
        Cancel_Dropdown,
        list,

    } = usePVD()


    return (
        <div className="col-md-12">
            <div className='card'>
                <div className="card-header display-flex">
                    <div className="w-100">
                        <h3 className="card-title">ແຂວງທັງຫມົດ ( <strong className='text-danger'>{CountDis}</strong> )</h3>
                    </div>
                    <div className="w-100">
                        {/* <div className={`form-control float-right drop-event-dis`}>
                            <div className='w-100' onClick={showlist}><a href='#' class="page-link" style={{ paddingTop: '3px' }}>{listpro === '' ? '~~ເລືອກແຂວງ~~' : ('ແຂວງ: ' + listpro.province)}</a></div>
                            <ul class={`list-group list-group-item-province`} hidden={show_listpro == false ? true : false}>
                                {province.map((item) => (
                                    <a class="page-link" href="#"><li class="list-group-item list-hover" onClick={() => Dropdow_province(item)}>ແຂວງ: {item.province}</li></a>
                                ))}
                                <nav aria-label="..." className='px-2 pt-2 float-right list-group-item'>
                                    <ul class="pagination">
                                        <li class="page-item">
                                            <a class="page-link" href="#" onClick={backpro}>Back</a>
                                        </li>
                                        <li class="page-item">
                                            <a class="page-link" href="#">{nextpage_pro} In {Pagepro}</a>
                                        </li>
                                        <li class="page-item">
                                            <a class="page-link" href="#" onClick={nextpro}>Next</a>
                                        </li>
                                    </ul>
                                </nav>
                            </ul>
                            <span className='border-fixed' onClick={Cancel_Dropdown} hidden={list == false ? true : false}></span>
                        </div> */}
                        <div className="input-group-text bg-green float-right">

                            <Form_Distric />
                        </div>
                    </div>
                </div>
                {Loaddis === true ?

                    <div className='card-body table-responsive p-0 overflow-auto'>
                        <table class="table table-striped text-nowrap">
                            <thead>
                                <tr>
                                    <th>ຊື່ເມືອງ</th>
                                    <th>ຊື່ແຂວງ</th>
                                    <th className="text-center">ຈັດການ</th>
                                </tr>
                            </thead>

                            <tbody>
                                {API_Distric.map((item, index) => (
                                    <tr>
                                        <td>{item.district}</td>
                                        <td>{item.province?.province}</td>
                                        <td className="text-center">
                                            <div className='btn-group'>
                                                <Form_update_dis Items={item} />
                                                <button for='inputedite' className='btn btn-sm btn-danger' onClick={() => delDis(item.id)}><i class="bi bi-trash3-fill"></i> ລົບຂໍ້ມູນ</button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>

                        <nav aria-label="..." className='px-2 pt-2 float-right'>
                            <ul class="pagination">
                                <li class="page-item">
                                    <a class="page-link" href="#black" onClick={Backdis}>Back</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#">{disPageN} In {disPage}</a>
                                </li>
                                <li class="page-item">
                                    <a class="page-link" href="#next" onClick={Nextdis}>Next</a>
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
