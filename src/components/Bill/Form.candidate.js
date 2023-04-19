import React from 'react'
import { NumberFormatBase } from 'react-number-format';
import { Link, useLocation } from 'react-router-dom';
import '../candidate/style-candidate.css'
import usePVD from '../candidate/usePVD';
import Function_Candidate from './Function.Candidate';

export default function Form_Candidate_Bill() {

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

        // district
        district,
        showlist_dis,
        Dropdow_distric,
        listdis,
        show_listdis,
        nextdis,
        backdis,
        Pagedis,
        nextpage_dis,

        // village
        village,
        showlist_vil,
        listvil,
        show_listvil,
        Dropdow_village,
        nextvil,
        backvil,
        nextpage_vil,
        Pagevil,

        Cancel_Dropdown,
        list,
    } = usePVD()

    let {
        Submit,
        Number_phone,
        Loadnumber,
        Items,
    } = Function_Candidate()

    return (
        <div className="content-wrapper">
            <div className="content-header">
                <div className="container-fluid">
                    <div className='card'>
                        <div className='card-header bg-success'><label className="btn-outline-white pt-2">ເພີມຂໍ້ມູນຜູ້ມີສິດສຸ່ມ</label></div>
                        <div className='card-body'>
                            <form method='POST' onSubmit={Submit}>
                                <div className='col-md-12'>
                                    <div className='form-group'>
                                        <label>ເບີໂທ (ແນະນຳ 20 ຂື້ນໜ້າ)</label>
                                        <div className='input-group relative'>

                                            <NumberFormatBase className='input-number856' maxLength={11} onChange={Number_phone} placeholder=':.........' required />

                                            {Loadnumber == 'true' ?
                                                <span className='input-group-text number-spane bg-light'>
                                                    <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                                                    <span> | ກະລຸນາປ້ອນເບີໂທໃຫ້ຄົບ</span>
                                                </span>
                                                : ''
                                            }
                                            {Loadnumber == 'false' ?
                                                <span className='input-group-text number-spane bg-light'>
                                                    <span> ກະລຸນາປ້ອນເບີໂທ</span>
                                                </span>
                                                : ''
                                            }
                                            {Loadnumber == 'warning' ?
                                                <span className='input-group-text number-spane bg-warning'>
                                                    <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                                                    <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                                                    <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                                                    <span> | ກະລຸນາລໍຖ້າ</span>
                                                </span>
                                                : ''
                                            }
                                            {Loadnumber == 'info' ?
                                                <span className='input-group-text number-spane bg-success'>
                                                    <span> | ເບີນີ້ຍັງບໍ່ມີໃນລະບົບ</span>
                                                </span>
                                                : ''
                                            }
                                            {Loadnumber == 'Success' ?
                                                <span className='input-group-text number-spane bg-info'>
                                                    <span> | ເບີນີ້ມີໃນລະບົບແລ້ວ</span>
                                                </span>
                                                : ''
                                            }

                                            <span className='number856'>+856</span>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-12'>
                                    <div className='row'>
                                        <div className='col-md-6'>
                                            <div className='form-group'>
                                                <label>ຊື່ ແລະ ນາມສະກຸນ</label>
                                                <div className='input-group'>
                                                    <input type='text' className='form-control' defaultValue={Items.full_name} placeholder=':.........' required />
                                                    <input type='hidden' value={listpro.id} />
                                                    <input type='hidden' value={listdis.id} />
                                                    <input type='hidden' value={listvil.id} />
                                                </div>
                                            </div>

                                            <div className='form-group'>
                                                <label>ເມືອງ</label>
                                                <div className='input-group'>
                                                    <div className={`form-control float-right drop-event-dis`}>
                                                        <div className='w-100' onClick={showlist_dis}><a href='#' class="page-link" style={{ paddingTop: '3px' }}>{listdis === '' ? (Loadnumber == 'Success' ? Items.district.district : '~~ເລືອກເມືອງ~~') : ('ເມືອງ: ' + listdis.district)}</a></div>
                                                        <ul class={`list-group list-group-item-province`} hidden={show_listdis == false ? true : false}>
                                                            {district.map((item) => (
                                                                <a class="page-link" href="#"><li class="list-group-item list-hover" onClick={() => Dropdow_distric(item)}>ເມືອງ: {item.district}</li></a>
                                                            ))}
                                                            {listpro === '' ? <a class="page-link" href="#" onClick={showlist}><li class="list-group-item list-hover">~~ ກະລຸນາເລືອກແຂວງກອນ ~~</li></a> : ''}
                                                            <nav aria-label="..." className='px-2 pt-2 float-right list-group-item'>
                                                                <ul class="pagination">
                                                                    <li class="page-item">
                                                                        <a class="page-link" href="#" onClick={backdis}>Back</a>
                                                                    </li>
                                                                    <li class="page-item">
                                                                        <a class="page-link" href="#">{nextpage_dis} In {Pagedis}</a>
                                                                    </li>
                                                                    <li class="page-item">
                                                                        <a class="page-link" href="#" onClick={nextdis}>Next</a>
                                                                    </li>
                                                                </ul>
                                                            </nav>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                            <span className='border-fixed' onClick={Cancel_Dropdown} hidden={list == false ? true : false}></span>

                                        </div>
                                        <div className='col-md-6'>
                                            <div className='form-group'>
                                                <label>ແຂວງ</label>
                                                <div className='input-group'>
                                                    <div className={`form-control float-right drop-event-dis`}>
                                                        <div className='w-100' onClick={showlist}><a href='#' class="page-link" style={{ paddingTop: '3px' }}>{listpro === '' ? (Loadnumber == 'Success' ? Items.province.province : '~~ເລືອກແຂວງ~~') : ('ແຂວງ: ' + listpro.province)}</a></div>
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
                                                    </div>
                                                </div>
                                            </div>

                                            <div className='form-group'>
                                                <label>ບ້ານ</label>
                                                <div className='input-group'>
                                                    <div className={`form-control float-right drop-event-dis`}>
                                                        <div className='w-100' onClick={showlist_vil}><a href='#' class="page-link" style={{ paddingTop: '3px' }}>{listvil === '' ? (Loadnumber == 'Success' ? Items.village.village : '~~ເລືອກບ້ານ~~') : ('ບ້ານ: ' + listvil.village)}</a></div>
                                                        <ul class={`list-group list-group-item-province`} hidden={show_listvil == false ? true : false}>
                                                            {village.map((item) => (
                                                                <a class="page-link" href="#"><li class="list-group-item list-hover" onClick={() => Dropdow_village(item)}>ບ້ານ: {item.village}</li></a>
                                                            ))}
                                                            {listdis === '' ? <a class="page-link" href="#" onClick={showlist}><li class="list-group-item list-hover">~~ ກະລຸນາເລືອກເມືອງກອນ ~~</li></a> : ''}
                                                            {listdis === '' ? '' : (village.length > 0 ? '' : <a class="page-link" href="#"><li class="list-group-item list-hover">~~ ບໍ່ມີຂໍ້ມູນບ້ານໃນ ເມືອງ: {listdis.district} ~~</li></a>)}
                                                            <nav aria-label="..." className='px-2 pt-2 float-right list-group-item'>
                                                                <ul class="pagination">
                                                                    <li class="page-item">
                                                                        <a class="page-link" href="#" onClick={backvil}>Back</a>
                                                                    </li>
                                                                    <li class="page-item">
                                                                        <a class="page-link" href="#">{nextpage_vil} In {Pagevil}</a>
                                                                    </li>
                                                                    <li class="page-item">
                                                                        <a class="page-link" href="#" onClick={nextvil}>Next</a>
                                                                    </li>
                                                                </ul>
                                                            </nav>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className='col-md-12'>
                                    <div className='group-footer'>
                                        <Link to='/Bill' className='btn btn-sm btn-outline-danger'><i class="bi bi-arrow-bar-left"></i> | ຍົກເລີກ</Link>
                                        <button type='submit' className='btn btn-success mr-2 float-end'><i class="bi bi-cloud-download"></i> | ທັດໄປ</button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
