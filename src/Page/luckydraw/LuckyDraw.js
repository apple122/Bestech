import React, { useState, createContext } from "react";
// import "./style.css";
import useLuckyDraw from "./useLuckyDraw";
import './style-random.css'
import { Button, Modal, Form } from 'react-bootstrap'

const LuckyDraw = () => {
  let {
    row1,
    row2,
    row3,
    row4,
    row5,
    row6,
    row7,
    row8,
    row9,
    row10,
    row11,
    row12,
    row13,
    row14,
    row15,
    row16,
    row17,
    row18,
    row19,
    play,
    showWinner,
    addWeek,
    prize,
    showWeek,
    setPriceSL,
    INterNet,
    GETAPIWEEK,
    GETUIDWEEK,
    GetAPI_UID,
    ClickWinner,
    NumberBil,
    SHowNumber,
    LoopQnumberDrw,
    ClickReplay,
    PriceUIDNUmber,
    UIDPRICE,
    loading1,
    Display,
    Stop,
    NUmberReplay,
    NumberNone,
  } = useLuckyDraw();

  const [ APIBil, setBil ] = useState([])
  const [ APINAME, setfullname ] = useState([])
  const [ APIbil_seller, setbil_seller ] = useState([])
  const [ APIsetweek_id, setweek_id ] = useState([])
  const [ APITITLE, settitle ] = useState([])
  const [ APIVillAGE, setvillage ] = useState([])
  const [ APIDISTRIC, setdistric ] = useState([])
  const [ APIPROVINE, setprovine ] = useState([])
  const [ APIPHONE, setphone ] = useState([])
  function ClickSHowaffter(e){
    setModalSHow(true)
    setBil(e.bil_number.substring(0, 6))
    setbil_seller(e.bil_seller)
    setweek_id(e.week_id)
    setfullname(e.fullName)
    settitle('ລາງວັນທີ່ '+e.prize.title + ' ' + e.prize.description)
    setvillage(e.village)
    setprovine(e.province)
    setdistric(e.district)
    setphone(e.phone)
  }

  const [ ModalSHow, setModalSHow ] = useState(false)
  const ModalCloss = () => setModalSHow(false)

  return (
    <>
    <Modal show={ModalSHow} onHide={ModalCloss} size='lg' className='user-select-none' aria-labelledby="contained-modal-title-vcenter">
      <Modal.Body className="renative posotion-backgroup">
        <div className="backgroup-winner-oc"></div>
          <div className="item-position-winner">
            <p className="text-center Nato-font-a zoom-in-zoom-out"><h2><stong class='Nato_sanlaos'>ຜູ້ໂຊກດີ</stong></h2></p>&nbsp;
            <p className="text-center Nato-font-a"><h4>{APITITLE}</h4></p>
            <p className="text-center Nato-font-a"><h4>ຜູ້ໂຊກດີ: {APINAME}</h4></p>
            {/* <p className="text-center Nato-font-a"><h4>ລະຫັດຜູ້ຂ່າຍ: {APIbil_seller}</h4></p> */}
            <p className="text-center Nato-font-a"><h4>ງວດທີ່: {APIsetweek_id}</h4></p>
            <p className="text-center Nato-font-a"><h4>ບີນທີ່ຖືກລາງວັນ: {(APIBil)}xxxxxxxxxxxx</h4></p>
            {/* <p className="text-center Nato-font-a"><h4>ທີ່ຢູ່ປະຈຸບັນ</h4></p>
            <p className="text-start-post Nato-font-a"><h4>ບ້ານ: {APIVillAGE}</h4></p>
            <p className="text-start-post Nato-font-a"><h4>ເມືອງ: {APIDISTRIC}</h4></p>
            <p className="text-start-post Nato-font-a"><h4>ແຂວງ: {APIPROVINE}</h4></p>
            <p className="text-start-post Nato-font-a"><h4>ເບີໂທ: {APIPHONE}</h4></p> */}
        </div>
        
      </Modal.Body>
    </Modal>
    <div className="content-wrapper renative">
      {INterNet == false ? 
        <div className="INterNetERROR user-select-none">
          <div className="text-white text-center">
            <div class="spinner-border p-5" role="status">
              <span class="sr-only">Loading...</span>
            </div>
            <p className="Nato_sanlaos">ສະລຸນາລໍຖ້າ...</p>
          </div>
        </div>
        : ''
      }
        <div className="row">
          <div className="col-md-8">
            <div className="fullSlot pt-5">
              <h1 className="casinoName Nato_sanlaos">Replay Lottery Lucky Draw Number</h1>
              <h1 className="price Nato_sanlaos">Lucky Draw</h1>&nbsp;
              <div className="Nato_sanlaos pt-2 slot-margin-letf">
                <div class='slot'>
                  <div className="draw">{row1()}</div>
                  <div className="draw">{row2()}</div>
                  <div className="draw">{row3()}</div>
                  <div className="draw">{row4()}</div>
                  <div className="draw">{row5()}</div>
                  <div className="draw">{row6()}</div>
                  <div className="draw">{row7()}</div>
                  <div className="draw">{row8()}</div>
                  <div className="draw">{row9()}</div>
                  <div className="draw">{row10()}</div>
                </div>
                <div class='slot margin-slotMEdia'>
                  <div className="draw">{row11()}</div>
                  <div className="draw">{row12()}</div>
                  <div className="draw">{row13()}</div>
                  <div className="draw">{row14()}</div>
                  <div className="draw">{row15()}</div>
                  <div className="draw">{row16()}</div>
                  <div className="draw">{row17()}</div>
                  <div className="draw">{row18()}</div>
                  <div className="draw">{row19()}</div>
                </div>
              </div>
              <h1 className="text-white text-center p-4 Nato_sanlaos">ຜູ້ໂຊກດີ</h1>
              <h1 className="price Nato_sanlaos">{showWinner()}</h1>
              <div className="col-md-12 pt-4 btn-group" role="group" aria-label="Basic example">
              {Display == false ?
                <button className='spinButton' onClick={(play) => {ClickReplay(play = 1)}}>Replay</button>
                : <button className='spinButtonNONE'> 
                  <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> &nbsp;
                  <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span> &nbsp;
                  <span class="spinner-grow spinner-grow-sm" role="status" aria-hidden="true"></span>
                </button>}
                {/* <button className="btn btn-danger" onClick={() => {Stop()}}>STOP</button> */}
            </div>
            </div>
          </div>
          <div className="col-md-4 pt-4">
            <div className="card">
              <div className="card-header">
                <div className="d-flex">
                  <h4 className="p-3 Nato_sanlaos header-replay">Replay</h4>&nbsp;<div className="p-3 w-100 Nato_sanlaos font-size-replay border-Shownumber d-flex"><span className="Nato_sanlaos">ຜູ້ໂຊກດີ:</span>&nbsp; {NumberBil}</div>
                </div>
                <div className="colume-diplay pt-2">
                  <div className="colume-diplay-select-A">
                    <div className="input-group">
                      <span className="input-group-text Nato_sanlaos">ງວດທີ່: </span>
                      <select className="form-control form-select Nato_sanlaos" onChange={(e) => {GETUIDWEEK(e.target.value)}} disabled={Display == true ? true : false}>
                        <option value='x'>NaN</option>
                        {GETAPIWEEK.map((item) => (
                          <option value={item.week}>{item.week}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                  <div className="colume-diplay-select-B">
                    <div className="input-group">
                      <span className="input-group-text Nato_sanlaos">ລາງວັນ: </span>
                      <select className="form-control form-select Nato_sanlaos text-center" onChange={(e) => PriceUIDNUmber(e.target.value)} disabled={LoopQnumberDrw == '' ? true : (Display == true ? true : false)}>
                        <option value=''>{LoopQnumberDrw == '' ? '~~ກະລຸນາເລືອກງວດ~~' : '~~ກະລຸນາເລືອກລາງວັນ~~'}</option>
                        {LoopQnumberDrw.map((item) => (
                          <option value={item}>{item}</option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </div>
              <div className="card h-auto-scollview overflow-auto">
                {loading1}
                <ul class="list-group">
                  <li class={`list-group-item bg-light text-center Nato_sanlaos font-size-binreplay`}> ຈຳນວນຜູ້ໂຊກດີລວມ: <strong className="text-danger">( {GetAPI_UID.filter((e) => e.prize.title == UIDPRICE).length} )</strong></li>
                  {GetAPI_UID.filter((e) => e.prize.title == UIDPRICE).map((item, index) => (
                    NumberNone == false ? 
                    index == 0 ? <div className="lodding-number-bill">
                      <div className="text-center">
                        <p className="Nato_sanlaos">ລາງວັນຄັ້ງທີ່</p>
                      </div>
                    </div> : '' : (index) < (NUmberReplay+1) ?
                    <li class={`list-group-item active-hover Nato_sanlaos font-size-binreplay ${index == (NUmberReplay) ? 'active' : ''}`} onClick={(e) => ClickSHowaffter(item)}> ລາງວັນຄັ້ງ: #{index+1} | ເລກບີນ: {item.bil_number} / {item.prize.title}</li>
                    : ''
                  ))}
                  {GetAPI_UID == '' ?
                  <div className="lodding-number-bill">
                    <div className="text-center">
                      <p className="Nato_sanlaos">ບໍ່ມີຂໍ້ມູນຜູ້ຖືກລາງວັນ</p>
                    </div>
                  </div>: ''}
                  {GetAPI_UID.filter((e) => e.prize.title == UIDPRICE).length == 0 ?
                  <div className="lodding-number-bill">
                    <div className="text-center">
                      <p className="Nato_sanlaos">~~ກະລຸນາເລືອກລາງວັນ~~</p>
                    </div>
                  </div>: ''}
                </ul>
              </div>
            </div>
          </div>
        </div>
        <p class='p-3'></p>
    </div>
    </>
  );
};

export default LuckyDraw;
