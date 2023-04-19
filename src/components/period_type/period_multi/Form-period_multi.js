import React from 'react'
import { Link } from 'react-router-dom'
import useFunctions from './useFunctions'
import Select from 'react-select'
import Datetime from 'react-datetime';
import "react-datetime/css/react-datetime.css";
import Function_Submit_Multi from './Function.Submit.Multi';

export default function Form_period_multi() {

  let {
    APIPRIZE,
    APIPERIOD_TYPE,

    next_period,
    black_period,
    Page_period,
    next_period_type,

    next_prize,
    black_prize,
    Page_prize,
    next_prize_type,

    Priod,
    PagePeriod,
    InPagePeriod,
    N_Period,
    B_Period,
  } = useFunctions()

  let {
    Submit,
    plus_period_type,
    plus_items,
    plus_period,
  } = Function_Submit_Multi()

  return (
    <div className="content-wrapper">
      <div className="content-header">
        <div className="container-fluid">
          <div className='card'>
            <div className='card-header bg-warning'><label className="btn-outline-white pt-2">ເພີມຂໍ້ມູນ ( ງວດ ) ສຸ່ມຄັ້ງໃຫຍ້</label></div>
            <div className='card-body'>
              <form method='POST' onSubmit={Submit}>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label>ງວດທີ່</label>
                      <input type='number' className='form-control' placeholder=':.......' required />
                    </div>
                  </div>

                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label className='d-flex w-100'>ເລືອກລາງວັນ

                      </label>
                      <Select
                        onChange={plus_items}
                        isMulti
                        name="colors"
                        options={
                          APIPRIZE.map((item) => (
                            { value: item.id, label: ('ລາງວັນທີ່: ' + item.prize_type) }
                          ))
                        }
                        className="basic-multi-select"
                        classNamePrefix="select"
                        required
                      />
                      <nav aria-label="..." className='pt-2'>
                        <ul class="pagination">
                          <li class="page-item">
                            <a class="page-link" onClick={black_prize} href="#">Back</a>
                          </li>
                          <li class="page-item">
                            <a class="page-link" href="#">{next_prize_type} In {Page_prize}</a>
                          </li>
                          <li class="page-item">
                            <a class="page-link" onClick={next_prize} href="#">Next</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>
                </div>
                <div className='row'>
                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label className='text-success'>ວັນທີ່ ເປິດງວດ</label>
                      <Datetime dateFormat="YYYY-MM-DD" timeFormat="H:ss" required />
                    </div>

                    <div className='form-group'>
                      <label>ປະເພດງວດ</label>
                      <Select
                        onChange={plus_period_type}
                        isMulti
                        name="colors"
                        options={
                          APIPERIOD_TYPE.map((item) => (
                            { value: item.id, label: (item.period_type) }
                          ))
                        }
                        className="basic-multi-select"
                        classNamePrefix="select"
                        required
                      />
                      <nav aria-label="..." className='pt-2'>
                        <ul class="pagination">
                          <li class="page-item">
                            <a class="page-link" onClick={black_period} href="#">Back</a>
                          </li>
                          <li class="page-item">
                            <a class="page-link" href="#">{next_period_type} In {Page_period}</a>
                          </li>
                          <li class="page-item">
                            <a class="page-link" onClick={next_period} href="#">Next</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>

                  <div className='col-md-6'>
                    <div className='form-group'>
                      <label className='text-danger'>ວັນທີ່ ປິດງວດ</label>
                      <Datetime dateFormat="YYYY-MM-DD" timeFormat="H:ss" required />
                    </div>

                    <div className='form-group'>
                      <label>ງວດ ປະຈຳອາທິດ</label>
                      <Select
                        isMulti
                        onChange={plus_period}
                        name="colors"
                        options={
                          Priod.map((item) => (
                            { value: item.id, label: 'ງວດທີ່: '+(item.period) }
                          ))
                        }
                        className="basic-multi-select"
                        classNamePrefix="select"
                        required
                      />
                      <nav aria-label="..." className='pt-2'>
                        <ul class="pagination">
                          <li class="page-item">
                            <a class="page-link" onClick={B_Period} href="#">Back</a>
                          </li>
                          <li class="page-item">
                            <a class="page-link" href="#">{PagePeriod} In {InPagePeriod}</a>
                          </li>
                          <li class="page-item">
                            <a class="page-link" onClick={N_Period} href="#">Next</a>
                          </li>
                        </ul>
                      </nav>
                    </div>
                  </div>

                </div>
                <div className='col-md-12 pt-4'>
                  <div className='group-footer'>
                    <button type='submit' className={`btn btn-sm btn-outline-success mr-2`}><i class="bi bi-cloud-download"></i> | Submit</button>
                    <Link to='/period_multi' className='btn btn-sm btn-outline-danger'><i class="bi bi-arrow-bar-left"></i> | Cancel</Link>
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
