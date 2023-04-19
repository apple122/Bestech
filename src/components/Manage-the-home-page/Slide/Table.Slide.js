import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import './style-slide.css'
import { height } from '@mui/system'
import Update_slide from './Update-slide'
import Skeleton_slide from './Skeleton-slide'
import { Context_Slide } from './Slide'
export default function Table_Slide() {

    const {
        API,
        delslide,

        next,
        black,
        pageN,
        Page,
        Count,
        active,
        loadding
    } = useContext(Context_Slide)

    return (
        <div className="content-wrapper" id="active">
            <div className="content-header">
                <div className="container-fluid">
                    <div className="card">
                        <div className="card-header display-flex">
                            <div className="col-md-4">
                                <h3 className="card-title"><strong>ຂໍ້ມູນ Slide</strong> ( <strong className='text-danger'>{Count}</strong> )</h3>
                            </div>
                            <div className="col-md-8">
                                <div className="input-group input-group-sm d-flex justify-content-end">
                                    <div className="input-group-text bg-green">
                                        <Link to='add-slide'><i class="bi bi-plus-lg"></i> | ເພີມ Slide</Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <nav aria-label="..." className='d-flex justify-content-start'>
                        <ul class="pagination">
                            <li class="page-item">
                                <a class="page-link" href='#' onClick={black}>Back</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href="#">{pageN} In {Page}</a>
                            </li>
                            <li class="page-item">
                                <a class="page-link" href='#' onClick={next}>Next</a>
                            </li>
                        </ul>
                    </nav>

                    {loadding === true ? <>
                        {API.filter((e) => e.is_active === true).map((item, index) => (
                            <div className='card relative' style={{ overflow: 'hidden' }}>
                                <img src={item.image} id="IMG-Slide-loop" alt='IMG' height={item.image == undefined ? 100 : ''} />
                                <span className='active-title-img-left-success'>{item.title}</span>
                                <span className='active-title-img-right-success'>
                                    <div className='respone-slide'>
                                        <Update_slide items={item} /><br />
                                        <a type='button' className='btn btn-sm btn-danger mt-2 ml-2 respon-font-slide' onClick={() => delslide(item)}><i class="bi bi-trash3"></i> | ລົບຂໍ້ມູນ</a><br />
                                        <a type='button' className='btn btn-sm btn-success mt-2 ml-2 respon-font-slide' onClick={() => active(item)}><i class="bi bi-check-circle-fill"></i> | ເປິດໃຊ້ງານ</a>
                                    </div>
                                </span>
                            </div>
                        ))}
                        {API.filter((e) => e.is_active === false).map((item, index) => (
                            <div className='card relative' style={{ overflow: 'hidden', opacity: '0.8' }}>
                                <img src={item.image} id="IMG-Slide-loop" alt='IMG' height={item.image == undefined ? 100 : ''} />
                                <span className='active-title-img-left'>{item.title}</span>
                                <span className='active-title-img-right'>
                                    <div className='respone-slide'>
                                        <Update_slide items={item} /><br />
                                        <a type='button' className='btn btn-sm btn-danger mt-2 ml-2 respon-font-slide' onClick={() => delslide(item)}><i class="bi bi-trash3"></i> | ລົບຂໍ້ມູນ</a><br />
                                        <a type='button' className='btn btn-sm btn-warning mt-2 ml-2 respon-font-slide' onClick={() => active(item)}><i class="bi bi-slash-circle"></i> | ປິດໃຊ້ງານ</a>
                                    </div>
                                </span>
                            </div>
                        ))}
                    </> : <Skeleton_slide />}
                </div>
            </div>
        </div>
    )
}
