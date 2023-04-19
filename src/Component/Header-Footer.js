import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link, Router, Routes } from 'react-router-dom'
import '../assets/CSS/Footer.css'
import url from '../service/server'
import Routers from '../Routers/Routers';

export default function Header() {
    const [ GETAPI, setAPI ] = useState([])
    useEffect(() => {
      axios.get(url.Mainurl + url.GETFOOTER).then((res) => {
        setAPI(res.data.data == undefined ? '' : res.data.data)
      })
    }, [])

    const nullClick = sessionStorage.getItem('PageLink')
    
    const [ tabsClick, setClick ] = useState(nullClick == undefined ? 'ໜ້າໜັກ' : nullClick)
    function settabsClick(e) {
        setClick(e)
        sessionStorage.setItem('PageLink', e)
    }

  return (
    <>
        <div className='bg-primary w-100 text-white text-center'><strong>SBS Trade is the best choice for your life</strong></div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light header-fixed">
            <a class="navbar-brand mr-5 text-weight" href="#">SBS Web Random</a>
            <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarTogglerDemo02" aria-controls="navbarTogglerDemo02" aria-expanded="false" aria-label="Toggle navigation">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse nav-left-padding" id="navbarTogglerDemo02">
                <ul class="navbar-nav w-100 justify-content-center">
                    <li class={`nav-item activeb`}>
                        <Link to={'/'} class={`nav-link item-link text-center activec text-dark ${tabsClick == 'ໜ້າໜັກ' ? 'activeLink' : ''}`} onClick={() => settabsClick('ໜ້າໜັກ')}><strong>ໜ້າໜັກ</strong></Link>
                    </li>
                    <li class={`nav-item activeb`}>
                        <Link to={'/Radom'} class={`nav-link item-link text-center activec text-dark ${tabsClick == 'ໜ້າສຸ່ມ' ? 'activeLink' : ''}`} onClick={() => settabsClick('ໜ້າສຸ່ມ')}><strong>ໜ້າສຸ່ມ</strong></Link>
                    </li>
                    <li class={`nav-item activeb`}>
                        <Link to={'/Candidate'} class={`nav-link item-link text-center activec text-dark ${tabsClick == 'ລາຍຊື່ຜູ້ມີສິດສຸ່ມ' ? 'activeLink' : ''}`} onClick={() => settabsClick('ລາຍຊື່ຜູ້ມີສິດສຸ່ມ')}><strong>ລາຍຊື່ຜູ້ມີສິດສຸ່ມ</strong></Link>
                    </li>
                    <li class={`nav-item activeb`}>
                        <Link to={'/Lucky_winners'} class={`nav-link item-link text-center activec text-dark ${tabsClick == 'ຜູ້ໂຊກດີ' ? 'activeLink' : ''}`} onClick={() => settabsClick('ຜູ້ໂຊກດີ')}><strong>ຜູ້ໂຊກດີ</strong></Link>
                    </li>
                    <li class={`nav-item activeb`}>
                        <Link to={'/Event'} class={`nav-link item-link text-center activec text-dark ${tabsClick == 'ກິດຈະກຳ' ? 'activeLink' : ''}`} onClick={() => settabsClick('ກິດຈະກຳ')}><strong>ກິດຈະກຳ</strong></Link>
                    </li>
                    <li class={`nav-item activeb`}>
                        <Link to={'/About'} class={`nav-link item-link text-center activec text-dark ${tabsClick == 'ກ່ຽວກັບ' ? 'activeLink' : ''}`} onClick={() => settabsClick('ກ່ຽວກັບ')}><strong>ກ່ຽວກັບ</strong></Link>
                    </li>
                </ul>
            </div>
        </nav>

        {/* // Router */}
        <Routers />
        {/* // Router */}

        <div class="card">
          <div class="card-header text-center">
            <div className='item-grap-link'>
              <a href={GETAPI.facebook_url} className='Link-facebook' target='_blank'><i class="bi bi-facebook"></i></a>
              <a href={GETAPI.ig_url} className='Link-instagram' target='_blank'><i class="bi bi-instagram"></i></a>
              <a href={`https://api.whatsapp.com/send/?phone=856${GETAPI.whatsapp}&text&type=phone_number&app_absent=0`} className='Link-whatsapp' target='_blank'><i class="bi bi-whatsapp"></i></a>
              <a href={`mailto:${GETAPI.email_url}`} className='Link-email' target='_blank'><i class="bi bi-envelope-at-fill"></i></a>
            </div>
          </div>
          <div class="card-body display-repone grap-colums-footer">
            <div className='col-md-4 colums-repone'>
              <h5 class="card-title"><strong>ກ່ຽວກັບ</strong></h5>
              <p class="card-text">{GETAPI.title == '' ? '...' : GETAPI.title}</p>
              <div className='repone-hover-footer'>
                <div className='d-flex'>
                  <a href={GETAPI.facebook_url} className='Link-facebook' target='_blank'><i class="bi bi-facebook"></i> </a>
                  <span className='space-icone'>|</span>
                  <a href={GETAPI.facebook_url} target='_blank'>
                  <div className='animetion-footer'>
                    <label className='animetionLink'>{GETAPI.facebook_url}</label>
                    <label className='animetionText'>facebook</label>
                  </div>
                  </a>
                </div>

                <div className='d-flex'>
                  <a href={GETAPI.ig_url} className='Link-instagram' target='_blank'><i class="bi bi-instagram"></i> </a>
                  <span className='space-icone'>|</span>
                  <a href={GETAPI.ig_url} target='_blank'>
                  <div className='animetion-footer'>
                    <label className='animetionLink'>{GETAPI.ig_url}</label>
                    <label className='animetionText'>instagram</label>
                  </div>
                  </a>
                </div>

                <div className='d-flex'>
                  <a href={`https://api.whatsapp.com/send/?phone=856${GETAPI.whatsapp}&text&type=phone_number&app_absent=0`} className='Link-whatsapp' target='_blank'><i class="bi bi-whatsapp"></i> </a>
                  <span className='space-icone'>|</span>
                  <a href={`https://api.whatsapp.com/send/?phone=856${GETAPI.whatsapp}&text&type=phone_number&app_absent=0`} target='_blank'>
                  <div className='animetion-footer'>
                    <label className='animetionwhatsapp'>+856 {GETAPI.whatsapp}</label>
                    <label className='animetionText'>whatsapp</label>
                  </div>
                  </a>
                </div>

                <div className='d-flex'>
                  <a href={`mailto:${GETAPI.email_url}`} className='Link-email' target='_blank'><i class="bi bi-envelope-at-fill"></i> </a>
                  <span className='space-icone'>|</span>
                  <a href={`mailto:${GETAPI.email_url}`}target='_blank'>
                  <div className='animetion-footer'>
                    <label className='animetionLink'>{GETAPI.email_url}</label>
                    <label className='animetionText'>@email</label>
                  </div>
                  </a>
                </div>
              </div>

            </div>

            <div className='col-md-4 colums-repone text-center'>
              <h5 class="card-title"><strong>Usage</strong></h5>
              <Link to={'/'} class="nav-link item-link text-dark activef" onClick={() => settabsClick('ໜ້າໜັກ')}><strong>ໜ້າຫຼັກ</strong></Link>
              <Link to={'/Radom'} class="nav-link item-link activef text-dark" onClick={() => settabsClick('ໜ້າສຸ່ມ')}><strong>ໜ້າສຸ່ມ</strong></Link>
              <Link to={'/Candidate'} class="nav-link item-link activef text-dark" onClick={() => settabsClick('ລາຍຊື່ຜູ້ມີສິດສຸ່ມ')}><strong>ລາຍຊື່ຜູ້ມີສິດສຸ່ມ</strong></Link>
              <Link to={'/Lucky_winners'} class="nav-link item-link activef text-dark" onClick={() => settabsClick('ຜູ້ໂຊກດີ')}><strong>ຜູ້ໂຊກດີ</strong></Link>
              <Link to={'/Event'} class="nav-link item-link activef text-dark" onClick={() => settabsClick('ກິດຈະກຳ')}><strong>ກິດຈະກຳ</strong></Link>
              <Link to={'/About'} class="nav-link item-link activef text-dark" onClick={() => settabsClick('ກ່ຽວກັບ')}><strong>ກ່ຽວກັບ</strong></Link>

            </div>

            <div className='col-md-4 colums-repone'>
              <h5 class="card-title"><strong>ສະຖານທີ່ຕັ້ງ</strong></h5>
              <h5 class="card-text">{GETAPI.map_title}</h5>
            </div>
          </div>

          <div class="card-footer text-muted text-center">
            <strong>Copyright © {new Date().getFullYear()} <a href='http://www.bestech.la/'>bestech.la</a>. </strong>
            All rights reserved.
            <div className="float-right d-none d-sm-inline-block">
              <b>Version</b> 1.0.0
            </div>
          </div>
        </div>
    </>
  )

}
