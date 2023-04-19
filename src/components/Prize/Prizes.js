import axios from "axios";
import React, { useEffect, useReducer, useState } from "react";
import url from "./data";
import Spinner from "../uitilities/Spinner";
import Swal from "sweetalert2";
import Add_prize from "./Add-prize";
import useFunctions from "./useFunctions";
import { Link } from "react-router-dom";
import './style-prize.css'

const Prizes = () => {

  let {
    showPrize,
    refresh,
    setActivefalse,
    count,

    next,
    black,
    Page,
    nextpage,
    x,
  } = useFunctions()

  return (
    <div>
      <div className="content-wrapper">
        <div className="content-header">
          <div className="container-fluid">
            <div className="row">
              <div className="col-12">
                <div className="card">
                  <div className="card-header">
                    <span className="card-title float-right">
                      <Link to='/add-prize' className="btn btn-sm btn-primary"><i class="bi bi-cloud-download"></i> ເພິ່ມລາງວັນ</Link>
                    </span>
                  </div>
                </div>
              </div>
              <div className="col-12">
                <div className="card">
                  <div className="card-header display-respone">
                    <h3 className="card-title w-100">ລາງວັນທັງຫມົດ ( <strong className='text-danger'>{count}</strong> )</h3>
                    
                  </div>
                  {/* /.card-header */}
                  <div className="card-body table-responsive p-0">
                    <table className="table table-striped text-nowrap">
                      <thead>
                        <tr>
                          <th className="col-1">ID</th>
                          <th className="col-2">ປະເພດລາງວັນ</th>
                          <th>ຊື່ລາງວັນ</th>
                          <th>ລາຍລະອຽດ</th>
                          <th>ຈຳນວນ</th>
                          <th className="col-2">ສະຖານະນຳໃຊ້</th>
                        </tr>
                      </thead>
                      <tbody>
                        {showPrize.filter((e) => e.is_active === true).map((item, index) => (
                          <tr key={index}>
                            <td>#{x++}</td>
                            <td>ລາງວັນທີ່: {item.prize_type?.prize_type}</td>
                            <td>{item.prize}</td>
                            <td>{item.quantity}</td>
                            <td>{item.detail} ລາງວັນ</td>
                            <td><span className="btn btn-sm btn-success" onClick={() => setActivefalse(item.id)}>ສະຖານະນຳໃຊ້</span> </td>
                          </tr>
                        ))}
                      </tbody>

                    </table>
                    {showPrize.length === 0 ? (
                      <h1 className="text-center mt-5">ບໍ່ມີຂໍ້ມູນ</h1>
                    ) : ''}

                    <nav aria-label="..." className='px-5 pt-3 float-right list-group-item'>
                      <ul class="pagination">
                        <li class="page-item">
                          <a class="page-link" href="#" onClick={black}>Back</a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#">{nextpage} In {Page}</a>
                        </li>
                        <li class="page-item">
                          <a class="page-link" href="#" onClick={next}>Next</a>
                        </li>
                      </ul>
                    </nav>
                  </div>
                  {/* /.card-body */}
                </div>
                {/* /.card */}
              </div>

            </div>
          </div>
        </div>
      </div>

    </div>
  );
};

export default Prizes;
